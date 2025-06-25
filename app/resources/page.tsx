import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Download, Lightbulb, ArrowRight, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Arabic Calligraphy Resources | Templates & Design Assets",
  description: "Download free Arabic calligraphy resources including design templates, font collections, and creative assets for your typography projects.",
  keywords: "free arabic calligraphy resources, free arabic fonts download, calligraphy templates, arabic design assets, free typography resources",
}

const RESOURCES = [
  {
    title: "Free Arabic Fonts",
    description: "Access our curated collection of high-quality free Arabic fonts suitable for both personal and commercial projects.",
    icon: <Download className="h-8 w-8 text-blue-600" />,
    href: "/resources/free-arabic-fonts",
    color: "blue",
    popular: false
  }
]

export default function ResourcesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Arabic Calligraphy Resources",
    "description": "Free Arabic calligraphy resources including design templates, font downloads, and creative inspiration for your projects.",
    "url": "https://arabic-calligraphy-generator.com/resources",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": RESOURCES.map((resource, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": resource.title,
          "description": resource.description,
          "url": `https://arabic-calligraphy-generator.com${resource.href}`,
          "genre": "Arabic Calligraphy Resource"
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://arabic-calligraphy-generator.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://arabic-calligraphy-generator.com/resources"
        }
      ]
    }
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        border: "border-purple-200",
        hoverBorder: "hover:border-purple-400",
        text: "text-purple-800",
        link: "text-purple-600 hover:text-purple-800"
      },
      green: {
        border: "border-green-200", 
        hoverBorder: "hover:border-green-400",
        text: "text-green-800",
        link: "text-green-600 hover:text-green-800"
      },
      blue: {
        border: "border-blue-200",
        hoverBorder: "hover:border-blue-400", 
        text: "text-blue-800",
        link: "text-blue-600 hover:text-blue-800"
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Arabic Calligraphy Resources
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Everything you need to create stunning Arabic calligraphy. From design inspiration and templates 
                to free fonts and creative resources - all in one place.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/">Create Design</Link>
                </Button>
                <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="/">Create Now</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {RESOURCES.map((resource, index) => {
                const colors = getColorClasses(resource.color)
                
                return (
                  <Card key={index} className={`${colors.border} ${colors.hoverBorder} hover:shadow-lg transition-all relative`}>
                    {resource.popular && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <div className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </div>
                      </div>
                    )}
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        {resource.icon}
                      </div>
                      <h3 className={`text-xl font-bold ${colors.text} mb-3`}>{resource.title}</h3>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{resource.description}</p>
                      <Link 
                        href={resource.href}
                        className={`text-sm font-medium ${colors.link} flex items-center justify-center`}
                      >
                        Explore Resource
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-lg p-8 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Why Use Our Resources?</h2>
                <p className="text-green-700 max-w-2xl mx-auto">
                  All our resources are carefully curated, culturally authentic, and designed to help you create 
                  professional Arabic calligraphy with confidence.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">High Quality</h3>
                  <p className="text-sm text-green-700">Professional-grade resources suitable for commercial use</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">Culturally Authentic</h3>
                  <p className="text-sm text-green-700">Respectful and accurate representation of Arabic culture</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">Easy to Use</h3>
                  <p className="text-sm text-green-700">Ready-to-use formats with clear instructions</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-green-900 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Start Creating Today</h2>
              <p className="text-green-200 mb-6 max-w-2xl mx-auto">
                Use our resources with our free online Arabic calligraphy generator to create beautiful designs instantly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-white text-green-900 hover:bg-gray-100">
                  <Link href="/">Try Generator</Link>
                </Button>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
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
