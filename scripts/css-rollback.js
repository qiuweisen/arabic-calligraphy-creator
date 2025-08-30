#!/usr/bin/env node
// 自动生成的回滚脚本 - 2025-08-30T14-24-17-791Z

const fs = require('fs')
const path = require('path')

const backupDir = '/Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator/docs/css-backups/2025-08-30T14-24-17-791Z'
const deployments = [
  {
    "source": "app/globals-optimized.css",
    "target": "app/globals.css"
  },
  {
    "source": "app/non-critical-unified.css",
    "target": "public/non-critical.css"
  }
]

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
