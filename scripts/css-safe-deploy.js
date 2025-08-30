#!/usr/bin/env node

/**
 * CSS优化安全部署脚本
 * 备份原文件，应用优化，提供回滚机制
 */

const fs = require('fs')
const path = require('path')

class SafeCSSDeployer {
  constructor() {
    this.backupDir = path.join(process.cwd(), 'docs/css-backups')
    this.timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    this.deployed = []
  }

  /**
   * 执行安全部署
   */
  async deploy() {
    console.log('🚀 开始CSS优化安全部署...\n')
    
    try {
      // 1. 创建备份目录
      this.createBackupDir()
      
      // 2. 备份关键文件
      await this.backupFiles()
      
      // 3. 验证优化文件
      await this.validateOptimizedFiles()
      
      // 4. 应用优化（渐进式）
      await this.applyOptimizations()
      
      // 5. 运行健康检查
      await this.healthCheck()
      
      console.log('✅ CSS优化部署成功完成!')
      console.log(`📦 备份位置: ${this.backupDir}`)
      console.log('🔄 如需回滚，请运行: npm run css:rollback')
      
    } catch (error) {
      console.error('❌ 部署失败:', error.message)
      console.log('🔄 正在自动回滚...')
      await this.rollback()
    }
  }

  /**
   * 创建备份目录
   */
  createBackupDir() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true })
    }
    
    const timestampDir = path.join(this.backupDir, this.timestamp)
    fs.mkdirSync(timestampDir, { recursive: true })
    
    console.log(`📁 创建备份目录: ${timestampDir}`)
  }

  /**
   * 备份关键文件
   */
  async backupFiles() {
    const filesToBackup = [
      'app/globals.css',
      'public/non-critical.css',
      'styles/globals.css'
    ]
    
    console.log('💾 备份关键CSS文件...')
    
    for (const file of filesToBackup) {
      const srcPath = path.join(process.cwd(), file)
      
      if (fs.existsSync(srcPath)) {
        const backupPath = path.join(this.backupDir, this.timestamp, file.replace('/', '_'))
        
        // 创建备份文件目录
        const backupDirPath = path.dirname(backupPath)
        if (!fs.existsSync(backupDirPath)) {
          fs.mkdirSync(backupDirPath, { recursive: true })
        }
        
        fs.copyFileSync(srcPath, backupPath)
        console.log(`   ✅ ${file} -> ${backupPath}`)
      } else {
        console.log(`   ⚠️  文件不存在: ${file}`)
      }
    }
    console.log('')
  }

  /**
   * 验证优化文件
   */
  async validateOptimizedFiles() {
    console.log('🔍 验证优化文件...')
    
    // 验证主CSS文件
    await this.validateCriticalCSS('app/globals-optimized.css')
    
    // 验证非关键CSS文件
    await this.validateNonCriticalCSS('app/non-critical-unified.css')
    
    console.log('')
  }

  async validateCriticalCSS(filePath) {
    const fullPath = path.join(process.cwd(), filePath)
    
    if (!fs.existsSync(fullPath)) {
      throw new Error(`关键CSS文件不存在: ${filePath}`)
    }
    
    const content = fs.readFileSync(fullPath, 'utf-8')
    
    // 基本验证
    if (content.length < 100) {
      throw new Error(`关键CSS文件似乎过小: ${filePath}`)
    }
    
    // 检查关键选择器
    const criticalSelectors = ['.font-arabic', '.arabic-preview', ':root', 'body']
    const missingSelectors = criticalSelectors.filter(selector => 
      !content.includes(selector)
    )
    
    if (missingSelectors.length > 0) {
      throw new Error(`关键CSS文件缺少关键选择器: ${missingSelectors.join(', ')} in ${filePath}`)
    }
    
    console.log(`   ✅ ${filePath} (关键CSS) 验证通过`)
  }

  async validateNonCriticalCSS(filePath) {
    const fullPath = path.join(process.cwd(), filePath)
    
    if (!fs.existsSync(fullPath)) {
      throw new Error(`非关键CSS文件不存在: ${filePath}`)
    }
    
    const content = fs.readFileSync(fullPath, 'utf-8')
    
    // 基本验证
    if (content.length < 100) {
      throw new Error(`非关键CSS文件似乎过小: ${filePath}`)
    }
    
    // 检查非关键样式（页面特定的类）
    const expectedClasses = ['.page-container', '.blog-container', '.faq-container']
    const foundClasses = expectedClasses.filter(className => 
      content.includes(className)
    )
    
    if (foundClasses.length === 0) {
      throw new Error(`非关键CSS文件未找到预期的页面样式类: ${filePath}`)
    }
    
    console.log(`   ✅ ${filePath} (非关键CSS) 验证通过`)
  }

  /**
   * 应用优化（渐进式部署）
   */
  async applyOptimizations() {
    console.log('📝 应用CSS优化...')
    
    // 步骤1: 替换主globals.css
    await this.deployFile('app/globals-optimized.css', 'app/globals.css')
    
    // 步骤2: 移除重复的globals.css
    await this.archiveFile('styles/globals.css')
    
    // 步骤3: 更新non-critical.css
    await this.deployFile('app/non-critical-unified.css', 'public/non-critical.css')
    
    console.log('')
  }

  /**
   * 部署单个文件
   */
  async deployFile(sourcePath, targetPath) {
    const fullSourcePath = path.join(process.cwd(), sourcePath)
    const fullTargetPath = path.join(process.cwd(), targetPath)
    
    if (!fs.existsSync(fullSourcePath)) {
      throw new Error(`源文件不存在: ${sourcePath}`)
    }
    
    // 创建目标目录
    const targetDir = path.dirname(fullTargetPath)
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true })
    }
    
    fs.copyFileSync(fullSourcePath, fullTargetPath)
    this.deployed.push({ source: sourcePath, target: targetPath })
    
    console.log(`   ✅ ${sourcePath} -> ${targetPath}`)
  }

  /**
   * 归档文件（不删除，只是移动到备份）
   */
  async archiveFile(filePath) {
    const fullPath = path.join(process.cwd(), filePath)
    
    if (fs.existsSync(fullPath)) {
      const archivePath = path.join(this.backupDir, this.timestamp, `archived_${filePath.replace('/', '_')}`)
      fs.copyFileSync(fullPath, archivePath)
      
      // 在原文件中添加注释，但不删除
      const deprecationComment = `/* 
此文件已被优化并整合到 app/globals.css 中
备份位置: ${archivePath}
时间: ${new Date().toISOString()}
如需恢复，请运行 npm run css:rollback
*/\n\n`
      
      const originalContent = fs.readFileSync(fullPath, 'utf-8')
      fs.writeFileSync(fullPath, deprecationComment + originalContent)
      
      console.log(`   📦 ${filePath} 已归档`)
    }
  }

  /**
   * 健康检查
   */
  async healthCheck() {
    console.log('🏥 运行健康检查...')
    
    // 检查文件大小
    const globalsCss = path.join(process.cwd(), 'app/globals.css')
    if (fs.existsSync(globalsCss)) {
      const stats = fs.statSync(globalsCss)
      console.log(`   📊 主CSS文件大小: ${(stats.size / 1024).toFixed(2)}KB`)
      
      if (stats.size > 50 * 1024) {
        console.warn(`   ⚠️  文件大小超过50KB，可能需要进一步优化`)
      }
    }
    
    // 检查关键选择器
    const content = fs.readFileSync(globalsCss, 'utf-8')
    const criticalSelectors = ['.font-arabic', '.arabic-preview', ':root', 'body']
    
    criticalSelectors.forEach(selector => {
      if (content.includes(selector)) {
        console.log(`   ✅ 关键选择器存在: ${selector}`)
      } else {
        throw new Error(`关键选择器缺失: ${selector}`)
      }
    })
    
    console.log('')
  }

  /**
   * 回滚操作
   */
  async rollback() {
    console.log('🔄 开始回滚操作...')
    
    for (const deployment of this.deployed.reverse()) {
      const backupPath = path.join(this.backupDir, this.timestamp, deployment.target.replace('/', '_'))
      const targetPath = path.join(process.cwd(), deployment.target)
      
      if (fs.existsSync(backupPath)) {
        fs.copyFileSync(backupPath, targetPath)
        console.log(`   ✅ 恢复: ${deployment.target}`)
      }
    }
    
    console.log('✅ 回滚完成')
  }

  /**
   * 创建回滚脚本
   */
  createRollbackScript() {
    const rollbackScript = `#!/usr/bin/env node
// 自动生成的回滚脚本 - ${this.timestamp}

const fs = require('fs')
const path = require('path')

const backupDir = '${this.backupDir}/${this.timestamp}'
const deployments = ${JSON.stringify(this.deployed, null, 2)}

console.log('🔄 开始CSS回滚...')

deployments.forEach(deployment => {
  const backupPath = path.join(process.cwd(), backupDir, deployment.target.replace('/', '_'))
  const targetPath = path.join(process.cwd(), deployment.target)
  
  if (fs.existsSync(backupPath)) {
    fs.copyFileSync(backupPath, targetPath)
    console.log('✅ 恢复:', deployment.target)
  } else {
    console.warn('⚠️  备份文件不存在:', backupPath)
  }
})

console.log('✅ 回滚完成')
`
    
    const scriptPath = path.join(process.cwd(), 'scripts/css-rollback.js')
    fs.writeFileSync(scriptPath, rollbackScript)
    fs.chmodSync(scriptPath, '755')
    
    console.log(`📜 回滚脚本已创建: ${scriptPath}`)
  }
}

// 执行部署
if (require.main === module) {
  const deployer = new SafeCSSDeployer()
  deployer.deploy().then(() => {
    deployer.createRollbackScript()
  }).catch(console.error)
}

module.exports = SafeCSSDeployer
