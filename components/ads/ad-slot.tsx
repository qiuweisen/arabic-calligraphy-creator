"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { trackAdSlotView, detectDevice } from "@/lib/analytics"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

type AdFormat = "multiplex" | "display"

interface AdSlotProps {
  slotId: string
  format?: AdFormat
  className?: string
  minHeight?: number
  desktopOnly?: boolean
  mobileOnly?: boolean
}

const DEFAULT_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-4575951448621910"

export function AdSlot({
  slotId,
  format = "multiplex",
  className,
  minHeight,
  desktopOnly,
  mobileOnly,
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [adPushed, setAdPushed] = useState(false)
  const [adLoaded, setAdLoaded] = useState(false)
  const isVisible = useIntersectionObserver(containerRef, {
    threshold: 0.25,
    rootMargin: "100px 0px",
  })
  const isProd = process.env.NODE_ENV === "production"

  const shouldRenderForDevice = useCallback(() => {
    if (typeof window === "undefined") return true
    const width = window.innerWidth
    if (desktopOnly && width < 1024) return false
    if (mobileOnly && width >= 1024) return false
    return true
  }, [desktopOnly, mobileOnly])

  useEffect(() => {
    if (!isVisible || adPushed || !shouldRenderForDevice()) return

    const timer = setTimeout(() => {
      if (!isProd || typeof window === "undefined") {
        setAdPushed(true)
        return
      }

      try {
        if (!(window as any).adsbygoogle) {
          console.warn("AdSense script not loaded yet")
          return
        }

        ;(window as any).adsbygoogle.push({})
        setAdLoaded(true)
        setAdPushed(true)
        trackAdSlotView({
          slotId,
          format,
          device: detectDevice(),
          page: typeof window !== "undefined" ? window.location.pathname : undefined,
        })
      } catch (error) {
        console.error("AdSlot load error:", error)
      }
    }, 150)

    return () => clearTimeout(timer)
  }, [adPushed, format, isVisible, isProd, shouldRenderForDevice, slotId])

  if (!shouldRenderForDevice()) {
    return null
  }

  const formatProps =
    format === "multiplex"
      ? { "data-ad-format": "autorelaxed", "data-full-width-responsive": "true" }
      : { "data-ad-format": "auto", "data-full-width-responsive": "true" }

  const computedMinHeight = minHeight ?? (format === "multiplex" ? 300 : 250)

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative ad-slot-container w-full",
        !adLoaded && "animate-pulse bg-amber-50",
        className
      )}
      data-slot-id={slotId}
    >
      {!adLoaded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-amber-600 text-xs tracking-wide uppercase"
          aria-hidden="true"
        >
          <span>Advertisement</span>
        </div>
      )}
      <ins
        className={cn("adsbygoogle block w-full", adLoaded ? "opacity-100" : "opacity-0")}
        style={{ display: "block", minHeight: `${computedMinHeight}px` }}
        data-ad-client={DEFAULT_CLIENT_ID}
        data-ad-slot={slotId}
        {...formatProps}
      />
    </div>
  )
}
