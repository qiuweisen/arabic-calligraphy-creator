import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Download, Lightbulb, ArrowRight, Star, Heart, PenTool, Compass, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Arabic Calligraphy Resources – SVG Templates & Font Downloads",
  description: "Download Islamic design templates, SVG calligraphy files, and free Arabic fonts ready for Illustrator and Cricut projects.",
  keywords: "free arabic calligraphy resources, svg islamic design templates, free arabic fonts download, illustrator calligraphy assets, arabic typography resources",
}

const RESOURCES = [
  {
    title: "Download Fonts Hub",
    description: "Centralise every SVG-ready Arabic font bundle, complete with TTF/OTF files for Cricut, Canva, Illustrator, and Glowforge workflows.",
    icon: <Download className="h-8 w-8 text-amber-700" />,
    href: "/arabic-fonts-download",
    color: "blue",
    popular: true
  },
  {
    title: "Free Arabic Fonts",
    description: "Access our curated collection of high-quality free Arabic fonts suitable for both personal and commercial projects.",
    icon: <Palette className="h-8 w-8 text-emerald-600" />,
    href: "/resources/free-arabic-fonts",
    color: "green",
    popular: false
  },
  {
    title: "Arabic Tattoo Planner",
    description: "Plan meaningful tattoos with authentic calligraphy previews, translation tips, and artist-ready SVG/PNG downloads.",
    icon: <Heart className="h-8 w-8 text-rose-600" />,
    href: "/arabic-tattoo-calligraphy",
    color: "purple",
    popular: false
  },
  {
    title: "Wedding Invitation Playbook",
    description: "Craft bilingual Arabic wedding invitations, color palettes, and premium print-ready exports your guests will treasure.",
    icon: <PenTool className="h-8 w-8 text-amber-600" />,
    href: "/arabic-calligraphy-wedding-invitation",
    color: "blue",
    popular: false
  },
  {
    title: "Arabic Logo Toolkit",
    description: "Design strategic Arabic wordmarks, align bilingual branding, and export scalable assets for every channel.",
    icon: <Lightbulb className="h-8 w-8 text-cyan-600" />,
    href: "/arabic-calligraphy-logo",
    color: "purple",
    popular: false
  },
  {
    title: "Islamic Art Composition Guide",
    description: "Compose Quranic wall art with balanced geometry, curated palettes, and production-ready vector files.",
    icon: <Compass className="h-8 w-8 text-emerald-600" />,
    href: "/quran-verse-calligraphy",
    color: "green",
    popular: false
  },
  {
    title: "SVG Export Workflow",
    description: "Master Arabic SVG downloads, optimization, and integrations for Cricut, Glowforge, and responsive web design.",
    icon: <Layers className="h-8 w-8 text-sky-600" />,
    href: "/svg-download",
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
        text: "text-amber-800",
        link: "text-amber-700 hover:text-amber-800"
      },
      green: {
        border: "border-green-200", 
        hoverBorder: "hover:border-green-400",
        text: "text-emerald-600",
        link: "text-emerald-600 hover:text-emerald-600"
      },
      blue: {
        border: "border-blue-200",
        hoverBorder: "hover:border-blue-400", 
        text: "text-amber-800",
        link: "text-amber-700 hover:text-amber-800"
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
      <StaticNavbar />
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
                <Button asChild variant="outline" className="border-green-600 text-emerald-600 hover:bg-green-50">
                  <Link href="/">Create Now</Link>
                </Button>
              </div>
              <div className="mt-10 bg-white/90 border border-amber-200 rounded-3xl shadow-lg p-6 md:p-8 text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-700 text-sm font-semibold">
                      <Download className="h-4 w-4" /> Download Free TTF/OTF → Preview Online
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-amber-900">
                      Grab the font bundle, then launch the generator for instant SVG previews.
                    </h2>
                    <p className="mt-3 text-amber-700 max-w-2xl">
                      One click delivers TTF/OTF files plus SVG exports optimised for Cricut, Glowforge, Illustrator, and Canva. Jump straight into the Arabic Calligraphy Generator to style ayah, names, and logos without manual setup.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-shrink-0">
                    <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
                      <div className="flex items-center gap-3 text-amber-800 font-semibold mb-2">
                        <Download className="h-5 w-5" /> Download Fonts
                      </div>
                      <p className="text-sm text-amber-700">
                        Get 17+ Arabic fonts with ready-made SVG previews for Islamic design kits.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                      <div className="flex items-center gap-3 text-emerald-700 font-semibold mb-2">
                        <Palette className="h-5 w-5" /> Preview Online
                      </div>
                      <p className="text-sm text-emerald-700">
                        Paste your text into the generator, swap between scripts, and export SVG instantly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                    <Link href="/arabic-fonts-download">Download Fonts Now</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                    <Link href="/">Preview in Generator</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
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
                <h2 className="text-2xl font-bold text-emerald-600 mb-4">Why Use Our Resources?</h2>
                <p className="text-emerald-600 max-w-2xl mx-auto">
                  All our resources are carefully curated, culturally authentic, and designed to help you create 
                  professional Arabic calligraphy with confidence.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-emerald-600 mb-2">High Quality</h3>
                  <p className="text-sm text-emerald-600">Professional-grade resources suitable for commercial use</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-emerald-600 mb-2">Culturally Authentic</h3>
                  <p className="text-sm text-emerald-600">Respectful and accurate representation of Arabic culture</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-emerald-600 mb-2">Easy to Use</h3>
                  <p className="text-sm text-emerald-600">Ready-to-use formats with clear instructions</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-green-900 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Start Creating Today</h2>
              <p className="text-emerald-600 mb-6 max-w-2xl mx-auto">
                Use our resources with our free online Arabic calligraphy generator to create beautiful designs instantly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-white text-emerald-600 hover:bg-gray-100">
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
