"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface WorkflowStep {
  icon: ReactNode
  title: string
  description: ReactNode
  customContent?: ReactNode
}

interface WorkflowStepsProps {
  steps: WorkflowStep[]
  layout?: 'horizontal' | 'vertical' | 'grid'
  title?: ReactNode
  subtitle?: ReactNode
  className?: string
}

export function WorkflowSteps({
  steps,
  layout = 'horizontal',
  title,
  subtitle,
  className
}: WorkflowStepsProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <div className="text-lg text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </div>
            )}
          </div>
        )}
        
        <div className={cn(
          "max-w-6xl mx-auto",
          layout === 'horizontal' && "hidden md:flex items-center justify-between",
          layout === 'vertical' && "space-y-8",
          layout === 'grid' && "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        )}>
          {/* Desktop Horizontal Layout */}
          {layout === 'horizontal' && steps.map((step, index) => (
            <div key={index} className="flex-1 text-center">
              {/* Step Number Circle */}
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {index + 1}
              </div>
              
              {/* Step Icon */}
              <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <div className="text-gray-700 leading-relaxed mb-4">
                {step.description}
              </div>
              
              {step.customContent && (
                <div className="mt-4">
                  {step.customContent}
                </div>
              )}
              
              {/* Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
          
          {/* Mobile/Vertical Layout */}
          {layout === 'horizontal' && (
            <div className="md:hidden space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <div className="text-gray-700 leading-relaxed">
                    {step.description}
                  </div>
                  {step.customContent && (
                    <div className="mt-4">
                      {step.customContent}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Other Layouts */}
          {layout !== 'horizontal' && steps.map((step, index) => (
            <div key={index} className={cn(
              layout === 'vertical' && "flex items-start gap-6",
              layout === 'grid' && "text-center"
            )}>
              <div className={cn(
                "flex-shrink-0",
                layout === 'grid' && "mx-auto"
              )}>
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1">
                <div className={cn(
                  "w-12 h-12 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center mb-4",
                  layout === 'grid' && "mx-auto"
                )}>
                  {step.icon}
                </div>
                
                <h3 className={cn(
                  "text-xl font-bold text-gray-900 mb-3",
                  layout === 'grid' && "text-center"
                )}>
                  {step.title}
                </h3>
                
                <div className={cn(
                  "text-gray-700 leading-relaxed",
                  layout === 'grid' && "text-center"
                )}>
                  {step.description}
                </div>
                
                {step.customContent && (
                  <div className="mt-4">
                    {step.customContent}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}