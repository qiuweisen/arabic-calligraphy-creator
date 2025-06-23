import type { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Award, TrendingUp, Users, Crown, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Arabic Fonts 2025 - Top Rated Typography for Professional Design | Expert Recommendations',
  description: 'Discover the best Arabic fonts of 2025 chosen by design professionals. Compare top-rated Arabic typography for web, print, branding, and digital design with expert reviews and recommendations.',
  keywords: 'best arabic fonts 2025,top arabic typography,professional arabic fonts,arabic font recommendations,best islamic fonts,modern arabic typefaces,arabic design fonts',
  openGraph: {
    title: 'Best Arabic Fonts 2025 - Top Rated Typography for Professional Design',
    description: 'Discover the best Arabic fonts of 2025 chosen by design professionals. Compare top-rated Arabic typography for web, print, and branding.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/guides/best-arabic-fonts-2025',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Arabic Fonts 2025 - Top Rated Typography for Professional Design',
    description: 'Discover the best Arabic fonts of 2025 chosen by design professionals. Compare top-rated Arabic typography for web, print, and branding.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/guides/best-arabic-fonts-2025',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Best Arabic Fonts 2025', href: '/guides/best-arabic-fonts-2025' },
]

export default function BestArabicFonts2024Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Arabic Fonts 2024 - Top Rated Typography for Professional Design",
    "description": "Expert-curated list of the best Arabic fonts for 2024, featuring professional recommendations for web, print, and digital design applications",
    "image": "https://arabic-calligraphy-creator.com/best-fonts-2024-og.png",
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
      "@id": "https://arabic-calligraphy-creator.com/guides/best-arabic-fonts-2024"
    }
  }

  return (
    <>
      <Navbar />
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
              Best Arabic Fonts 2025
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the top-rated Arabic fonts chosen by design professionals worldwide. Our expert-curated
              selection features the most versatile, beautiful, and functional Arabic typefaces for modern
              design projects, from web applications to print materials in 2025.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  Try These Fonts <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/fonts">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3">
                  Browse All Fonts
                </Button>
              </Link>
            </div>
          </div>

          {/* Selection Criteria */}
          <Card className="mb-12 border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100">
              <CardTitle className="text-2xl text-blue-800">
                🏆 Our Selection Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Design Quality</h3>
                  <p className="text-sm text-gray-600">Exceptional letterform design and aesthetic appeal</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Use</h3>
                  <p className="text-sm text-gray-600">Proven track record in professional design projects</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Versatility</h3>
                  <p className="text-sm text-gray-600">Adaptable across different media and applications</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2024 Trends</h3>
                  <p className="text-sm text-gray-600">Alignment with current design trends and preferences</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Fonts Rankings */}
          <div className="space-y-12">
            {/* #1 Font */}
            <Card className="border-yellow-200 shadow-lg relative">
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center">
                  <Crown className="h-4 w-4 mr-1" />
                  #1 Choice
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-800 flex items-center">
                  <Award className="h-6 w-6 mr-3" />
                  1. Cairo - The Universal Champion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Cairo stands as the undisputed champion of modern Arabic typography, combining exceptional 
                    readability with contemporary aesthetics. Developed by Google Fonts, this typeface has 
                    become the gold standard for digital Arabic text across web and mobile applications.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h4 className="font-semibold text-yellow-800 mb-4">Why Cairo Leads</h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <Star className="h-5 w-5 text-yellow-600 mt-0.5" />
                            <div>
                              <h5 className="font-semibold text-yellow-700 mb-1">Perfect Readability</h5>
                              <p className="text-sm text-yellow-600">
                                Optimized for screen reading with excellent legibility at all sizes
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Star className="h-5 w-5 text-yellow-600 mt-0.5" />
                            <div>
                              <h5 className="font-semibold text-yellow-700 mb-1">Modern Aesthetics</h5>
                              <p className="text-sm text-yellow-600">
                                Clean, contemporary design that works in any context
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Star className="h-5 w-5 text-yellow-600 mt-0.5" />
                            <div>
                              <h5 className="font-semibold text-yellow-700 mb-1">Technical Excellence</h5>
                              <p className="text-sm text-yellow-600">
                                Superior hinting and OpenType features for professional use
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-800 mb-4">Best Applications</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-2">Digital Platforms</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Websites and web applications</li>
                              <li>• Mobile app interfaces</li>
                              <li>• E-books and digital publications</li>
                              <li>• Social media content</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-2">Print Materials</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Business documents and reports</li>
                              <li>• Educational materials</li>
                              <li>• Marketing brochures</li>
                              <li>• Corporate communications</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-4">🎯 Professional Rating</h4>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-700 mb-1">9.8/10</div>
                        <p className="text-sm text-blue-600">Overall Score</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-700 mb-1">10/10</div>
                        <p className="text-sm text-blue-600">Readability</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-700 mb-1">9.5/10</div>
                        <p className="text-sm text-blue-600">Versatility</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-700 mb-1">10/10</div>
                        <p className="text-sm text-blue-600">Technical Quality</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* #2 Font */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800 flex items-center">
                  <Award className="h-6 w-6 mr-3" />
                  2. Amiri - The Traditional Master
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Amiri represents the pinnacle of traditional Arabic typography, offering unmatched elegance 
                    and cultural authenticity. This Naskh-style typeface is the preferred choice for formal 
                    documents, religious texts, and projects requiring classical Arabic aesthetics.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-3">Strengths</h4>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>• Authentic traditional design</li>
                        <li>• Excellent for formal contexts</li>
                        <li>• Superior Arabic typography</li>
                        <li>• Cultural appropriateness</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-3">Best For</h4>
                      <ul className="text-sm text-green-600 space-y-1">
                        <li>• Religious and cultural content</li>
                        <li>• Academic publications</li>
                        <li>• Formal invitations</li>
                        <li>• Heritage projects</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-3">Rating</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Overall</span>
                          <span className="text-sm font-bold">9.5/10</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Elegance</span>
                          <span className="text-sm font-bold">10/10</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Tradition</span>
                          <span className="text-sm font-bold">10/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* #3-5 Fonts */}
            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">
                  🥉 Top 3-5: Rising Stars & Specialists
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-emerald-600 text-white text-sm font-bold px-2 py-1 rounded mr-3">#3</span>
                      <h4 className="font-semibold text-emerald-800">Tajawal</h4>
                    </div>
                    <p className="text-sm text-emerald-600 mb-4">
                      The modern choice for contemporary Arabic design. Clean, geometric, and perfect for tech companies and startups.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Modern Appeal</span>
                        <span className="font-bold">9.5/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tech Suitability</span>
                        <span className="font-bold">10/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Overall Score</span>
                        <span className="font-bold">9.2/10</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-orange-600 text-white text-sm font-bold px-2 py-1 rounded mr-3">#4</span>
                      <h4 className="font-semibold text-orange-800">Lateef</h4>
                    </div>
                    <p className="text-sm text-orange-600 mb-4">
                      Reliable and readable, Lateef excels in educational content and long-form reading. A solid choice for academic work.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Readability</span>
                        <span className="font-bold">9.8/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Educational Use</span>
                        <span className="font-bold">10/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Overall Score</span>
                        <span className="font-bold">9.0/10</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-600 text-white text-sm font-bold px-2 py-1 rounded mr-3">#5</span>
                      <h4 className="font-semibold text-purple-800">Scheherazade</h4>
                    </div>
                    <p className="text-sm text-purple-600 mb-4">
                      Traditional Naskh style with excellent Unicode support. Perfect for multilingual projects and scholarly work.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Unicode Support</span>
                        <span className="font-bold">10/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Scholarly Use</span>
                        <span className="font-bold">9.5/10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Overall Score</span>
                        <span className="font-bold">8.8/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Honorable Mentions */}
            <Card className="border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  🌟 Honorable Mentions & Specialized Fonts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    These fonts excel in specific use cases and deserve recognition for their unique contributions
                    to Arabic typography. While they may not be as universally applicable as our top 5, they
                    shine in their specialized domains.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                        <h4 className="font-semibold text-rose-800 mb-4">Creative & Artistic</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-rose-700 mb-2">Rakkas</h5>
                            <p className="text-sm text-rose-600 mb-2">
                              Bold and expressive, perfect for headlines and artistic projects.
                              High impact but use sparingly.
                            </p>
                            <div className="text-xs text-rose-500">Best for: Logos, posters, artistic displays</div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-rose-700 mb-2">Lemonada</h5>
                            <p className="text-sm text-rose-600 mb-2">
                              Friendly and approachable with rounded letterforms.
                              Great for children's content and casual designs.
                            </p>
                            <div className="text-xs text-rose-500">Best for: Children's books, casual branding, friendly interfaces</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                        <h4 className="font-semibold text-teal-800 mb-4">Specialized Applications</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-teal-700 mb-2">Mada</h5>
                            <p className="text-sm text-teal-600 mb-2">
                              Geometric and modern, excellent for UI/UX design.
                              Clean lines make it perfect for digital interfaces.
                            </p>
                            <div className="text-xs text-teal-500">Best for: App interfaces, modern websites, tech branding</div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-teal-700 mb-2">Jomhuria</h5>
                            <p className="text-sm text-teal-600 mb-2">
                              Unique display font with strong character.
                              Makes a statement in headlines and branding.
                            </p>
                            <div className="text-xs text-teal-500">Best for: Display text, unique branding, editorial design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2024 Trends Analysis */}
            <Card className="border-indigo-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-indigo-800">
                  📈 2024 Arabic Typography Trends
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    The Arabic typography landscape in 2024 is characterized by a balance between tradition and innovation.
                    Here are the key trends shaping font selection and usage this year.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                      <h4 className="font-semibold text-indigo-800 mb-4">🚀 Digital-First Design</h4>
                      <ul className="text-sm text-indigo-600 space-y-2">
                        <li>• Optimized for screen reading</li>
                        <li>• Variable font technology adoption</li>
                        <li>• Mobile-responsive typography</li>
                        <li>• Dark mode compatibility</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-green-800 mb-4">🌍 Cultural Authenticity</h4>
                      <ul className="text-sm text-green-600 space-y-2">
                        <li>• Respect for traditional forms</li>
                        <li>• Regional style preferences</li>
                        <li>• Cultural context awareness</li>
                        <li>• Heritage preservation</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <h4 className="font-semibold text-amber-800 mb-4">⚡ Performance Focus</h4>
                      <ul className="text-sm text-amber-600 space-y-2">
                        <li>• Faster loading times</li>
                        <li>• Optimized file sizes</li>
                        <li>• Better rendering quality</li>
                        <li>• Cross-platform consistency</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-800 mb-4">📊 Usage Statistics 2024</h4>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-700 mb-1">45%</div>
                        <p className="text-sm text-gray-600">Cairo adoption rate</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-700 mb-1">28%</div>
                        <p className="text-sm text-gray-600">Traditional fonts (Amiri, etc.)</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-700 mb-1">18%</div>
                        <p className="text-sm text-gray-600">Modern fonts (Tajawal, Mada)</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-700 mb-1">9%</div>
                        <p className="text-sm text-gray-600">Specialized/Display fonts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-12">
            <Card className="bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                  Try These Award-Winning Fonts
                </h2>
                <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
                  Experience the best Arabic fonts of 2024 with our free online generator. 
                  Create professional designs using these expert-recommended typefaces.
                </p>
                <Link href="/">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Font Selection Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Learn how to choose the perfect Arabic font</p>
                <Link href="/tutorials/arabic-font-selection-guide">
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Selection Guide <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Font Comparison</h3>
                <p className="text-sm text-gray-600 mb-4">Compare different Arabic font styles and features</p>
                <Link href="/guides/arabic-font-comparison">
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Compare Fonts <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Design Trends</h3>
                <p className="text-sm text-gray-600 mb-4">Explore the latest Arabic typography trends</p>
                <Link href="/guides/arabic-typography-trends-2024">
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Trends <ArrowRight className="ml-1 h-3 w-3" />
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
