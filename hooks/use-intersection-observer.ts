"use client"

import { RefObject, useEffect, useState } from "react"

interface ObserverOptions extends IntersectionObserverInit {
  once?: boolean
}

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: ObserverOptions = {}
): boolean {
  const { once = true, ...observerOptions } = options
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Fallback for older browsers: treat as visible immediately
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (once) {
          observer.disconnect()
        }
      } else if (!once) {
        setIsVisible(false)
      }
    }, observerOptions)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, once, observerOptions.root, observerOptions.rootMargin, observerOptions.threshold])

  return isVisible
}
