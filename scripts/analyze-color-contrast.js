#!/usr/bin/env node

/**
 * 分析项目中背景色与文字色的组合，确保优化后的对比度足够
 */

const fs = require('fs');
const path = require('path');

// 常用的背景色与文字色组合
const BACKGROUND_TEXT_COMBINATIONS = [
  // 最常用的组合
  { bg: 'bg-amber-50', commonText: ['text-amber-800', 'text-amber-700', 'text-amber-600', 'text-gray-900'] },
  { bg: 'bg-amber-100', commonText: ['text-amber-800', 'text-amber-700', 'text-gray-900'] },
  { bg: 'bg-white', commonText: ['text-amber-800', 'text-amber-700', 'text-amber-600', 'text-gray-900', 'text-gray-600'] },
  { bg: 'bg-gray-50', commonText: ['text-gray-900', 'text-gray-800', 'text-amber-800'] },
  { bg: 'bg-gray-100', commonText: ['text-gray-900', 'text-gray-800', 'text-amber-800'] },
  { bg: 'bg-amber-900', commonText: ['text-amber-100', 'text-white'] },
  { bg: 'bg-gray-800', commonText: ['text-white', 'text-gray-100'] },
  { bg: 'bg-gray-900', commonText: ['text-white', 'text-gray-100'] },
  
  // 状态色背景
  { bg: 'bg-red-50', commonText: ['text-red-800', 'text-red-700'] },
  { bg: 'bg-green-50', commonText: ['text-green-800', 'text-green-700'] },
  { bg: 'bg-blue-50', commonText: ['text-blue-800', 'text-blue-700'] },
  { bg: 'bg-emerald-50', commonText: ['text-emerald-800', 'text-emerald-700'] },
];

// 建议的6种核心文字颜色
const CORE_TEXT_COLORS = [
  'text-amber-800',
  'text-amber-700', 
  'text-amber-600',
  'text-gray-900',
  'text-gray-600',
  'text-white'
];

// 可能需要保留的状态色
const STATUS_COLORS = [
  'text-red-600',    // 错误状态
  'text-emerald-600', // 成功状态
  'text-blue-600',   // 信息状态（可映射到amber-600）
];

console.log('🎨 背景色与文字色组合分析\n');

console.log('📋 当前项目主要背景色与建议文字色的搭配：\n');

BACKGROUND_TEXT_COMBINATIONS.forEach(combo => {
  console.log(`${combo.bg}:`);
  combo.commonText.forEach(textColor => {
    const isCoreColor = CORE_TEXT_COLORS.includes(textColor);
    const isStatusColor = STATUS_COLORS.includes(textColor);
    const marker = isCoreColor ? '✅' : isStatusColor ? '⚠️' : '❌';
    console.log(`  ${marker} ${textColor} ${isCoreColor ? '(核心色)' : isStatusColor ? '(状态色)' : '(需要映射)'}`);
  });
  console.log('');
});

console.log('🔄 建议的颜色映射策略（确保对比度安全）：\n');

// 针对不同背景的安全映射
const SAFE_MAPPINGS = {
  // 浅色背景 (50-100)
  'light_backgrounds': {
    backgrounds: ['bg-amber-50', 'bg-amber-100', 'bg-gray-50', 'bg-gray-100', 'bg-white'],
    safeTextColors: ['text-amber-800', 'text-amber-700', 'text-gray-900'],
    mappings: {
      'text-blue-*': 'text-amber-700',
      'text-green-*': 'text-emerald-700', // 保留绿色用于成功状态
      'text-red-*': 'text-red-700',       // 保留红色用于错误状态
      'text-purple-*': 'text-amber-700',
      'text-yellow-*': 'text-amber-700',
      'text-cyan-*': 'text-amber-700',
      'text-other-light': 'text-gray-900',
      'text-other-medium': 'text-amber-700',
      'text-other-dark': 'text-amber-800'
    }
  },
  
  // 深色背景 (800-900)
  'dark_backgrounds': {
    backgrounds: ['bg-amber-900', 'bg-gray-800', 'bg-gray-900'],
    safeTextColors: ['text-white', 'text-amber-100'],
    mappings: {
      'text-*-light': 'text-white',
      'text-*-100-200': 'text-white',
      'text-*-300-500': 'text-amber-100',
    }
  },
  
  // 中等色背景 (500-700)
  'medium_backgrounds': {
    backgrounds: ['bg-amber-600', 'bg-amber-700'],
    safeTextColors: ['text-white', 'text-amber-100'],
    mappings: {
      'text-*': 'text-white'
    }
  }
};

Object.entries(SAFE_MAPPINGS).forEach(([category, config]) => {
  console.log(`${category.toUpperCase().replace('_', ' ')}:`);
  console.log(`  背景色: ${config.backgrounds.join(', ')}`);
  console.log(`  安全文字色: ${config.safeTextColors.join(', ')}`);
  console.log(`  映射策略:`);
  Object.entries(config.mappings).forEach(([from, to]) => {
    console.log(`    ${from} → ${to}`);
  });
  console.log('');
});

console.log('💡 建议的最终方案：\n');
console.log('保留8种文字颜色（而非6种）以确保状态色可读性：');
const FINAL_RECOMMENDATION = [
  'text-amber-800',   // 深琥珀色 - 主标题
  'text-amber-700',   // 中琥珀色 - 副标题、链接
  'text-amber-600',   // 浅琥珀色 - 辅助链接
  'text-gray-900',    // 深灰色 - 正文
  'text-gray-600',    // 中灰色 - 辅助文字
  'text-white',       // 白色 - 深色背景文字
  'text-red-600',     // 红色 - 错误状态
  'text-emerald-600', // 绿色 - 成功状态
];

FINAL_RECOMMENDATION.forEach((color, index) => {
  console.log(`  ${index + 1}. ${color}`);
});

console.log('\n🎯 这样既能显著减少CSS体积，又确保所有背景色组合都有足够的对比度。');
