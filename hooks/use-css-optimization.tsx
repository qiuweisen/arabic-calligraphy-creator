'use client'

import { useEffect } from 'react'
import { pageCSSOptimizer, loadNonCriticalCSS } from '@/lib/css-optimization-utils'

// 扩展Window类型
declare global {
  interface Window {
    trackCalligraphyEvent?: (eventName: string, props: any) => void
    __pageType?: string
  }
}

/**
 * CSS优化Hook
 * 在不影响现有功能的前提下，优化CSS加载性能
 */
export function useCSSOptimization(pageType?: string) {
  useEffect(() => {
    // 只在生产环境启用优化
    if (process.env.NODE_ENV !== 'production') {
      return
    }

    // 延迟执行，确保关键资源先加载
    const timeoutId = setTimeout(async () => {
      try {
        // 如果指定了页面类型，进行页面级优化
        if (pageType) {
          await pageCSSOptimizer.optimizeForPage(pageType)
        }

        // 延迟加载非关键CSS（如果还没有加载）
        await loadNonCriticalCSS('/app/non-critical-unified.css')
        
        // 记录优化完成
        if (typeof window.trackCalligraphyEvent === 'function') {
          window.trackCalligraphyEvent('css_optimization_complete', {
            page_type: pageType || 'unknown',
            timestamp: Date.now()
          })
        }
      } catch (error) {
        console.warn('CSS optimization failed, but site will continue to work normally:', error)
        
        // 记录失败但不影响功能
        if (typeof window.trackCalligraphyEvent === 'function') {
          window.trackCalligraphyEvent('css_optimization_failed', {
            page_type: pageType || 'unknown',
            error: error instanceof Error ? error.message : 'unknown',
            timestamp: Date.now()
          })
        }
      }
    }, 1000) // 1秒后执行，确保首屏内容已加载

    return () => clearTimeout(timeoutId)
  }, [pageType])
}

/**
 * 页面特定的CSS优化Hook
 */
export function usePageSpecificCSS(pageType: string) {
  useCSSOptimization(pageType)
  
  useEffect(() => {
    // 预设页面类别，用于后续分析
    if (typeof window !== 'undefined') {
      window.__pageType = pageType
    }
  }, [pageType])
}
