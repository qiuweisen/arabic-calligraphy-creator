#!/usr/bin/env node

/**
 * 自动化 CLS (Cumulative Layout Shift) 测试脚本
 * 
 * 使用方法:
 * node scripts/test-cls.js [URL]
 * 
 * 示例:
 * node scripts/test-cls.js http://localhost:3000
 * node scripts/test-cls.js https://arabic-calligraphy-generator.com
 */

const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

class CLSTestRunner {
  constructor(url = 'http://localhost:3000') {
    this.url = url;
    this.results = {
      baseline: null,
      optimized: null,
      improvement: 0,
      fontLoadTests: []
    };
  }

  /**
   * 运行完整的CLS测试套件
   */
  async runFullTest() {
    console.log('🚀 开始CLS优化验证测试...\n');
    console.log(`📍 测试URL: ${this.url}\n`);

    try {
      // 1. Lighthouse 性能测试
      console.log('1️⃣ 运行 Lighthouse 性能测试...');
      const lighthouseResult = await this.runLighthouseTest();
      
      // 2. 字体加载布局偏移测试
      console.log('2️⃣ 测试字体加载过程的布局偏移...');
      const fontLoadResult = await this.runFontLoadTest();
      
      // 3. 字体切换测试
      console.log('3️⃣ 测试字体切换时的布局偏移...');
      const fontSwitchResult = await this.runFontSwitchTest();

      // 生成测试报告
      this.generateReport({
        lighthouse: lighthouseResult,
        fontLoad: fontLoadResult,
        fontSwitch: fontSwitchResult
      });

    } catch (error) {
      console.error('❌ 测试过程中出现错误:', error.message);
      process.exit(1);
    }
  }

  /**
   * 运行 Lighthouse 测试
   */
  async runLighthouseTest() {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    
    try {
      const options = {
        logLevel: 'info',
        output: 'json',
        onlyCategories: ['performance'],
        port: chrome.port,
      };

      const runnerResult = await lighthouse(this.url, options);
      const cls = runnerResult.lhr.audits['cumulative-layout-shift'];
      
      return {
        cls: cls.numericValue,
        score: cls.score,
        displayValue: cls.displayValue,
        details: cls.details
      };
    } finally {
      await chrome.kill();
    }
  }

