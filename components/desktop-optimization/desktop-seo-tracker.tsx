"use client"

import { useEffect } from 'react'
import { useMobile } from '@/hooks/use-mobile'

interface DesktopSEOTrackerProps {
  locale: string
}

export function DesktopSEOTracker({ locale }: DesktopSEOTrackerProps) {
  const isMobile = useMobile()

  useEffect(() => {
    // 只在桌面端英文用户中执行
    const isDesktop = !isMobile
    const isEnglish = locale === 'en'

    if (isDesktop && isEnglish && typeof window !== 'undefined') {
      // 检测是否应用了桌面端优化
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
      const isOptimized = metaDescription.includes('Professional Arabic Calligraphy Generator')

      if (isOptimized) {
        // 发送桌面端SEO优化应用事件
        const trackEvent = (window as any).trackCalligraphyEvent
        if (typeof trackEvent === 'function') {
          trackEvent('Desktop_SEO_Optimization_Applied', {
            original_description: "🎨 FREE Arabic Calligraphy Generator | Create stunning Islamic art online instantly! 13+ fonts, instant download PNG/SVG. No signup required ✨",
            optimized_description: metaDescription,
            viewport_width: window.innerWidth,
            viewport_height: window.innerHeight,
            user_agent: navigator.userAgent,
            locale: locale,
            optimization_timestamp: new Date().toISOString()
          })

          // 发送桌面端用户会话开始事件，用于后续分析
          trackEvent('Desktop_User_Session_Start', {
            device_type: 'desktop',
            locale: locale,
            viewport_width: window.innerWidth,
            viewport_height: window.innerHeight,
            user_agent: navigator.userAgent,
            session_timestamp: new Date().toISOString()
          })
        }
      }
    }
  }, [isMobile, locale])

  // 这个组件不渲染任何UI
  return null
}
