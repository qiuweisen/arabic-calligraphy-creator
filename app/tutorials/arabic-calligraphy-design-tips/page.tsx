import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Palette, Layout, Zap, Target, Lightbulb, Layers } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Arabic Calligraphy Design Tips - Professional Typography Techniques | Design Guide 2024',
  description: 'Master professional Arabic calligraphy design with expert tips on composition, color theory, typography hierarchy, and cultural considerations. Elevate your Arabic design projects.',
  keywords: 'arabic calligraphy design tips,arabic typography techniques,calligraphy composition guide,arabic design principles,professional calligraphy tips,typography hierarchy',
  openGraph: {
    title: 'Arabic Calligraphy Design Tips - Professional Typography Techniques',
    description: 'Master professional Arabic calligraphy design with expert tips on composition, color theory, typography hierarchy, and cultural considerations.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/tutorials/arabic-calligraphy-design-tips',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic Calligraphy Design Tips - Professional Typography Techniques',
    description: 'Master professional Arabic calligraphy design with expert tips on composition, color theory, typography hierarchy, and cultural considerations.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/tutorials/arabic-calligraphy-design-tips',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'Arabic Calligraphy Design Tips', href: '/tutorials/arabic-calligraphy-design-tips' },
]

export default function ArabicCalligraphyDesignTipsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arabic Calligraphy Design Tips - Professional Typography Techniques",
    "description": "Master professional Arabic calligraphy design with expert tips on composition, color theory, typography hierarchy, and cultural considerations",
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
      "@id": "https://arabic-calligraphy-creator.com/tutorials/arabic-calligraphy-design-tips"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Arabic Calligraphy Design Tips
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Elevate your Arabic calligraphy with professional design techniques. Learn composition principles, 
              color theory, typography hierarchy, and cultural considerations from expert designers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3">
                  Start Designing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tutorials">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3">
                  More Tutorials
                </Button>
              </Link>
            </div>
          </div>

          {/* Design Principles Overview */}
          <Card className="mb-12 border-emerald-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-100 to-teal-100">
              <CardTitle className="text-2xl text-emerald-800">
                🎨 Core Design Principles
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layout className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Composition</h3>
                  <p className="text-sm text-gray-600">Balance, alignment, and visual hierarchy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Color Theory</h3>
                  <p className="text-sm text-gray-600">Harmonious palettes and cultural meaning</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Typography</h3>
                  <p className="text-sm text-gray-600">Font pairing and text hierarchy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Purpose</h3>
                  <p className="text-sm text-gray-600">Context-appropriate design choices</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Design Tips Sections */}
          <div className="space-y-12">
            {/* Composition & Layout */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800 flex items-center">
                  <Layout className="h-6 w-6 mr-3" />
                  Composition & Layout Mastery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Visual Balance</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Symmetrical Balance</strong>: Perfect for formal, traditional designs</li>
                        <li>• <strong>Asymmetrical Balance</strong>: Creates dynamic, modern compositions</li>
                        <li>• <strong>Radial Balance</strong>: Ideal for circular or mandala-style layouts</li>
                        <li>• <strong>Weight Distribution</strong>: Balance visual elements across the canvas</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Alignment Techniques</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Center Alignment</strong>: Creates formal, balanced appearance</li>
                        <li>• <strong>Right Alignment</strong>: Natural for Arabic text flow</li>
                        <li>• <strong>Justified Text</strong>: Professional look for longer passages</li>
                        <li>• <strong>Grid Systems</strong>: Maintain consistency across elements</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Hierarchy & Flow</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Size Contrast</strong>: Use varying font sizes for emphasis</li>
                        <li>• <strong>Reading Path</strong>: Guide the eye through your design</li>
                        <li>• <strong>Focal Points</strong>: Create clear areas of interest</li>
                        <li>• <strong>White Space</strong>: Use negative space effectively</li>
                      </ul>
                    </div>
                    
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <h5 className="font-semibold text-emerald-800 mb-2">💡 Pro Tip</h5>
                      <p className="text-sm text-emerald-700">
                        Arabic text flows from right to left, so consider this natural reading direction 
                        when planning your composition. Place the most important elements on the right side.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Color Theory */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800 flex items-center">
                  <Palette className="h-6 w-6 mr-3" />
                  Color Theory & Psychology
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-3">Traditional Colors</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-yellow-600 rounded-full"></div>
                        <span className="text-sm">Gold - Luxury, divinity</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
                        <span className="text-sm">Deep Blue - Wisdom, trust</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-700 rounded-full"></div>
                        <span className="text-sm">Green - Peace, Islam</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-3">Modern Palettes</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                        <span className="text-sm">Charcoal - Professional</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
                        <span className="text-sm">Teal - Contemporary</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Orange - Energy, creativity</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                    <h4 className="font-semibold text-rose-800 mb-3">Contrast Tips</h4>
                    <ul className="text-sm text-rose-700 space-y-2">
                      <li>• High contrast for readability</li>
                      <li>• 60-30-10 color rule</li>
                      <li>• Test on different devices</li>
                      <li>• Consider accessibility</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
                  <h4 className="font-semibold text-emerald-800 mb-4">🎨 Color Harmony Techniques</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-emerald-700 mb-2">Complementary Colors</h5>
                      <p className="text-sm text-emerald-600">Use opposite colors on the color wheel for vibrant contrast</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-emerald-700 mb-2">Analogous Colors</h5>
                      <p className="text-sm text-emerald-600">Adjacent colors create harmonious, peaceful designs</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-emerald-700 mb-2">Monochromatic</h5>
                      <p className="text-sm text-emerald-600">Different shades of one color for elegant simplicity</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-emerald-700 mb-2">Triadic Colors</h5>
                      <p className="text-sm text-emerald-600">Three evenly spaced colors for vibrant balance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Typography & Font Pairing */}
            <Card className="border-emerald-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-800 flex items-center">
                  <Layers className="h-6 w-6 mr-3" />
                  Typography & Font Pairing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Font Hierarchy</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-emerald-500 pl-4">
                          <h5 className="font-semibold text-gray-900">Primary Text</h5>
                          <p className="text-sm text-gray-600">Main content, highest readability priority</p>
                        </div>
                        <div className="border-l-4 border-emerald-400 pl-4">
                          <h5 className="font-semibold text-gray-900">Secondary Text</h5>
                          <p className="text-sm text-gray-600">Supporting information, medium emphasis</p>
                        </div>
                        <div className="border-l-4 border-emerald-300 pl-4">
                          <h5 className="font-semibold text-gray-900">Accent Text</h5>
                          <p className="text-sm text-gray-600">Decorative elements, artistic flair</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Size Guidelines</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Headlines</strong>: 24-72px for impact</li>
                        <li>• <strong>Body Text</strong>: 14-18px for readability</li>
                        <li>• <strong>Captions</strong>: 10-12px for details</li>
                        <li>• <strong>Scale Ratio</strong>: Use 1.5x or golden ratio</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Successful Pairings</h4>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Traditional + Modern</h5>
                          <p className="text-sm text-gray-600">Amiri (headlines) + Cairo (body text)</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Decorative + Clean</h5>
                          <p className="text-sm text-gray-600">Rakkas (accent) + Lateef (content)</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Contemporary Mix</h5>
                          <p className="text-sm text-gray-600">Tajawal (headers) + Mada (body)</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h5 className="font-semibold text-yellow-800 mb-2">⚠️ Avoid These Mistakes</h5>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Using more than 3 fonts in one design</li>
                        <li>• Pairing two decorative fonts together</li>
                        <li>• Insufficient contrast between text levels</li>
                        <li>• Ignoring cultural context and appropriateness</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-12">
            <Card className="bg-gradient-to-r from-emerald-100 to-teal-100 border-emerald-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                  Ready to Apply These Techniques?
                </h2>
                <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
                  Put these professional design tips into practice with our Arabic calligraphy generator. 
                  Create stunning designs that combine beauty with cultural authenticity.
                </p>
                <Link href="/">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                    Start Designing <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Creation Tutorial</h3>
                <p className="text-sm text-gray-600 mb-4">Learn the basics of creating Arabic calligraphy online</p>
                <Link href="/tutorials/how-to-create-arabic-calligraphy-online">
                  <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    View Tutorial <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Font Selection</h3>
                <p className="text-sm text-gray-600 mb-4">Choose the perfect Arabic font for your project</p>
                <Link href="/tutorials/arabic-font-selection-guide">
                  <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Font Guide <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Use Cases</h3>
                <p className="text-sm text-gray-600 mb-4">Explore real-world applications and examples</p>
                <Link href="/use-cases/wedding-arabic-calligraphy">
                  <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    See Examples <ArrowRight className="ml-1 h-3 w-3" />
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
