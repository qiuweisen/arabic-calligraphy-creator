'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Palette, Eye, Download, Briefcase, Store, Heart, Sparkles } from 'lucide-react'

interface LogoCategory {
  id: string
  name: string
  description: string
  icon: React.ComponentType<any>
  examples: string[]
  characteristics: string[]
  recommended_fonts: string[]
  color_suggestions: string[]
  use_cases: string[]
}

const LOGO_CATEGORIES: LogoCategory[] = [
  {
    id: 'modern-business',
    name: 'Modern Business',
    description: 'Clean, professional designs perfect for corporate brands and tech companies',
    icon: Building2,
    examples: ['شركة النور', 'تطوير الشرق', 'خدمات الابتكار'],
    characteristics: [
      'Minimalist design approach',
      'High readability at small sizes',
      'Professional color schemes',
      'Scalable typography'
    ],
    recommended_fonts: ['Tajawal', 'Cairo', 'Noto Naskh Arabic'],
    color_suggestions: ['Deep Blue & Silver', 'Charcoal & Gold', 'Navy & White'],
    use_cases: ['Corporate identity', 'Tech startups', 'Professional services', 'Financial institutions']
  },
  {
    id: 'traditional-craft',
    name: 'Traditional Craft',
    description: 'Authentic calligraphy styles honoring classical Arabic artistic traditions',
    icon: Sparkles,
    examples: ['دار الحرف', 'بيت الخط', 'فن التراث'],
    characteristics: [
      'Classical calligraphy elements',
      'Rich cultural symbolism',
      'Ornamental flourishes',
      'Heritage-inspired aesthetics'
    ],
    recommended_fonts: ['Aref Ruqaa', 'Scheherazade', 'Amiri'],
    color_suggestions: ['Gold & Burgundy', 'Emerald & Cream', 'Bronze & Black'],
    use_cases: ['Art galleries', 'Cultural centers', 'Handicraft businesses', 'Traditional restaurants']
  },
  {
    id: 'luxury-brand',
    name: 'Luxury Brand',
    description: 'Sophisticated designs conveying premium quality and exclusivity',
    icon: Briefcase,
    examples: ['دار الفخامة', 'مجوهرات الشرق', 'عطور الملوك'],
    characteristics: [
      'Elegant typography',
      'Premium material feel',
      'Sophisticated spacing',
      'Exclusive brand positioning'
    ],
    recommended_fonts: ['El Messiri', 'Markazi Text', 'Lemonada'],
    color_suggestions: ['Black & Gold', 'Deep Purple & Silver', 'Midnight Blue & Rose Gold'],
    use_cases: ['Jewelry brands', 'Fashion houses', 'Perfume companies', 'High-end restaurants']
  },
  {
    id: 'food-hospitality',
    name: 'Food & Hospitality',
    description: 'Warm, inviting designs perfect for restaurants and food brands',
    icon: Heart,
    examples: ['مطعم الأصالة', 'حلويات البيت', 'قهوة الشرق'],
    characteristics: [
      'Warm and welcoming feel',
      'Appetizing color palette',
      'Readable at menu sizes',
      'Cultural authenticity'
    ],
    recommended_fonts: ['Harmattan', 'Mada', 'Lateef'],
    color_suggestions: ['Warm Orange & Brown', 'Rich Red & Cream', 'Golden Yellow & Green'],
    use_cases: ['Restaurants', 'Cafes', 'Food delivery', 'Catering services']
  },
  {
    id: 'retail-commerce',
    name: 'Retail & Commerce',
    description: 'Eye-catching designs optimized for storefronts and e-commerce',
    icon: Store,
    examples: ['سوق الذهب', 'متجر العصر', 'تسوق الشرق'],
    characteristics: [
      'High visibility design',
      'Easy brand recognition',
      'Versatile applications',
      'Market-friendly appeal'
    ],
    recommended_fonts: ['Cairo', 'Tajawal', 'Reem Kufi'],
    color_suggestions: ['Bright Blue & Orange', 'Green & Yellow', 'Red & White'],
    use_cases: ['Retail stores', 'E-commerce', 'Shopping centers', 'Market vendors']
  },
  {
    id: 'creative-arts',
    name: 'Creative & Arts',
    description: 'Artistic designs showcasing creativity and cultural expression',
    icon: Palette,
    examples: ['استوديو الفن', 'مركز الإبداع', 'ورشة الخط'],
    characteristics: [
      'Artistic expression',
      'Creative typography',
      'Bold visual impact',
      'Cultural storytelling'
    ],
    recommended_fonts: ['Jomhuria', 'Rakkas', 'Mirza'],
    color_suggestions: ['Rainbow Gradient', 'Artistic Multi-color', 'Bold Contrast'],
    use_cases: ['Art studios', 'Design agencies', 'Cultural organizations', 'Creative workshops']
  }
]

