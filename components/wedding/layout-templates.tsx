'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Layout, Heart, Star, Crown } from 'lucide-react'

interface LayoutTemplate {
  id: string
  name: string
  description: string
  features: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  bestFor: string[]
  preview: React.ReactNode
  arabicStyle: string
  bilingualSupport: boolean
}

const WEDDING_TEMPLATES: LayoutTemplate[] = [
  {
    id: 'classic-centered',
    name: 'Classic Centered',
    description: 'Traditional centered layout with Arabic calligraphy as the focal point',
    features: ['Centered Arabic names', 'English translation below', 'Decorative borders', 'Balanced composition'],
    difficulty: 'beginner',
    bestFor: ['Traditional ceremonies', 'Formal events', 'Conservative families'],
    arabicStyle: 'Naskh or Thuluth',
    bilingualSupport: true,
    preview: (
      <div className="bg-gradient-to-b from-amber-50 to-white p-4 rounded border h-32 flex flex-col justify-center items-center text-center">
        <div className="text-xs font-bold mb-1 text-amber-800">أحمد و فاطمة</div>
        <div className="text-[10px] text-gray-600">Ahmed & Fatima</div>
        <div className="text-[8px] text-gray-500 mt-2">Wedding Celebration</div>
        <div className="border-t border-amber-300 w-12 mt-2"></div>
      </div>
    )
  },
  {
    id: 'side-by-side',
    name: 'Side-by-Side Bilingual',
    description: 'Arabic and English text positioned side by side with elegant dividers',
    features: ['Equal Arabic/English prominence', 'Vertical dividers', 'Mirrored layouts', 'Cultural balance'],
    difficulty: 'intermediate',
    bestFor: ['Multicultural weddings', 'International families', 'Modern ceremonies'],
    arabicStyle: 'Reem Kufi or Tajawal',
    bilingualSupport: true,
    preview: (
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded border h-32 flex items-center">
        <div className="flex-1 text-center">
          <div className="text-xs font-bold text-rose-800">أحمد و فاطمة</div>
          <div className="text-[8px] text-rose-600 mt-1">حفل الزفاف</div>
        </div>
        <div className="w-px bg-rose-300 h-16 mx-2"></div>
        <div className="flex-1 text-center">
          <div className="text-xs font-bold text-rose-800">Ahmed & Fatima</div>
          <div className="text-[8px] text-rose-600 mt-1">Wedding Celebration</div>
        </div>
      </div>
    )
  },
  {
    id: 'ornate-frame',
    name: 'Ornate Frame Design',
    description: 'Decorative Islamic geometric patterns framing the calligraphy',
    features: ['Geometric borders', 'Islamic patterns', 'Ornamental corners', 'Luxury appeal'],
    difficulty: 'advanced',
    bestFor: ['Luxury weddings', 'Traditional ceremonies', 'Cultural celebrations'],
    arabicStyle: 'Diwani or Thuluth',
    bilingualSupport: true,
    preview: (
      <div className="bg-gradient-to-br from-amber-100 to-yellow-50 p-4 rounded border h-32 relative">
        <div className="absolute inset-2 border-2 border-amber-400 border-dashed rounded"></div>
        <div className="h-full flex flex-col justify-center items-center text-center relative z-10">
          <div className="text-xs font-bold text-amber-900">أحمد و فاطمة</div>
          <div className="text-[8px] text-amber-700 mt-1">Ahmed & Fatima</div>
          <div className="text-[6px] text-amber-600 mt-2">Wedding Invitation</div>
        </div>
        <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-amber-500"></div>
        <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-amber-500"></div>
        <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-amber-500"></div>
        <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-amber-500"></div>
      </div>
    )
  },
  {
    id: 'minimalist-modern',
    name: 'Minimalist Modern',
    description: 'Clean, contemporary design with subtle Arabic typography',
    features: ['Clean lines', 'Plenty of white space', 'Modern typography', 'Sophisticated simplicity'],
    difficulty: 'beginner',
    bestFor: ['Contemporary couples', 'Urban venues', 'Minimalist aesthetics'],
    arabicStyle: 'Tajawal or Cairo',
    bilingualSupport: true,
    preview: (
      <div className="bg-white p-4 rounded border h-32 flex flex-col justify-center items-center">
        <div className="text-sm font-light text-gray-800 mb-2">أحمد و فاطمة</div>
        <div className="w-8 h-px bg-gray-300 mb-2"></div>
        <div className="text-[10px] text-gray-600">Ahmed & Fatima</div>
        <div className="text-[8px] text-gray-400 mt-2">2024</div>
      </div>
    )
  },
  {
    id: 'calligraphy-focus',
    name: 'Calligraphy Focus',
    description: 'Arabic calligraphy as the dominant design element',
    features: ['Large Arabic text', 'Artistic flourishes', 'Minimal other elements', 'Calligraphy showcase'],
    difficulty: 'intermediate',
    bestFor: ['Calligraphy enthusiasts', 'Artistic couples', 'Cultural celebrations'],
    arabicStyle: 'Diwani or Nastaliq',
    bilingualSupport: false,
    preview: (
      <div className="bg-gradient-to-b from-purple-50 to-indigo-50 p-4 rounded border h-32 flex items-center justify-center">
        <div className="text-lg font-bold text-purple-900 transform -rotate-3">أحمد و فاطمة</div>
      </div>
    )
  },
  {
    id: 'floral-elegant',
    name: 'Floral Elegance',
    description: 'Botanical elements combined with Arabic calligraphy',
    features: ['Floral accents', 'Nature-inspired', 'Romantic appeal', 'Soft color palette'],
    difficulty: 'intermediate',
    bestFor: ['Garden weddings', 'Spring ceremonies', 'Romantic themes'],
    arabicStyle: 'Naskh or Aref Ruqaa',
    bilingualSupport: true,
    preview: (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded border h-32 relative">
        <div className="h-full flex flex-col justify-center items-center text-center">
          <div className="text-xs font-bold text-green-800">أحمد و فاطمة</div>
          <div className="text-[8px] text-green-600 mt-1">Ahmed & Fatima</div>
        </div>
        <div className="absolute top-2 right-2 text-green-400 text-xs">🌸</div>
        <div className="absolute bottom-2 left-2 text-green-400 text-xs">🌿</div>
      </div>
    )
  }
]

