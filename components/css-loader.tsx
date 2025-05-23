"use client"

import { useEffect } from "react"

/**
 * CSS加载器组件 - 用于延迟加载非关键CSS
 * 
 * 这个组件会在客户端渲染后动态加载非关键CSS文件，
 * 从而避免阻塞首屏渲染，提高页面加载速度。
 */
export function CssLoader() {
  useEffect(() => {
    // 动态创建link元素加载非关键CSS
    const loadNonCriticalCSS = () => {
      // 创建非首屏CSS的link元素
      const linkElement = document.createElement('link')
      linkElement.rel = 'stylesheet'
      linkElement.href = '/non-critical.css'
      document.head.appendChild(linkElement)
    }

    // 使用requestIdleCallback在浏览器空闲时加载CSS
    // 如果浏览器不支持requestIdleCallback，则使用setTimeout
    if ('requestIdleCallback' in window) {
      // @ts-ignore - 某些TypeScript环境可能没有requestIdleCallback类型定义
      window.requestIdleCallback(loadNonCriticalCSS)
    } else {
      // 降级方案：使用setTimeout延迟加载
      setTimeout(loadNonCriticalCSS, 1000)
    }
  }, [])

  // 这个组件不渲染任何内容
  return null
}
