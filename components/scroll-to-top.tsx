"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMobile()

  // 显示/隐藏按钮的逻辑
  useEffect(() => {
    const toggleVisibility = () => {
      // 当页面滚动超过300px时显示按钮
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // 如果不是移动设备，不显示组件
  if (!isMobile) return null

  // 滚动到顶部的函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full shadow-md bg-amber-50 border-amber-200 hover:bg-amber-100 transition-opacity duration-300",
        {
          "opacity-0 pointer-events-none": !isVisible,
          "opacity-100": isVisible,
        }
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 text-amber-800" />
    </Button>
  )
} 