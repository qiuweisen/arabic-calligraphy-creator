import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Palette, Type, Settings } from 'lucide-react'
import Link from 'next/link'
import { GeneratorCTA } from '@/components/generator-cta'

export const metadata: Metadata = {
  title: 'How to Create Arabic Calligraphy Online - Complete Tutorial Guide | Arabic Calligraphy Generator',
  description: 'Learn how to create beautiful Arabic calligraphy online with our comprehensive tutorial. Step-by-step guide from text input to downloading your masterpiece, perfect for beginners and professionals.',
  keywords: 'how to create arabic calligraphy online,arabic calligraphy generator tutorial,online arabic font tool,arabic calligraphy creation steps,free arabic calligraphy maker',
  openGraph: {
    title: 'How to Create Arabic Calligraphy Online - Complete Tutorial Guide',
    description: 'Learn how to create beautiful Arabic calligraphy online with our comprehensive tutorial. Step-by-step guide from text input to downloading your masterpiece.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/tutorials/how-to-create-arabic-calligraphy-online',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Create Arabic Calligraphy Online - Complete Tutorial Guide',
    description: 'Learn how to create beautiful Arabic calligraphy online with our comprehensive tutorial. Step-by-step guide from text input to downloading your masterpiece.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/tutorials/how-to-create-arabic-calligraphy-online',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'How to Create Arabic Calligraphy Online', href: '/tutorials/how-to-create-arabic-calligraphy-online' },
]

