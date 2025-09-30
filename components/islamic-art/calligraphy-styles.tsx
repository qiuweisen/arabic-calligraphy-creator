'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Compass, Star, Crown, Eye, Palette } from 'lucide-react'

interface CalligraphyStyle {
  id: string
  name: string
  arabic_name: string
  origin: string
  period: string
  characteristics: string[]
  best_for: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'master'
  spiritual_significance: string
  modern_applications: string[]
  font_recommendations: string[]
  visual_example: string
  cultural_notes: string
}

const CALLIGRAPHY_STYLES: CalligraphyStyle[] = [
  {
    id: 'kufic',
    name: 'Kufic',
    arabic_name: 'الخط الكوفي',
    origin: 'Kufa, Iraq',
    period: '7th century CE',
    characteristics: [
      'Angular, geometric letterforms',
      'Strong horizontal emphasis',
      'Minimal use of curves',
      'Architectural monumentality',
      'Clear, legible structure'
    ],
    best_for: [
      'Architectural inscriptions',
      'Religious monuments',
      'Decorative borders',
      'Modern logo design',
      'Geometric art compositions'
    ],
    difficulty: 'intermediate',
    spiritual_significance: 'Associated with early Quranic manuscripts and sacred architecture',
    modern_applications: [
      'Contemporary Islamic art',
      'Architectural elements',
      'Digital typography',
      'Logo design',
      'Decorative arts'
    ],
    font_recommendations: ['Reem Kufi', 'Kufi Extended'],
    visual_example: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    cultural_notes: 'Named after the city of Kufa, this style represents the foundational aesthetic of Islamic calligraphy'
  },
  {
    id: 'naskh',
    name: 'Naskh',
    arabic_name: 'خط النسخ',
    origin: 'Baghdad, Iraq',
    period: '10th century CE',
    characteristics: [
      'Curved, flowing letterforms',
      'Excellent readability',
      'Balanced proportions',
      'Clear letter connections',
      'Moderate pen angle'
    ],
    best_for: [
      'Quranic manuscripts',
      'Educational texts',
      'Books and documents',
      'Religious instruction',
      'Daily reading materials'
    ],
    difficulty: 'beginner',
    spiritual_significance: 'Widely used for copying the Quran due to its clarity and beauty',
    modern_applications: [
      'Book publishing',
      'Digital typography',
      'Educational materials',
      'Religious texts',
      'Web fonts'
    ],
    font_recommendations: ['Noto Naskh Arabic', 'Scheherazade', 'Amiri'],
    visual_example: 'وَاللَّهُ أَعْلَمُ',
    cultural_notes: 'Considered the most legible style, making it perfect for sacred text reproduction'
  },
  {
    id: 'thuluth',
    name: 'Thuluth',
    arabic_name: 'خط الثلث',
    origin: 'Baghdad, Iraq',
    period: '11th century CE',
    characteristics: [
      'Elegant, flowing curves',
      'Large, sweeping letterforms',
      'Complex letter interactions',
      'Artistic flourishes',
      'Sophisticated compositions'
    ],
    best_for: [
      'Mosque decoration',
      'Religious art',
      'Ceremonial documents',
      'Artistic calligraphy',
      'Architectural inscriptions'
    ],
    difficulty: 'advanced',
    spiritual_significance: 'Considered the most beautiful script, often called "the king of scripts"',
    modern_applications: [
      'Fine art calligraphy',
      'Museum exhibitions',
      'Luxury design',
      'Cultural artwork',
      'Prestige documents'
    ],
    font_recommendations: ['Traditional hand lettering recommended'],
    visual_example: 'سُبْحَانَ اللَّهِ',
    cultural_notes: 'Requires years of study to master, representing the pinnacle of calligraphic art'
  },
  {
    id: 'diwani',
    name: 'Diwani',
    arabic_name: 'الخط الديواني',
    origin: 'Ottoman Empire',
    period: '16th century CE',
    characteristics: [
      'Cursive, interconnected letters',
      'Compact, dense composition',
      'Ornamental flourishes',
      'Royal, official appearance',
      'Complex letter overlapping'
    ],
    best_for: [
      'Official documents',
      'Royal decrees',
      'Ceremonial art',
      'Luxury design',
      'Prestigious applications'
    ],
    difficulty: 'master',
    spiritual_significance: 'Associated with Ottoman imperial power and Islamic governance',
    modern_applications: [
      'Luxury branding',
      'Official certificates',
      'High-end design',
      'Cultural institutions',
      'Prestige events'
    ],
    font_recommendations: ['Specialized Diwani fonts', 'Hand lettering preferred'],
    visual_example: 'الْحَمْدُ لِلَّهِ',
    cultural_notes: 'Originally used for Ottoman royal correspondence, symbolizing authority and elegance'
  },
  {
    id: 'nastaliq',
    name: 'Nastaliq',
    arabic_name: 'نستعلیق',
    origin: 'Persia/Iran',
    period: '14th century CE',
    characteristics: [
      'Flowing, diagonal slope',
      'Poetic, lyrical quality',
      'Graceful letter connections',
      'Persian aesthetic influence',
      'Suitable for poetry'
    ],
    best_for: [
      'Persian poetry',
      'Literary texts',
      'Artistic manuscripts',
      'Cultural calligraphy',
      'Decorative writing'
    ],
    difficulty: 'advanced',
    spiritual_significance: 'Expresses the mystical and poetic aspects of Islamic culture',
    modern_applications: [
      'Persian language texts',
      'Poetry publications',
      'Cultural art',
      'Literary design',
      'Artistic expression'
    ],
    font_recommendations: ['Nastaliq Navees', 'Persian specific fonts'],
    visual_example: 'اللَّهُ أَكْبَرُ',
    cultural_notes: 'Beloved in Persian-speaking regions for its ability to capture poetic beauty'
  },
  {
    id: 'ruqah',
    name: 'Ruqah',
    arabic_name: 'خط الرقعة',
    origin: 'Ottoman Empire',
    period: '19th century CE',
    characteristics: [
      'Simple, practical design',
      'Fast writing capability',
      'Clear, readable letters',
      'Minimal ornamentation',
      'Everyday utility'
    ],
    best_for: [
      'Daily writing',
      'Personal correspondence',
      'Quick notes',
      'Informal documents',
      'Educational practice'
    ],
    difficulty: 'beginner',
    spiritual_significance: 'Represents the practical, accessible side of Islamic literacy',
    modern_applications: [
      'Handwriting education',
      'Personal letters',
      'Informal design',
      'Note-taking',
      'Casual typography'
    ],
    font_recommendations: ['Aref Ruqaa', 'Simple Arabic fonts'],
    visual_example: 'بارك الله فيك',
    cultural_notes: 'Developed for everyday use, making Arabic writing accessible to broader populations'
  }
]

