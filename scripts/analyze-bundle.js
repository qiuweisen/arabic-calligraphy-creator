#!/usr/bin/env node

const { exec } = require('child_process')

console.log('🔍 Analyzing bundle size...')

// Set environment variable for bundle analyzer
process.env.ANALYZE = 'true'

exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during build: ${error}`)
    return
  }
  
  console.log('✅ Bundle analysis complete!')
  console.log('📊 Check the opened browser window for detailed analysis')
  
  // Additional bundle size check
  exec('du -sh .next/static', (err, output) => {
    if (!err) {
      console.log(`📦 Static assets size: ${output.trim()}`)
    }
  })
})