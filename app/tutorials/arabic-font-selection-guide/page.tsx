import type { Metadata } from 'next'
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Eye, Heart, Zap, Crown, Palette } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Arabic Font Selection Guide - Best Arabic Fonts 2024 | Professional Font Selection Tips',
  description: 'Professional Arabic font selection guide covering 17 curated fonts with characteristics, use cases, and pairing recommendations. Choose the perfect Arabic font for your design projects.',
  keywords: 'arabic font selection guide,best arabic fonts 2024,arabic font comparison,font pairing tips,arabic typography guide,professional font selection',
  openGraph: {
    title: 'Arabic Font Selection Guide - Best Arabic Fonts 2024',
    description: 'Professional Arabic font selection guide covering 17 curated fonts with characteristics, use cases, and pairing recommendations.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/tutorials/arabic-font-selection-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic Font Selection Guide - Best Arabic Fonts 2024',
    description: 'Professional Arabic font selection guide covering 17 curated fonts with characteristics, use cases, and pairing recommendations.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/tutorials/arabic-font-selection-guide',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'Arabic Font Selection Guide', href: '/tutorials/arabic-font-selection-guide' },
]

export default function ArabicFontSelectionGuidePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arabic Font Selection Guide - Best Arabic Fonts 2024",
    "description": "Professional Arabic font selection guide covering 17 curated fonts with characteristics, use cases, and pairing recommendations",
    "image": "https://arabic-calligraphy-creator.com/og-image.png",
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
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://arabic-calligraphy-creator.com/tutorials/arabic-font-selection-guide"
    }
  }

  return (
    <>
      <StaticNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Arabic Font Selection Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master professional Arabic font selection techniques. Discover the characteristics and best applications 
              of 17 carefully curated fonts to make your designs more professional and culturally authentic.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  Try Fonts Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/fonts">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
                  Browse All Fonts
                </Button>
              </Link>
            </div>
          </div>

          {/* Font Categories Overview */}
          <Card className="mb-12 border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100">
              <CardTitle className="text-2xl text-blue-800">
                🎨 Font Categories Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Traditional Classic</h3>
                  <p className="text-sm text-gray-600">Heritage fonts carrying historical culture, perfect for formal occasions and religious texts</p>
                  <div className="mt-3 text-xs text-blue-600">
                    Amiri • Scheherazade • Lateef
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Modern Contemporary</h3>
                  <p className="text-sm text-gray-600">Clean modern design style, ideal for brand identity and digital media</p>
                  <div className="mt-3 text-xs text-green-600">
                    Cairo • Tajawal • Mada
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Decorative Artistic</h3>
                  <p className="text-sm text-gray-600">Creative decorative fonts, perfect for poster design and artistic creation</p>
                  <div className="mt-3 text-xs text-purple-600">
                    Rakkas • Jomhuria • Lemonada
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Selection Criteria */}
          <Card className="mb-12 border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">
                🎯 Key Factors in Font Selection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Eye className="h-5 w-5 text-blue-600 mr-2" />
                      Readability Considerations
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Text Length</strong>: Choose simple fonts for long text, decorative for short text</li>
                      <li>• <strong>Display Size</strong>: Prefer clear fonts for small sizes, artistic fonts for large sizes</li>
                      <li>• <strong>Reading Distance</strong>: Distant viewing requires bolder, clearer fonts</li>
                      <li>• <strong>Target Audience</strong>: Consider readers' age and reading habits</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Heart className="h-5 w-5 text-red-600 mr-2" />
                      Emotional Expression
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Dignity</strong>: Traditional fonts convey authority and respect</li>
                      <li>• <strong>Modernity</strong>: Geometric fonts reflect innovation and efficiency</li>
                      <li>• <strong>Warmth</strong>: Rounded fonts increase warmth and friendliness</li>
                      <li>• <strong>Artistry</strong>: Decorative fonts highlight creativity and personality</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="h-5 w-5 text-yellow-600 mr-2" />
                      Application Scenarios
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Religious Texts</strong>: Choose traditional, dignified fonts</li>
                      <li>• <strong>Business Brands</strong>: Modern, professional fonts are more suitable</li>
                      <li>• <strong>Social Media</strong>: Eye-catching decorative fonts</li>
                      <li>• <strong>Educational Materials</strong>: Clear, readable fonts take priority</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">🔧 Technical Requirements</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>File Format</strong>: Consider output format compatibility</li>
                      <li>• <strong>Character Support</strong>: Ensure inclusion of required special characters</li>
                      <li>• <strong>Scalability</strong>: Vector fonts suitable for multi-size applications</li>
                      <li>• <strong>Loading Speed</strong>: Consider font file size for web applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Font Recommendations by Use Case */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              📋 Use Case Recommendations
            </h2>
            
            {/* Wedding & Events */}
            <Card className="border-pink-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-pink-100 to-rose-100">
                <CardTitle className="text-xl text-pink-800">
                  💒 Weddings & Celebrations
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-pink-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Top Choice</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Amiri</span>
                        <div className="flex">
                          {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Elegant traditional style, perfect for formal invitations</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-pink-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Alternative</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Scheherazade</span>
                        <div className="flex">
                          {[1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                          <Star className="h-3 w-3 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Classic Naskh style, dignified and elegant</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-pink-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Creative Choice</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Lemonada</span>
                        <div className="flex">
                          {[1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                          <Star className="h-3 w-3 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Rounded and lovely, suitable for modern weddings</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-pink-50 rounded-lg p-4">
                  <h5 className="font-semibold text-pink-800 mb-2">💡 Design Suggestions</h5>
                  <ul className="text-sm text-pink-700 space-y-1">
                    <li>• Use gold or dark text with light backgrounds</li>
                    <li>• Add appropriate shadow effects for depth</li>
                    <li>• Consider adding decorative borders or patterns</li>
                    <li>• Maintain overall elegance and dignity</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Business & Corporate */}
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100">
                <CardTitle className="text-xl text-green-800">
                  🏢 Business & Corporate
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Choice</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Cairo</span>
                        <div className="flex">
                          {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Modern and clean, top choice for brand identity</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Trendy Option</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Tajawal</span>
                        <div className="flex">
                          {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Stylish design, favored by tech companies</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Geometric Style</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Mada</span>
                        <div className="flex">
                          {[1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                          <Star className="h-3 w-3 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Strong geometric feel, suitable for architecture</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">💼 Business Application Tips</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Choose neutral colors to reflect professionalism</li>
                    <li>• Ensure clarity at small sizes</li>
                    <li>• Consider brand color coordination</li>
                    <li>• Maintain design consistency and recognition</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-violet-100">
                <CardTitle className="text-xl text-purple-800">
                  📱 Social Media
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Eye-Catching</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Rakkas</span>
                        <div className="flex">
                          {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Bold decorative style, Instagram favorite</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Artistic Style</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Jomhuria</span>
                        <div className="flex">
                          {[1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                          <Star className="h-3 w-3 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Unique design, suitable for creative content</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Friendly Style</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Lemonada</span>
                        <div className="flex">
                          {[1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                          <Star className="h-3 w-3 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Rounded and friendly, loved by lifestyle bloggers</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">📸 Social Media Design Tips</h5>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Use high-contrast color combinations</li>
                    <li>• Consider mobile display effects</li>
                    <li>• Appropriate use of gradients and shadow effects</li>
                    <li>• Maintain text readability and attractiveness</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Religious & Cultural */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-yellow-100">
                <CardTitle className="text-xl text-amber-800">
                  🕌 Religious & Cultural
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Traditional Classic</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Amiri</span>
                        <div className="flex">
                          {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Ideal choice for Quranic texts</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Clear & Readable</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Lateef</span>
                        <div className="flex">
                          {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Top choice for educational materials</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Elegant Naskh</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Scheherazade</span>
                        <div className="flex">
                          {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">Professional choice for academic literature</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-amber-50 rounded-lg p-4">
                  <h5 className="font-semibold text-amber-800 mb-2">🕌 Cultural Sensitivity</h5>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Respect Arabic calligraphy cultural traditions</li>
                    <li>• Avoid over-decorating religious texts</li>
                    <li>• Ensure text accuracy and completeness</li>
                    <li>• Choose dignified and elegant color schemes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Font Comparison Table */}
            <Card className="border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  📊 Font Characteristics Comparison
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Font Name</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900">Style</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900">Readability</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900">Decorative</th>
                        <th className="text-center py-3 px-4 font-semibold text-gray-900">Best Use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Amiri</td>
                        <td className="py-3 px-4 text-center">Traditional</td>
                        <td className="py-3 px-4 text-center">⭐⭐⭐⭐⭐</td>
                        <td className="py-3 px-4 text-center">⭐⭐⭐⭐</td>
                        <td className="py-3 px-4 text-center text-xs">Religious, Formal</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Cairo</td>
                        <td className="py-3 px-4 text-center">Modern</td>
                        <td className="py-3 px-4 text-center">⭐⭐⭐⭐⭐</td>
                        <td className="py-3 px-4 text-center">⭐⭐</td>
                        <td className="py-3 px-4 text-center text-xs">Business, Brand</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Rakkas</td>
                        <td className="py-3 px-4 text-center">Decorative</td>
                        <td className="py-3 px-4 text-center">⭐⭐⭐</td>
                        <td className="py-3 px-4 text-center">⭐⭐⭐⭐⭐</td>
                        <td className="py-3 px-4 text-center text-xs">Poster, Social</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Lateef</td>
                        <td className="py-3 px-4 text-center">Traditional</td>
                        <td className="py-3 px-4 text-center">⭐⭐⭐⭐⭐</td>
                        <td className="py-3 px-4 text-center">⭐⭐</td>
                        <td className="py-3 px-4 text-center text-xs">Education, Docs</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Tajawal</td>
                        <td className="py-3 px-4 text-center">Modern</td>
                        <td className="py-3 px-4 text-center">⭐⭐⭐⭐</td>
                        <td className="py-3 px-4 text-center">⭐⭐⭐</td>
                        <td className="py-3 px-4 text-center text-xs">Tech, Fashion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">📝 Usage Guide</h5>
                  <p className="text-sm text-blue-700">
                    This comparison table helps you quickly understand different font characteristics.
                    High readability fonts are suitable for long texts, while highly decorative fonts
                    are perfect for headlines and short texts. Choose the most appropriate font based on your specific needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-12">
            <Card className="bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  Start Choosing Your Perfect Font
                </h2>
                <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
                  Use our font selection tool to preview different fonts in real-time and 
                  find the perfect Arabic font for your project.
                </p>
                <Link href="/">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Start Font Selection <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Creation Tutorial</h3>
                <p className="text-sm text-gray-600 mb-4">Learn how to create Arabic calligraphy using our online tool</p>
                <Link href="/tutorials/how-to-create-arabic-calligraphy-online">
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Tutorial <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Design Tips</h3>
                <p className="text-sm text-gray-600 mb-4">Master professional Arabic calligraphy design techniques</p>
                <Link href="/tutorials/arabic-calligraphy-design-tips">
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn Tips <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Font Library</h3>
                <p className="text-sm text-gray-600 mb-4">Browse our curated collection of 17 Arabic fonts</p>
                <Link href="/fonts">
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Browse Fonts <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
          <Footer />
    </>
  )
}