interface LogoCategorySelectorProps {
  onCategorySelect?: (category: LogoCategory) => void
  selectedCategory?: string
}

export function LogoCategorySelector({ onCategorySelect, selectedCategory }: LogoCategorySelectorProps) {
  const [selected, setSelected] = useState<string>(selectedCategory || "")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const handleSelect = (category: LogoCategory) => {
    setSelected(category.id)
    onCategorySelect?.(category)
  }

  const toggleExpand = (categoryId: string) => {
    setExpandedCard(expandedCard === categoryId ? null : categoryId)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
          <Building2 className="h-6 w-6 text-blue-600" />
          Logo Design Categories
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the category that best matches your business or brand identity. 
          Each category provides specialized guidance for optimal Arabic logo design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LOGO_CATEGORIES.map((category) => (
          <Card 
            key={category.id} 
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-lg border-2",
              selected === category.id 
                ? "border-blue-500 shadow-lg" 
                : "border-gray-200 hover:border-blue-300"
            )}
          >
            <CardHeader 
              className="pb-3"
              onClick={() => handleSelect(category)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">{category.name}</CardTitle>
                    {selected === category.id && (
                      <Badge className="bg-blue-100 text-blue-800 text-xs mt-1">Selected</Badge>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleExpand(category.id)
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-2">{category.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Example Text Previews */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Example Names:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {category.examples.slice(0, expandedCard === category.id ? category.examples.length : 2).map((example, idx) => (
                    <div key={idx} className="bg-gray-50 p-2 rounded text-center">
                      <div className="text-lg font-semibold text-gray-900" dir="rtl">
                        {example}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expanded Details */}
              {expandedCard === category.id && (
                <div className="space-y-4 border-t pt-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Design Characteristics:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {category.characteristics.map((char, idx) => (
                        <li key={idx}>• {char}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Fonts:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.recommended_fonts.map((font, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {font}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Color Suggestions:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.color_suggestions.map((color, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Ideal Use Cases:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.use_cases.map((useCase, idx) => (
                        <Badge key={idx} className="bg-green-100 text-green-800 text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <Button
                variant={selected === category.id ? "default" : "outline"}
                className={cn(
                  "w-full",
                  selected === category.id 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "border-blue-300 text-blue-700 hover:bg-blue-50"
                )}
                onClick={() => handleSelect(category)}
              >
                {selected === category.id ? "Selected Category" : "Use This Style"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selected && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h4 className="font-semibold text-blue-900 mb-2">
            {LOGO_CATEGORIES.find(c => c.id === selected)?.name} Category Selected
          </h4>
          <p className="text-blue-700 text-sm mb-3">
            Perfect choice! This category's design principles and font recommendations will guide 
            your logo creation process. Proceed to the generator to start designing.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-blue-100 text-blue-800">
              Optimized for Business
            </Badge>
            <Badge className="bg-green-100 text-green-800">
              Cultural Appropriate
            </Badge>
            <Badge className="bg-purple-100 text-purple-800">
              Scalable Design
            </Badge>
          </div>
        </div>
      )}
    </div>
  )
}