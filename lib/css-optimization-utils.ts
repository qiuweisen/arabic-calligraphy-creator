/**
 * CSS 优化加载工具函数
 * 提供安全的CSS加载和性能优化功能
 */

import { CSS_CATEGORIES, FONT_OPTIMIZATION, PERFORMANCE_METRICS } from './css-optimization-config'

/**
 * 动态加载非关键CSS
 * @param href CSS文件路径
 * @param media 媒体查询条件
 * @returns Promise<void>
 */
export function loadNonCriticalCSS(href: string, media: string = 'all'): Promise<void> {
  return new Promise((resolve, reject) => {
    // 检查是否已经加载
    const existing = document.querySelector(`link[href="${href}"]`)
    if (existing) {
      resolve()
      return
    }

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.media = 'print' // 先设为print，避免阻塞渲染
    
    link.onload = () => {
      link.media = media // 加载完成后切换到目标媒体
      resolve()
    }
    
    link.onerror = () => {
      console.warn(`Failed to load CSS: ${href}`)
      reject(new Error(`CSS load failed: ${href}`))
    }
    
    // 添加到head
    document.head.appendChild(link)
  })
}

/**
 * 预加载CSS文件
 * @param href CSS文件路径
 * @param as 资源类型
 */
export function preloadCSS(href: string, as: string = 'style'): void {
  // 检查是否已经预加载
  const existing = document.querySelector(`link[rel="preload"][href="${href}"]`)
  if (existing) return

  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  link.crossOrigin = 'anonymous'
  
  document.head.appendChild(link)
}

/**
 * 智能字体加载
 * 优化阿拉伯字体的加载策略
 */
export class FontOptimizer {
  private loadedFonts = new Set<string>()
  private fontPromises = new Map<string, Promise<FontFace>>()

  /**
   * 预加载关键字体
   */
  async preloadCriticalFonts(): Promise<void> {
    const promises = FONT_OPTIMIZATION.critical.map(fontFamily => 
      this.loadFont(fontFamily, true)
    )
    
    await Promise.allSettled(promises)
  }

  /**
   * 延迟加载字体
   * @param fontFamily 字体族名称
   * @param isCritical 是否为关键字体
   */
  async loadFont(fontFamily: string, isCritical: boolean = false): Promise<FontFace> {
    // 检查是否已经在加载
    if (this.fontPromises.has(fontFamily)) {
      return this.fontPromises.get(fontFamily)!
    }

    // 检查是否已经加载
    if (this.loadedFonts.has(fontFamily)) {
      return Promise.resolve(new FontFace(fontFamily, ''))
    }

    const promise = this.createFontLoadPromise(fontFamily, isCritical)
    this.fontPromises.set(fontFamily, promise)
    
    return promise
  }

  private async createFontLoadPromise(fontFamily: string, isCritical: boolean): Promise<FontFace> {
    try {
      // 使用浏览器的字体加载API
      const font = new FontFace(fontFamily, this.getFontSource(fontFamily))
      font.display = FONT_OPTIMIZATION.display
      
      await font.load()
      document.fonts.add(font)
      
      this.loadedFonts.add(fontFamily)
      
      // 记录性能指标
      this.trackFontLoad(fontFamily, isCritical, true)
      
      return font
    } catch (error) {
      console.warn(`Font loading failed: ${fontFamily}`, error)
      
      // 应用降级字体
      this.applyFallbackFont(fontFamily)
      
      // 记录失败指标
      this.trackFontLoad(fontFamily, isCritical, false)
      
      throw error
    }
  }

  private getFontSource(fontFamily: string): string {
    // 根据字体族返回对应的源文件
    const fontSources: Record<string, string> = {
      'Amiri': 'url(/fonts/amiri.woff2) format("woff2")',
      'Scheherazade New': 'url(/fonts/scheherazade.woff2) format("woff2")',
      'Cairo': 'url(/fonts/cairo.woff2) format("woff2")',
      'Kufi': 'url(/fonts/kufi.woff2) format("woff2")'
    }
    
    return fontSources[fontFamily] || ''
  }

  private applyFallbackFont(fontFamily: string): void {
    const fallback = FONT_OPTIMIZATION.fallbacks[fontFamily]
    if (fallback) {
      // 创建临时样式应用降级字体
      const style = document.createElement('style')
      style.textContent = `
        .font-${fontFamily.toLowerCase().replace(/\s+/g, '-')}-fallback {
          font-family: ${fallback} !important;
        }
      `
      document.head.appendChild(style)
    }
  }

  private trackFontLoad(fontFamily: string, isCritical: boolean, success: boolean): void {
    // 使用现有的分析追踪
    if (typeof window.trackCalligraphyEvent === 'function') {
      window.trackCalligraphyEvent('font_load', {
        font_family: fontFamily,
        is_critical: isCritical,
        success: success,
        timestamp: Date.now()
      })
    }
  }
}

/**
 * CSS性能监控器
 */
export class CSSPerformanceMonitor {
  private metrics = {
    cssLoadTime: 0,
    totalCSSSize: 0,
    criticalCSSSize: 0,
    renderStartTime: performance.now()
  }

