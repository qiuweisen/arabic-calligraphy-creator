"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  badge?: string
  title: ReactNode
  subtitle: ReactNode
  primaryAction: ReactNode
  secondaryAction?: ReactNode
  backgroundElements?: ReactNode
  layoutVariant?: 'centered' | 'split' | 'minimal'
  className?: string
}

export function HeroSection({
  badge,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  backgroundElements,
  layoutVariant = 'centered',
  className
}: HeroSectionProps) {
  return (
    <section className={cn(
      "relative overflow-hidden py-16 md:py-24",
      layoutVariant === 'split' && "lg:py-32",
      className
    )}>
      {backgroundElements && (
        <div className="absolute inset-0 pointer-events-none">
          {backgroundElements}
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          "max-w-4xl",
          layoutVariant === 'centered' && "mx-auto text-center",
          layoutVariant === 'split' && "grid lg:grid-cols-2 gap-12 items-center",
          layoutVariant === 'minimal' && "max-w-3xl"
        )}>
          <div className={cn(
            layoutVariant === 'split' && "lg:text-left",
            layoutVariant !== 'split' && "text-center"
          )}>
            {badge && (
              <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-semibold text-amber-700 bg-amber-100 rounded-full">
                {badge}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            
            <div className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {subtitle}
            </div>
            
            <div className={cn(
              "flex gap-4",
              layoutVariant === 'centered' && "justify-center",
              layoutVariant === 'split' && "lg:justify-start justify-center",
              layoutVariant === 'minimal' && "justify-start"
            )}>
              {primaryAction}
              {secondaryAction}
            </div>
          </div>
          
          {layoutVariant === 'split' && (
            <div className="lg:order-2">
              {/* Split layout right side content can be passed via backgroundElements or children */}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}