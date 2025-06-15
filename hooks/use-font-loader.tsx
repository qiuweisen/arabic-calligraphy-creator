"use client"

import { useState, useCallback, useRef } from "react"

// 字体配置映射
const FONT_CONFIG = {
  "'Amiri', serif": { family: "Amiri", weights: ["400", "700"] },
  "'Scheherazade New', serif": { family: "Scheherazade New", weights: ["400", "700"] },
  "'Noto Naskh Arabic', serif": { family: "Noto Naskh Arabic", weights: ["400", "700"] },
  "'Aref Ruqaa', serif": { family: "Aref Ruqaa", weights: ["400"] },
  "'Reem Kufi', sans-serif": { family: "Reem Kufi", weights: ["400"] },
  "'Lateef', cursive": { family: "Lateef", weights: ["400", "700"] },
  "'Mirza', cursive": { family: "Mirza", weights: ["400"] },
  "'Cairo', sans-serif": { family: "Cairo", weights: ["400"] },
  "'Jomhuria', display": { family: "Jomhuria", weights: ["400"] },
  "'Rakkas', display": { family: "Rakkas", weights: ["400"] },
  "'Harmattan', sans-serif": { family: "Harmattan", weights: ["400"] },
  "'Mada', sans-serif": { family: "Mada", weights: ["400"] },
  "'Tajawal', sans-serif": { family: "Tajawal", weights: ["400"] },
}

// 已加载的字体缓存
const loadedFonts = new Set<string>()
// 正在加载的字体
const loadingFonts = new Set<string>()

export function useFontLoader() {
  const [, forceUpdate] = useState({})
  const loadingPromises = useRef<Map<string, Promise<boolean>>>(new Map())

  const loadFont = useCallback(async (fontValue: string) => {
    // 如果字体已经加载过，直接返回
    if (loadedFonts.has(fontValue)) {
      return true
    }

    // 如果正在加载，返回现有的Promise
    if (loadingPromises.current.has(fontValue)) {
      return loadingPromises.current.get(fontValue)!
    }

    const config = FONT_CONFIG[fontValue as keyof typeof FONT_CONFIG]
    if (!config) {
      console.warn(`Font configuration not found for: ${fontValue}`)
      return false
    }

    // 创建加载Promise
    const loadPromise = (async () => {
      try {
        // 标记为正在加载
        loadingFonts.add(fontValue)
        forceUpdate({})

        // 构建字体URL，正确处理空格和特殊字符
        const fontFamily = encodeURIComponent(config.family)
        const weights = config.weights.join(';')
        const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${weights}&display=swap`

        // 检查是否已经有相同的link标签
        const existingLink = document.querySelector(`link[href="${fontUrl}"]`)
        if (existingLink) {
          loadedFonts.add(fontValue)
          return true
        }

        // 创建link元素加载字体
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = fontUrl
        link.crossOrigin = 'anonymous'

        // 等待字体加载完成，增加超时机制
        await new Promise<void>((resolve, reject) => {
          const timeout = setTimeout(() => {
            reject(new Error(`Font loading timeout: ${config.family}`))
          }, 10000) // 10秒超时

          link.onload = () => {
            clearTimeout(timeout)
            resolve()
          }
          
          link.onerror = (event) => {
            clearTimeout(timeout)
            console.warn(`Font load error for ${config.family}, but continuing...`, event)
            // 不要reject，让字体加载继续
            resolve()
          }
          
          document.head.appendChild(link)
        })

        // 简化字体就绪检查
        if (typeof document !== 'undefined' && 'fonts' in document) {
          try {
            // 给字体一些时间来加载
            await new Promise(resolve => setTimeout(resolve, 500))
          } catch (error) {
            console.warn('Font ready check failed:', error)
          }
        }

        // 标记为已加载
        loadedFonts.add(fontValue)
        return true

      } catch (error) {
        console.warn(`Font loading issue for ${config.family}:`, error)
        // 即使加载失败，也标记为"已处理"，避免重复尝试
        loadedFonts.add(fontValue)
        return false
      } finally {
        // 清理状态
        loadingFonts.delete(fontValue)
        loadingPromises.current.delete(fontValue)
        forceUpdate({})
      }
    })()

    // 缓存Promise
    loadingPromises.current.set(fontValue, loadPromise)
    return loadPromise
  }, [])

  const isFontLoaded = useCallback((fontValue: string) => {
    return loadedFonts.has(fontValue)
  }, [])

  const isFontLoading = useCallback((fontValue: string) => {
    return loadingFonts.has(fontValue)
  }, [])

  return {
    loadFont,
    isFontLoaded,
    isFontLoading,
  }
} 