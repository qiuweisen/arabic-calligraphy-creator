"use client"

import { ReactNode } from "react"
import dynamic from "next/dynamic"
import { cn } from "@/lib/utils"

// Dynamic import for CalligraphyGenerator to avoid SSR issues
const DynamicCalligraphyGenerator = dynamic(
  () => import("@/components/calligraphy-generator").then((mod) => ({ default: mod.CalligraphyGenerator })),
  {
    loading: () => (
      <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 bg-gray-200 rounded w-1/4 mx-auto"></div>
        </div>
      </div>
    ),
    ssr: false,
  }
)

interface GeneratorEmbedProps {
  initialFont?: string
  trackingContext: string
  beforeGenerator?: ReactNode
  afterGenerator?: ReactNode
  heading?: ReactNode
  supportingText?: ReactNode
  hideControls?: string[]
  className?: string
}

export function GeneratorEmbed({
  initialFont,
  trackingContext,
  beforeGenerator,
  afterGenerator,
  heading,
  supportingText,
  className
}: GeneratorEmbedProps) {
  const handleFontChange = (fontName: string) => {
    // Update URL without reloading page
    if (typeof window !== 'undefined') {
      const newUrl = new URL(window.location.href)
      newUrl.searchParams.set('font', fontName)
      window.history.replaceState({}, '', newUrl.toString())
    }
  }

  return (
    <section className={cn("py-16 bg-gradient-to-b from-amber-50 to-white", className)} id="generator-section">
      <div className="container mx-auto px-4">
        {(heading || supportingText) && (
          <div className="text-center mb-12">
            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
                {heading}
              </h2>
            )}
            {supportingText && (
              <div className="text-lg text-amber-700 max-w-3xl mx-auto">
                {supportingText}
              </div>
            )}
          </div>
        )}
        
        {beforeGenerator}
        
        <div className="max-w-7xl mx-auto">
          <DynamicCalligraphyGenerator
            initialFont={initialFont}
            onFontChange={handleFontChange}
          />
        </div>
        
        {afterGenerator}
      </div>
    </section>
  )
}