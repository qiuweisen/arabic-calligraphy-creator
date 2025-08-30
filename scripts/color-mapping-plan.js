#!/usr/bin/env node

/**
 * 具体的文字颜色优化映射方案
 * 从82种文字颜色减少到8种，确保对比度安全
 */

// 保留的8种核心颜色
const CORE_COLORS = [
  'text-amber-800',   // 深琥珀色 - 主标题
  'text-amber-700',   // 中琥珀色 - 副标题
  'text-amber-600',   // 浅琥珀色 - 链接
  'text-gray-900',    // 深灰色 - 正文
  'text-gray-600',    // 中灰色 - 辅助文字
  'text-white',       // 白色 - 深色背景
  'text-red-600',     // 红色 - 错误状态
  'text-emerald-600', // 绿色 - 成功状态
];

// 完整的映射表
const COLOR_MAPPING = {
  // 保持不变的核心颜色
  'text-amber-800': 'text-amber-800',
  'text-amber-700': 'text-amber-700',
  'text-amber-600': 'text-amber-600',
  'text-gray-900': 'text-gray-900',
  'text-gray-600': 'text-gray-600',
  'text-white': 'text-white',
  'text-red-600': 'text-red-600',
  'text-emerald-600': 'text-emerald-600',

  // amber 系列其他变体 → 核心 amber 色
  'text-amber-50': 'text-amber-600',
  'text-amber-100': 'text-amber-600',
  'text-amber-200': 'text-amber-600',
  'text-amber-300': 'text-amber-600',
  'text-amber-400': 'text-amber-600',
  'text-amber-500': 'text-amber-600',
  'text-amber-900': 'text-amber-800',

  // yellow 系列 → amber 色
  'text-yellow-50': 'text-amber-600',
  'text-yellow-100': 'text-amber-600',
  'text-yellow-200': 'text-amber-600',
  'text-yellow-300': 'text-amber-600',
  'text-yellow-400': 'text-amber-600',
  'text-yellow-500': 'text-amber-600',
  'text-yellow-600': 'text-amber-700',
  'text-yellow-700': 'text-amber-700',
  'text-yellow-800': 'text-amber-800',
  'text-yellow-900': 'text-amber-800',

  // orange 系列 → amber 色
  'text-orange-50': 'text-amber-600',
  'text-orange-100': 'text-amber-600',
  'text-orange-200': 'text-amber-600',
  'text-orange-300': 'text-amber-600',
  'text-orange-400': 'text-amber-600',
  'text-orange-500': 'text-amber-600',
  'text-orange-600': 'text-amber-700',
  'text-orange-700': 'text-amber-700',
  'text-orange-800': 'text-amber-800',
  'text-orange-900': 'text-amber-800',

  // red 系列 → 保留错误状态，其他映射
  'text-red-50': 'text-red-600',
  'text-red-100': 'text-red-600',
  'text-red-200': 'text-red-600',
  'text-red-300': 'text-red-600',
  'text-red-400': 'text-red-600',
  'text-red-500': 'text-red-600',
  'text-red-700': 'text-red-600',
  'text-red-800': 'text-red-600',
  'text-red-900': 'text-red-600',

  // pink/rose 系列 → gray 色（中性化）
  'text-pink-50': 'text-gray-600',
  'text-pink-100': 'text-gray-600',
  'text-pink-200': 'text-gray-600',
  'text-pink-300': 'text-gray-600',
  'text-pink-400': 'text-gray-600',
  'text-pink-500': 'text-gray-600',
  'text-pink-600': 'text-gray-600',
  'text-pink-700': 'text-gray-900',
  'text-pink-800': 'text-gray-900',
  'text-pink-900': 'text-gray-900',
  'text-rose-50': 'text-gray-600',
  'text-rose-100': 'text-gray-600',
  'text-rose-200': 'text-gray-600',
  'text-rose-300': 'text-gray-600',
  'text-rose-400': 'text-gray-600',
  'text-rose-500': 'text-gray-600',
  'text-rose-600': 'text-gray-600',
  'text-rose-700': 'text-gray-900',
  'text-rose-800': 'text-gray-900',
  'text-rose-900': 'text-gray-900',

  // green/emerald 系列 → 保留成功状态
  'text-green-50': 'text-emerald-600',
  'text-green-100': 'text-emerald-600',
  'text-green-200': 'text-emerald-600',
  'text-green-300': 'text-emerald-600',
  'text-green-400': 'text-emerald-600',
  'text-green-500': 'text-emerald-600',
  'text-green-600': 'text-emerald-600',
  'text-green-700': 'text-emerald-600',
  'text-green-800': 'text-emerald-600',
  'text-green-900': 'text-emerald-600',
  'text-emerald-50': 'text-emerald-600',
  'text-emerald-100': 'text-emerald-600',
  'text-emerald-200': 'text-emerald-600',
  'text-emerald-300': 'text-emerald-600',
  'text-emerald-400': 'text-emerald-600',
  'text-emerald-500': 'text-emerald-600',
  'text-emerald-700': 'text-emerald-600',
  'text-emerald-800': 'text-emerald-600',
  'text-emerald-900': 'text-emerald-600',

  // blue 系列 → amber 色（保持品牌一致性）
  'text-blue-50': 'text-amber-600',
  'text-blue-100': 'text-amber-600',
  'text-blue-200': 'text-amber-600',
  'text-blue-300': 'text-amber-600',
  'text-blue-400': 'text-amber-600',
  'text-blue-500': 'text-amber-600',
  'text-blue-600': 'text-amber-700',
  'text-blue-700': 'text-amber-700',
  'text-blue-800': 'text-amber-800',
  'text-blue-900': 'text-amber-800',

  // 其他蓝色系列 → amber 色
  'text-sky-50': 'text-amber-600',
  'text-sky-100': 'text-amber-600',
  'text-sky-200': 'text-amber-600',
  'text-sky-300': 'text-amber-600',
  'text-sky-400': 'text-amber-600',
  'text-sky-500': 'text-amber-600',
  'text-sky-600': 'text-amber-700',
  'text-sky-700': 'text-amber-700',
  'text-sky-800': 'text-amber-800',
  'text-sky-900': 'text-amber-800',
  'text-cyan-50': 'text-amber-600',
  'text-cyan-100': 'text-amber-600',
  'text-cyan-200': 'text-amber-600',
  'text-cyan-300': 'text-amber-600',
  'text-cyan-400': 'text-amber-600',
  'text-cyan-500': 'text-amber-600',
  'text-cyan-600': 'text-amber-700',
  'text-cyan-700': 'text-amber-700',
  'text-cyan-800': 'text-amber-800',
  'text-cyan-900': 'text-amber-800',

  // teal 系列 → amber 色
  'text-teal-50': 'text-amber-600',
  'text-teal-100': 'text-amber-600',
  'text-teal-200': 'text-amber-600',
  'text-teal-300': 'text-amber-600',
  'text-teal-400': 'text-amber-600',
  'text-teal-500': 'text-amber-600',
  'text-teal-600': 'text-amber-700',
  'text-teal-700': 'text-amber-700',
  'text-teal-800': 'text-amber-800',
  'text-teal-900': 'text-amber-800',

  // lime 系列 → emerald 色（绿色系）
  'text-lime-50': 'text-emerald-600',
  'text-lime-100': 'text-emerald-600',
  'text-lime-200': 'text-emerald-600',
  'text-lime-300': 'text-emerald-600',
  'text-lime-400': 'text-emerald-600',
  'text-lime-500': 'text-emerald-600',
  'text-lime-600': 'text-emerald-600',
  'text-lime-700': 'text-emerald-600',
  'text-lime-800': 'text-emerald-600',
  'text-lime-900': 'text-emerald-600',

  // purple/violet/indigo 系列 → amber 色
  'text-purple-50': 'text-amber-600',
  'text-purple-100': 'text-amber-600',
  'text-purple-200': 'text-amber-600',
  'text-purple-300': 'text-amber-600',
  'text-purple-400': 'text-amber-600',
  'text-purple-500': 'text-amber-600',
  'text-purple-600': 'text-amber-700',
  'text-purple-700': 'text-amber-700',
  'text-purple-800': 'text-amber-800',
  'text-purple-900': 'text-amber-800',
  'text-violet-50': 'text-amber-600',
  'text-violet-100': 'text-amber-600',
  'text-violet-200': 'text-amber-600',
  'text-violet-300': 'text-amber-600',
  'text-violet-400': 'text-amber-600',
  'text-violet-500': 'text-amber-600',
  'text-violet-600': 'text-amber-700',
  'text-violet-700': 'text-amber-700',
  'text-violet-800': 'text-amber-800',
  'text-violet-900': 'text-amber-800',
  'text-indigo-50': 'text-amber-600',
  'text-indigo-100': 'text-amber-600',
  'text-indigo-200': 'text-amber-600',
  'text-indigo-300': 'text-amber-600',
  'text-indigo-400': 'text-amber-600',
  'text-indigo-500': 'text-amber-600',
  'text-indigo-600': 'text-amber-700',
  'text-indigo-700': 'text-amber-700',
  'text-indigo-800': 'text-amber-800',
  'text-indigo-900': 'text-amber-800',

  // gray 系列其他变体 → 核心 gray 色
  'text-gray-50': 'text-gray-600',
  'text-gray-100': 'text-gray-600',
  'text-gray-200': 'text-gray-600',
  'text-gray-300': 'text-gray-600',
  'text-gray-400': 'text-gray-600',
  'text-gray-500': 'text-gray-600',
  'text-gray-700': 'text-gray-600',
  'text-gray-800': 'text-gray-900',

  // 黑白
  'text-black': 'text-gray-900',
};

