'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Copy, Check, Building2, Sparkles, Briefcase, Store, Heart, Palette, Search } from 'lucide-react'

interface BusinessName {
  id: string
  category: 'modern-business' | 'traditional-craft' | 'luxury-brand' | 'food-hospitality' | 'retail-commerce' | 'creative-arts'
  arabic: string
  transliteration: string
  english: string
  meaning: string
  style_notes: string
  industry_fit: string[]
  complexity: 'simple' | 'moderate' | 'complex'
  memorability: 'high' | 'medium' | 'low'
}

const BUSINESS_NAME_SUGGESTIONS: BusinessName[] = [
  // Modern Business
  {
    id: 'modern-1',
    category: 'modern-business',
    arabic: 'شركة التقدم',
    transliteration: 'Sharikat at-Taqaddum',
    english: 'Progress Company',
    meaning: 'Advancement, forward movement, professional development',
    style_notes: 'Clean, professional appearance with strong consonants',
    industry_fit: ['Technology', 'Consulting', 'Finance', 'Engineering'],
    complexity: 'simple',
    memorability: 'high'
  },
  {
    id: 'modern-2',
    category: 'modern-business',
    arabic: 'دار الابتكار',
    transliteration: 'Dar al-Ibtikar',
    english: 'House of Innovation',
    meaning: 'Center of creative solutions and new ideas',
    style_notes: 'Balanced letterforms, professional yet creative',
    industry_fit: ['Startups', 'R&D', 'Design', 'Tech Solutions'],
    complexity: 'moderate',
    memorability: 'high'
  },
  {
    id: 'modern-3',
    category: 'modern-business',
    arabic: 'مجموعة النور',
    transliteration: 'Majmuʿat an-Nur',
    english: 'Light Group',
    meaning: 'Illumination, guidance, enlightenment in business',
    style_notes: 'Strong visual impact with flowing curves',
    industry_fit: ['Consulting', 'Education', 'Media', 'Publishing'],
    complexity: 'moderate',
    memorability: 'high'
  },

  // Traditional Craft
  {
    id: 'traditional-1',
    category: 'traditional-craft',
    arabic: 'بيت الحرف',
    transliteration: 'Bayt al-Hiraf',
    english: 'House of Crafts',
    meaning: 'Traditional artisanal workshop and heritage skills',
    style_notes: 'Classical letterforms perfect for traditional calligraphy',
    industry_fit: ['Handicrafts', 'Art', 'Cultural Heritage', 'Workshops'],
    complexity: 'simple',
    memorability: 'high'
  },
  {
    id: 'traditional-2',
    category: 'traditional-craft',
    arabic: 'ورشة التراث',
    transliteration: 'Warshiat at-Turath',
    english: 'Heritage Workshop',
    meaning: 'Preserving and creating traditional cultural arts',
    style_notes: 'Elegant connected script emphasizing cultural authenticity',
    industry_fit: ['Traditional Arts', 'Cultural Centers', 'Museums', 'Galleries'],
    complexity: 'moderate',
    memorability: 'medium'
  },
  {
    id: 'traditional-3',
    category: 'traditional-craft',
    arabic: 'فن الأصالة',
    transliteration: 'Fann al-Asala',
    english: 'Art of Authenticity',
    meaning: 'Genuine traditional artistic expression',
    style_notes: 'Ornamental flourishes showcasing artistic mastery',
    industry_fit: ['Art Galleries', 'Traditional Crafts', 'Cultural Education'],
    complexity: 'moderate',
    memorability: 'high'
  },

  // Luxury Brand
  {
    id: 'luxury-1',
    category: 'luxury-brand',
    arabic: 'دار الفخامة',
    transliteration: 'Dar al-Fakhamah',
    english: 'House of Luxury',
    meaning: 'Premium quality, sophistication, and exclusivity',
    style_notes: 'Refined letterforms with sophisticated spacing',
    industry_fit: ['Jewelry', 'Fashion', 'High-end Services', 'Luxury Goods'],
    complexity: 'moderate',
    memorability: 'high'
  },
  {
    id: 'luxury-2',
    category: 'luxury-brand',
    arabic: 'مجوهرات الملوك',
    transliteration: 'Mujawaharat al-Muluk',
    english: 'Royal Jewelry',
    meaning: 'Precious stones and metals fit for royalty',
    style_notes: 'Elegant script conveying prestige and value',
    industry_fit: ['Jewelry', 'Precious Metals', 'Luxury Accessories'],
    complexity: 'complex',
    memorability: 'high'
  },
  {
    id: 'luxury-3',
    category: 'luxury-brand',
    arabic: 'عطور الشرق',
    transliteration: 'ʿUtur ash-Sharq',
    english: 'Fragrances of the East',
    meaning: 'Oriental perfumes and luxury scents',
    style_notes: 'Flowing curves evoking sensuality and elegance',
    industry_fit: ['Perfumes', 'Cosmetics', 'Luxury Beauty'],
    complexity: 'moderate',
    memorability: 'high'
  },

  // Food & Hospitality
  {
    id: 'food-1',
    category: 'food-hospitality',
    arabic: 'مطعم الأصالة',
    transliteration: 'Matʿam al-Asala',
    english: 'Authenticity Restaurant',
    meaning: 'Traditional, genuine dining experience',
    style_notes: 'Warm, inviting letterforms perfect for hospitality',
    industry_fit: ['Restaurants', 'Traditional Cuisine', 'Family Dining'],
    complexity: 'moderate',
    memorability: 'high'
  },
  {
    id: 'food-2',
    category: 'food-hospitality',
    arabic: 'قهوة الشرق',
    transliteration: 'Qahwat ash-Sharq',
    english: 'Eastern Coffee',
    meaning: 'Traditional Middle Eastern coffee culture',
    style_notes: 'Comfortable, readable script evoking warmth',
    industry_fit: ['Coffee Shops', 'Cafes', 'Traditional Beverages'],
    complexity: 'simple',
    memorability: 'high'
  },
  {
    id: 'food-3',
    category: 'food-hospitality',
    arabic: 'حلويات البيت',
    transliteration: 'Halawiyat al-Bayt',
    english: 'Home Sweets',
    meaning: 'Traditional homemade desserts and confections',
    style_notes: 'Friendly, approachable letterforms for family business',
    industry_fit: ['Bakeries', 'Dessert Shops', 'Traditional Sweets'],
    complexity: 'moderate',
    memorability: 'high'
  },

  // Retail & Commerce
  {
    id: 'retail-1',
    category: 'retail-commerce',
    arabic: 'سوق الذهب',
    transliteration: 'Suq adh-Dhahab',
    english: 'Gold Market',
    meaning: 'Marketplace for precious metals and jewelry',
    style_notes: 'Bold, visible lettering perfect for storefronts',
    industry_fit: ['Jewelry Stores', 'Gold Trading', 'Precious Metals'],
    complexity: 'simple',
    memorability: 'high'
  },
  {
    id: 'retail-2',
    category: 'retail-commerce',
    arabic: 'متجر العصر',
    transliteration: 'Matjar al-ʿAsr',
    english: 'Modern Store',
    meaning: 'Contemporary retail with current trends',
    style_notes: 'Clean, modern script suitable for diverse products',
    industry_fit: ['Fashion', 'Electronics', 'General Retail', 'Department Stores'],
    complexity: 'simple',
    memorability: 'medium'
  },

  // Creative & Arts
  {
    id: 'creative-1',
    category: 'creative-arts',
    arabic: 'استوديو الفن',
    transliteration: 'Istudio al-Fann',
    english: 'Art Studio',
    meaning: 'Creative workspace for artistic expression',
    style_notes: 'Artistic letterforms showing creative flair',
    industry_fit: ['Art Studios', 'Design Agencies', 'Creative Services'],
    complexity: 'simple',
    memorability: 'high'
  },
  {
    id: 'creative-2',
    category: 'creative-arts',
    arabic: 'مركز الإبداع',
    transliteration: 'Markaz al-Ibdaʿ',
    english: 'Creativity Center',
    meaning: 'Hub for innovative and creative activities',
    style_notes: 'Dynamic script conveying innovation and artistry',
    industry_fit: ['Design Centers', 'Innovation Hubs', 'Creative Education'],
    complexity: 'moderate',
    memorability: 'high'
  }
]

