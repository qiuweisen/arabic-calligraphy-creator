'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Info, Heart, Book, CheckCircle, Copy, Check } from 'lucide-react'

interface ReligiousText {
  id: string
  category: 'quran' | 'hadith' | 'dhikr' | 'dua' | 'names'
  arabic: string
  transliteration: string
  english: string
  reference?: string
  spiritual_significance: string
  artistic_notes: string
  usage_guidelines: string
  sensitivity_level: 'high' | 'medium' | 'low'
  recommended_contexts: string[]
}

const RELIGIOUS_TEXTS: ReligiousText[] = [
  // Allah's Names (Asma ul-Husna)
  {
    id: 'names-1',
    category: 'names',
    arabic: 'الله',
    transliteration: 'Allah',
    english: 'Allah (God)',
    spiritual_significance: 'The name of God in Islam, representing unity and divine essence',
    artistic_notes: 'Often rendered in beautiful calligraphy, central to Islamic art',
    usage_guidelines: 'Treat with utmost respect, place in honored positions',
    sensitivity_level: 'high',
    recommended_contexts: ['Religious art', 'Mosque decoration', 'Spiritual meditation']
  },
  {
    id: 'names-2',
    category: 'names',
    arabic: 'الرحمن الرحيم',
    transliteration: 'Ar-Rahman Ar-Rahim',
    english: 'The Most Gracious, The Most Merciful',
    spiritual_significance: 'Two of the most frequently mentioned attributes of Allah',
    artistic_notes: 'Beautiful flowing script emphasizing divine mercy and compassion',
    usage_guidelines: 'Appropriate for all Islamic artistic contexts',
    sensitivity_level: 'high',
    recommended_contexts: ['Islamic calligraphy', 'Religious education', 'Spiritual art']
  },
  {
    id: 'names-3',
    category: 'names',
    arabic: 'محمد رسول الله',
    transliteration: 'Muhammad Rasul Allah',
    english: 'Muhammad, Messenger of Allah',
    reference: 'Declaration of faith (Shahada)',
    spiritual_significance: 'Acknowledging Prophet Muhammad as the final messenger',
    artistic_notes: 'Often paired with Allah\'s name in calligraphic compositions',
    usage_guidelines: 'Handle with reverence, often abbreviated as ﷺ',
    sensitivity_level: 'high',
    recommended_contexts: ['Religious art', 'Islamic education', 'Mosque calligraphy']
  },

  // Quranic Verses
  {
    id: 'quran-1',
    category: 'quran',
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    transliteration: 'Bismillahi r-rahmani r-rahim',
    english: 'In the name of Allah, the Most Gracious, the Most Merciful',
    reference: 'Quran 1:1 (Al-Fatiha)',
    spiritual_significance: 'Opening verse of the Quran, begins most chapters',
    artistic_notes: 'Most common Quranic inscription in Islamic art and architecture',
    usage_guidelines: 'Highly sacred, requires proper placement and respect',
    sensitivity_level: 'high',
    recommended_contexts: ['Mosque decoration', 'Islamic art', 'Religious manuscripts']
  },
  {
    id: 'quran-2',
    category: 'quran',
    arabic: 'وَاللَّهُ أَعْلَمُ',
    transliteration: 'Wallahu a\'lam',
    english: 'And Allah knows best',
    reference: 'Common Quranic phrase',
    spiritual_significance: 'Acknowledging Allah\'s supreme knowledge and wisdom',
    artistic_notes: 'Often used to conclude calligraphic works with humility',
    usage_guidelines: 'Appropriate for educational and artistic contexts',
    sensitivity_level: 'medium',
    recommended_contexts: ['Educational materials', 'Scholarly works', 'Artistic compositions']
  },

  // Dhikr (Remembrance)
  {
    id: 'dhikr-1',
    category: 'dhikr',
    arabic: 'سُبْحَانَ اللَّهِ',
    transliteration: 'Subhan Allah',
    english: 'Glory be to Allah',
    spiritual_significance: 'Praise and glorification of Allah, common in daily remembrance',
    artistic_notes: 'Beautiful curved letters suitable for circular compositions',
    usage_guidelines: 'Widely acceptable for artistic and decorative purposes',
    sensitivity_level: 'low',
    recommended_contexts: ['Decorative art', 'Personal meditation', 'Islamic design']
  },
  {
    id: 'dhikr-2',
    category: 'dhikr',
    arabic: 'الْحَمْدُ لِلَّهِ',
    transliteration: 'Alhamdulillah',
    english: 'Praise be to Allah',
    spiritual_significance: 'Expression of gratitude and praise to Allah',
    artistic_notes: 'Balanced composition with strong vertical elements',
    usage_guidelines: 'Appropriate for all artistic and decorative applications',
    sensitivity_level: 'low',
    recommended_contexts: ['Home decoration', 'Artistic expression', 'Gratitude themes']
  },
  {
    id: 'dhikr-3',
    category: 'dhikr',
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    english: 'Allah is Greatest',
    spiritual_significance: 'Declaration of Allah\'s supreme greatness',
    artistic_notes: 'Strong, bold letterforms conveying power and majesty',
    usage_guidelines: 'Handle respectfully, avoid trivial contexts',
    sensitivity_level: 'medium',
    recommended_contexts: ['Religious art', 'Spiritual reflection', 'Islamic decoration']
  },

  // Duas (Supplications)
  {
    id: 'dua-1',
    category: 'dua',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً',
    transliteration: 'Rabbana atina fi\'d-dunya hasanatan',
    english: 'Our Lord, give us good in this world',
    reference: 'Quran 2:201',
    spiritual_significance: 'Comprehensive supplication for worldly and spiritual well-being',
    artistic_notes: 'Flowing script suitable for horizontal compositions',
    usage_guidelines: 'Beautiful for personal and community spaces',
    sensitivity_level: 'medium',
    recommended_contexts: ['Personal spaces', 'Community centers', 'Inspirational art']
  },

  // Hadith Excerpts
  {
    id: 'hadith-1',
    category: 'hadith',
    arabic: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',
    transliteration: 'Innama\'l-a\'malu bi\'n-niyyat',
    english: 'Actions are but by intention',
    reference: 'Sahih Bukhari & Muslim',
    spiritual_significance: 'Foundation principle emphasizing the importance of sincere intention',
    artistic_notes: 'Balanced composition emphasizing the word "intention" (niyyat)',
    usage_guidelines: 'Excellent for educational and motivational contexts',
    sensitivity_level: 'medium',
    recommended_contexts: ['Educational spaces', 'Islamic learning', 'Motivational art']
  }
]

