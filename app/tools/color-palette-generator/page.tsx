import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Palette, Eye, Contrast, Sparkles, Globe, Heart } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Arabic Calligraphy Color Palette Generator 2025 - Islamic Design Colors | Cultural Color Guide',
  description: 'Generate beautiful color palettes for Arabic calligraphy and Islamic design. Discover culturally appropriate colors, accessibility guidelines, and traditional color combinations.',
  keywords: 'arabic calligraphy colors,islamic design colors,arabic color palette,cultural color combinations,islamic art colors,arabic design color guide',
  openGraph: {
    title: 'Arabic Calligraphy Color Palette Generator 2025 - Islamic Design Colors',
    description: 'Generate beautiful color palettes for Arabic calligraphy and Islamic design. Discover culturally appropriate colors and traditional combinations.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/tools/color-palette-generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic Calligraphy Color Palette Generator 2025 - Islamic Design Colors',
    description: 'Generate beautiful color palettes for Arabic calligraphy and Islamic design.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/tools/color-palette-generator',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Tools', href: '/tools' },
  { name: 'Color Palette Generator', href: '/tools/color-palette-generator' },
]

export default function ColorPaletteGeneratorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arabic Calligraphy Color Palette Generator 2025 - Islamic Design Colors",
    "description": "Comprehensive guide to color selection for Arabic calligraphy and Islamic design, including cultural considerations and accessibility guidelines",
    "image": "https://arabic-calligraphy-creator.com/color-palette-og.png",
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
      "@id": "https://arabic-calligraphy-creator.com/tools/color-palette-generator"
    }
  }

  const traditionalPalettes = [
    {
      name: "Classic Islamic Gold",
      description: "Traditional gold and deep blue combination inspired by mosque architecture",
      colors: ["#FFD700", "#1E3A8A", "#FFFFFF", "#8B4513", "#2D1B69"],
      usage: "Formal documents, religious texts, luxury branding",
      cultural: "Represents divine light and spiritual depth"
    },
    {
      name: "Andalusian Heritage",
      description: "Warm earth tones reflecting the beauty of Islamic Spain",
      colors: ["#D2691E", "#8B4513", "#F4A460", "#FFFAF0", "#654321"],
      usage: "Historical content, cultural projects, warm designs",
      cultural: "Inspired by Alhambra palace and Andalusian art"
    },
    {
      name: "Persian Garden",
      description: "Fresh greens and blues evoking Persian paradise gardens",
      colors: ["#228B22", "#4169E1", "#98FB98", "#F0F8FF", "#006400"],
      usage: "Nature themes, peaceful designs, educational content",
      cultural: "Symbolizes paradise and natural beauty in Islamic art"
    },
    {
      name: "Ottoman Elegance",
      description: "Rich burgundy and gold reflecting Ottoman imperial style",
      colors: ["#800020", "#FFD700", "#F5F5DC", "#8B0000", "#DAA520"],
      usage: "Luxury brands, formal invitations, premium content",
      cultural: "Represents Ottoman court sophistication and power"
    }
  ]

  const modernPalettes = [
    {
      name: "Contemporary Minimalist",
      description: "Clean, modern palette for digital applications",
      colors: ["#2C3E50", "#ECF0F1", "#3498DB", "#E74C3C", "#95A5A6"],
      usage: "Web design, mobile apps, modern branding",
      trend: "2025 digital-first design"
    },
    {
      name: "Sustainable Earth",
      description: "Eco-conscious colors reflecting environmental awareness",
      colors: ["#2E8B57", "#F5F5DC", "#8FBC8F", "#DEB887", "#556B2F"],
      usage: "Environmental projects, sustainable brands, natural themes",
      trend: "Eco-friendly design movement"
    },
    {
      name: "Tech Innovation",
      description: "Futuristic palette for technology and innovation",
      colors: ["#4A90E2", "#F39C12", "#FFFFFF", "#2C3E50", "#9B59B6"],
      usage: "Tech companies, startups, innovation themes",
      trend: "AI and technology integration"
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Arabic Calligraphy Color Palette Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the perfect color combinations for your Arabic calligraphy and Islamic design projects. 
              Our culturally-aware palette generator helps you choose colors that respect tradition while 
              embracing modern design principles.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3">
                  Try Colors Live <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resources/design-templates">
                <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-3">
                  Design Templates
                </Button>
              </Link>
            </div>
          </div>

          {/* Color Theory Guide */}
          <Card className="mb-12 border-cyan-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-cyan-100 to-blue-100">
              <CardTitle className="text-2xl text-cyan-800">
                🎨 Color Theory for Arabic Design
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cultural Sensitivity</h3>
                  <p className="text-sm text-gray-600">Respect Islamic traditions and regional preferences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                  <p className="text-sm text-gray-600">Ensure readability for all users and devices</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Contrast className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contrast</h3>
                  <p className="text-sm text-gray-600">Maintain proper contrast ratios for Arabic text</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Global Appeal</h3>
                  <p className="text-sm text-gray-600">Balance tradition with contemporary aesthetics</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Traditional Color Palettes */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Traditional Islamic Color Palettes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {traditionalPalettes.map((palette, index) => (
                  <Card key={index} className="border-cyan-200 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{palette.name}</h3>
                          <p className="text-gray-700 text-sm mb-4">{palette.description}</p>
                        </div>

                        {/* Color Swatches */}
                        <div className="flex space-x-2 mb-4">
                          {palette.colors.map((color, colorIndex) => (
                            <div key={colorIndex} className="flex-1">
                              <div 
                                className="h-16 rounded-lg border-2 border-gray-200 shadow-sm"
                                style={{ backgroundColor: color }}
                                title={color}
                              ></div>
                              <div className="text-xs text-gray-600 mt-1 text-center font-mono">
                                {color}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                            <h4 className="font-semibold text-amber-800 text-sm mb-1">Cultural Significance</h4>
                            <p className="text-amber-700 text-xs">{palette.cultural}</p>
                          </div>
                          
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <h4 className="font-semibold text-blue-800 text-sm mb-1">Best Used For</h4>
                            <p className="text-blue-700 text-xs">{palette.usage}</p>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white flex-1">
                            <Palette className="mr-1 h-3 w-3" />
                            Use Palette
                          </Button>
                          <Button size="sm" variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Modern Color Palettes */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Modern Arabic Design Palettes
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {modernPalettes.map((palette, index) => (
                  <Card key={index} className="border-cyan-200 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{palette.name}</h3>
                          <p className="text-gray-700 text-sm mb-3">{palette.description}</p>
                        </div>

                        {/* Color Swatches */}
                        <div className="grid grid-cols-5 gap-1 mb-4">
                          {palette.colors.map((color, colorIndex) => (
                            <div key={colorIndex}>
                              <div 
                                className="h-12 rounded border border-gray-200"
                                style={{ backgroundColor: color }}
                                title={color}
                              ></div>
                              <div className="text-xs text-gray-600 mt-1 text-center font-mono">
                                {color.slice(1)}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-2">
                          <div className="bg-green-50 border border-green-200 rounded p-2">
                            <h4 className="font-semibold text-green-800 text-xs mb-1">2025 Trend</h4>
                            <p className="text-green-700 text-xs">{palette.trend}</p>
                          </div>
                          
                          <div className="bg-purple-50 border border-purple-200 rounded p-2">
                            <h4 className="font-semibold text-purple-800 text-xs mb-1">Applications</h4>
                            <p className="text-purple-700 text-xs">{palette.usage}</p>
                          </div>
                        </div>

                        <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white w-full">
                          <Sparkles className="mr-1 h-3 w-3" />
                          Apply Palette
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Accessibility Guidelines */}
          <Card className="mt-12 border-cyan-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-800">
                ♿ Accessibility & Contrast Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">
                  Ensuring your Arabic calligraphy is accessible to all users is crucial for inclusive design. 
                  Follow these guidelines to create designs that work for everyone, including users with 
                  visual impairments or reading difficulties.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-green-800 mb-4">✅ Recommended Practices</h4>
                      <ul className="text-sm text-green-600 space-y-2">
                        <li>• <strong>Contrast Ratio 4.5:1</strong> minimum for normal text</li>
                        <li>• <strong>Contrast Ratio 3:1</strong> minimum for large text (18pt+)</li>
                        <li>• <strong>Test with real users</strong> including Arabic speakers</li>
                        <li>• <strong>Provide alternative formats</strong> for complex designs</li>
                        <li>• <strong>Use semantic color coding</strong> with additional indicators</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-800 mb-4">🎯 Arabic-Specific Considerations</h4>
                      <ul className="text-sm text-blue-600 space-y-2">
                        <li>• <strong>Diacritical marks</strong> need higher contrast</li>
                        <li>• <strong>Connected letters</strong> require careful color balance</li>
                        <li>• <strong>Right-to-left reading</strong> affects color flow</li>
                        <li>• <strong>Cultural color meanings</strong> vary by region</li>
                        <li>• <strong>Religious contexts</strong> may have color restrictions</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Contrast Examples */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-800 mb-4">Contrast Examples</h4>
                      <div className="space-y-4">
                        <div className="bg-black text-white p-3 rounded text-center">
                          <span className="text-lg">نص عالي التباين</span>
                          <div className="text-xs mt-1">High Contrast (21:1)</div>
                        </div>
                        <div className="bg-blue-600 text-white p-3 rounded text-center">
                          <span className="text-lg">نص جيد التباين</span>
                          <div className="text-xs mt-1">Good Contrast (8.2:1)</div>
                        </div>
                        <div className="bg-gray-400 text-white p-3 rounded text-center">
                          <span className="text-lg">نص منخفض التباين</span>
                          <div className="text-xs mt-1">Low Contrast (2.8:1) ❌</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h4 className="font-semibold text-yellow-800 mb-4">⚠️ Common Mistakes</h4>
                      <ul className="text-sm text-yellow-600 space-y-2">
                        <li>• Using light gray text on white backgrounds</li>
                        <li>• Relying only on color to convey information</li>
                        <li>• Ignoring color blindness considerations</li>
                        <li>• Not testing on actual devices and screens</li>
                        <li>• Overlooking cultural color sensitivities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Color Tool */}
          <Card className="mt-12 border-cyan-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-800">
                🎨 Interactive Color Palette Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">
                  Use our interactive tool to generate custom color palettes for your Arabic calligraphy projects.
                  Click on any color to explore variations and combinations.
                </p>

                {/* Color Generator Interface */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Base Color Selection */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4">Choose Base Color</h4>
                      <div className="grid grid-cols-6 gap-2 mb-4">
                        {['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA'].map((color, index) => (
                          <button
                            key={index}
                            className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-gray-500 transition-colors"
                            style={{ backgroundColor: color }}
                            title={color}
                          ></button>
                        ))}
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <h5 className="font-semibold text-gray-700 mb-2">Selected Palette:</h5>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 bg-blue-600 rounded border"></div>
                          <div className="w-8 h-8 bg-blue-400 rounded border"></div>
                          <div className="w-8 h-8 bg-blue-200 rounded border"></div>
                          <div className="w-8 h-8 bg-gray-100 rounded border"></div>
                          <div className="w-8 h-8 bg-gray-800 rounded border"></div>
                        </div>
                      </div>
                    </div>

                    {/* Preview Area */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4">Live Preview</h4>
                      <div className="bg-gray-100 rounded-lg p-6 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2" style={{fontFamily: 'serif'}}>
                          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                        </div>
                        <div className="text-sm text-gray-600">
                          In the name of God, the Most Gracious, the Most Merciful
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white w-full">
                          Apply to Generator
                        </Button>
                        <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 w-full">
                          Save Palette
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Color Harmony Rules */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-4">🎯 Color Harmony Rules for Arabic Design</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Complementary Colors</h5>
                      <p className="text-blue-600 text-sm mb-3">
                        Use opposite colors on the color wheel for high contrast and visual impact.
                        Perfect for making Arabic text stand out.
                      </p>
                      <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-orange-500 rounded"></div>
                        <div className="w-6 h-6 bg-blue-500 rounded"></div>
                        <span className="text-xs text-blue-600">Orange + Blue</span>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Analogous Colors</h5>
                      <p className="text-blue-600 text-sm mb-3">
                        Use colors next to each other on the color wheel for harmonious,
                        peaceful designs. Great for traditional Arabic calligraphy.
                      </p>
                      <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-blue-400 rounded"></div>
                        <div className="w-6 h-6 bg-blue-500 rounded"></div>
                        <div className="w-6 h-6 bg-blue-600 rounded"></div>
                        <span className="text-xs text-blue-600">Blue Family</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cultural Color Meanings */}
          <Card className="mt-12 border-cyan-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-800">
                🌍 Cultural Color Meanings in Islamic Art
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">
                  Understanding the cultural and religious significance of colors in Islamic tradition
                  helps create more meaningful and respectful Arabic calligraphy designs.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full mr-3"></div>
                      <h4 className="font-semibold text-green-800">Green (أخضر)</h4>
                    </div>
                    <p className="text-green-700 text-sm mb-3">
                      The most sacred color in Islam, representing paradise, nature, and the Prophet Muhammad.
                      Often used in mosque decoration and religious texts.
                    </p>
                    <div className="text-xs text-green-600">
                      <strong>Best for:</strong> Religious content, nature themes, peaceful designs
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full mr-3"></div>
                      <h4 className="font-semibold text-blue-800">Blue (أزرق)</h4>
                    </div>
                    <p className="text-blue-700 text-sm mb-3">
                      Symbolizes infinity, wisdom, and the divine. Associated with the sky and water,
                      representing spiritual depth and contemplation.
                    </p>
                    <div className="text-xs text-blue-600">
                      <strong>Best for:</strong> Spiritual content, wisdom quotes, formal documents
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full mr-3"></div>
                      <h4 className="font-semibold text-yellow-800">Gold (ذهبي)</h4>
                    </div>
                    <p className="text-yellow-700 text-sm mb-3">
                      Represents divine light, wealth, and prestige. Traditionally used in manuscript
                      illumination and architectural decoration.
                    </p>
                    <div className="text-xs text-yellow-600">
                      <strong>Best for:</strong> Luxury designs, formal invitations, traditional art
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full mr-3"></div>
                      <h4 className="font-semibold text-red-800">Red (أحمر)</h4>
                    </div>
                    <p className="text-red-700 text-sm mb-3">
                      Symbolizes strength, courage, and passion. Use carefully as it can also represent
                      danger or warning in some contexts.
                    </p>
                    <div className="text-xs text-red-600">
                      <strong>Best for:</strong> Bold statements, celebration themes, attention-grabbing designs
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full mr-3"></div>
                      <h4 className="font-semibold text-purple-800">Purple (بنفسجي)</h4>
                    </div>
                    <p className="text-purple-700 text-sm mb-3">
                      Associated with royalty, nobility, and spiritual transformation. Historically
                      used in royal and religious contexts.
                    </p>
                    <div className="text-xs text-purple-600">
                      <strong>Best for:</strong> Royal themes, spiritual content, luxury branding
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                      <h4 className="font-semibold text-gray-800">Black & White</h4>
                    </div>
                    <p className="text-gray-700 text-sm mb-3">
                      Black represents elegance and formality, while white symbolizes purity and peace.
                      The classic combination for traditional calligraphy.
                    </p>
                    <div className="text-xs text-gray-600">
                      <strong>Best for:</strong> Traditional calligraphy, formal documents, timeless designs
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-12">
            <Card className="bg-gradient-to-r from-cyan-100 to-blue-100 border-cyan-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-cyan-800 mb-4">
                  Apply Colors to Your Design
                </h2>
                <p className="text-cyan-700 mb-6 max-w-2xl mx-auto">
                  Ready to use these beautiful color palettes? Try them instantly in our Arabic 
                  calligraphy generator and see how they transform your designs.
                </p>
                <Link href="/">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg">
                    Start Designing <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Tools */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Design Templates</h3>
                <p className="text-sm text-gray-600 mb-4">Pre-designed templates with optimized color schemes</p>
                <Link href="/resources/design-templates">
                  <Button variant="outline" size="sm" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                    Browse Templates <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Font Selection Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Choose fonts that work well with your color palette</p>
                <Link href="/tutorials/arabic-font-selection-guide">
                  <Button variant="outline" size="sm" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                    Font Guide <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Design Inspiration</h3>
                <p className="text-sm text-gray-600 mb-4">Explore beautiful Arabic calligraphy color combinations</p>
                <Link href="/resources/design-inspiration">
                  <Button variant="outline" size="sm" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                    Get Inspired <ArrowRight className="ml-1 h-3 w-3" />
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
