"use client"

import type { CSSProperties } from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type ScriptOrder = "before" | "after"

type AtOptionsConfig = {
  key: string
  format: string
  height: number
  width: number
  params?: Record<string, unknown>
}

type PlacementKey = "mediumRectangle" | "leaderboard" | "mobileBanner" | "stickyContainer"

type PlacementConfig = {
  width: number
  height: number
  title: string
  scriptSrc: string
  atOptions?: AtOptionsConfig
  containerId?: string
  scriptOrder?: ScriptOrder
}

const ADSTERRA_PLACEMENTS: Record<PlacementKey, PlacementConfig> = {
  mediumRectangle: {
    width: 300,
    height: 250,
    title: "Adsterra 300x250",
    scriptSrc: "//www.highperformanceformat.com/aeeee826f7a4a8dfe9a62024343a4d4d/invoke.js",
    atOptions: {
      key: "aeeee826f7a4a8dfe9a62024343a4d4d",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    },
  },
  leaderboard: {
    width: 728,
    height: 90,
    title: "Adsterra 728x90",
    scriptSrc: "//www.highperformanceformat.com/714a16aa986587748be15fa275a3d2e1/invoke.js",
    atOptions: {
      key: "714a16aa986587748be15fa275a3d2e1",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    },
  },
  mobileBanner: {
    width: 320,
    height: 50, // 恢复为文档中的正确尺寸
    title: "Adsterra 320x50",
    scriptSrc: "//www.highperformanceformat.com/562c9f0f4e987ffd83c60aae1c7f79f1/invoke.js",
    atOptions: {
      key: "562c9f0f4e987ffd83c60aae1c7f79f1",
      format: "iframe",
      height: 50,
      width: 320,
      params: {},
    },
  },
  stickyContainer: {
    width: 320,
    height: 250,
    title: "Adsterra Container",
    scriptSrc: "//pl27914488.effectivegatecpm.com/940c0b50ddec7eac4393a3bf8b8b50a0/invoke.js",
    containerId: "container-940c0b50ddec7eac4393a3bf8b8b50a0",
    scriptOrder: "before",
  },
}

export type AdsterraPlacement = PlacementKey

type AdsterraSlotProps = {
  placement: AdsterraPlacement
  className?: string
  style?: CSSProperties
}

const normalizeSrc = (src: string) => {
  if (src.startsWith("//")) {
    return `https:${src}`
  }
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src
  }
  return `https://${src.replace(/^\/+/, "")}`
}

