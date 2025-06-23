import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, ArrowRight, Star, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Tools | Color Palette Generator & Design Tools",
  description: "Professional Arabic calligraphy tools including color palette generator, font selector, and design utilities for creating beautiful Arabic typography.",
  keywords: "arabic calligraphy tools, color palette generator, arabic design tools, typography tools",
}

const TOOLS = [
  {
    title: "Color Palette Generator",
    description: "Generate beautiful color palettes specifically designed for Arabic calligraphy and Islamic art. Includes traditional and modern color schemes with cultural significance.",
    icon: <Palette className="h-8 w-8 text-cyan-600" />,
    href: "/tools/color-palette-generator",
    features: ["Traditional Islamic Colors", "Modern Design Palettes", "Accessibility Guidelines", "Cultural Color Meanings"],
    popular: true
  }
]

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Arabic Calligraphy Tools
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Professional tools designed specifically for Arabic calligraphy and Islamic design. 
                Create beautiful, culturally authentic designs with our specialized utilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <Link href="/tools/color-palette-generator">Try Color Tool</Link>
                </Button>
                <Button asChild variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                  <Link href="/">Main Generator</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-12">
              {TOOLS.map((tool, index) => (
                <Card key={index} className="border-cyan-200 hover:border-cyan-400 hover:shadow-lg transition-all relative">
                  {tool.popular && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      {/* Icon and Title */}
                      <div className="text-center md:text-left">
                        <div className="mb-4 flex justify-center md:justify-start">
                          {tool.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-cyan-800 mb-3">{tool.title}</h3>
                        <p className="text-cyan-700 text-sm leading-relaxed">{tool.description}</p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {tool.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <Zap className="h-3 w-3 text-cyan-600 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action */}
                      <div className="text-center">
                        <Link href={tool.href}>
                          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 mb-3">
                            Use Tool <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <p className="text-xs text-gray-500">Free to use</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon Section */}
            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 rounded-lg p-8 mb-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-cyan-800 mb-4">More Tools Coming Soon</h2>
                <p className="text-cyan-700 mb-6 max-w-2xl mx-auto">
                  We're working on additional tools to enhance your Arabic calligraphy experience. 
                  Stay tuned for font comparison tools, layout generators, and more!
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="bg-white rounded-lg p-4 border border-cyan-200">
                    <h3 className="font-semibold text-cyan-800 mb-2">Font Comparison Tool</h3>
                    <p className="text-cyan-600">Compare Arabic fonts side-by-side</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-cyan-200">
                    <h3 className="font-semibold text-cyan-800 mb-2">Layout Generator</h3>
                    <p className="text-cyan-600">Create professional layouts automatically</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-cyan-200">
                    <h3 className="font-semibold text-cyan-800 mb-2">Text Analyzer</h3>
                    <p className="text-cyan-600">Analyze Arabic text for design optimization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-cyan-900 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Create Beautiful Calligraphy?</h2>
              <p className="text-cyan-200 mb-6 max-w-2xl mx-auto">
                Use our tools alongside our main Arabic calligraphy generator to create professional designs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-white text-cyan-900 hover:bg-gray-100">
                  <Link href="/">Main Generator</Link>
                </Button>
                <Button asChild variant="outline" className="border-cyan-400 text-white hover:bg-cyan-800">
                  <Link href="/tutorials">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
