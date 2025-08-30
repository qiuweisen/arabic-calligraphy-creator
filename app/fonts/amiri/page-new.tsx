import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Sparkles, BookOpen, Eye, Heart, Check } from "lucide-react"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { GeneratorCTA } from "@/components/generator-cta"

export const metadata: Metadata = {
  title: "Amiri Arabic Font - Classical Naskh Style | Free Download",
  description: "Download Amiri font - elegant classical Arabic Naskh typography perfect for religious texts, academic publishing, and traditional designs. Try online generator.",
  keywords: "Amiri font download, Arabic Naskh font, Islamic calligraphy font, Quranic text font, traditional Arabic typography, classical Arabic font",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/amiri",
  },
  openGraph: {
    title: "Amiri Arabic Font - Classical Naskh Style | Free Download",
    description: "Download Amiri font - elegant classical Arabic Naskh typography perfect for religious texts and traditional designs.",
    url: "https://arabic-calligraphy-generator.com/fonts/amiri",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
  },
}

export default function AmiriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Amiri Arabic Font",
            "description": "Classical Naskh Arabic font perfect for religious texts and traditional designs",
            "url": "https://arabic-calligraphy-generator.com/fonts/amiri",
            "mainEntity": {
              "@type": "CreativeWork",
              "name": "Amiri Font",
              "description": "A classical Arabic Naskh typeface designed by Dr. Khaled Hosny",
              "creator": {
                "@type": "Person",
                "name": "Dr. Khaled Hosny"
              },
              "genre": "Typography",
              "license": "SIL Open Font License 1.1"
            }
          }),
        }}
      />
      
      <StaticNavbar />
      
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { href: "/", name: "Home" },
              { href: "/fonts", name: "Arabic Fonts" },
              { href: "/fonts/amiri", name: "Amiri" }
            ]} 
          />

          {/* Back Button */}
          <Link 
            href="/fonts"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Font Library
          </Link>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <BookOpen className="h-4 w-4" />
                  Traditional Naskh
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
                  Amiri Font
                </h1>
                <p className="text-xl text-amber-700 mb-6">
                  Classical Arabic Naskh typography that revives the elegance of traditional calligraphy. Perfect for religious texts, academic works, and authentic Arabic designs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    <Download className="h-5 w-5 mr-2" />
                    Download Amiri Font
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/?font=Amiri">
                      <Eye className="h-5 w-5 mr-2" />
                      Try in Generator
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Font Preview */}
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-8 text-center">
                <div className="text-6xl text-amber-800 mb-4" style={{ fontFamily: 'serif' }}>
                  أبجد
                </div>
                <div className="text-3xl text-amber-700 mb-2" style={{ fontFamily: 'serif' }}>
                  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                </div>
                <p className="text-sm text-amber-600">
                  In the name of Allah, the Most Gracious, the Most Merciful
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Why Choose Amiri Font?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Classical Authenticity</h3>
                  <p className="text-amber-700 text-sm">
                    Faithfully revives early 20th-century Naskh typefaces from the historic Bulaq Press
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Excellent Readability</h3>
                  <p className="text-amber-700 text-sm">
                    Optimized for extended reading in books, academic papers, and religious texts
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Complete Glyph Set</h3>
                  <p className="text-amber-700 text-sm">
                    Includes extensive ligatures, diacritics, and specialized glyphs for Quranic text
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Text Examples */}
          <Card className="mb-12 border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">See Amiri in Action</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 text-center">
                  <div className="text-4xl text-amber-800 mb-3" style={{ fontFamily: 'serif', lineHeight: '1.6' }}>
                    بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </div>
                  <p className="text-amber-600 text-sm">The opening verse of the Quran - Bismillah</p>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 text-center">
                  <div className="text-3xl text-amber-800 mb-3" style={{ fontFamily: 'serif', lineHeight: '1.6' }}>
                    الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ
                  </div>
                  <p className="text-amber-600 text-sm">Praise be to Allah, Lord of the Worlds</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Perfect For */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Perfect For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: BookOpen, title: "Religious Texts", desc: "Quran & Islamic literature" },
                { icon: Heart, title: "Academic Works", desc: "Books & research papers" },
                { icon: Sparkles, title: "Formal Documents", desc: "Certificates & invitations" },
                { icon: Eye, title: "Traditional Designs", desc: "Cultural & heritage projects" }
              ].map((item, index) => (
                <Card key={index} className="border-amber-200 bg-white/80 backdrop-blur-sm text-center">
                  <CardContent className="p-4">
                    <item.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-amber-800 text-sm mb-1">{item.title}</h3>
                    <p className="text-amber-600 text-xs">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Download & Action Section */}
          <Card className="mb-12 border-amber-200 bg-gradient-to-r from-amber-100 to-orange-100">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Ready to Use Amiri?</h3>
              <p className="text-amber-700 mb-6">
                Start creating beautiful Arabic calligraphy with this classical font
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <Download className="h-5 w-5 mr-2" />
                  Download Amiri Font
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/?font=Amiri">
                    Try in Our Generator
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-amber-600">
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  Free Download
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  Open Source License
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  Commercial Use OK
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Related Fonts */}
          <Card className="mb-12 border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">Similar Traditional Fonts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <div className="w-16 h-16 bg-amber-200 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-amber-800" style={{ fontFamily: 'serif' }}>نص</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-800">Scheherazade</h3>
                    <p className="text-sm text-amber-600">Traditional Naskh with excellent readability</p>
                    <Link href="/fonts/scheherazade" className="text-amber-600 hover:text-amber-700 text-sm">
                      View Details →
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <div className="w-16 h-16 bg-amber-200 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-amber-800" style={{ fontFamily: 'serif' }}>نص</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-amber-800">Lateef</h3>
                    <p className="text-sm text-amber-600">Extended Arabic typeface with Naskh base</p>
                    <Link href="/fonts/lateef" className="text-amber-600 hover:text-amber-700 text-sm">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learn More Links */}
          <Card className="mb-12 border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800">Learn More About Arabic Typography</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/blog/the-rich-history-of-arabic-calligraphy"
                  className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                >
                  <BookOpen className="h-8 w-8 text-amber-600" />
                  <div>
                    <h3 className="font-semibold text-amber-800">Arabic Calligraphy History</h3>
                    <p className="text-sm text-amber-600">Discover the rich heritage of Arabic scripts</p>
                  </div>
                </Link>
                
                <Link 
                  href="/blog/six-major-calligraphy-styles"
                  className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                >
                  <Sparkles className="h-8 w-8 text-amber-600" />
                  <div>
                    <h3 className="font-semibold text-amber-800">Six Major Calligraphy Styles</h3>
                    <p className="text-sm text-amber-600">Understanding different Arabic writing styles</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Generator CTA */}
          <GeneratorCTA variant="featured" />
        </div>
      </main>
      
      <Footer />
    </>
  )
}
