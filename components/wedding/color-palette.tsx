'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Palette } from 'lucide-react'

interface ColorScheme {
  name: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
  usage: string
  culturalNote?: string
}

const WEDDING_COLOR_SCHEMES: ColorScheme[] = [
  {
    name: "Royal Gold & Burgundy",
    description: "Luxurious traditional combination perfect for evening ceremonies",
    colors: {
      primary: "#B8860B", // Dark gold
      secondary: "#8B0000", // Dark red
      accent: "#FFD700", // Gold
      background: "#FFF8DC" // Cornsilk
    },
    usage: "Ideal for formal invitations, evening receptions, and traditional themes",
    culturalNote: "Gold symbolizes prosperity and success in many Arab cultures"
  },
  {
    name: "Emerald & Pearl",
    description: "Sophisticated green tones with elegant white accents",
    colors: {
      primary: "#50C878", // Emerald
      secondary: "#013220", // Dark green
      accent: "#F0F8F0", // Mint cream
      background: "#FFFFFF" // White
    },
    usage: "Perfect for spring weddings, garden venues, and modern ceremonies",
    culturalNote: "Green represents paradise and new beginnings in Islamic tradition"
  },
  {
    name: "Rose Gold & Blush",
    description: "Romantic modern palette with warm metallic touches",
    colors: {
      primary: "#E8B4B8", // Rose gold
      secondary: "#D4A574", // Antique brass
      accent: "#FFF0F5", // Lavender blush
      background: "#FFFAF0" // Floral white
    },
    usage: "Ideal for daytime ceremonies, intimate gatherings, and contemporary styles"
  },
  {
    name: "Sapphire & Silver",
    description: "Royal blue with elegant metallic accents",
    colors: {
      primary: "#0F52BA", // Sapphire
      secondary: "#C0C0C0", // Silver
      accent: "#E6F3FF", // Alice blue
      background: "#F8F8FF" // Ghost white
    },
    usage: "Perfect for formal evening events and regal themed celebrations",
    culturalNote: "Blue represents truth and wisdom in Middle Eastern cultures"
  },
  {
    name: "Sunset Amber",
    description: "Warm earth tones inspired by desert landscapes",
    colors: {
      primary: "#FF8C00", // Dark orange
      secondary: "#8B4513", // Saddle brown
      accent: "#FFEBCD", // Blanched almond
      background: "#FFF8DC" // Cornsilk
    },
    usage: "Great for outdoor ceremonies, desert venues, and rustic themes"
  },
  {
    name: "Classic Black & Gold",
    description: "Timeless elegance with sophisticated contrast",
    colors: {
      primary: "#000000", // Black
      secondary: "#FFD700", // Gold
      accent: "#F5F5DC", // Beige
      background: "#FFFFFF" // White
    },
    usage: "Perfect for luxury brands, formal events, and contemporary designs"
  }
]

interface WeddingColorPaletteProps {
  onColorSchemeSelect?: (scheme: ColorScheme) => void
  selectedScheme?: string
}

export function WeddingColorPalette({ onColorSchemeSelect, selectedScheme }: WeddingColorPaletteProps) {
  const [selected, setSelected] = useState<string>(selectedScheme || "")

  const handleSelect = (scheme: ColorScheme) => {
    setSelected(scheme.name)
    onColorSchemeSelect?.(scheme)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
          <Palette className="h-6 w-6 text-pink-600" />
          Wedding Color Palettes
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our curated color schemes designed specifically for Arabic wedding invitations. 
          Each palette considers cultural significance and printing considerations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WEDDING_COLOR_SCHEMES.map((scheme) => (
          <Card 
            key={scheme.name} 
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-lg border-2",
              selected === scheme.name 
                ? "border-pink-500 shadow-lg" 
                : "border-gray-200 hover:border-pink-300"
            )}
            onClick={() => handleSelect(scheme)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">{scheme.name}</CardTitle>
                {selected === scheme.name && (
                  <div className="h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600">{scheme.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Color Swatches */}
              <div className="grid grid-cols-4 gap-2">
                <div className="space-y-1">
                  <div 
                    className="h-12 w-full rounded border shadow-sm"
                    style={{ backgroundColor: scheme.colors.primary }}
                  />
                  <p className="text-xs text-gray-500">Primary</p>
                </div>
                <div className="space-y-1">
                  <div 
                    className="h-12 w-full rounded border shadow-sm"
                    style={{ backgroundColor: scheme.colors.secondary }}
                  />
                  <p className="text-xs text-gray-500">Secondary</p>
                </div>
                <div className="space-y-1">
                  <div 
                    className="h-12 w-full rounded border shadow-sm"
                    style={{ backgroundColor: scheme.colors.accent }}
                  />
                  <p className="text-xs text-gray-500">Accent</p>
                </div>
                <div className="space-y-1">
                  <div 
                    className="h-12 w-full rounded border shadow-sm"
                    style={{ backgroundColor: scheme.colors.background }}
                  />
                  <p className="text-xs text-gray-500">Background</p>
                </div>
              </div>

              {/* Usage Information */}
              <div className="space-y-2">
                <p className="text-sm text-gray-700">{scheme.usage}</p>
                
                {scheme.culturalNote && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-sm text-amber-800">
                      <strong>Cultural Note:</strong> {scheme.culturalNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <Button
                variant={selected === scheme.name ? "default" : "outline"}
                className={cn(
                  "w-full",
                  selected === scheme.name 
                    ? "bg-pink-600 hover:bg-pink-700" 
                    : "border-pink-300 text-pink-700 hover:bg-pink-50"
                )}
                onClick={(e) => {
                  e.stopPropagation()
                  handleSelect(scheme)
                }}
              >
                {selected === scheme.name ? "Selected" : "Use This Palette"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selected && (
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 text-center">
          <h4 className="font-semibold text-pink-900 mb-2">
            {WEDDING_COLOR_SCHEMES.find(s => s.name === selected)?.name} Selected
          </h4>
          <p className="text-pink-700 text-sm mb-3">
            This color scheme will be applied to your invitation design. You can still customize 
            individual elements in the generator below.
          </p>
          <Badge variant="secondary" className="bg-pink-100 text-pink-800">
            Ready to Design
          </Badge>
        </div>
      )}
    </div>
  )
}