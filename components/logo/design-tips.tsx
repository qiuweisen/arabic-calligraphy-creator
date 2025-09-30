'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, Target, Zap, Award, CheckCircle, AlertTriangle, Info } from 'lucide-react'

interface DesignTip {
  id: string
  category: 'typography' | 'layout' | 'color' | 'cultural' | 'technical'
  title: string
  description: string
  importance: 'essential' | 'recommended' | 'optional'
  example?: string
  doText?: string
  dontText?: string
  technicalNote?: string
}

const LOGO_DESIGN_TIPS: DesignTip[] = [
  // Typography Tips
  {
    id: 'typography-1',
    category: 'typography',
    title: 'Maintain Text Hierarchy',
    description: 'Ensure Arabic text has appropriate visual weight and prominence in your logo design.',
    importance: 'essential',
    example: 'Company name in large Arabic, tagline in smaller supporting text',
    doText: 'Give Arabic company name the largest visual weight',
    dontText: 'Make Arabic text secondary to English translation',
    technicalNote: 'Arabic characters need more vertical space due to diacritics and letterform complexity'
  },
  {
    id: 'typography-2',
    category: 'typography',
    title: 'Choose Scalable Fonts',
    description: 'Select Arabic fonts that remain legible at small sizes for business cards and website favicons.',
    importance: 'essential',
    example: 'Tajawal and Cairo work well for small applications',
    doText: 'Test readability at 16px and smaller sizes',
    dontText: 'Use ornate fonts that become illegible when scaled down',
    technicalNote: 'Avoid fonts with thin strokes or complex decorative elements for small-scale applications'
  },
  {
    id: 'typography-3',
    category: 'typography',
    title: 'Consider Letter Connections',
    description: 'Arabic letters connect naturally - leverage this for cohesive logo design.',
    importance: 'recommended',
    example: 'Allow natural letter flow in cursive styles like Aref Ruqaa',
    doText: 'Embrace natural Arabic letter connections',
    dontText: 'Force disconnected letters in connected scripts'
  },

  // Layout Tips
  {
    id: 'layout-1',
    category: 'layout',
    title: 'Respect Reading Direction',
    description: 'Arabic reads right-to-left, which affects logo composition and visual balance.',
    importance: 'essential',
    example: 'Place logo elements to support RTL reading flow',
    doText: 'Design with RTL reading pattern in mind',
    dontText: 'Force Arabic text into LTR layout conventions',
    technicalNote: 'Consider mixed-direction layouts for bilingual brands'
  },
  {
    id: 'layout-2',
    category: 'layout',
    title: 'Create Balanced Compositions',
    description: 'Balance Arabic text with symbols, icons, or supporting elements harmoniously.',
    importance: 'recommended',
    example: 'Icon on left, Arabic text on right for natural balance',
    doText: 'Create visual equilibrium with supporting elements',
    dontText: 'Overwhelm Arabic text with competing visual elements'
  },
  {
    id: 'layout-3',
    category: 'layout',
    title: 'Plan for Bilingual Versions',
    description: 'Design Arabic logos that can accommodate English translations seamlessly.',
    importance: 'recommended',
    example: 'Stackable design with Arabic primary, English secondary',
    doText: 'Create flexible layouts for multiple languages',
    dontText: 'Design only for Arabic without considering translations'
  },

  // Color Tips
  {
    id: 'color-1',
    category: 'color',
    title: 'Choose Business-Appropriate Colors',
    description: 'Select colors that work across different business contexts and cultural settings.',
    importance: 'essential',
    example: 'Professional blues, sophisticated golds, or clean blacks',
    doText: 'Research color psychology in your target market',
    dontText: 'Use overly bright or unprofessional color combinations',
    technicalNote: 'Consider color blindness accessibility and printing limitations'
  },
  {
    id: 'color-2',
    category: 'color',
    title: 'Ensure Print Compatibility',
    description: 'Design logos that work in single-color applications for stamps, embossing, and budget printing.',
    importance: 'essential',
    example: 'Test logo in black and white, grayscale versions',
    doText: 'Create effective single-color versions',
    dontText: 'Rely solely on color for logo recognition',
    technicalNote: 'Consider CMYK color space limitations for commercial printing'
  },

  // Cultural Tips
  {
    id: 'cultural-1',
    category: 'cultural',
    title: 'Respect Cultural Significance',
    description: 'Understand the cultural context of Arabic text and avoid inappropriate usage.',
    importance: 'essential',
    example: 'Research meaning and connotations of chosen Arabic words',
    doText: 'Verify cultural appropriateness with native speakers',
    dontText: 'Use Arabic text without understanding its meaning',
    technicalNote: 'Religious or culturally sensitive terms require special consideration'
  },
  {
    id: 'cultural-2',
    category: 'cultural',
    title: 'Consider Regional Variations',
    description: 'Arabic typography preferences may vary across different Arab regions and countries.',
    importance: 'recommended',
    example: 'Naskh preferred in some regions, Kufi in others',
    doText: 'Research target market typography preferences',
    dontText: 'Assume all Arabic markets have identical preferences'
  },

  // Technical Tips
  {
    id: 'technical-1',
    category: 'technical',
    title: 'Optimize for Digital Use',
    description: 'Ensure your Arabic logo renders clearly across different devices and screen resolutions.',
    importance: 'essential',
    example: 'Test on mobile devices, retina displays, and older screens',
    doText: 'Test across multiple devices and resolutions',
    dontText: 'Design only for high-resolution displays',
    technicalNote: 'Consider web font loading and rendering differences across browsers'
  },
  {
    id: 'technical-2',
    category: 'technical',
    title: 'Create Vector-Based Designs',
    description: 'Use SVG format for infinite scalability and crisp rendering at any size.',
    importance: 'essential',
    example: 'Export as SVG for web use, maintain vector source files',
    doText: 'Work in vector formats from the start',
    dontText: 'Create logos in raster formats like JPG or PNG only',
    technicalNote: 'SVG ensures quality across all applications from business cards to billboards'
  }
]

