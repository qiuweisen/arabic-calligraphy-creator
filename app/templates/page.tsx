import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { StaticNavbar } from "@/components/static-navbar"
import { StaticFooter } from "@/components/static-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye, Heart, Star, ArrowRight, Palette, Type, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Templates | Ready-to-Use Designs",
  description: "Discover beautiful Arabic calligraphy templates for Islamic art, wedding invitations, logos, and decorative designs. Free downloads and customizable options.",
  keywords: "Arabic calligraphy templates, Islamic art templates, Arabic design templates, calligraphy patterns, wedding invitations Arabic, Islamic decorations",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/templates",
  },
  openGraph: {
    title: "Arabic Calligraphy Templates | Ready-to-Use Designs",
    description: "Discover beautiful Arabic calligraphy templates for Islamic art, wedding invitations, logos, and decorative designs.",
    url: "https://arabic-calligraphy-generator.com/templates",
    siteName: "Arabic Calligraphy Generator",
    type: "website",
    locale: "en_US",
  },
}

// Template categories
const TEMPLATE_CATEGORIES = [
  {
    id: "islamic-art",
    title: "Islamic Art & Decoration",
    description: "Traditional Islamic patterns and calligraphy designs",
    icon: <Sparkles className="h-6 w-6" />,
    templates: [
      {
        id: "bismillah-ornate",
        title: "Ornate Bismillah Design",
        description: "Elegant Bismillah with traditional Islamic patterns",
        arabicText: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
        font: "Amiri",
        category: "Religious"
      },
      {
        id: "allah-calligraphy",
        title: "Allah Calligraphy",
        description: "Beautiful Allah calligraphy in traditional style",
        arabicText: "الله",
        font: "Scheherazade",
        category: "Religious"
      }
    ]
  },
  {
    id: "wedding-invitations",
    title: "Wedding Invitations",
    description: "Elegant Arabic calligraphy for wedding cards and invitations",
    icon: <Heart className="h-6 w-6" />,
    templates: [
      {
        id: "wedding-bismillah",
        title: "Wedding Bismillah Card",
        description: "Perfect for Islamic wedding invitations",
        arabicText: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
        font: "Aref Ruqaa",
        category: "Wedding"
      }
    ]
  },
  {
    id: "logos-branding",
    title: "Logos & Branding",
    description: "Professional Arabic calligraphy for business branding",
    icon: <Type className="h-6 w-6" />,
    templates: [
      {
        id: "business-logo",
        title: "Modern Arabic Logo",
        description: "Clean and modern Arabic text for business use",
        arabicText: "شركة",
        font: "Cairo",
        category: "Business"
      }
    ]
  }
]

export default function TemplatesPage() {
  // Structured data for templates collection
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Arabic Calligraphy Templates",
    "description": "Collection of ready-to-use Arabic calligraphy templates for various purposes including Islamic art, wedding invitations, and business branding.",
    "url": "https://arabic-calligraphy-generator.com/templates",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": TEMPLATE_CATEGORIES.reduce((total, cat) => total + cat.templates.length, 0),
      "itemListElement": TEMPLATE_CATEGORIES.flatMap((category, categoryIndex) =>
        category.templates.map((template, templateIndex) => ({
          "@type": "ListItem",
          "position": categoryIndex * 10 + templateIndex + 1,
          "item": {
            "@type": "CreativeWork",
            "name": template.title,
            "description": template.description,
            "category": template.category,
            "inLanguage": "ar"
          }
        }))
      )
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
                Arabic Calligraphy Templates
              </h1>
              <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                Discover our collection of beautiful, ready-to-use Arabic calligraphy templates. 
                Perfect for Islamic art, wedding invitations, business branding, and decorative designs.
              </p>
            </div>

            {/* Coming Soon Notice */}
            <div className="mb-12 p-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border border-amber-200 text-center">
              <div className="flex justify-center mb-4">
                <Palette className="h-12 w-12 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-amber-800 mb-3">Templates Coming Soon!</h2>
              <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                We're currently working on creating a comprehensive collection of Arabic calligraphy templates. 
                In the meantime, you can create your own designs using our powerful calligraphy generator.
              </p>
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/">
                  <Type className="mr-2 h-5 w-5" />
                  Try Our Calligraphy Generator
                </Link>
              </Button>
            </div>

            {/* Template Categories Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {TEMPLATE_CATEGORIES.map((category) => (
                <Card key={category.id} className="border-amber-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3 text-amber-600">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl text-amber-800">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-700 text-center mb-4">{category.description}</p>
                    <div className="text-center">
                      <span className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                        {category.templates.length} templates planned
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* What to Expect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">What to Expect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Download className="h-8 w-8 text-amber-600" />,
                    title: "Free Downloads",
                    description: "High-quality templates available for free download"
                  },
                  {
                    icon: <Palette className="h-8 w-8 text-amber-600" />,
                    title: "Customizable",
                    description: "Easy to customize colors, sizes, and text"
                  },
                  {
                    icon: <Star className="h-8 w-8 text-amber-600" />,
                    title: "Professional Quality",
                    description: "Designed by calligraphy experts"
                  },
                  {
                    icon: <Type className="h-8 w-8 text-amber-600" />,
                    title: "Multiple Formats",
                    description: "Available in PNG, SVG, and PDF formats"
                  }
                ].map((feature, index) => (
                  <Card key={index} className="border-amber-200 text-center">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-3">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold text-amber-800 mb-2">{feature.title}</h3>
                      <p className="text-sm text-amber-700">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-amber-50 p-8 rounded-lg border border-amber-200">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Create Your Own Designs Now
              </h2>
              <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                While we prepare our template collection, start creating beautiful Arabic calligraphy 
                with our advanced generator tool. Choose from 13+ fonts and unlimited customization options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/">
                    <Palette className="mr-2 h-5 w-5" />
                    Start Creating
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/fonts">
                    <Eye className="mr-2 h-5 w-5" />
                    Explore Fonts
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <StaticFooter />
    </>
  )
}