interface IslamicCalligraphyStylesProps {
  onStyleSelect?: (style: CalligraphyStyle) => void
  selectedStyle?: string
}

export function IslamicCalligraphyStyles({ onStyleSelect, selectedStyle }: IslamicCalligraphyStylesProps) {
  const [selected, setSelected] = useState<string>(selectedStyle || "")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const handleSelect = (style: CalligraphyStyle) => {
    setSelected(style.id)
    onStyleSelect?.(style)
  }

  const toggleExpand = (styleId: string) => {
    setExpandedCard(expandedCard === styleId ? null : styleId)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'advanced': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'master': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStyleIcon = (styleId: string) => {
    switch (styleId) {
      case 'kufic': return <Compass className="h-5 w-5" />
      case 'naskh': return <Eye className="h-5 w-5" />
      case 'thuluth': return <Crown className="h-5 w-5" />
      case 'diwani': return <Star className="h-5 w-5" />
      case 'nastaliq': return <Sparkles className="h-5 w-5" />
      case 'ruqah': return <Palette className="h-5 w-5" />
      default: return <Sparkles className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
          <Sparkles className="h-6 w-6 text-emerald-600" />
          Islamic Calligraphy Styles
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the rich tradition of Islamic calligraphy through historically significant styles. 
          Each offers unique aesthetic qualities and cultural significance for your artistic expression.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CALLIGRAPHY_STYLES.map((style) => (
          <Card 
            key={style.id} 
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-lg border-2",
              selected === style.id 
                ? "border-emerald-500 shadow-lg" 
                : "border-gray-200 hover:border-emerald-300"
            )}
          >
            <CardHeader 
              className="pb-3"
              onClick={() => handleSelect(style)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                    {getStyleIcon(style.id)}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">{style.name}</CardTitle>
                    <p className="text-sm text-gray-600" dir="rtl">{style.arabic_name}</p>
                    {selected === style.id && (
                      <Badge className="bg-emerald-100 text-emerald-800 text-xs mt-1">Selected</Badge>
                    )}
                  </div>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <div>{style.origin}</div>
                  <div>{style.period}</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Visual Example */}
              <div className="text-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-2 leading-relaxed" dir="rtl">
                  {style.visual_example}
                </div>
                <Badge className={cn("text-xs border", getDifficultyColor(style.difficulty))}>
                  {style.difficulty} level
                </Badge>
              </div>

              {/* Key Characteristics */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Key Characteristics:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {style.characteristics.slice(0, expandedCard === style.id ? style.characteristics.length : 3).map((char, idx) => (
                    <li key={idx}>• {char}</li>
                  ))}
                </ul>
              </div>

              {/* Expanded Details */}
              {expandedCard === style.id && (
                <div className="space-y-4 border-t pt-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Spiritual Significance:</h4>
                    <p className="text-xs text-gray-600">{style.spiritual_significance}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Best Used For:</h4>
                    <div className="flex flex-wrap gap-1">
                      {style.best_for.map((use, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Modern Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {style.modern_applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h4 className="text-sm font-medium text-amber-800 mb-1">Cultural Notes:</h4>
                    <p className="text-xs text-amber-700">{style.cultural_notes}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleExpand(style.id)
                  }}
                  className="flex-1 text-gray-600 hover:text-gray-700"
                >
                  {expandedCard === style.id ? 'Less Info' : 'Learn More'}
                </Button>
                <Button
                  variant={selected === style.id ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "flex-1",
                    selected === style.id 
                      ? "bg-emerald-600 hover:bg-emerald-700" 
                      : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  )}
                  onClick={() => handleSelect(style)}
                >
                  {selected === style.id ? "Selected" : "Use Style"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selected && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center">
          <h4 className="font-semibold text-emerald-900 mb-2">
            {CALLIGRAPHY_STYLES.find(s => s.id === selected)?.name} Style Selected
          </h4>
          <p className="text-emerald-700 text-sm mb-3">
            Excellent choice! This calligraphic style will influence your design approach and 
            cultural authenticity. Proceed to create your Islamic art with this traditional aesthetic.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-emerald-100 text-emerald-800">
              Culturally Authentic
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              Historically Significant
            </Badge>
            <Badge className="bg-purple-100 text-purple-800">
              Artistically Rich
            </Badge>
          </div>
        </div>
      )}

      {/* Educational Note */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-900 mb-3">📚 Learning Islamic Calligraphy</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-medium text-blue-800 mb-2">For Beginners:</h5>
            <ul className="text-blue-700 space-y-1">
              <li>• Start with Naskh or Ruqah for readability</li>
              <li>• Focus on letter proportions and connections</li>
              <li>• Practice with sacred phrases for meaning</li>
              <li>• Study historical examples and masters</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-blue-800 mb-2">Cultural Respect:</h5>
            <ul className="text-blue-700 space-y-1">
              <li>• Understand the spiritual significance of styles</li>
              <li>• Research historical and regional contexts</li>
              <li>• Approach sacred texts with appropriate reverence</li>
              <li>• Consider the intended audience and purpose</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}