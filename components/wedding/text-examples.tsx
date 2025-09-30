'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Copy, Check, Heart, Quote, Users, Calendar } from 'lucide-react'

interface TextExample {
  id: string
  category: 'names' | 'phrases' | 'verses' | 'dates'
  arabic: string
  transliteration: string
  english: string
  usage: string
  culturalContext?: string
  popularity: 'common' | 'traditional' | 'unique'
}

const WEDDING_TEXT_EXAMPLES: TextExample[] = [
  // Names Examples
  {
    id: 'names-1',
    category: 'names',
    arabic: 'أحمد ♥ فاطمة',
    transliteration: 'Ahmad ♥ Fatima',
    english: 'Ahmad ♥ Fatima',
    usage: 'Classic Arabic names with heart symbol',
    popularity: 'common'
  },
  {
    id: 'names-2',
    category: 'names',
    arabic: 'محمد و عائشة',
    transliteration: 'Muhammad wa Aisha',
    english: 'Muhammad and Aisha',
    usage: 'Traditional format with Arabic conjunction',
    popularity: 'traditional'
  },
  {
    id: 'names-3',
    category: 'names',
    arabic: 'يوسف • زينب',
    transliteration: 'Yusuf • Zainab',
    english: 'Yusuf • Zainab',
    usage: 'Modern separator style',
    popularity: 'unique'
  },

  // Romantic Phrases
  {
    id: 'phrases-1',
    category: 'phrases',
    arabic: 'قلبان في قلب واحد',
    transliteration: 'Qalbān fī qalb wāḥid',
    english: 'Two hearts in one heart',
    usage: 'Romantic verse for invitation text',
    culturalContext: 'Popular phrase expressing unity in love',
    popularity: 'common'
  },
  {
    id: 'phrases-2',
    category: 'phrases',
    arabic: 'حبيبان إلى الأبد',
    transliteration: 'Ḥabībān ilā al-abad',
    english: 'Lovers forever',
    usage: 'Simple romantic declaration',
    popularity: 'common'
  },
  {
    id: 'phrases-3',
    category: 'phrases',
    arabic: 'رفيق العمر و شريك الحياة',
    transliteration: 'Rafīq al-ʿumr wa sharīk al-ḥayāh',
    english: 'Life companion and partner',
    usage: 'Meaningful description of marriage partnership',
    popularity: 'traditional'
  },
  {
    id: 'phrases-4',
    category: 'phrases',
    arabic: 'معاً نحو المستقبل',
    transliteration: 'Maʿan naḥwa al-mustaqbal',
    english: 'Together towards the future',
    usage: 'Forward-looking romantic phrase',
    popularity: 'unique'
  },

  // Religious/Traditional Verses
  {
    id: 'verses-1',
    category: 'verses',
    arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجاً',
    transliteration: 'Wa min āyātihī an khalaqa lakum min anfusikum azwājan',
    english: 'And among His signs is that He created for you mates from yourselves',
    usage: 'Quranic verse about marriage (Quran 30:21)',
    culturalContext: 'Sacred verse celebrating divine blessing of marriage',
    popularity: 'traditional'
  },
  {
    id: 'verses-2',
    category: 'verses',
    arabic: 'بارك الله لكما وبارك عليكما',
    transliteration: 'Bārak Allāhu lakumā wa bārak ʿalaykumā',
    english: 'May Allah bless you both and bless your union',
    usage: 'Traditional wedding blessing prayer',
    culturalContext: 'Common Islamic blessing for newlyweds',
    popularity: 'traditional'
  },
  {
    id: 'verses-3',
    category: 'verses',
    arabic: 'اللهم ألف بين قلوبنا',
    transliteration: 'Allāhumma allif bayna qulūbinā',
    english: 'O Allah, unite our hearts',
    usage: 'Prayer for harmony in marriage',
    culturalContext: 'Supplication for marital harmony',
    popularity: 'traditional'
  },

  // Date and Event Phrases
  {
    id: 'dates-1',
    category: 'dates',
    arabic: 'حفل الزفاف',
    transliteration: 'Ḥafl az-zifāf',
    english: 'Wedding Celebration',
    usage: 'Standard wedding event title',
    popularity: 'common'
  },
  {
    id: 'dates-2',
    category: 'dates',
    arabic: 'ليلة العمر',
    transliteration: 'Laylat al-ʿumr',
    english: 'Night of a Lifetime',
    usage: 'Poetic description of wedding night',
    popularity: 'unique'
  },
  {
    id: 'dates-3',
    category: 'dates',
    arabic: 'يشرفنا حضوركم',
    transliteration: 'Yusharrifunā ḥuḍūrukum',
    english: 'We are honored by your presence',
    usage: 'Formal invitation phrase',
    popularity: 'traditional'
  },
  {
    id: 'dates-4',
    category: 'dates',
    arabic: 'احتفال مباركة الزواج',
    transliteration: 'Iḥtifāl mubārakat az-zawāj',
    english: 'Blessed Marriage Celebration',
    usage: 'Religious tone for ceremony',
    popularity: 'traditional'
  }
]