const CATEGORIES = [
  { key: 'typography', label: 'Typography', icon: Target, color: 'blue' },
  { key: 'layout', label: 'Layout', icon: Zap, color: 'green' },
  { key: 'color', label: 'Colors', icon: Award, color: 'purple' },
  { key: 'cultural', label: 'Cultural', icon: CheckCircle, color: 'orange' },
  { key: 'technical', label: 'Technical', icon: Info, color: 'indigo' }
] as const

interface LogoDesignTipsProps {
  selectedCategory?: string
}

export function LogoDesignTips({ selectedCategory }: LogoDesignTipsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategory || 'typography')
  const [expandedTip, setExpandedTip] = useState<string | null>(null)

  const filteredTips = LOGO_DESIGN_TIPS.filter(tip => tip.category === activeCategory)

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'essential': return 'bg-red-100 text-red-800 border-red-200'
      case 'recommended': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'optional': return 'bg-gray-100 text-gray-800 border-gray-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getImportanceIcon = (importance: string) => {
    switch (importance) {
      case 'essential': return <AlertTriangle className="h-4 w-4" />
      case 'recommended': return <CheckCircle className="h-4 w-4" />
      case 'optional': return <Info className="h-4 w-4" />
      default: return <Info className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    const categoryData = CATEGORIES.find(cat => cat.key === category)
    return categoryData?.color || 'blue'
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
          <Lightbulb className="h-6 w-6 text-yellow-600" />
          Logo Design Best Practices
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional tips and guidelines for creating effective Arabic logos that work 
          across all business applications and cultural contexts.
        </p>
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {CATEGORIES.map((category) => (
          <Button
            key={category.key}
            variant={activeCategory === category.key ? "default" : "outline"}
            className={cn(
              "flex items-center gap-2",
              activeCategory === category.key 
                ? `bg-${category.color}-600 hover:bg-${category.color}-700` 
                : `border-${category.color}-300 text-${category.color}-700 hover:bg-${category.color}-50`
            )}
            onClick={() => setActiveCategory(category.key)}
          >
            <category.icon className="h-4 w-4" />
            {category.label}
          </Button>
        ))}
      </div>

      {/* Tips Grid */}
      <div className="grid gap-6">
        {filteredTips.map((tip) => (
          <Card 
            key={tip.id} 
            className={cn(
              "border-l-4 transition-all duration-200",
              `border-l-${getCategoryColor(tip.category)}-500`
            )}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg font-semibold">{tip.title}</CardTitle>
                    <Badge 
                      className={cn(
                        "text-xs border",
                        getImportanceColor(tip.importance)
                      )}
                    >
                      <span className="flex items-center gap-1">
                        {getImportanceIcon(tip.importance)}
                        {tip.importance}
                      </span>
                    </Badge>
                  </div>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {expandedTip === tip.id ? 'Less' : 'More'}
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {tip.example && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Example:</strong> {tip.example}
                  </p>
                </div>
              )}

              {expandedTip === tip.id && (
                <div className="space-y-4 border-t pt-4">
                  {(tip.doText || tip.dontText) && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {tip.doText && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <h4 className="text-sm font-semibold text-green-800 mb-1 flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            Do:
                          </h4>
                          <p className="text-sm text-green-700">{tip.doText}</p>
                        </div>
                      )}
                      
                      {tip.dontText && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                          <h4 className="text-sm font-semibold text-red-800 mb-1 flex items-center gap-1">
                            <AlertTriangle className="h-4 w-4" />
                            Don't:
                          </h4>
                          <p className="text-sm text-red-700">{tip.dontText}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {tip.technicalNote && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <h4 className="text-sm font-semibold text-gray-800 mb-1 flex items-center gap-1">
                        <Info className="h-4 w-4" />
                        Technical Note:
                      </h4>
                      <p className="text-sm text-gray-700">{tip.technicalNote}</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Reference Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <Target className="h-5 w-5" />
          Quick Reference: Essential Checklist
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-medium text-blue-800 mb-2">Before You Start:</h5>
            <ul className="text-blue-700 space-y-1">
              <li>✓ Research Arabic meaning and cultural context</li>
              <li>✓ Choose appropriate business category style</li>
              <li>✓ Select scalable, readable fonts</li>
              <li>✓ Plan for bilingual applications</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-blue-800 mb-2">Before You Finalize:</h5>
            <ul className="text-blue-700 space-y-1">
              <li>✓ Test at various sizes (favicon to billboard)</li>
              <li>✓ Check single-color versions</li>
              <li>✓ Verify cultural appropriateness</li>
              <li>✓ Export in vector format (SVG)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}