export function AdsterraSlot({ placement, className, style }: AdsterraSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const adMountRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const config = ADSTERRA_PLACEMENTS[placement]

  // 检查Adsterra是否启用 - 生产环境默认启用，开发环境默认禁用
  const isProduction = process.env.NODE_ENV === 'production'
  const adsterraEnvSetting = process.env.NEXT_PUBLIC_ADSTERRA_ENABLED
  
  let isAdsterraEnabled = false
  if (adsterraEnvSetting !== undefined) {
    // 如果环境变量明确设置了，则使用环境变量的值
    isAdsterraEnabled = adsterraEnvSetting !== 'false'
  } else {
    // 如果环境变量未设置，则根据环境决定：生产环境启用，开发环境不启用
    isAdsterraEnabled = isProduction
  }

  // 如果Adsterra未启用，不渲染任何内容
  if (!isAdsterraEnabled) {
    return null
  }

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '100px', // Load when 100px away from viewport
        threshold: 0.1
      }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const adMount = adMountRef.current
    if (!adMount || !config || !isInView) return

    // Reset states
    setIsLoaded(false)
    setHasError(false)
    
    // 只清空我们控制的挂载点，不触碰 React 的容器
    adMount.replaceChildren()

    try {
      const iframe = document.createElement("iframe")
      iframe.setAttribute("title", config.title)
      iframe.setAttribute("scrolling", "no")
      iframe.setAttribute("frameBorder", "0")
      iframe.style.border = "0"
      iframe.style.width = "100%"
      iframe.style.height = `${config.height}px`
      iframe.style.maxWidth = "100%"
      iframe.style.display = "block"
      iframe.width = `${config.width}`
      iframe.height = `${config.height}`

      // Error handling for iframe
      iframe.onerror = () => {
        setHasError(true)
        setIsLoaded(true)
        
        // Track ad error event
        if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
          (window as any).trackCalligraphyEvent('ad_error', {
            ad_provider: 'adsterra',
            placement: placement,
            error_type: 'iframe_load_error'
          })
        }
      }

      iframe.onload = () => {
        setIsLoaded(true)
        
        // Track ad load event
        if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
          (window as any).trackCalligraphyEvent('ad_loaded', {
            ad_provider: 'adsterra',
            placement: placement,
            ad_size: `${config.width}x${config.height}`
          })
        }
      }

      // 只向我们的挂载点添加 iframe
      adMount.appendChild(iframe)

      const doc = iframe.contentDocument || iframe.contentWindow?.document
      if (!doc) {
        setHasError(true)
        return
      }

      const scriptSrc = normalizeSrc(config.scriptSrc)
      const bodyScripts: string[] = []

      if (config.atOptions) {
        const options = {
          ...config.atOptions,
          params: config.atOptions.params ?? {},
        }

        bodyScripts.push(
          `<script type="text/javascript">
            window.atOptions = ${JSON.stringify(options)};
            var atOptions = window.atOptions;
          </script>`
        )
        bodyScripts.push(
          `<script type="text/javascript" src="${scriptSrc}" onerror="window.parent.postMessage('ad-error', '*')"></script>`
        )
      } else if (config.containerId) {
        const scriptTag = `<script async="async" data-cfasync="false" src="${scriptSrc}" onerror="window.parent.postMessage('ad-error', '*')"></script>`

        if (config.scriptOrder === "before") {
          bodyScripts.push(scriptTag)
        }

        bodyScripts.push(`<div id="${config.containerId}" style="width:100%;height:100%;"></div>`)

        if (config.scriptOrder !== "before") {
          bodyScripts.push(scriptTag)
        }
      }

      const containerCss = config.containerId
        ? `#${config.containerId} { width: 100%; height: 100%; }`
        : ""

      const html = `<!DOCTYPE html>
        <html>
          <head>
            <base target="_top" />
            <style>
              html, body { margin: 0; padding: 0; overflow: hidden; background: transparent; }
              ${containerCss}
            </style>
          </head>
          <body>
            ${bodyScripts.join("\n")}
          </body>
        </html>
      `

      // 加强错误处理，确保 doc.write 不会破坏页面
      try {
        doc.open()
        doc.write(html)
        doc.close()
      } catch (docError) {
        console.error('Error writing to iframe document:', docError)
        setHasError(true)
        setIsLoaded(true)
        return
      }

      // Listen for error messages from iframe
      const handleMessage = (event: MessageEvent) => {
        if (event.data === 'ad-error') {
          setHasError(true)
          setIsLoaded(true)
          
          // Track script error event
          if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
            (window as any).trackCalligraphyEvent('ad_error', {
              ad_provider: 'adsterra',
              placement: placement,
              error_type: 'script_load_error'
            })
          }
        }
      }

      window.addEventListener('message', handleMessage)

      return () => {
        // 只清空我们的挂载点，保存 iframe 引用以便安全移除
        if (adMount && iframe && adMount.contains(iframe)) {
          adMount.removeChild(iframe)
        }
        window.removeEventListener('message', handleMessage)
      }
    } catch (error) {
      console.error('Error loading Adsterra ad:', error)
      setHasError(true)
      setIsLoaded(true)
    }
  }, [config, isInView])

  if (!config) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={cn("adsterra-slot flex justify-center", className)}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: `${config.width}px`,
        minHeight: `${config.height}px`,
        backgroundColor: "transparent",
        borderRadius: "8px",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* 专门的广告挂载点，由我们完全控制，不让 React 管理其内部内容 */}
      <div
        ref={adMountRef}
        style={{
          width: "100%",
          height: `${config.height}px`,
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      />
      
      {!isInView && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-50/40 text-gray-400 text-xs"
          style={{ 
            width: '100%', 
            height: `${config.height}px`,
            borderRadius: "8px",
            border: "1px solid rgba(0,0,0,0.06)"
          }}
        >
          <div className="animate-pulse text-gray-300">•••</div>
        </div>
      )}
      
      {isInView && !isLoaded && !hasError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-50/40 text-gray-400 text-xs"
          style={{ 
            width: '100%', 
            height: `${config.height}px`,
            borderRadius: "8px",
            border: "1px solid rgba(0,0,0,0.06)"
          }}
        >
          <div className="animate-pulse text-gray-300">•••</div>
        </div>
      )}
      
      {hasError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-transparent"
          style={{ 
            width: '100%', 
            height: `${config.height}px`,
            borderRadius: "8px"
          }}
        >
          {/* 完全透明的错误状态，不显示任何内容 */}
        </div>
      )}
    </div>
  )
}
