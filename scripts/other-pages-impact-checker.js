#!/usr/bin/env node

/**
 * 其他页面影响评估脚本
 * 检查CSS优化对非首页的影响
 */

const fs = require('fs')
const path = require('path')

class OtherPagesImpactChecker {
  constructor() {
    this.pagesDirs = [
      'app/faq',
      'app/contact', 
      'app/about-us',
      'app/blog',
      'app/guides',
      'app/tutorials',
      'app/use-cases',
      'app/resources'
    ]
    this.impacts = []
  }

  async checkAllPages() {
    console.log('📄 检查其他页面CSS影响...\n')
    
    for (const pageDir of this.pagesDirs) {
      await this.checkPageDir(pageDir)
    }
    
    this.generateImpactReport()
  }

  async checkPageDir(pageDir) {
    const fullPath = path.join(process.cwd(), pageDir)
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  页面目录不存在: ${pageDir}`)
      return
    }
    
    const pageFile = path.join(fullPath, 'page.tsx')
    if (!fs.existsSync(pageFile)) {
      console.log(`⚠️  页面文件不存在: ${pageDir}/page.tsx`)
      return
    }
    
    const content = fs.readFileSync(pageFile, 'utf-8')
    
    // 检查页面使用的样式类型
    const usesCustomCSS = this.checkCustomCSSUsage(content)
    const usesTailwind = this.checkTailwindUsage(content)
    const usesComponents = this.checkComponentUsage(content)
    
    const impact = {
      page: pageDir,
      usesCustomCSS,
      usesTailwind,
      usesComponents,
      riskLevel: this.assessRiskLevel(usesCustomCSS, usesTailwind, usesComponents)
    }
    
    this.impacts.push(impact)
    
    console.log(`📄 ${pageDir}:`)
    console.log(`   Tailwind CSS: ${usesTailwind ? '✅ 是' : '❌ 否'}`)
    console.log(`   自定义CSS类: ${usesCustomCSS ? '⚠️  是' : '✅ 否'}`)
    console.log(`   使用组件: ${usesComponents ? '✅ 是' : '❌ 否'}`)
    console.log(`   影响风险: ${this.getRiskLabel(impact.riskLevel)}`)
    console.log('')
  }

  checkCustomCSSUsage(content) {
    // 检查是否使用了可能在非关键CSS中定义的类
    const customClasses = [
      'blog-container',
      'blog-title',
      'faq-container',
      'contact-container',
      'about-container'
    ]
    
    return customClasses.some(className => content.includes(className))
  }

  checkTailwindUsage(content) {
    // 检查是否使用Tailwind类
    const tailwindPatterns = [
      'className="',
      'bg-',
      'text-',
      'p-',
      'm-',
      'flex',
      'grid'
    ]
    
    return tailwindPatterns.some(pattern => content.includes(pattern))
  }

  checkComponentUsage(content) {
    // 检查是否使用了UI组件
    const components = [
      'Card',
      'Button',
      'Accordion',
      'StaticNavbar',
      'Footer'
    ]
    
    return components.some(component => content.includes(component))
  }

  assessRiskLevel(usesCustomCSS, usesTailwind, usesComponents) {
    if (usesCustomCSS) return 'medium'
    if (usesTailwind && usesComponents) return 'low' 
    if (usesTailwind || usesComponents) return 'very-low'
    return 'unknown'
  }

  getRiskLabel(riskLevel) {
    const labels = {
      'low': '🟢 低',
      'very-low': '🟢 很低',
      'medium': '🟡 中等',
      'high': '🔴 高',
      'unknown': '⚪ 未知'
    }
    return labels[riskLevel] || '⚪ 未知'
  }

  generateImpactReport() {
    console.log('📊 其他页面影响评估报告')
    console.log('=' .repeat(50))
    
    const totalPages = this.impacts.length
    const lowRiskPages = this.impacts.filter(p => ['low', 'very-low'].includes(p.riskLevel)).length
    const mediumRiskPages = this.impacts.filter(p => p.riskLevel === 'medium').length
    const highRiskPages = this.impacts.filter(p => p.riskLevel === 'high').length
    
    console.log(`总页面数: ${totalPages}`)
    console.log(`低风险页面: ${lowRiskPages}`)
    console.log(`中等风险页面: ${mediumRiskPages}`)
    console.log(`高风险页面: ${highRiskPages}`)
    console.log('')
    
    if (mediumRiskPages > 0) {
      console.log('⚠️  中等风险页面:')
      this.impacts.filter(p => p.riskLevel === 'medium').forEach(page => {
        console.log(`   - ${page.page}: 使用自定义CSS类`)
      })
      console.log('')
    }
    
    if (highRiskPages > 0) {
      console.log('🔴 高风险页面:')
      this.impacts.filter(p => p.riskLevel === 'high').forEach(page => {
        console.log(`   - ${page.page}`)
      })
      console.log('')
    }
    
    const overallRisk = highRiskPages > 0 ? 'high' : mediumRiskPages > 0 ? 'medium' : 'low'
    console.log(`🎯 整体影响评估: ${this.getRiskLabel(overallRisk)}`)
    
    if (overallRisk === 'low' || overallRisk === 'very-low') {
      console.log('✅ 其他页面受影响很小，主要使用Tailwind和组件系统')
    } else if (overallRisk === 'medium') {
      console.log('⚠️  部分页面可能需要检查，但整体风险可控')
    }
    
    console.log('')
    console.log('💡 建议:')
    console.log('   - 优先验证中等风险以上的页面')
    console.log('   - 检查非关键CSS中新添加的统一样式是否与现有页面冲突')
    console.log('   - 大部分页面使用Tailwind + 组件，受影响较小')
  }
}

// 执行检查
if (require.main === module) {
  const checker = new OtherPagesImpactChecker()
  checker.checkAllPages().catch(console.error)
}

module.exports = OtherPagesImpactChecker
