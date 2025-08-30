#!/usr/bin/env node

/**
 * 首页功能验证脚本
 * 确保CSS优化后首页核心功能正常工作
 */

const fs = require('fs')
const path = require('path')

class HomepageFunctionalityChecker {
  constructor() {
    this.checks = []
    this.errors = []
  }

  /**
   * 运行所有检查
   */
  async runAllChecks() {
    console.log('🏠 开始首页功能验证...\n')
    
    try {
      // 1. CSS文件完整性检查
      await this.checkCSSIntegrity()
      
      // 2. 关键选择器检查
      await this.checkCriticalSelectors()
      
      // 3. 字体系统检查
      await this.checkFontSystem()
      
      // 4. 响应式样式检查
      await this.checkResponsiveStyles()
      
      // 5. RTL支持检查
      await this.checkRTLSupport()
      
      // 6. 生成验证报告
      this.generateReport()
      
    } catch (error) {
      console.error('❌ 验证过程出错:', error.message)
      this.errors.push(error.message)
    }
  }

  /**
   * CSS文件完整性检查
   */
  async checkCSSIntegrity() {
    console.log('📄 检查CSS文件完整性...')
    
    const requiredFiles = [
      'app/globals.css',
      'app/rtl-styles.css',
      'public/arabic-fonts-cdn.css',
      'public/non-critical.css'
    ]
    
    for (const file of requiredFiles) {
      const filePath = path.join(process.cwd(), file)
      
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)
        this.addCheck(`CSS文件存在: ${file}`, true, `大小: ${(stats.size / 1024).toFixed(2)}KB`)
      } else {
        this.addCheck(`CSS文件存在: ${file}`, false, '文件缺失')
        this.errors.push(`缺失关键CSS文件: ${file}`)
      }
    }
    
    console.log('')
  }

  /**
   * 关键选择器检查
   */
  async checkCriticalSelectors() {
    console.log('🎯 检查关键选择器...')
    
    const globalsCss = path.join(process.cwd(), 'app/globals.css')
    
    if (!fs.existsSync(globalsCss)) {
      this.addCheck('globals.css存在', false, '主CSS文件缺失')
      return
    }
    
    const content = fs.readFileSync(globalsCss, 'utf-8')
    
    const criticalSelectors = [
      { selector: ':root', description: 'CSS变量系统' },
      { selector: '.font-arabic', description: '阿拉伯字体类' },
      { selector: '.arabic-preview', description: '预览区域样式' },
      { selector: '.font-loading-indicator', description: '字体加载指示器' },
      { selector: 'body', description: '基础body样式' },
      { selector: '@keyframes spin', description: '加载动画' }
    ]
    
    criticalSelectors.forEach(({ selector, description }) => {
      const exists = content.includes(selector)
      this.addCheck(`关键选择器: ${selector}`, exists, description)
      
      if (!exists) {
        this.errors.push(`缺失关键选择器: ${selector} (${description})`)
      }
    })
    
    console.log('')
  }

  /**
   * 字体系统检查
   */
  async checkFontSystem() {
    console.log('🔤 检查字体系统...')
    
    const fontFile = path.join(process.cwd(), 'public/arabic-fonts-cdn.css')
    
    if (!fs.existsSync(fontFile)) {
      this.addCheck('阿拉伯字体文件存在', false, '字体CSS文件缺失')
      return
    }
    
    const content = fs.readFileSync(fontFile, 'utf-8')
    
    const expectedFonts = [
      'Amiri',
      'Scheherazade',
      'Cairo',
      'Kufi'
    ]
    
    expectedFonts.forEach(font => {
      const exists = content.includes(font)
      this.addCheck(`字体支持: ${font}`, exists, exists ? '字体可用' : '字体缺失')
    })
    
    // 检查字体降级策略
    const globalsCss = path.join(process.cwd(), 'app/globals.css')
    const globalsContent = fs.readFileSync(globalsCss, 'utf-8')
    
    const fallbackClasses = [
      '.font-amiri-fallback',
      '.font-cairo-fallback',
      '.font-kufi-fallback'
    ]
    
    fallbackClasses.forEach(className => {
      const exists = globalsContent.includes(className)
      this.addCheck(`字体降级: ${className}`, exists, '降级策略')
    })
    
    console.log('')
  }

  /**
   * 响应式样式检查
   */
  async checkResponsiveStyles() {
    console.log('📱 检查响应式样式...')
    
    const globalsCss = path.join(process.cwd(), 'app/globals.css')
    const content = fs.readFileSync(globalsCss, 'utf-8')
    
    const responsiveFeatures = [
      { feature: '.mobile-only', description: '移动端专用类' },
      { feature: '.desktop-only', description: '桌面端专用类' },
      { feature: '@media (max-width: 768px)', description: '移动端媒体查询' },
      { feature: '@media (min-width: 769px)', description: '桌面端媒体查询' }
    ]
    
    responsiveFeatures.forEach(({ feature, description }) => {
      const exists = content.includes(feature)
      this.addCheck(`响应式特性: ${feature}`, exists, description)
    })
    
    console.log('')
  }

  /**
   * RTL支持检查
   */
  async checkRTLSupport() {
    console.log('↔️ 检查RTL支持...')
    
    const rtlFile = path.join(process.cwd(), 'app/rtl-styles.css')
    
    if (!fs.existsSync(rtlFile)) {
      this.addCheck('RTL样式文件存在', false, 'RTL文件缺失')
      return
    }
    
    const content = fs.readFileSync(rtlFile, 'utf-8')
    
    const rtlFeatures = [
      ':dir(rtl)',
      'margin-right',
      'margin-left',
      'border-right',
      'border-left'
    ]
    
    rtlFeatures.forEach(feature => {
      const exists = content.includes(feature)
      this.addCheck(`RTL特性: ${feature}`, exists, 'RTL布局支持')
    })
    
    // 检查globals.css中的RTL导入
    const globalsCss = path.join(process.cwd(), 'app/globals.css')
    const globalsContent = fs.readFileSync(globalsCss, 'utf-8')
    const hasRTLImport = globalsContent.includes('./rtl-styles.css')
    
    this.addCheck('RTL样式导入', hasRTLImport, 'RTL样式集成')
    
    console.log('')
  }

  /**
   * 添加检查结果
   */
  addCheck(name, passed, details) {
    const status = passed ? '✅' : '❌'
    const result = { name, passed, details, status }
    this.checks.push(result)
    console.log(`   ${status} ${name}: ${details}`)
  }

  /**
   * 生成验证报告
   */
  generateReport() {
    console.log('📊 首页功能验证报告')
    console.log('=' .repeat(50))
    
    const totalChecks = this.checks.length
    const passedChecks = this.checks.filter(check => check.passed).length
    const failedChecks = totalChecks - passedChecks
    
    console.log(`总检查项: ${totalChecks}`)
    console.log(`通过: ${passedChecks}`)
    console.log(`失败: ${failedChecks}`)
    console.log(`通过率: ${((passedChecks / totalChecks) * 100).toFixed(1)}%`)
    console.log('')
    
    if (failedChecks > 0) {
      console.log('❌ 失败的检查项:')
      this.checks.filter(check => !check.passed).forEach(check => {
        console.log(`   - ${check.name}: ${check.details}`)
      })
      console.log('')
    }
    
    if (this.errors.length > 0) {
      console.log('⚠️  发现的问题:')
      this.errors.forEach(error => {
        console.log(`   - ${error}`)
      })
      console.log('')
    }
    
    const overallSuccess = failedChecks === 0 && this.errors.length === 0
    console.log(`🎯 整体评估: ${overallSuccess ? '✅ 首页功能完整' : '❌ 需要修复问题'}`)
    
    if (overallSuccess) {
      console.log('🎉 恭喜！CSS优化没有影响首页核心功能。')
    } else {
      console.log('⚠️  建议修复上述问题后重新测试。')
    }
    
    // 保存详细报告
    this.saveDetailedReport(overallSuccess, passedChecks, totalChecks)
  }

  /**
   * 保存详细报告
   */
  saveDetailedReport(success, passed, total) {
    const reportPath = path.join(process.cwd(), 'docs/homepage-functionality-report.json')
    
    const report = {
      timestamp: new Date().toISOString(),
      overall_success: success,
      statistics: {
        total_checks: total,
        passed_checks: passed,
        failed_checks: total - passed,
        pass_rate: ((passed / total) * 100).toFixed(1) + '%'
      },
      checks: this.checks,
      errors: this.errors,
      recommendations: this.generateRecommendations()
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    console.log(`📄 详细报告已保存: ${reportPath}`)
  }

  /**
   * 生成修复建议
   */
  generateRecommendations() {
    const recommendations = []
    
    if (this.errors.length > 0) {
      recommendations.push({
        type: 'critical',
        message: '发现关键问题，建议立即修复',
        actions: this.errors
      })
    }
    
    const failedChecks = this.checks.filter(check => !check.passed)
    if (failedChecks.length > 0) {
      recommendations.push({
        type: 'functional',
        message: '部分功能检查失败，建议检查相关文件',
        actions: failedChecks.map(check => `修复: ${check.name}`)
      })
    }
    
    if (this.errors.length === 0 && failedChecks.length === 0) {
      recommendations.push({
        type: 'success',
        message: '所有检查通过，可以继续下一阶段优化',
        actions: ['开始第二阶段：0点击页面重构']
      })
    }
    
    return recommendations
  }
}

// 执行验证
if (require.main === module) {
  const checker = new HomepageFunctionalityChecker()
  checker.runAllChecks().then(() => {
    console.log('✅ 首页功能验证完成!')
  }).catch(console.error)
}

module.exports = HomepageFunctionalityChecker
