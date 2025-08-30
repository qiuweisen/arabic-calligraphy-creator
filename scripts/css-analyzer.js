#!/usr/bin/env node

/**
 * CSS优化性能测试脚本
 * 在应用优化前后对比关键指标，确保不会影响首页功能
 */

const fs = require('fs')
const path = require('path')

// 测试配置
const TEST_CONFIG = {
  // CSS文件路径
  cssFiles: [
    'app/globals.css',
    'app/rtl-styles.css', 
    'public/arabic-fonts-cdn.css',
    'public/non-critical.css',
    'styles/globals.css'
  ],
  
  // 关键选择器（首页必需）
  criticalSelectors: [
    '.font-arabic',
    '.arabic-preview',
    '.font-loading-indicator',
    ':root',
    'body'
  ],
  
  // 性能目标
  targets: {
    totalCSSSize: 50 * 1024, // 50KB
    criticalCSSSize: 20 * 1024, // 20KB
    maxSelectors: 1000,
    duplicateThreshold: 0.1 // 10%重复率阈值
  }
}

class CSSAnalyzer {
  constructor() {
    this.metrics = {
      totalSize: 0,
      totalSelectors: 0,
      duplicates: [],
      criticalSize: 0,
      files: []
    }
  }

  /**
   * 分析所有CSS文件
   */
  async analyzeCSS() {
    console.log('🔍 开始CSS分析...\n')
    
    for (const cssFile of TEST_CONFIG.cssFiles) {
      const filePath = path.join(process.cwd(), cssFile)
      
      if (fs.existsSync(filePath)) {
        await this.analyzeFile(filePath, cssFile)
      } else {
        console.log(`⚠️  文件不存在: ${cssFile}`)
      }
    }
    
    this.generateReport()
  }

  /**
   * 分析单个CSS文件
   */
  async analyzeFile(filePath, relativePath) {
    const content = fs.readFileSync(filePath, 'utf-8')
    const stats = fs.statSync(filePath)
    
    const fileMetrics = {
      path: relativePath,
      size: stats.size,
      selectors: this.extractSelectors(content),
      criticalSelectors: this.findCriticalSelectors(content),
      hasImports: content.includes('@import'),
      hasTailwind: content.includes('@tailwind')
    }
    
    this.metrics.files.push(fileMetrics)
    this.metrics.totalSize += stats.size
    this.metrics.totalSelectors += fileMetrics.selectors.length
    
    // 计算关键CSS大小
    if (fileMetrics.criticalSelectors.length > 0) {
      this.metrics.criticalSize += stats.size
    }
    
    console.log(`📄 ${relativePath}:`)
    console.log(`   大小: ${(stats.size / 1024).toFixed(2)}KB`)
    console.log(`   选择器: ${fileMetrics.selectors.length}个`)
    console.log(`   关键选择器: ${fileMetrics.criticalSelectors.length}个`)
    console.log(`   包含Tailwind: ${fileMetrics.hasTailwind ? '是' : '否'}`)
    console.log('')
  }

