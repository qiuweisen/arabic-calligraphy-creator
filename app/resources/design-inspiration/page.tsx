import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Heart, Eye, Bookmark, Filter, Grid, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Arabic Calligraphy Design Inspiration 2025 - Gallery & Creative Ideas | Islamic Art Showcase',
  description: 'Discover stunning Arabic calligraphy designs and Islamic art inspiration. Browse our curated gallery of modern and traditional Arabic typography for creative projects.',
  keywords: 'arabic calligraphy inspiration,islamic design gallery,arabic typography showcase,calligraphy design ideas,islamic art inspiration,arabic design trends',
  openGraph: {
    title: 'Arabic Calligraphy Design Inspiration 2025 - Gallery & Creative Ideas',
    description: 'Discover stunning Arabic calligraphy designs and Islamic art inspiration. Browse our curated gallery of modern and traditional typography.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/resources/design-inspiration',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic Calligraphy Design Inspiration 2025 - Gallery & Creative Ideas',
    description: 'Discover stunning Arabic calligraphy designs and Islamic art inspiration.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/resources/design-inspiration',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Resources', href: '/resources' },
  { name: 'Design Inspiration', href: '/resources/design-inspiration' },
]

export default function DesignInspirationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arabic Calligraphy Design Inspiration 2025 - Gallery & Creative Ideas",
    "description": "Curated collection of Arabic calligraphy design inspiration featuring modern and traditional Islamic art, typography trends, and creative applications",
    "image": "https://arabic-calligraphy-creator.com/design-inspiration-og.png",
    "author": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Creator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Creator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arabic-calligraphy-creator.com/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://arabic-calligraphy-creator.com/resources/design-inspiration"
    }
  }

  const inspirationCategories = [
    {
      title: "Modern Minimalist",
      description: "Clean, contemporary Arabic designs with plenty of white space",
      count: "150+ Designs",
      color: "blue",
      trending: true
    },
    {
      title: "Traditional Islamic",
      description: "Classical calligraphy with traditional patterns and motifs",
      count: "200+ Designs",
      color: "amber",
      trending: false
    },
    {
      title: "Digital Art Fusion",
      description: "Arabic calligraphy combined with modern digital art techniques",
      count: "120+ Designs",
      color: "purple",
      trending: true
    },
    {
      title: "Geometric Patterns",
      description: "Islamic geometric art integrated with Arabic typography",
      count: "180+ Designs",
      color: "green",
      trending: false
    },
    {
      title: "Brand Identity",
      description: "Arabic calligraphy in modern logo and branding applications",
      count: "90+ Designs",
      color: "red",
      trending: true
    },
    {
      title: "Social Media",
      description: "Instagram-ready Arabic designs and quote graphics",
      count: "300+ Designs",
      color: "pink",
      trending: true
    }
  ]

  const featuredDesigns = [
    {
      title: "Bismillah Modern Interpretation",
      artist: "Contemporary Islamic Artist",
      category: "Modern Minimalist",
      description: "A fresh take on the traditional Bismillah with clean typography and subtle geometric elements",
      likes: 2847,
      views: 15632,
      tags: ["Bismillah", "Modern", "Minimalist", "Typography"],
      colorPalette: ["#2C3E50", "#ECF0F1", "#3498DB"],
      preview: "🎨 Modern Bismillah Design"
    },
    {
      title: "Quranic Verse Illumination",
      artist: "Traditional Calligrapher",
      category: "Traditional Islamic",
      description: "Beautifully illuminated Quranic verse with traditional gold leaf and intricate borders",
      likes: 3921,
      views: 22145,
      tags: ["Quran", "Traditional", "Gold", "Illumination"],
      colorPalette: ["#FFD700", "#1E3A8A", "#8B4513"],
      preview: "📜 Illuminated Manuscript"
    },
    {
      title: "Arabic Typography Poster",
      artist: "Graphic Design Studio",
      category: "Digital Art Fusion",
      description: "Bold Arabic typography combined with abstract digital art elements and vibrant colors",
      likes: 1856,
      views: 9874,
      tags: ["Poster", "Digital", "Abstract", "Bold"],
      colorPalette: ["#E74C3C", "#F39C12", "#9B59B6"],
      preview: "🎭 Digital Art Poster"
    },
    {
      title: "Islamic Geometric Logo",
      artist: "Brand Designer",
      category: "Brand Identity",
      description: "Corporate logo featuring Arabic calligraphy within a sophisticated geometric framework",
      likes: 1234,
      views: 7891,
      tags: ["Logo", "Corporate", "Geometric", "Professional"],
      colorPalette: ["#34495E", "#95A5A6", "#BDC3C7"],
      preview: "🏢 Corporate Logo Design"
    }
  ]

  const designTrends2025 = [
    {
      trend: "AI-Enhanced Calligraphy",
      description: "Machine learning algorithms creating new Arabic letterform variations",
      adoption: "67%",
      examples: "Generative fonts, style transfer, automated layout"
    },
    {
      trend: "Sustainable Design",
      description: "Eco-conscious color palettes and minimalist approaches",
      adoption: "45%",
      examples: "Earth tones, reduced ink usage, digital-first design"
    },
    {
      trend: "Cultural Fusion",
      description: "Blending Arabic calligraphy with global design movements",
      adoption: "78%",
      examples: "Japanese minimalism, Scandinavian simplicity, Bauhaus geometry"
    },
    {
      trend: "Interactive Typography",
      description: "Dynamic Arabic text that responds to user interaction",
      adoption: "34%",
      examples: "Animated letters, responsive layouts, gesture-controlled text"
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Arabic Calligraphy Design Inspiration
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our curated gallery of stunning Arabic calligraphy designs. From traditional Islamic art 
              to contemporary digital creations, discover endless inspiration for your next project. Get ideas, 
              learn techniques, and stay updated with the latest design trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3">
                  Create Your Design <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resources/design-templates">
                <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50 px-6 py-3">
                  Download Templates
                </Button>
              </Link>
            </div>
          </div>

          {/* Design Categories */}
          <Card className="mb-12 border-rose-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100">
              <CardTitle className="text-2xl text-rose-800 flex items-center">
                <Grid className="h-6 w-6 mr-3" />
                Design Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inspirationCategories.map((category, index) => (
                  <div key={index} className={`bg-${category.color}-50 border border-${category.color}-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{category.title}</h3>
                      {category.trending && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          Trending
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs bg-${category.color}-100 text-${category.color}-800 px-2 py-1 rounded-full`}>
                        {category.count}
                      </span>
                      <Button size="sm" variant="outline" className={`border-${category.color}-600 text-${category.color}-600 hover:bg-${category.color}-50`}>
                        <Eye className="h-3 w-3 mr-1" />
                        Browse
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Featured Designs */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Featured Design Showcase
            </h2>

            {featuredDesigns.map((design, index) => (
              <Card key={index} className="border-rose-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Design Preview */}
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 rounded-lg p-8 mb-4 h-48 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">{design.preview.split(' ')[0]}</div>
                          <div className="text-sm text-gray-600 font-medium">
                            {design.preview.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      </div>
                      
                      {/* Color Palette */}
                      <div className="flex justify-center space-x-2 mb-4">
                        {design.colorPalette.map((color, colorIndex) => (
                          <div 
                            key={colorIndex}
                            className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: color }}
                            title={color}
                          ></div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1 text-red-500" />
                          {design.likes.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1 text-blue-500" />
                          {design.views.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Design Information */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{design.title}</h3>
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
                            {design.category}
                          </span>
                          <span className="text-sm text-gray-600">by {design.artist}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{design.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Design Tags:</h4>
                        <div className="flex flex-wrap gap-2">
                          {design.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">💡 Design Insights:</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Notice the balance between text and negative space</li>
                          <li>• Observe how colors create visual hierarchy</li>
                          <li>• Study the cultural elements and their placement</li>
                          <li>• Consider the target audience and context</li>
                        </ul>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="text-center space-y-4">
                      <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 w-full">
                        <Lightbulb className="mr-2 h-4 w-4" />
                        Get Inspired
                      </Button>
                      <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50 px-6 py-3 w-full">
                        <Bookmark className="mr-2 h-4 w-4" />
                        Save Design
                      </Button>
                      <Link href="/">
                        <Button variant="outline" className="border-gray-400 text-gray-600 hover:bg-gray-50 px-6 py-3 w-full">
                          Create Similar
                        </Button>
                      </Link>
                      <div className="text-xs text-gray-500">
                        Style: {design.category}<br />
                        Complexity: Intermediate
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 2025 Design Trends */}
          <Card className="mt-12 border-rose-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-rose-800 flex items-center">
                <Star className="h-6 w-6 mr-3" />
                Arabic Design Trends 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">
                  Stay ahead of the curve with the latest trends shaping Arabic calligraphy and Islamic design. 
                  These emerging styles are defining the future of Arabic typography and visual communication.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {designTrends2025.map((trend, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-purple-800 text-lg">{trend.trend}</h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-700">{trend.adoption}</div>
                          <div className="text-xs text-purple-600">adoption rate</div>
                        </div>
                      </div>
                      <p className="text-purple-700 text-sm mb-3">{trend.description}</p>
                      <div className="bg-white bg-opacity-50 rounded p-3">
                        <h5 className="font-semibold text-purple-800 text-xs mb-1">Examples:</h5>
                        <p className="text-purple-600 text-xs">{trend.examples}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-lg p-6 mt-8">
                  <h4 className="font-semibold text-rose-800 mb-4">🚀 Emerging Opportunities</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-rose-700 mb-1">156%</div>
                      <p className="text-sm text-rose-600">increase in Arabic digital art</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-rose-700 mb-1">89%</div>
                      <p className="text-sm text-rose-600">of brands adopting Arabic typography</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-rose-700 mb-1">234%</div>
                      <p className="text-sm text-rose-600">growth in social media Arabic content</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-12">
            <Card className="bg-gradient-to-r from-rose-100 to-pink-100 border-rose-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-rose-800 mb-4">
                  Turn Inspiration into Creation
                </h2>
                <p className="text-rose-700 mb-6 max-w-2xl mx-auto">
                  Found a design you love? Use our Arabic calligraphy generator to create your own 
                  inspired designs. Experiment with styles, colors, and layouts to make it uniquely yours.
                </p>
                <Link href="/">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg">
                    Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Resources */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Design Templates</h3>
                <p className="text-sm text-gray-600 mb-4">Ready-to-use templates based on popular designs</p>
                <Link href="/resources/design-templates">
                  <Button variant="outline" size="sm" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                    Browse Templates <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Color Palettes</h3>
                <p className="text-sm text-gray-600 mb-4">Discover color combinations used in featured designs</p>
                <Link href="/tools/color-palette-generator">
                  <Button variant="outline" size="sm" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                    Color Tools <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Design Tutorials</h3>
                <p className="text-sm text-gray-600 mb-4">Learn techniques used in these inspiring designs</p>
                <Link href="/tutorials/arabic-calligraphy-design-tips">
                  <Button variant="outline" size="sm" className="border-rose-600 text-rose-600 hover:bg-rose-50">
                    Learn Techniques <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
