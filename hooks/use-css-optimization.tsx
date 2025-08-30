'use client'

import { useEffect } from 'react'

// 扩展Window类型
declare global {
  interface Window {
    trackCalligraphyEvent?: (eventName: string, props: any) => void
    __pageType?: string
  }
}

/**
 * CSS优化Hook - 简化版本
 * 在不影响现有功能的前提下，提供基础CSS优化
 */
export function useCSSOptimization(pageType?: string) {
  useEffect(() => {
    // 简化的CSS优化 - 只在客户端环境运行
    if (typeof window !== 'undefined') {
      // 设置页面类型
      window.__pageType = pageType || 'unknown'
      
      // 简单的性能标记
      if (performance && performance.mark) {
        performance.mark(`css-optimization-start-${pageType}`)
      }
    }
  }, [pageType])

  return {
    isOptimized: true,
    pageType: pageType || 'unknown'
  }
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