  /**
   * 开始监控CSS加载性能
   */
  startMonitoring(): void {
    // 监控LCP
    this.observeLCP()
    
    // 监控CLS
    this.observeCLS()
    
    // 监控CSS加载时间
    this.monitorCSSLoading()
  }

  private observeLCP(): void {
    if ('web-vitals' in window) return // 如果已有web-vitals库，跳过

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      
      const lcp = lastEntry.startTime
      
      // 检查是否达到目标
      if (lcp > PERFORMANCE_METRICS.loading.lcp) {
        console.warn(`LCP (${lcp}ms) exceeds target (${PERFORMANCE_METRICS.loading.lcp}ms)`)
        this.reportPerformanceIssue('lcp', lcp)
      }
      
      this.trackMetric('lcp', lcp)
    })
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
  }

  private observeCLS(): void {
    let cumulativeLayoutShift = 0
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          cumulativeLayoutShift += (entry as any).value
        }
      }
      
      if (cumulativeLayoutShift > PERFORMANCE_METRICS.loading.cls) {
        console.warn(`CLS (${cumulativeLayoutShift}) exceeds target (${PERFORMANCE_METRICS.loading.cls})`)
        this.reportPerformanceIssue('cls', cumulativeLayoutShift)
      }
      
      this.trackMetric('cls', cumulativeLayoutShift)
    })
    
    observer.observe({ entryTypes: ['layout-shift'] })
  }

  private monitorCSSLoading(): void {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
    let loadedCount = 0
    const totalCount = stylesheets.length
    const startTime = performance.now()

    stylesheets.forEach((link) => {
      if ((link as HTMLLinkElement).sheet) {
        loadedCount++
      } else {
        link.addEventListener('load', () => {
          loadedCount++
          if (loadedCount === totalCount) {
            const loadTime = performance.now() - startTime
            this.metrics.cssLoadTime = loadTime
            this.trackMetric('css_load_time', loadTime)
          }
        })
      }
    })
  }

  private trackMetric(name: string, value: number): void {
    if (typeof window.trackCalligraphyEvent === 'function') {
      window.trackCalligraphyEvent('performance_metric', {
        metric_name: name,
        value: value,
        timestamp: Date.now()
      })
    }
  }

  private reportPerformanceIssue(type: string, value: number): void {
    if (typeof window.trackCalligraphyEvent === 'function') {
      window.trackCalligraphyEvent('performance_issue', {
        issue_type: type,
        value: value,
        user_agent: navigator.userAgent,
        timestamp: Date.now()
      })
    }
  }
}

/**
 * 页面级CSS优化器
 * 根据页面类型智能加载所需样式
 */
export class PageCSSOptimizer {
  private fontOptimizer = new FontOptimizer()
  private performanceMonitor = new CSSPerformanceMonitor()

  constructor() {
    this.performanceMonitor.startMonitoring()
  }

  /**
   * 根据页面类型优化CSS加载
   * @param pageType 页面类型
   */
  async optimizeForPage(pageType: string): Promise<void> {
    try {
      // 预加载关键字体
      await this.fontOptimizer.preloadCriticalFonts()
      
      // 根据页面类型加载特定样式
      await this.loadPageSpecificCSS(pageType)
      
      // 预加载可能需要的资源
      this.preloadNextPageResources(pageType)
      
    } catch (error) {
      console.error('CSS optimization failed:', error)
      // 降级到原有加载方式
      this.fallbackToOriginalLoading()
    }
  }

  private async loadPageSpecificCSS(pageType: string): Promise<void> {
    const pageStyleMap: Record<string, string[]> = {
      'blog': ['/styles/blog-enhanced.css'],
      'font-detail': ['/styles/font-showcase.css'],
      'faq': ['/styles/faq-interactive.css'],
      'contact': ['/styles/contact-form.css']
    }

    const styles = pageStyleMap[pageType] || []
    
    await Promise.allSettled(
      styles.map(href => loadNonCriticalCSS(href))
    )
  }

  private preloadNextPageResources(currentPage: string): void {
    // 根据用户行为模式预加载
    const preloadMap: Record<string, string[]> = {
      'home': ['/fonts', '/resources'], // 首页用户最可能访问字体页面
      'fonts': ['/blog', '/tutorials'], // 字体页面用户可能看教程
      'blog': ['/fonts', '/use-cases']   // 博客读者可能试用功能
    }

    const nextPages = preloadMap[currentPage] || []
    nextPages.forEach(page => {
      // 预加载页面样式
      preloadCSS(`/styles/${page.substring(1)}.css`)
    })
  }

  private fallbackToOriginalLoading(): void {
    // 如果优化失败，确保所有必要的CSS都被加载
    CSS_CATEGORIES.nonCritical.forEach(href => {
      loadNonCriticalCSS(href).catch(console.error)
    })
  }
}

// 全局实例
export const pageCSSOptimizer = new PageCSSOptimizer()

// 导出工具函数
export {
  loadNonCriticalCSS,
  preloadCSS,
  FontOptimizer,
  CSSPerformanceMonitor
}