const CATEGORIES = [
  { key: 'modern-business', label: 'Modern Business', icon: Building2 },
  { key: 'traditional-craft', label: 'Traditional Craft', icon: Sparkles },
  { key: 'luxury-brand', label: 'Luxury Brand', icon: Briefcase },
  { key: 'food-hospitality', label: 'Food & Hospitality', icon: Heart },
  { key: 'retail-commerce', label: 'Retail & Commerce', icon: Store },
  { key: 'creative-arts', label: 'Creative & Arts', icon: Palette }
] as const

interface BusinessNameSuggestionsProps {
  selectedCategory?: string
  onNameSelect?: (name: BusinessName) => void
}

export function BusinessNameSuggestions({ selectedCategory, onNameSelect }: BusinessNameSuggestionsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategory || 'modern-business')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredNames = BUSINESS_NAME_SUGGESTIONS
    .filter(name => name.category === activeCategory)
    .filter(name => 
      searchTerm === '' || 
      name.arabic.includes(searchTerm) ||
      name.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.meaning.toLowerCase().includes(searchTerm.toLowerCase())
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

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'simple': return 'bg-green-100 text-green-800'
      case 'moderate': return 'bg-yellow-100 text-yellow-800'
      case 'complex': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getMemorabilityColor = (memorability: string) => {
    switch (memorability) {
      case 'high': return 'bg-blue-100 text-blue-800'
      case 'medium': return 'bg-purple-100 text-purple-800'
      case 'low': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
          <Building2 className="h-6 w-6 text-blue-600" />
          Business Name Suggestions
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professionally curated Arabic business names with cultural significance, 
          pronunciation guides, and industry-specific recommendations.
        </p>
      </div>

      {/* Search and Category Selector */}
      <div className="space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search names, meanings, or industries..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((category) => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              size="sm"
              className={cn(
                "flex items-center gap-2",
                activeCategory === category.key 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "border-blue-300 text-blue-700 hover:bg-blue-50"
              )}
              onClick={() => setActiveCategory(category.key)}
            >
              <category.icon className="h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Names Grid */}
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredNames.map((name) => (
          <Card key={name.id} className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className={getComplexityColor(name.complexity)}>
                      {name.complexity}
                    </Badge>
                    <Badge className={getMemorabilityColor(name.memorability)}>
                      {name.memorability} recall
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  onClick={() => copyToClipboard(name.arabic, name.id)}
                >
                  {copiedId === name.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Arabic Name Display */}
              <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-2 leading-relaxed" dir="rtl">
                  {name.arabic}
                </div>
                <div className="text-sm text-gray-600 italic mb-1">
                  {name.transliteration}
                </div>
                <div className="text-sm font-medium text-blue-700">
                  "{name.english}"
                </div>
              </div>

              {/* Meaning and Style Notes */}
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Meaning & Significance:</h4>
                  <p className="text-sm text-gray-600">{name.meaning}</p>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-green-700 mb-1">Design Notes:</h4>
                  <p className="text-sm text-green-600">{name.style_notes}</p>
                </div>

                {/* Industry Fit */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Best For:</h4>
                  <div className="flex flex-wrap gap-1">
                    {name.industry_fit.map((industry, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-blue-300 text-blue-700 hover:bg-blue-50"
                  onClick={() => copyToClipboard(name.arabic, `${name.id}-arabic`)}
                >
                  Copy Arabic
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => onNameSelect?.(name)}
                >
                  Use This Name
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredNames.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No names found matching your search criteria.</p>
          <Button 
            variant="outline" 
            className="mt-2" 
            onClick={() => setSearchTerm('')}
          >
            Clear Search
          </Button>
        </div>
      )}

      {/* Tips Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-900 mb-3">💡 Choosing the Right Business Name</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-medium text-blue-800 mb-2">Consider These Factors:</h5>
            <ul className="text-blue-700 space-y-1">
              <li>• Pronunciation ease for your target market</li>
              <li>• Cultural appropriateness and meaning</li>
              <li>• Memorability and brand recognition</li>
              <li>• Logo design complexity and scalability</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-blue-800 mb-2">Before Finalizing:</h5>
            <ul className="text-blue-700 space-y-1">
              <li>• Check domain availability</li>
              <li>• Verify trademark status</li>
              <li>• Test pronunciation with target audience</li>
              <li>• Consider bilingual variations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}