  /**
   * 测试字体加载过程的布局偏移
   */
  async runFontLoadTest() {
    const browser = await puppeteer.launch({ 
      headless: false, // 设为false便于观察
      devtools: true 
    });
    
    try {
      const page = await browser.newPage();
      
      // 禁用缓存，模拟首次访问
      await page.setCacheEnabled(false);
      
      // 设置网络条件（模拟慢速连接）
      await page.emulateNetworkConditions({
        offline: false,
        downloadThroughput: 1.5 * 1024 * 1024 / 8, // 1.5Mbps
        uploadThroughput: 750 * 1024 / 8,
        latency: 40
      });

      // 监听布局偏移事件
      const layoutShifts = [];
      await page.evaluateOnNewDocument(() => {
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.hadRecentInput) return;
            window.layoutShifts = window.layoutShifts || [];
            window.layoutShifts.push({
              value: entry.value,
              startTime: entry.startTime,
              sources: entry.sources?.map(s => ({
                node: s.node?.tagName,
                currentRect: s.currentRect,
                previousRect: s.previousRect
              }))
            });
          }
        }).observe({ type: 'layout-shift', buffered: true });
      });

      console.log('   📊 正在加载页面并监控布局偏移...');
      await page.goto(this.url, { waitUntil: 'networkidle0' });
      
      // 等待字体加载完成
      await page.waitForFunction(() => document.fonts.ready);
      
      // 获取布局偏移数据
      const shifts = await page.evaluate(() => window.layoutShifts || []);
      
      // 计算总CLS
      const totalCLS = shifts.reduce((sum, shift) => sum + shift.value, 0);
      
      return {
        totalCLS,
        shiftCount: shifts.length,
        shifts: shifts.slice(0, 5), // 只显示前5个最大的偏移
        fontLoadTime: await this.measureFontLoadTime(page)
      };
      
    } finally {
      await browser.close();
    }
  }

  /**
   * 测试字体切换时的布局偏移
   */
  async runFontSwitchTest() {
    const browser = await puppeteer.launch({ headless: false });
    
    try {
      const page = await browser.newPage();
      await page.goto(this.url, { waitUntil: 'networkidle0' });
      
      // 等待页面完全加载
      await page.waitForTimeout(2000);
      
      console.log('   🔄 测试字体切换...');
      
      // 监听布局偏移
      await page.evaluate(() => {
        window.fontSwitchShifts = [];
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.hadRecentInput) return;
            window.fontSwitchShifts.push({
              value: entry.value,
              startTime: entry.startTime
            });
          }
        }).observe({ type: 'layout-shift', buffered: false });
      });

      // 模拟字体切换
      const fontSelectors = [
        "'Cairo', sans-serif",
        "'Reem Kufi', sans-serif", 
        "'Jomhuria', display",
        "'Amiri', serif"
      ];

      const switchResults = [];
      
      for (let i = 0; i < fontSelectors.length; i++) {
        const font = fontSelectors[i];
        console.log(`     切换到字体: ${font}`);
        
        // 清除之前的偏移记录
        await page.evaluate(() => window.fontSwitchShifts = []);
        
        // 切换字体
        await page.evaluate((fontFamily) => {
          const fontSelect = document.querySelector('select[data-testid="font-selector"]') || 
                           document.querySelector('select');
          if (fontSelect) {
            fontSelect.value = fontFamily;
            fontSelect.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }, font);
        
        // 等待字体应用和加载
        await page.waitForTimeout(1000);
        
        // 获取这次切换的布局偏移
        const shifts = await page.evaluate(() => window.fontSwitchShifts || []);
        const switchCLS = shifts.reduce((sum, shift) => sum + shift.value, 0);
        
        switchResults.push({
          font,
          cls: switchCLS,
          shiftCount: shifts.length
        });
      }
      
      return switchResults;
      
    } finally {
      await browser.close();
    }
  }

  /**
   * 测量字体加载时间
   */
  async measureFontLoadTime(page) {
    return await page.evaluate(() => {
      const fontFaces = [...document.fonts];
      const loadTimes = {};
      
      return Promise.all(
        fontFaces.slice(0, 3).map(font => { // 只测试前3个字体
          const startTime = performance.now();
          return font.load().then(() => ({
            family: font.family,
            loadTime: performance.now() - startTime
          }));
        })
      );
    });
  }

  /**
   * 生成测试报告
   */
  generateReport(results) {
    console.log('\n' + '='.repeat(60));
    console.log('📋 CLS 优化测试报告');
    console.log('='.repeat(60));
    
    const { lighthouse, fontLoad, fontSwitch } = results;
    
    // Lighthouse 结果
    console.log('\n🏆 Lighthouse 性能测试结果:');
    console.log(`   CLS 数值: ${lighthouse.cls.toFixed(4)}`);
    console.log(`   CLS 得分: ${(lighthouse.score * 100).toFixed(1)}/100`);
    console.log(`   评级: ${this.getClsRating(lighthouse.cls)}`);
    
    // 字体加载测试结果
    console.log('\n📊 字体加载布局偏移测试:');
    console.log(`   总 CLS: ${fontLoad.totalCLS.toFixed(4)}`);
    console.log(`   偏移次数: ${fontLoad.shiftCount}`);
    console.log(`   主要偏移:`);
    fontLoad.shifts.forEach((shift, i) => {
      console.log(`     ${i + 1}. 偏移值: ${shift.value.toFixed(4)} (时间: ${shift.startTime.toFixed(2)}ms)`);
    });

    // 字体切换测试结果
    console.log('\n🔄 字体切换测试结果:');
    fontSwitch.forEach((result, i) => {
      console.log(`   ${i + 1}. ${result.font}:`);
      console.log(`      CLS: ${result.cls.toFixed(4)} (${result.shiftCount} 次偏移)`);
    });

    // 总体评估
    console.log('\n📈 优化效果评估:');
    const avgSwitchCLS = fontSwitch.reduce((sum, r) => sum + r.cls, 0) / fontSwitch.length;
    console.log(`   平均字体切换 CLS: ${avgSwitchCLS.toFixed(4)}`);
    console.log(`   页面加载 CLS: ${lighthouse.cls.toFixed(4)}`);
    
    // 给出建议
    console.log('\n💡 优化建议:');
    if (lighthouse.cls > 0.1) {
      console.log('   ❌ CLS仍需优化 (目标 < 0.1)');
      console.log('   🔧 建议检查:');
      console.log('      - 预览区域最小高度设置');
      console.log('      - 兜底字体匹配度');
      console.log('      - 字体预加载策略');
    } else {
      console.log('   ✅ CLS优化达标！');
    }

    if (avgSwitchCLS > 0.05) {
      console.log('   ⚠️  字体切换仍有轻微偏移');
      console.log('   🔧 建议微调兜底字体样式');
    } else {
      console.log('   ✅ 字体切换优化良好！');
    }

    console.log('\n' + '='.repeat(60));
  }

  /**
   * 获取CLS评级
   */
  getClsRating(cls) {
    if (cls <= 0.1) return '🟢 Good';
    if (cls <= 0.25) return '🟡 Needs Improvement';
    return '🔴 Poor';
  }
}

// 主函数
async function main() {
  const url = process.argv[2] || 'http://localhost:3000';
  
  // 检查必要的依赖
  try {
    require.resolve('puppeteer');
    require.resolve('lighthouse');
    require.resolve('chrome-launcher');
  } catch (error) {
    console.error('❌ 缺少必要依赖，请运行:');
    console.error('npm install puppeteer lighthouse chrome-launcher --save-dev');
    process.exit(1);
  }

  const testRunner = new CLSTestRunner(url);
  await testRunner.runFullTest();
}

// 如果直接运行此脚本
if (require.main === module) {
  main().catch(console.error);
}

module.exports = CLSTestRunner;
