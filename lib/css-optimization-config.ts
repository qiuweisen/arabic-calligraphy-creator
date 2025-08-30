/**
 * CSS 优化加载策略
 * 实现关键CSS内联和非关键CSS延迟加载
 */

// CSS 文件分类
export const CSS_CATEGORIES = {
  // 关键CSS：首屏渲染必需
  critical: [
    '/app/globals.css',           // 主要全局样式和设计系统
    '/app/rtl-styles.css',        // RTL语言支持
    '/public/arabic-fonts-cdn.css' // 阿拉伯字体（核心功能）
  ],
  
  // 非关键CSS：可延迟加载
  nonCritical: [
    '/app/non-critical-unified.css', // 统一的页面样式
    '/public/non-critical.css'       // 原有的非关键样式（待迁移）
  ],
  
  // 条件CSS：按需加载
  conditional: {
    blog: '/styles/blog.css',
    fonts: '/styles/font-details.css',
    contact: '/styles/contact.css'
  }
}

// 预加载策略
export const PRELOAD_STRATEGY = {
  // 立即预加载（用户可能马上访问的页面）
  immediate: [
    '/fonts',      // 字体页面（从首页点击率高）
    '/resources'   // 资源页面
  ],
  
  // 延迟预加载（用户可能稍后访问的页面）
  deferred: [
    '/blog',
    '/faq', 
    '/contact',
    '/about'
  ],
  
  // 按需加载（访问时才加载）
  onDemand: [
    '/guides',
    '/tutorials',
    '/use-cases'
  ]
}

// 字体优化策略
export const FONT_OPTIMIZATION = {
  // 关键字体（首屏必需）
  critical: [
    'Amiri',
    'Inter'
  ],
  
  // 延迟字体（按需加载）
  deferred: [
    'Scheherazade New',
    'Noto Naskh Arabic',
    'Cairo',
    'Kufi'
  ],
  
  // 字体显示策略
  display: 'swap', // 使用字体交换策略
  
  // 降级字体
  fallbacks: {
    'Amiri': '"Times New Roman", "DejaVu Serif", serif',
    'Cairo': '"Arial", "Helvetica Neue", sans-serif',
    'Kufi': '"Arial Black", "Helvetica", sans-serif'
  }
}

// 性能监控指标
export const PERFORMANCE_METRICS = {
  // CSS 相关指标
  css: {
    // 目标：关键CSS < 50KB
    criticalCSSSize: 50 * 1024,
    
    // 目标：总CSS减少30%
    totalReduction: 0.3,
    
    // 目标：非关键CSS延迟 > 1s
    nonCriticalDelay: 1000
  },
  
  // 加载性能指标
  loading: {
    // 目标：LCP < 2.5s
    lcp: 2500,
    
    // 目标：FCP < 1.8s  
    fcp: 1800,
    
    // 目标：CLS < 0.1
    cls: 0.1
  }
}

// 安全回滚配置
export const ROLLBACK_CONFIG = {
  // 保留原有CSS文件作为备份
  backups: {
    '/app/globals.css': '/app/globals.css.backup',
    '/public/non-critical.css': '/public/non-critical.css.backup'
  },
  
  // 错误检测阈值
  errorThresholds: {
    // CSS加载失败率 > 5% 时回滚
    cssLoadFailure: 0.05,
    
    // 页面渲染错误 > 1% 时回滚
    renderErrors: 0.01,
    
    // 用户报告问题 > 3个 时检查
    userReports: 3
  },
  
  // 自动检测机制
  autoDetection: {
    // 监控关键选择器是否存在
    criticalSelectors: [
      '.arabic-preview',
      '.font-arabic',
      '.navbar',
      '.hero-section'
    ],
    
    // 监控页面基本功能
    functionalChecks: [
      'arabic-text-generation',
      'font-selection',
      'download-functionality'
    ]
  }
}

export default {
  CSS_CATEGORIES,
  PRELOAD_STRATEGY,
  FONT_OPTIMIZATION,
  PERFORMANCE_METRICS,
  ROLLBACK_CONFIG
}