const CATEGORIES = [
  { key: 'names', label: 'Names & Couples', icon: Users, description: 'Arabic name combinations and styling' },
  { key: 'phrases', label: 'Romantic Phrases', icon: Heart, description: 'Love expressions and romantic verses' },
  { key: 'verses', label: 'Religious Verses', icon: Quote, description: 'Islamic blessings and Quranic quotes' },
  { key: 'dates', label: 'Event Phrases', icon: Calendar, description: 'Ceremony and celebration text' }
] as const

interface WeddingTextExamplesProps {
  onTextSelect?: (text: TextExample) => void
}

export function WeddingTextExamples({ onTextSelect }: WeddingTextExamplesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('names')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filteredExamples = WEDDING_TEXT_EXAMPLES.filter(
    example => example.category === selectedCategory
  )

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case 'common': return 'bg-green-100 text-green-800'
      case 'traditional': return 'bg-blue-100 text-blue-800'
      case 'unique': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
          <Quote className="h-6 w-6 text-pink-600" />
          Arabic Wedding Text Examples
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse curated Arabic text examples perfect for wedding invitations. 
          Each includes transliteration, English translation, and cultural context.
        </p>
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {CATEGORIES.map((category) => (
          <Button
            key={category.key}
            variant={selectedCategory === category.key ? "default" : "outline"}
            className={cn(
              "flex items-center gap-2",
              selectedCategory === category.key 
                ? "bg-pink-600 hover:bg-pink-700" 
                : "border-pink-300 text-pink-700 hover:bg-pink-50"
            )}
            onClick={() => setSelectedCategory(category.key)}
          >
            <category.icon className="h-4 w-4" />
            {category.label}
          </Button>
        ))}
      </div>

      {/* Category Description */}
      <div className="text-center mb-6">
        <p className="text-gray-600">
          {CATEGORIES.find(cat => cat.key === selectedCategory)?.description}
        </p>
      </div>

      {/* Text Examples Grid */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredExamples.map((example) => (
          <Card key={example.id} className="border-pink-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <Badge className={cn("text-xs", getPopularityColor(example.popularity))}>
                    {example.popularity}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                  onClick={() => copyToClipboard(example.arabic, example.id)}
                >
                  {copiedId === example.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Arabic Text */}
              <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-2 leading-relaxed" dir="rtl">
                  {example.arabic}
                </div>
                <div className="text-sm text-gray-600 italic">
                  {example.transliteration}
                </div>
              </div>

              {/* English Translation */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-gray-800 font-medium text-center">
                  "{example.english}"
                </p>
              </div>

              {/* Usage Information */}
              <div className="space-y-2">
                <p className="text-sm text-gray-700">
                  <strong>Usage:</strong> {example.usage}
                </p>
                
                {example.culturalContext && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-sm text-amber-800">
                      <strong>Cultural Context:</strong> {example.culturalContext}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-pink-300 text-pink-700 hover:bg-pink-50"
                  onClick={() => copyToClipboard(example.arabic, `${example.id}-arabic`)}
                >
                  Copy Arabic
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-pink-300 text-pink-700 hover:bg-pink-50"
                  onClick={() => onTextSelect?.(example)}
                >
                  Use in Design
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tips Section */}
      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
        <h4 className="font-semibold text-pink-900 mb-3">💡 Text Selection Tips</h4>
        <ul className="text-pink-700 text-sm space-y-2">
          <li>• <strong>Names:</strong> Always verify spelling with family members</li>
          <li>• <strong>Religious Text:</strong> Consult with religious authorities for accuracy</li>
          <li>• <strong>Modern Phrases:</strong> Consider your audience's Arabic literacy level</li>
          <li>• <strong>Length:</strong> Shorter text works better for elegant calligraphy</li>
          <li>• <strong>Cultural Sensitivity:</strong> Ensure appropriateness for your guest demographics</li>
        </ul>
      </div>
    </div>
  )
}