"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Font {
  name: string
  value: string
  category?: string
}

interface FontPreviewProps {
  fonts: Font[]
  sampleText: string
}

export function FontPreview({ fonts, sampleText }: FontPreviewProps) {
  // Group fonts by category
  const categories = fonts.reduce<Record<string, Font[]>>((acc, font) => {
    const category = font.category || "Other"
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(font)
    return acc
  }, {})

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-amber-800 mb-3">Font Preview</h3>

      <Tabs defaultValue={Object.keys(categories)[0]} className="w-full">
        <TabsList className="grid" style={{ gridTemplateColumns: `repeat(${Object.keys(categories).length}, 1fr)` }}>
          {Object.keys(categories).map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(categories).map(([category, categoryFonts]) => (
          <TabsContent key={category} value={category}>
            <ScrollArea className="h-[300px]">
              <div className="space-y-4 py-2">
                {categoryFonts.map((font) => (
                  <div key={font.name} className="space-y-1">
                    <p className="text-sm font-medium text-amber-800">{font.name}</p>
                    <div
                      dir="rtl"
                      className="p-3 bg-amber-50 border border-amber-100 rounded-md text-center"
                      style={{ fontFamily: font.value, fontSize: "22px" }}
                    >
                      {sampleText}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
