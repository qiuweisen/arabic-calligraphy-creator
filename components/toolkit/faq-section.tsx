"use client"

import { ReactNode, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItem {
  question: string
  answer: ReactNode
}

interface FaqSectionProps {
  title?: ReactNode
  subtitle?: ReactNode
  questions: FaqItem[]
  schemaId?: string
  className?: string
  variant?: 'default' | 'compact' | 'cards'
}

export function FaqSection({
  title,
  subtitle,
  questions,
  schemaId,
  className,
  variant = 'default'
}: FaqSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Generate FAQ JSON-LD structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": schemaId,
    "mainEntity": questions.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === 'string' ? faq.answer : faq.question // Fallback for ReactNode
      }
    }))
  }

  return (
    <>
      {schemaId && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
        />
      )}
      
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
            "max-w-4xl mx-auto",
            variant === 'cards' && "grid md:grid-cols-2 gap-6",
            variant !== 'cards' && "space-y-4"
          )}>
            {questions.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "border border-gray-200 rounded-lg overflow-hidden",
                  variant === 'cards' && "bg-white shadow-sm hover:shadow-md transition-shadow",
                  variant === 'compact' && "border-l-4 border-l-amber-500"
                )}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={cn(
                    "w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset transition-colors",
                    openItems.includes(index) && "bg-amber-50",
                    variant === 'compact' && "p-4"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={cn(
                      "font-semibold text-gray-900 pr-4",
                      variant === 'compact' ? "text-base" : "text-lg"
                    )}>
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-gray-500 transition-transform flex-shrink-0",
                        openItems.includes(index) && "transform rotate-180"
                      )}
                    />
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className={cn(
                    "px-6 pb-6 text-gray-700 leading-relaxed",
                    variant === 'compact' && "px-4 pb-4 text-sm"
                  )}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}