export default function HowToCreateArabicCalligraphyOnlinePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create Arabic Calligraphy Online",
    "description": "Complete tutorial guide on creating beautiful Arabic calligraphy using our online generator tool",
    "image": "https://arabic-calligraphy-creator.com/og-image.png",
    "totalTime": "PT10M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Computer or mobile device"
      },
      {
        "@type": "HowToSupply",
        "name": "Internet connection"
      },
      {
        "@type": "HowToSupply",
        "name": "Modern web browser"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Arabic Calligraphy Generator",
        "url": "https://arabic-calligraphy-creator.com"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Arabic Text",
        "text": "Input your desired Arabic text using the text input box, virtual keyboard, copy-paste, or select from preset examples",
        "image": "https://arabic-calligraphy-creator.com/tutorial-step1.png"
      },
      {
        "@type": "HowToStep",
        "name": "Choose Arabic Font",
        "text": "Select from 17 beautiful Arabic fonts that best suit your needs, including traditional, modern, and decorative styles",
        "image": "https://arabic-calligraphy-creator.com/tutorial-step2.png"
      },
      {
        "@type": "HowToStep",
        "name": "Customize Style Effects",
        "text": "Adjust font size, colors, shadows, backgrounds and other style parameters to create unique visual effects",
        "image": "https://arabic-calligraphy-creator.com/tutorial-step3.png"
      },
      {
        "@type": "HowToStep",
        "name": "Download Your Artwork",
        "text": "Choose PNG or SVG format to download your Arabic calligraphy artwork with high-quality output and transparent background support",
        "image": "https://arabic-calligraphy-creator.com/tutorial-step4.png"
      }
    ],
    "author": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Creator",
      "url": "https://arabic-calligraphy-creator.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Creator",
      "url": "https://arabic-calligraphy-creator.com"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Create Arabic Calligraphy Online
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master the complete process of creating professional Arabic calligraphy online.
              Learn to craft beautiful Arabic text art from scratch using our browser-based tool - no software installation required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                  Start Creating Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tutorials">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3">
                  View More Tutorials
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Overview */}
          <Card className="mb-12 border-amber-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
              <CardTitle className="text-2xl text-amber-800">
                📋 Creation Process Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Type className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Enter Text</h3>
                  <p className="text-sm text-gray-600">Input your Arabic text or use our preset examples</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Choose Font</h3>
                  <p className="text-sm text-gray-600">Select from 17 beautiful Arabic fonts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Customize Style</h3>
                  <p className="text-sm text-gray-600">Adjust colors, size, shadows and backgrounds</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">4. Download</h3>
                  <p className="text-sm text-gray-600">Save as PNG or SVG in high quality</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Step-by-Step Tutorial */}
          <div className="space-y-12">
            {/* Step 1: Getting Started */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  <Type className="h-6 w-6 mr-3" />
                  Step 1: Getting Started with Text Input
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    The first step in creating beautiful Arabic calligraphy online is entering your desired text.
                    Our generator provides multiple convenient ways to input Arabic text, making it accessible
                    for users of all technical levels.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-800 mb-4">Text Input Methods</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">1. Direct Typing</h5>
                            <p className="text-sm text-blue-600">
                              If you have an Arabic keyboard enabled on your device, simply click in the text
                              input box and start typing your Arabic text directly.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">2. Virtual Keyboard</h5>
                            <p className="text-sm text-blue-600">
                              Use our built-in virtual Arabic keyboard to type characters by clicking on
                              the on-screen keys. Perfect for users without Arabic keyboard layouts.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">3. Copy and Paste</h5>
                            <p className="text-sm text-blue-600">
                              Copy Arabic text from any source (websites, documents, messages) and paste
                              it directly into our text input field.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-green-800 mb-4">Preset Examples</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Religious Phrases</h5>
                            <p className="text-sm text-green-600">
                              Quick access to common Islamic phrases like "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ"
                              (Bismillah), "الله" (Allah), and "محمد" (Muhammad).
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Common Greetings</h5>
                            <p className="text-sm text-green-600">
                              Popular Arabic greetings and expressions like "السلام عليكم" (Peace be upon you),
                              "مرحبا" (Welcome), and "شكرا" (Thank you).
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Names and Titles</h5>
                            <p className="text-sm text-green-600">
                              Common Arabic names and titles for wedding invitations, business cards,
                              and personal projects.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-800 mb-4">💡 Pro Tips for Text Input</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-yellow-700 mb-2">Text Length Considerations</h5>
                        <ul className="text-sm text-yellow-600 space-y-1">
                          <li>• Short phrases (1-5 words) work best for decorative designs</li>
                          <li>• Longer texts are suitable for quotes and verses</li>
                          <li>• Consider line breaks for multi-line compositions</li>
                          <li>• Test different lengths to see what looks best</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-yellow-700 mb-2">Character Support</h5>
                        <ul className="text-sm text-yellow-600 space-y-1">
                          <li>• Full Arabic alphabet including diacritics</li>
                          <li>• Persian and Urdu additional characters</li>
                          <li>• Numbers in both Arabic and Hindi-Arabic numerals</li>
                          <li>• Common punctuation marks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Choosing the Perfect Font */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  <Palette className="h-6 w-6 mr-3" />
                  Step 2: Choosing the Perfect Arabic Font
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Selecting the right font is crucial for creating impactful Arabic calligraphy. Our generator
                    offers 17 carefully curated Arabic fonts, each with its own character and best use cases.
                    Understanding the differences will help you make the perfect choice for your project.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h4 className="font-semibold text-purple-800 mb-4">Traditional Fonts</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2">Amiri</h5>
                          <p className="text-sm text-purple-600">
                            Classical Naskh style, perfect for Quranic verses and formal documents.
                            Excellent readability and traditional aesthetics.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2">Scheherazade</h5>
                          <p className="text-sm text-purple-600">
                            Extended Arabic script support with beautiful curves. Ideal for
                            literary texts and elegant compositions.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-700 mb-2">Aref Ruqaa</h5>
                          <p className="text-sm text-purple-600">
                            Based on the traditional Ruqaa script. Great for handwritten-style
                            calligraphy and personal messages.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                      <h4 className="font-semibold text-teal-800 mb-4">Modern Fonts</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-teal-700 mb-2">Cairo</h5>
                          <p className="text-sm text-teal-600">
                            Contemporary sans-serif design. Perfect for modern logos,
                            business cards, and digital applications.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-teal-700 mb-2">Tajawal</h5>
                          <p className="text-sm text-teal-600">
                            Clean and minimalist style. Excellent for web design,
                            presentations, and modern branding.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-teal-700 mb-2">Mada</h5>
                          <p className="text-sm text-teal-600">
                            Geometric and structured design. Ideal for technical
                            documents and contemporary art projects.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                      <h4 className="font-semibold text-rose-800 mb-4">Decorative Fonts</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-rose-700 mb-2">Lemonada</h5>
                          <p className="text-sm text-rose-600">
                            Playful and rounded characters. Perfect for children's content,
                            casual designs, and friendly branding.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-rose-700 mb-2">Rakkas</h5>
                          <p className="text-sm text-rose-600">
                            Bold and expressive style. Great for headlines, posters,
                            and attention-grabbing designs.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-rose-700 mb-2">Jomhuria</h5>
                          <p className="text-sm text-rose-600">
                            Unique and artistic appearance. Ideal for creative projects,
                            artistic expressions, and distinctive branding.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h4 className="font-semibold text-indigo-800 mb-4">🎨 Font Selection Guidelines</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-indigo-700 mb-2">Consider Your Purpose</h5>
                        <ul className="text-sm text-indigo-600 space-y-1">
                          <li>• Religious texts: Use traditional fonts like Amiri or Scheherazade</li>
                          <li>• Business branding: Choose modern fonts like Cairo or Tajawal</li>
                          <li>• Wedding invitations: Elegant fonts like El Messiri work well</li>
                          <li>• Children's content: Playful fonts like Lemonada are perfect</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-indigo-700 mb-2">Technical Considerations</h5>
                        <ul className="text-sm text-indigo-600 space-y-1">
                          <li>• Preview each font with your specific text</li>
                          <li>• Consider readability at different sizes</li>
                          <li>• Test how the font looks with your chosen colors</li>
                          <li>• Think about the final use case (print vs digital)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mid-tutorial CTA */}
            <div className="my-8">
              <GeneratorCTA variant="compact" />
            </div>

            {/* Step 3: Customizing Style and Effects */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  <Settings className="h-6 w-6 mr-3" />
                  Step 3: Customizing Style and Visual Effects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    This is where your creativity truly shines. Our advanced customization options allow you
                    to transform basic text into stunning visual art. Learn how to use each tool effectively
                    to achieve professional-quality results.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h4 className="font-semibold text-orange-800 mb-4">Typography Controls</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-orange-700 mb-2">Font Size</h5>
                            <p className="text-sm text-orange-600">
                              Adjust from 12px to 200px. Larger sizes work better for decorative pieces,
                              while smaller sizes are ideal for detailed text work.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-orange-700 mb-2">Letter Spacing</h5>
                            <p className="text-sm text-orange-600">
                              Fine-tune the space between characters. Tighter spacing creates density,
                              while looser spacing improves readability.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-orange-700 mb-2">Line Height</h5>
                            <p className="text-sm text-orange-600">
                              Control vertical spacing for multi-line text. Proper line height
                              ensures optimal readability and visual balance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
                        <h4 className="font-semibold text-cyan-800 mb-4">Color and Effects</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-cyan-700 mb-2">Text Color</h5>
                            <p className="text-sm text-cyan-600">
                              Choose from preset colors or use the color picker for custom shades.
                              Consider contrast and cultural color meanings.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-cyan-700 mb-2">Shadow Effects</h5>
                            <p className="text-sm text-cyan-600">
                              Add depth with drop shadows. Adjust blur, offset, and color to create
                              subtle elegance or dramatic impact.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-cyan-700 mb-2">Background Options</h5>
                            <p className="text-sm text-cyan-600">
                              Choose transparent, solid colors, or gradient backgrounds.
                              Transparent backgrounds are perfect for overlaying on other designs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-800 mb-4">🎯 Design Best Practices</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Color Harmony</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Use complementary colors for contrast</li>
                          <li>• Consider cultural color associations</li>
                          <li>• Test readability on different backgrounds</li>
                          <li>• Maintain consistency across projects</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Visual Balance</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Don't overuse effects - less is often more</li>
                          <li>• Ensure text remains readable</li>
                          <li>• Consider the final viewing context</li>
                          <li>• Test at different sizes</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Professional Tips</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Save multiple versions for comparison</li>
                          <li>• Get feedback before finalizing</li>
                          <li>• Consider printing requirements</li>
                          <li>• Keep source files organized</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4: Downloading and Using Your Creation */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  <Download className="h-6 w-6 mr-3" />
                  Step 4: Downloading and Using Your Arabic Calligraphy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Once you're satisfied with your design, it's time to download and use your Arabic calligraphy.
                    Understanding the different file formats and their applications will help you make the most
                    of your creation.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                        <h4 className="font-semibold text-emerald-800 mb-4">File Format Options</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-emerald-700 mb-2">PNG Format</h5>
                            <p className="text-sm text-emerald-600">
                              High-quality raster format with transparency support. Perfect for web use,
                              social media, presentations, and when you need pixel-perfect quality.
                            </p>
                            <div className="mt-2 text-xs text-emerald-500">
                              Best for: Web graphics, social media, presentations, print (small sizes)
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-emerald-700 mb-2">SVG Format</h5>
                            <p className="text-sm text-emerald-600">
                              Scalable vector format that maintains quality at any size. Ideal for logos,
                              large prints, professional branding, and when you need infinite scalability.
                            </p>
                            <div className="mt-2 text-xs text-emerald-500">
                              Best for: Logos, large prints, professional design, web scalability
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-violet-50 border border-violet-200 rounded-lg p-6">
                        <h4 className="font-semibold text-violet-800 mb-4">Quality Settings</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-violet-700 mb-2">Resolution Options</h5>
                            <p className="text-sm text-violet-600">
                              Choose from standard (72 DPI) for web use, high (150 DPI) for general printing,
                              or ultra-high (300 DPI) for professional printing and large formats.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-violet-700 mb-2">Size Presets</h5>
                            <p className="text-sm text-violet-600">
                              Quick presets for common use cases: social media posts, business cards,
                              posters, and custom dimensions for specific requirements.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-violet-700 mb-2">Background Options</h5>
                            <p className="text-sm text-violet-600">
                              Download with transparent background for maximum flexibility, or choose
                              white/colored backgrounds for immediate use.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-4">📱 Usage Applications</h4>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div>
                        <h5 className="font-semibold text-blue-700 mb-2">Digital Media</h5>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Website headers and logos</li>
                          <li>• Social media posts and stories</li>
                          <li>• Digital presentations</li>
                          <li>• Email signatures</li>
                          <li>• Mobile app interfaces</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 mb-2">Print Materials</h5>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Business cards and letterheads</li>
                          <li>• Wedding invitations</li>
                          <li>• Posters and banners</li>
                          <li>• Book covers and layouts</li>
                          <li>• Packaging design</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 mb-2">Personal Projects</h5>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Home decoration and wall art</li>
                          <li>• Personalized gifts</li>
                          <li>• Scrapbooking and crafts</li>
                          <li>• Religious and spiritual art</li>
                          <li>• Educational materials</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 mb-2">Commercial Use</h5>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Brand identity and logos</li>
                          <li>• Marketing materials</li>
                          <li>• Product packaging</li>
                          <li>• Signage and displays</li>
                          <li>• Merchandise design</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Tips and Troubleshooting */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">
                  🚀 Advanced Tips and Troubleshooting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="font-semibold text-red-800 mb-4">Common Issues & Solutions</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-red-700 mb-2">Text Not Displaying Correctly</h5>
                            <p className="text-sm text-red-600">
                              Ensure your browser supports Arabic text rendering. Try refreshing the page
                              or switching to a different browser (Chrome, Firefox, Safari recommended).
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-red-700 mb-2">Font Not Loading</h5>
                            <p className="text-sm text-red-600">
                              Check your internet connection. Fonts are loaded from Google Fonts and
                              require a stable connection. Try selecting a different font temporarily.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-red-700 mb-2">Download Issues</h5>
                            <p className="text-sm text-red-600">
                              Ensure pop-ups are enabled for our site. Some browsers block automatic
                              downloads. Check your download folder or try right-clicking to save.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-green-800 mb-4">Pro Tips for Better Results</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Optimize for Your Use Case</h5>
                            <p className="text-sm text-green-600">
                              For web use, prioritize smaller file sizes. For print, choose higher
                              resolutions. For logos, always use SVG format for scalability.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Test Before Finalizing</h5>
                            <p className="text-sm text-green-600">
                              Preview your design at the intended size and context. What looks good
                              on screen might need adjustments for print or different backgrounds.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Save Your Settings</h5>
                            <p className="text-sm text-green-600">
                              Take note of successful color combinations and settings for future projects.
                              Consider creating a style guide for consistent branding.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="border-amber-200 shadow-lg bg-gradient-to-r from-amber-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-amber-800 mb-4">
                  Ready to Create Your Arabic Calligraphy?
                </h2>
                <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                  Now that you've learned the complete process, it's time to put your knowledge into practice.
                  Start creating beautiful Arabic calligraphy with our powerful online generator.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                      <Type className="mr-2 h-5 w-5" />
                      Start Creating Now
                    </Button>
                  </Link>
                  <Link href="/fonts">
                    <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3">
                      <Palette className="mr-2 h-5 w-5" />
                      Explore All Fonts
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}