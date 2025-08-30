#!/usr/bin/env node

/**
 * CSS优化项目清理脚本
 * 清理不再需要的临时文件和优化工具文件
 */

const fs = require('fs')
const path = require('path')

class ProjectCleaner {
  constructor() {
    this.filesToClean = [
      // 临时优化文件
      'app/globals-optimized.css',
      'app/critical-styles.css', 
      'app/non-critical-unified.css',
      
      // 临时脚本文件
      'scripts/css-analyzer.js',
      'scripts/css-safe-deploy.js',
      'scripts/homepage-validator.js',
      'scripts/other-pages-impact-checker.js',
      'scripts/css-rollback.js',
      
      // 临时配置文件
      'lib/css-optimization-config.ts',
      'lib/css-optimization-utils.ts',
      'hooks/use-css-optimization.tsx'
    ]
    
    this.filesToKeep = [
      // 重要文档保留
      'docs/website-optimization-master-plan.md',
      'docs/css-optimization-phase1-report.md',
      'docs/css-analysis-report.json',
      'docs/homepage-functionality-report.json',
      
      // 备份保留
      'docs/css-backups'
    ]
    
    this.cleaned = []
    this.errors = []
  }

  async cleanProject() {
    console.log('🧹 开始清理CSS优化临时文件...\n')
    
    // 1. 确认优化已成功应用
    await this.verifyOptimizationSuccess()
    
    // 2. 清理临时文件
    await this.cleanTemporaryFiles()
    
    // 3. 整理文档
    await this.organizeDocumentation()
    
    // 4. 生成清理报告
    this.generateCleanupReport()
  }

  async verifyOptimizationSuccess() {
    console.log('✅ 验证优化是否成功应用...')
    
    const globalsCss = path.join(process.cwd(), 'app/globals.css')
    const nonCriticalCss = path.join(process.cwd(), 'public/non-critical.css')
    
    if (!fs.existsSync(globalsCss)) {
      throw new Error('主CSS文件不存在，清理已取消')
    }
    
    if (!fs.existsSync(nonCriticalCss)) {
      throw new Error('非关键CSS文件不存在，清理已取消')
    }
    
    // 检查文件大小合理
    const globalsStats = fs.statSync(globalsCss)
    const nonCriticalStats = fs.statSync(nonCriticalCss)
    
    if (globalsStats.size < 1000) {
      throw new Error('主CSS文件过小，可能有问题')
    }
    
    console.log(`   ✅ 主CSS文件: ${(globalsStats.size / 1024).toFixed(2)}KB`)
    console.log(`   ✅ 非关键CSS: ${(nonCriticalStats.size / 1024).toFixed(2)}KB`)
    console.log('')
  }

  async cleanTemporaryFiles() {
    console.log('🗑️ 清理临时文件...')
    
    for (const file of this.filesToClean) {
      const filePath = path.join(process.cwd(), file)
      
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath)
          this.cleaned.push(file)
          console.log(`   ✅ 删除: ${file}`)
        } catch (error) {
          this.errors.push(`删除失败: ${file} - ${error.message}`)
          console.log(`   ❌ 删除失败: ${file}`)
        }
      }
    }
    console.log('')
  }

  async organizeDocumentation() {
    console.log('📚 整理文档...')
    
    // 创建archive目录
    const archiveDir = path.join(process.cwd(), 'docs/css-optimization-archive')
    if (!fs.existsSync(archiveDir)) {
      fs.mkdirSync(archiveDir, { recursive: true })
    }
    
    // 移动详细报告到archive
    const reportsToArchive = [
      'docs/css-analysis-report.json',
      'docs/homepage-functionality-report.json',
      'docs/css-optimization-phase1-report.md'
    ]
    
    for (const report of reportsToArchive) {
      const srcPath = path.join(process.cwd(), report)
      if (fs.existsSync(srcPath)) {
        const filename = path.basename(report)
        const destPath = path.join(archiveDir, filename)
        fs.copyFileSync(srcPath, destPath)
        fs.unlinkSync(srcPath)
        console.log(`   📦 归档: ${report} -> archive/`)
      }
    }
    
    // 更新主要文档，添加清理说明
    this.updateMainDocumentation()
    
    console.log('')
  }

  updateMainDocumentation() {
    const docPath = path.join(process.cwd(), 'docs/website-optimization-master-plan.md')
    
    if (fs.existsSync(docPath)) {
      let content = fs.readFileSync(docPath, 'utf-8')
      
      const cleanupNote = `

## 🧹 项目清理

**清理时间**: ${new Date().toISOString()}

### 已清理的临时文件
${this.cleaned.map(file => `- ${file}`).join('\n')}

### 保留的重要文件
- 最终优化后的CSS文件（app/globals.css, public/non-critical.css）
- CSS备份文件（docs/css-backups/）
- 本优化规划文档

### 详细报告归档位置
- docs/css-optimization-archive/

---`
      
      content += cleanupNote
      fs.writeFileSync(docPath, content)
      console.log('   ✅ 更新主要文档')
    }
  }

  generateCleanupReport() {
    console.log('📊 清理报告')
    console.log('=' .repeat(50))
    
    console.log(`清理的文件数: ${this.cleaned.length}`)
    console.log(`清理错误数: ${this.errors.length}`)
    
    if (this.errors.length > 0) {
      console.log('\n❌ 清理错误:')
      this.errors.forEach(error => console.log(`   - ${error}`))
    }
    
    console.log('\n✅ 保留的重要文件:')
    this.filesToKeep.forEach(file => {
      const filePath = path.join(process.cwd(), file)
      if (fs.existsSync(filePath)) {
        console.log(`   ✅ ${file}`)
      }
    })
    
    console.log('\n🎯 清理结果:')
    if (this.errors.length === 0) {
      console.log('✅ 项目清理成功完成')
      console.log('✅ CSS优化已稳定应用')
      console.log('✅ 临时文件已清理')
      console.log('✅ 重要文档已保留和归档')
      console.log('\n🚀 可以开始第二阶段：0点击页面重构')
    } else {
      console.log('⚠️  部分文件清理失败，请手动检查')
    }
  }
}

// 执行清理
if (require.main === module) {
  const cleaner = new ProjectCleaner()
  cleaner.cleanProject().catch(error => {
    console.error('❌ 清理过程出错:', error.message)
    process.exit(1)
  })
}

module.exports = ProjectCleaner
