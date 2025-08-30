#!/usr/bin/env node

/**
 * 非首页文字颜色优化脚本
 * 保持首页不变，只优化其他页面的文字颜色变体
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 从完整映射方案导入
const { COLOR_MAPPING } = require('./color-mapping-plan.js');

// 首页相关文件 - 这些文件不进行优化
const HOME_PAGE_EXCLUDES = [
  'app/[locale]/page.tsx',           // 首页主文件
  'app/[locale]/layout.tsx',         // 布局文件
  'components/calligraphy-generator.tsx', // 主要生成器
  'components/navbar.tsx',           // 导航栏
  'components/footer.tsx',           // 页脚
  'components/home/**',              // 首页专用组件
];

// 需要优化的文件模式
const TARGET_PATTERNS = [
  'app/**/*.tsx',
  'components/**/*.tsx',
  '!node_modules/**',
];

function isExcludedFile(filePath) {
  // 检查是否在排除列表中
  return HOME_PAGE_EXCLUDES.some(pattern => {
    if (pattern.includes('**')) {
      const regexPattern = pattern.replace('**', '.*');
      return new RegExp(regexPattern).test(filePath);
    }
    return filePath.includes(pattern);
  });
}

function optimizeTextColors(content, filePath) {
  let modifiedContent = content;
  let changeCount = 0;
  const changes = [];

  // 只处理非核心颜色的映射
  for (const [oldClass, newClass] of Object.entries(COLOR_MAPPING)) {
    if (oldClass !== newClass) {
      const regex = new RegExp(`\\b${oldClass}\\b`, 'g');
      const matches = modifiedContent.match(regex);
      if (matches) {
        modifiedContent = modifiedContent.replace(regex, newClass);
        changeCount += matches.length;
        changes.push(`${oldClass} → ${newClass} (${matches.length}次)`);
      }
    }
  }

  return { content: modifiedContent, changes: changeCount, details: changes };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, changes, details } = optimizeTextColors(content, filePath);
    
    if (changes > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ ${filePath}:`);
      details.forEach(detail => console.log(`   ${detail}`));
      console.log(`   总计: ${changes} 个替换\n`);
      return changes;
    } else {
      console.log(`⏭️  ${filePath}: 无需优化`);
      return 0;
    }
  } catch (error) {
    console.error(`❌ 处理文件失败 ${filePath}:`, error.message);
    return 0;
  }
}

function main() {
  console.log('🎨 开始优化非首页的文字颜色变体...\n');
  console.log('📋 排除的文件（保持不变）:');
  HOME_PAGE_EXCLUDES.forEach(file => console.log(`   ${file}`));
  console.log('');

  let totalFiles = 0;
  let totalChanges = 0;
  let processedFiles = [];

  // 获取所有目标文件
  const allFiles = [];
  TARGET_PATTERNS.forEach(pattern => {
    if (!pattern.startsWith('!')) {
      const files = glob.sync(pattern, { cwd: process.cwd() });
      allFiles.push(...files);
    }
  });

  // 去重并排序
  const uniqueFiles = [...new Set(allFiles)].sort();

  console.log(`📁 找到 ${uniqueFiles.length} 个文件，开始处理...\n`);

  uniqueFiles.forEach(file => {
    const fullPath = path.resolve(file);
    
    // 检查是否需要排除
    if (isExcludedFile(file)) {
      console.log(`🚫 跳过首页文件: ${file}`);
      return;
    }

    const changes = processFile(fullPath);
    if (changes > 0) {
      totalFiles++;
      totalChanges += changes;
      processedFiles.push({ file, changes });
    }
  });

  console.log('\n📊 优化完成统计:');
  console.log(`   - 处理文件数: ${totalFiles}`);
  console.log(`   - 总替换数: ${totalChanges}`);
  console.log(`   - 跳过首页文件: ${HOME_PAGE_EXCLUDES.length} 个模式`);

  if (processedFiles.length > 0) {
    console.log('\n📋 处理详情:');
    processedFiles.forEach(({ file, changes }) => {
      console.log(`   ${file}: ${changes} 个替换`);
    });
  }

  console.log('\n🔧 接下来请运行以下命令查看效果:');
  console.log('   1. npm run build');
  console.log('   2. 检查构建后的 CSS 文件大小');
  console.log('   3. 访问非首页页面查看样式效果');

  console.log('\n💡 如果效果满意，可以继续；如需回退，请运行:');
  console.log('   git checkout -- app/ components/');
}

if (require.main === module) {
  main();
}

module.exports = { optimizeTextColors, isExcludedFile };