interface WeddingLayoutTemplatesProps {
  onTemplateSelect?: (template: LayoutTemplate) => void
  selectedTemplate?: string
}

export function WeddingLayoutTemplates({ onTemplateSelect, selectedTemplate }: WeddingLayoutTemplatesProps) {
  const [selected, setSelected] = useState<string>(selectedTemplate || "")

  const handleSelect = (template: LayoutTemplate) => {
    setSelected(template.id)
    onTemplateSelect?.(template)
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return <Star className="h-4 w-4 text-green-600" />
      case 'intermediate': return <Heart className="h-4 w-4 text-yellow-600" />
      case 'advanced': return <Crown className="h-4 w-4 text-red-600" />
      default: return null
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
          <Layout className="h-6 w-6 text-pink-600" />
          Wedding Invitation Templates
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from professionally designed templates that beautifully integrate Arabic calligraphy 
          with modern wedding invitation layouts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WEDDING_TEMPLATES.map((template) => (
          <Card 
            key={template.id} 
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-lg border-2",
              selected === template.id 
                ? "border-pink-500 shadow-lg" 
                : "border-gray-200 hover:border-pink-300"
            )}
            onClick={() => handleSelect(template)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">{template.name}</CardTitle>
                {selected === template.id && (
                  <div className="h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <Badge className={cn("text-xs", getDifficultyColor(template.difficulty))}>
                  <span className="flex items-center gap-1">
                    {getDifficultyIcon(template.difficulty)}
                    {template.difficulty}
                  </span>
                </Badge>
                {template.bilingualSupport && (
                  <Badge variant="outline" className="text-xs">
                    Bilingual
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-gray-600">{template.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Template Preview */}
              <div className="mb-4">
                {template.preview}
              </div>

              {/* Features */}
              <div className="space-y-2">
                <h5 className="font-medium text-gray-900">Features:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div className="space-y-2">
                <h5 className="font-medium text-gray-900">Best For:</h5>
                <div className="flex flex-wrap gap-1">
                  {template.bestFor.map((use, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {use}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Arabic Style */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-sm text-amber-800">
                  <strong>Recommended Arabic Style:</strong> {template.arabicStyle}
                </p>
              </div>

              {/* Action Button */}
              <Button
                variant={selected === template.id ? "default" : "outline"}
                className={cn(
                  "w-full",
                  selected === template.id 
                    ? "bg-pink-600 hover:bg-pink-700" 
                    : "border-pink-300 text-pink-700 hover:bg-pink-50"
                )}
                onClick={(e) => {
                  e.stopPropagation()
                  handleSelect(template)
                }}
              >
                {selected === template.id ? "Selected" : "Use This Template"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selected && (
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 text-center">
          <h4 className="font-semibold text-pink-900 mb-2">
            {WEDDING_TEMPLATES.find(t => t.id === selected)?.name} Template Selected
          </h4>
          <p className="text-pink-700 text-sm mb-3">
            This template will be used as the foundation for your wedding invitation. 
            You can customize colors, fonts, and text in the generator.
          </p>
          <Badge variant="secondary" className="bg-pink-100 text-pink-800">
            Template Ready
          </Badge>
        </div>
      )}
    </div>
  )
}