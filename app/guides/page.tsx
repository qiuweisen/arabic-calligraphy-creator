import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ArrowRight, Star, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Guides | Complete Learning Resources & Tutorials",
  description: "Comprehensive guides for learning Arabic calligraphy, font selection, typography trends, and design principles. From beginner to advanced tutorials.",
  keywords: "arabic calligraphy guides, arabic typography tutorials, font selection guide, calligraphy learning resources",
}

const GUIDES = [
  {
    title: "Complete Beginner Guide",
    description: "Start your Arabic calligraphy journey with our comprehensive beginner guide covering fundamentals, tools, and step-by-step learning path.",
    href: "/guides/arabic-calligraphy-beginner-guide",
    difficulty: "Beginner",
    duration: "2-3 weeks",
    popular: true
  },
  {
    title: "Arabic Font Comparison",
    description: "Compare different Arabic fonts side-by-side with detailed analysis of characteristics, use cases, and design applications.",
    href: "/guides/arabic-font-comparison", 
    difficulty: "Intermediate",
    duration: "1 week",
    popular: false
  },
  {
    title: "Best Arabic Fonts 2025",
    description: "Discover the top Arabic fonts for 2025 with expert recommendations for different design needs and applications.",
    href: "/guides/best-arabic-fonts-2025",
    difficulty: "Beginner",
    duration: "2-3 days",
    popular: true
  },
  {
    title: "Typography Trends 2025",
    description: "Stay ahead with the latest Arabic typography trends, emerging styles, and design innovations for 2025.",
    href: "/guides/arabic-typography-trends-2025",
    difficulty: "Advanced",
    duration: "1 week",
    popular: false
  }
]

export default function GuidesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Arabic Calligraphy Guides",
    "description": "Comprehensive guides for learning Arabic calligraphy, font selection, typography trends, and design principles. From beginner to advanced tutorials.",
    "url": "https://arabic-calligraphy-generator.com/guides",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": GUIDES.map((guide, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "HowTo",
          "name": guide.title,
          "description": guide.description,
          "url": `https://arabic-calligraphy-generator.com${guide.href}`,
          "totalTime": guide.duration,
          "skillLevel": guide.difficulty
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
          "name": "Guides",
          "item": "https://arabic-calligraphy-generator.com/guides"
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Arabic Calligraphy Guides
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Master Arabic calligraphy with our comprehensive guides. From beginner fundamentals to advanced 
                typography trends, find everything you need to create beautiful Arabic designs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/guides/arabic-calligraphy-beginner-guide">Start Learning</Link>
                </Button>
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/">Try Generator</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {GUIDES.map((guide, index) => (
                <Card key={index} className="border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all relative">
                  {guide.popular && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="mt-1">
                        <BookOpen className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">{guide.title}</h3>
                        <p className="text-blue-700 text-sm mb-4 leading-relaxed">{guide.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {guide.difficulty}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {guide.duration}
                        </div>
                      </div>
                    </div>
                    
                    <Link 
                      href={guide.href}
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      Read Guide
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Creating?</h2>
              <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                Put your knowledge into practice with our free Arabic calligraphy generator.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-white text-blue-900 hover:bg-gray-100">
                  <Link href="/">Create Calligraphy</Link>
                </Button>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/tutorials">View Tutorials</Link>
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
