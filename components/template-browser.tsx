"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Template {
  text: string
  translation?: string
  font?: string
  color?: string
  bg?: string
}

interface TemplateBrowserProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (template: Template) => void
  templates: Template[]
}

export function TemplateBrowser({ isOpen, onClose, onSelect, templates }: TemplateBrowserProps) {
  // Group templates by category
  const categories = {
    "Common Phrases": templates.slice(0, 4),
    "Quranic Verses": templates.slice(4, 8),
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold text-amber-800">Template Gallery</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="Common Phrases" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            {Object.keys(categories).map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(categories).map(([category, categoryTemplates]) => (
            <TabsContent key={category} value={category}>
              <ScrollArea className="h-[400px] rounded-md border border-amber-100 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categoryTemplates.map((template, index) => (
                    <Card
                      key={index}
                      className="p-4 cursor-pointer hover:shadow-md transition-shadow border-amber-100 bg-gradient-to-r from-amber-50 to-white"
                      onClick={() => onSelect(template)}
                    >
                      <div
                        dir="rtl"
                        className="text-center py-2 font-arabic"
                        style={{
                          fontFamily: template.font || "'Amiri', serif",
                          fontSize: "24px",
                          color: template.color || "#8B5A2B",
                        }}
                      >
                        {template.text}
                      </div>
                      {template.translation && (
                        <div className="text-xs text-center text-amber-700 mt-2">{template.translation}</div>
                      )}
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