const CATEGORIES = [
  { key: 'names', label: 'Divine Names', icon: Heart, description: 'Allah\'s beautiful names and prophetic references' },
  { key: 'quran', label: 'Quranic Verses', icon: Book, description: 'Sacred verses from the Holy Quran' },
  { key: 'dhikr', label: 'Dhikr & Praise', icon: CheckCircle, description: 'Remembrance and glorification phrases' },
  { key: 'dua', label: 'Supplications', icon: Info, description: 'Beautiful Islamic prayers and supplications' },
  { key: 'hadith', label: 'Hadith Wisdom', icon: AlertTriangle, description: 'Prophetic sayings and wisdom' }
] as const

interface IslamicTextGalleryProps {
  onTextSelect?: (text: ReligiousText) => void
}

export function IslamicTextGallery({ onTextSelect }: IslamicTextGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('dhikr')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filteredTexts = RELIGIOUS_TEXTS.filter(text => text.category === selectedCategory)

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const getSensitivityColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
          <Book className="h-6 w-6 text-emerald-600" />
          Islamic Text Gallery
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Carefully curated Islamic texts with cultural guidance, spiritual significance, 
          and artistic considerations for respectful calligraphic art.
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
                ? "bg-emerald-600 hover:bg-emerald-700" 
                : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
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

      {/* Warning Banner for High Sensitivity Categories */}
      {(selectedCategory === 'quran' || selectedCategory === 'names') && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-1">Sacred Content Notice</h4>
              <p className="text-amber-800 text-sm">
                These texts are highly sacred in Islamic tradition. Please handle with utmost respect, 
                ensure proper placement, and consider consulting with Islamic scholars for public or 
                commercial use. Avoid placing in inappropriate locations.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Texts Grid */}
      <div className="grid gap-6">
        {filteredTexts.map((text) => (
          <Card key={text.id} className="border-emerald-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className={cn("text-xs border", getSensitivityColor(text.sensitivity_level))}>
                      {text.sensitivity_level} sensitivity
                    </Badge>
                    {text.reference && (
                      <Badge variant="outline" className="text-xs">
                        {text.reference}
                      </Badge>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                  onClick={() => copyToClipboard(text.arabic, text.id)}
                >
                  {copiedId === text.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Arabic Text Display */}
              <div className="text-center p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-relaxed" dir="rtl">
                  {text.arabic}
                </div>
                <div className="text-sm text-gray-600 italic mb-2">
                  {text.transliteration}
                </div>
                <div className="text-sm font-medium text-emerald-700">
                  "{text.english}"
                </div>
              </div>

              {/* Spiritual Significance */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">Spiritual Significance:</h4>
                <p className="text-sm text-blue-700">{text.spiritual_significance}</p>
              </div>

              {/* Artistic Notes */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-purple-800 mb-2">Artistic Considerations:</h4>
                <p className="text-sm text-purple-700">{text.artistic_notes}</p>
              </div>

              {/* Usage Guidelines */}
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-amber-800 mb-2">Usage Guidelines:</h4>
                <p className="text-sm text-amber-700">{text.usage_guidelines}</p>
              </div>

              {/* Recommended Contexts */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Recommended Contexts:</h4>
                <div className="flex flex-wrap gap-1">
                  {text.recommended_contexts.map((context, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {context}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  onClick={() => copyToClipboard(text.arabic, `${text.id}-arabic`)}
                >
                  Copy Arabic
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => onTextSelect?.(text)}
                >
                  Use in Design
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cultural Guidelines Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
        <h4 className="font-semibold text-emerald-900 mb-4 flex items-center gap-2">
          <Heart className="h-5 w-5" />
          Cultural & Religious Guidelines
        </h4>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h5 className="font-medium text-emerald-800 mb-2">Respectful Usage:</h5>
            <ul className="text-emerald-700 space-y-1">
              <li>• Place sacred texts in honored positions</li>
              <li>• Avoid commercial trivial applications</li>
              <li>• Ensure clean, dignified presentation</li>
              <li>• Consider cultural context of your audience</li>
              <li>• Maintain accuracy in transcription</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-emerald-800 mb-2">Artistic Considerations:</h5>
            <ul className="text-emerald-700 space-y-1">
              <li>• Use appropriate calligraphic styles</li>
              <li>• Ensure proper Arabic text direction</li>
              <li>• Balance aesthetics with reverence</li>
              <li>• Consider viewing context and purpose</li>
              <li>• Verify religious accuracy when needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}