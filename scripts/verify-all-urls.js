#!/usr/bin/env node

/**
 * URL验证脚本 - 验证sitemap中的所有URL都可以正常访问
 */

const http = require('http');

const BASE_URL = 'http://localhost:3000';

// 从sitemap.ts中提取的所有URL路径
const URLS_TO_TEST = [
  // 核心页面 - 多语言支持
  '/',
  '/ar',
  '/ur',
  '/bn',
  '/ms',
  '/id',
  '/fonts',
  '/blog',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/about-us',
  '/features',
  '/tutorials',
  '/templates',
  
  // 博客文章
  '/blog/the-rich-history-of-arabic-calligraphy',
  '/blog/six-major-calligraphy-styles',
  '/blog/beginners-guide-to-calligraphy',
  '/blog/famous-arabic-calligraphers',
  '/blog/modern-arabic-typography',
  '/blog/quran-and-calligraphy',
  
  // 字体页面
  '/fonts/amiri',
  '/fonts/scheherazade',
  '/fonts/noto-naskh-arabic',
  '/fonts/aref-ruqaa',
  '/fonts/reem-kufi',
  '/fonts/cairo',
  '/fonts/harmattan',
  '/fonts/mada',
  '/fonts/tajawal',
  '/fonts/lemonada',
  '/fonts/el-messiri',
  '/fonts/markazi-text',
  '/fonts/lateef',
  '/fonts/mirza',
  '/fonts/jomhuria',
  '/fonts/rakkas',
  '/fonts/marhey',
  
  // 特殊页面
  '/sitemap.xml'
];

/**
 * 测试单个URL
 */
function testUrl(url) {
  return new Promise((resolve) => {
    const fullUrl = `${BASE_URL}${url}`;
    
    const req = http.get(fullUrl, (res) => {
      const status = res.statusCode;
      const success = status >= 200 && status < 400;
      
      resolve({
        url,
        status,
        success,
        message: success ? '✅ OK' : `❌ Error ${status}`
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        status: 0,
        success: false,
        message: `❌ Connection Error: ${err.message}`
      });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({
        url,
        status: 0,
        success: false,
        message: '❌ Timeout'
      });
    });
  });
}

/**
 * 主函数
 */
async function main() {
  console.log('🔍 开始验证所有sitemap URL...\n');
  console.log(`测试服务器: ${BASE_URL}`);
  console.log(`总共 ${URLS_TO_TEST.length} 个URL需要验证\n`);
  
  const results = [];
  let successCount = 0;
  let errorCount = 0;
  
  // 逐个测试URL
  for (let i = 0; i < URLS_TO_TEST.length; i++) {
    const url = URLS_TO_TEST[i];
    process.stdout.write(`[${i + 1}/${URLS_TO_TEST.length}] 测试 ${url} ... `);
    
    const result = await testUrl(url);
    results.push(result);
    
    if (result.success) {
      successCount++;
      console.log(result.message);
    } else {
      errorCount++;
      console.log(result.message);
    }
  }
  
  // 输出总结
  console.log('\n' + '='.repeat(60));
  console.log('📊 验证结果总结:');
  console.log('='.repeat(60));
  console.log(`✅ 成功: ${successCount} 个URL`);
  console.log(`❌ 失败: ${errorCount} 个URL`);
  console.log(`📈 成功率: ${((successCount / URLS_TO_TEST.length) * 100).toFixed(1)}%`);
  
  if (errorCount > 0) {
    console.log('\n❌ 失败的URL列表:');
    results
      .filter(r => !r.success)
      .forEach(r => {
        console.log(`   ${r.url} - ${r.message}`);
      });
  }
  
  console.log('\n' + '='.repeat(60));
  
  if (errorCount === 0) {
    console.log('🎉 所有URL都可以正常访问！');
    process.exit(0);
  } else {
    console.log('⚠️  有URL无法访问，请检查并修复。');
    process.exit(1);
  }
}

// 运行脚本
main().catch(console.error);