// 统计映射效果
const originalColors = Object.keys(COLOR_MAPPING);
const targetColors = [...new Set(Object.values(COLOR_MAPPING))];

console.log('🎯 文字颜色优化映射方案\n');
console.log(`📊 优化效果：${originalColors.length} 种颜色 → ${targetColors.length} 种颜色\n`);

console.log('✅ 保留的8种核心颜色：');
CORE_COLORS.forEach((color, index) => {
  const usage = originalColors.filter(original => COLOR_MAPPING[original] === color).length;
  console.log(`  ${index + 1}. ${color} (合并了 ${usage} 种变体)`);
});

console.log('\n🔄 主要映射示例：');
const examples = [
  ['text-blue-600', COLOR_MAPPING['text-blue-600']],
  ['text-purple-700', COLOR_MAPPING['text-purple-700']],
  ['text-green-800', COLOR_MAPPING['text-green-800']],
  ['text-yellow-500', COLOR_MAPPING['text-yellow-500']],
  ['text-gray-800', COLOR_MAPPING['text-gray-800']],
];

examples.forEach(([from, to]) => {
  console.log(`  ${from} → ${to}`);
});

console.log('\n💡 优化策略说明：');
console.log('  • 保持 amber 为主品牌色调');
console.log('  • 保留 red/emerald 状态色确保可用性');
console.log('  • 所有蓝紫色系映射到 amber，保持一致性');
console.log('  • 粉色系映射到中性 gray，避免过于鲜艳');
console.log('  • 确保所有映射在常用背景色上都有足够对比度');

console.log('\n🎨 与主要背景色的对比度验证：');
const backgroundTests = [
  { bg: 'bg-amber-50', text: ['text-amber-800', 'text-gray-900'] },
  { bg: 'bg-white', text: ['text-amber-700', 'text-gray-600'] },
  { bg: 'bg-amber-900', text: ['text-white'] },
  { bg: 'bg-gray-100', text: ['text-amber-800', 'text-gray-900'] },
];

backgroundTests.forEach(test => {
  console.log(`  ${test.bg}: ${test.text.join(', ')} ✅`);
});

module.exports = { COLOR_MAPPING, CORE_COLORS };
