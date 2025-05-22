"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Type,
  Palette,
  Download,
  Share2,
  Sparkles,
  Smartphone,
  Languages,
  Keyboard,
  ImageIcon,
  Layers,
  Sliders,
  FileText,
} from "lucide-react"

export function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState("typography")

  const features = {
    typography: [
      {
        icon: <Type className="h-6 w-6 text-amber-600" />,
        title: "13 Premium Arabic Fonts",
        description:
          "Choose from a curated selection of high-quality Arabic fonts, including traditional, modern, and decorative styles.",
      },
      {
        icon: <Keyboard className="h-6 w-6 text-amber-600" />,
        title: "Virtual Arabic Keyboard",
        description: "Type Arabic text easily with our built-in virtual keyboard, no special software required.",
      },
      {
        icon: <Languages className="h-6 w-6 text-amber-600" />,
        title: "Kashida Control",
        description:
          "Adjust letter elongation (Kashida) for authentic Arabic typography and perfect text justification.",
      },
      {
        icon: <Sliders className="h-6 w-6 text-amber-600" />,
        title: "Advanced Typography Controls",
        description: "Fine-tune letter spacing, line height, font weight, and more for perfect text composition.",
      },
    ],
    design: [
      {
        icon: <Palette className="h-6 w-6 text-amber-600" />,
        title: "Gradient Text Effects",
        description: "Create stunning gradient text with customizable colors and directions for eye-catching designs.",
      },
      {
        icon: <Layers className="h-6 w-6 text-amber-600" />,
        title: "Text Shadow & Border",
        description: "Add customizable shadows and borders to your text for depth and emphasis.",
      },
      {
        icon: <ImageIcon className="h-6 w-6 text-amber-600" />,
        title: "Background Options",
        description: "Choose from patterns, solid colors, or upload your own background images for unique designs.",
      },
      {
        icon: <Sparkles className="h-6 w-6 text-amber-600" />,
        title: "Template Gallery",
        description: "Browse and use our collection of pre-designed templates for common Arabic phrases and quotes.",
      },
    ],
    export: [
      {
        icon: <Download className="h-6 w-6 text-amber-600" />,
        title: "Multiple Export Formats",
        description: "Download your designs as PNG with transparency or SVG for perfect scaling in any application.",
      },
      {
        icon: <Share2 className="h-6 w-6 text-amber-600" />,
        title: "Direct Social Sharing",
        description: "Share your creations directly to social media platforms with a single click.",
      },
      {
        icon: <FileText className="h-6 w-6 text-amber-600" />,
        title: "High-Resolution Output",
        description: "Generate high-quality images suitable for both digital and print applications.",
      },
      {
        icon: <Smartphone className="h-6 w-6 text-amber-600" />,
        title: "Mobile-Friendly",
        description: "Create and download designs on any device with our fully responsive interface.",
      },
    ],
  }

  return (
    <div>
      <Tabs defaultValue="typography" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>

        {Object.entries(features).map(([key, featureList]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featureList.map((feature, index) => (
                <Card key={index} className="border-amber-200 bg-white hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">{feature.title}</h3>
                    <p className="text-amber-700">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
