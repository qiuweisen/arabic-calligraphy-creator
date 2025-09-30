"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const meaningfulPhrases = [
  {
    arabic: "قوة",
    transliteration: "Quwwa",
    meaning: "Strength",
    category: "Virtues",
    placement: "Great for forearm or shoulder"
  },
  {
    arabic: "صبر",
    transliteration: "Sabr", 
    meaning: "Patience",
    category: "Virtues",
    placement: "Popular on wrist or behind ear"
  },
  {
    arabic: "حب",
    transliteration: "Hubb",
    meaning: "Love",
    category: "Emotions",
    placement: "Often chosen for heart area"
  },
  {
    arabic: "سلام",
    transliteration: "Salaam",
    meaning: "Peace",
    category: "Spirituality",
    placement: "Beautiful on collarbone"
  },
  {
    arabic: "حرية",
    transliteration: "Hurriya",
    meaning: "Freedom",
    category: "Life Philosophy",
    placement: "Meaningful on back or chest"
  },
  {
    arabic: "أمل",
    transliteration: "Amal",
    meaning: "Hope",
    category: "Emotions",
    placement: "Delicate for ankle or wrist"
  }
]

export function TattooTextSuggestions() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (error) {
      console.error('Failed to copy text:', error)
    }
  }

  const categories = Array.from(new Set(meaningfulPhrases.map(p => p.category)))

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Popular Meaningful Arabic Words
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          These carefully selected words have deep cultural significance and are commonly chosen for tattoos. 
          Click any word to copy it to the generator above.
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="space-y-3">
          <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            {category}
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meaningfulPhrases
              .filter(phrase => phrase.category === category)
              .map((phrase, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer border-amber-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <div className="text-2xl font-arabic text-amber-800" dir="rtl">
                        {phrase.arabic}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(phrase.arabic, index)}
                        className="text-amber-600 hover:text-amber-700"
                      >
                        {copiedIndex === index ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <Badge variant="secondary" className="text-xs">
                        {phrase.transliteration}
                      </Badge>
                    </div>
                    <p className="font-medium text-gray-900">
                      {phrase.meaning}
                    </p>
                    <p className="text-sm text-gray-600">
                      {phrase.placement}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="font-semibold text-amber-800 mb-2">
          🔍 Need a Custom Translation?
        </h4>
        <p className="text-sm text-amber-700">
          For personal names, quotes, or custom phrases, we recommend consulting with a certified Arabic translator 
          to ensure accuracy and cultural appropriateness before tattooing.
        </p>
      </div>
    </div>
  )
}