  /**
   * 提取CSS选择器
   */
  extractSelectors(content) {
    // 移除注释
    const cleanContent = content.replace(/\/\*[\s\S]*?\*\//g, '')
    
    // 提取选择器（简化版）
    const selectorMatches = cleanContent.match(/([^{}]+)\s*{[^{}]*}/g) || []
    
    return selectorMatches.map(match => {
      const selector = match.split('{')[0].trim()
      return selector.split(',').map(s => s.trim()).filter(s => s.length > 0)
    }).flat()
  }

  /**
   * 查找关键选择器
   */
  findCriticalSelectors(content) {
    const selectors = this.extractSelectors(content)
    return selectors.filter(selector => 
      TEST_CONFIG.criticalSelectors.some(critical => 
        selector.includes(critical)
      )
    )
  }

  /**
   * 检测重复选择器
   */
  detectDuplicates() {
    const allSelectors = this.metrics.files.flatMap(file => file.selectors)
    const selectorCounts = {}
    
    allSelectors.forEach(selector => {
      selectorCounts[selector] = (selectorCounts[selector] || 0) + 1
    })
    
    this.metrics.duplicates = Object.entries(selectorCounts)
      .filter(([_, count]) => count > 1)
      .map(([selector, count]) => ({ selector, count }))
      .sort((a, b) => b.count - a.count)
  }

  /**
   * 生成分析报告
   */
  generateReport() {
    this.detectDuplicates()
    
    console.log('📊 CSS分析报告')
    console.log('=' .repeat(50))
    
    // 总体指标
    console.log(`总CSS大小: ${(this.metrics.totalSize / 1024).toFixed(2)}KB`)
    console.log(`关键CSS大小: ${(this.metrics.criticalSize / 1024).toFixed(2)}KB`)
    console.log(`总选择器数: ${this.metrics.totalSelectors}`)
    console.log(`重复选择器数: ${this.metrics.duplicates.length}`)
    console.log('')
    
    // 性能评估
    this.evaluatePerformance()
    
    // 重复选择器报告
    if (this.metrics.duplicates.length > 0) {
      console.log('🔄 重复选择器 (前10个):')
      this.metrics.duplicates.slice(0, 10).forEach(({ selector, count }) => {
        console.log(`   ${selector}: ${count}次`)
      })
      console.log('')
    }
    
    // 优化建议
    this.generateRecommendations()
  }

  /**
   * 性能评估
   */
  evaluatePerformance() {
    console.log('✅ 性能评估:')
    
    const totalSizeCheck = this.metrics.totalSize <= TEST_CONFIG.targets.totalCSSSize
    const criticalSizeCheck = this.metrics.criticalSize <= TEST_CONFIG.targets.criticalCSSSize
    const selectorCheck = this.metrics.totalSelectors <= TEST_CONFIG.targets.maxSelectors
    const duplicateRate = this.metrics.duplicates.length / this.metrics.totalSelectors
    const duplicateCheck = duplicateRate <= TEST_CONFIG.targets.duplicateThreshold
    
    console.log(`   总大小 (${(this.metrics.totalSize / 1024).toFixed(2)}KB/${(TEST_CONFIG.targets.totalCSSSize / 1024).toFixed(2)}KB): ${totalSizeCheck ? '✅' : '❌'}`)
    console.log(`   关键大小 (${(this.metrics.criticalSize / 1024).toFixed(2)}KB/${(TEST_CONFIG.targets.criticalCSSSize / 1024).toFixed(2)}KB): ${criticalSizeCheck ? '✅' : '❌'}`)
    console.log(`   选择器数 (${this.metrics.totalSelectors}/${TEST_CONFIG.targets.maxSelectors}): ${selectorCheck ? '✅' : '❌'}`)
    console.log(`   重复率 (${(duplicateRate * 100).toFixed(1)}%/${(TEST_CONFIG.targets.duplicateThreshold * 100).toFixed(1)}%): ${duplicateCheck ? '✅' : '❌'}`)
    console.log('')
    
    const allPass = totalSizeCheck && criticalSizeCheck && selectorCheck && duplicateCheck
    console.log(`🎯 整体评估: ${allPass ? '✅ 通过' : '❌ 需要优化'}`)
    console.log('')
  }

  /**
   * 生成优化建议
   */
  generateRecommendations() {
    console.log('💡 优化建议:')
    
    // 文件级建议
    const largeFiles = this.metrics.files.filter(file => file.size > 10 * 1024)
    if (largeFiles.length > 0) {
      console.log('   📦 大文件优化:')
      largeFiles.forEach(file => {
        console.log(`     - ${file.path} (${(file.size / 1024).toFixed(2)}KB): 考虑代码分割`)
      })
    }
    
    // 重复清理建议
    if (this.metrics.duplicates.length > 10) {
      console.log('   🔄 重复选择器清理:')
      console.log(`     - 发现 ${this.metrics.duplicates.length} 个重复选择器`)
      console.log('     - 建议合并或移除重复定义')
    }
    
    // 结构优化建议
    const filesWithTailwind = this.metrics.files.filter(file => file.hasTailwind)
    const filesWithImports = this.metrics.files.filter(file => file.hasImports)
    
    if (filesWithTailwind.length > 1) {
      console.log('   🎨 Tailwind优化:')
      console.log('     - 多个文件引入Tailwind，建议统一到单一入口')
    }
    
    if (filesWithImports.length > 0) {
      console.log('   📥 Import优化:')
      console.log('     - 检查@import的加载顺序和必要性')
    }
    
    console.log('')
  }

  /**
   * 生成JSON报告
   */
  saveReport() {
    const reportPath = path.join(process.cwd(), 'docs/css-analysis-report.json')
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      targets: TEST_CONFIG.targets,
      recommendations: this.generateRecommendationsList()
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
    console.log(`📄 详细报告已保存到: ${reportPath}`)
  }

  generateRecommendationsList() {
    const recommendations = []
    
    if (this.metrics.totalSize > TEST_CONFIG.targets.totalCSSSize) {
      recommendations.push({
        type: 'size',
        message: '总CSS大小超标，建议代码分割和压缩',
        priority: 'high'
      })
    }
    
    if (this.metrics.duplicates.length > 10) {
      recommendations.push({
        type: 'duplication',
        message: '存在较多重复选择器，建议清理',
        priority: 'medium'
      })
    }
    
    return recommendations
  }
}

// 执行分析
if (require.main === module) {
  const analyzer = new CSSAnalyzer()
  analyzer.analyzeCSS().then(() => {
    analyzer.saveReport()
    console.log('🎉 CSS分析完成!')
  }).catch(console.error)
}

module.exports = CSSAnalyzer
