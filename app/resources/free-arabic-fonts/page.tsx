import type { Metadata } from 'next'
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Star, Shield, Globe, Gift } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Arabic Fonts Download 2025 - High Quality Typography Resources | Open Source Collection',
  description: 'Download free Arabic fonts for commercial and personal use. Curated collection of high-quality open source Arabic typography with direct download links and licensing information.',
  keywords: 'free arabic fonts download,open source arabic fonts,commercial use arabic fonts,free islamic fonts,arabic typography resources,google fonts arabic',
  openGraph: {
    title: 'Free Arabic Fonts Download 2025 - High Quality Typography Resources',
    description: 'Download free Arabic fonts for commercial and personal use. Curated collection of high-quality open source Arabic typography.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/resources/free-arabic-fonts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Arabic Fonts Download 2025 - High Quality Typography Resources',
    description: 'Download free Arabic fonts for commercial and personal use. Curated collection of high-quality open source Arabic typography.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/resources/free-arabic-fonts',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Resources', href: '/resources' },
  { name: 'Free Arabic Fonts', href: '/resources/free-arabic-fonts' },
]

export default function FreeArabicFontsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Free Arabic Fonts Download 2025 - High Quality Typography Resources",
    "description": "Comprehensive collection of free Arabic fonts for download, including licensing information and usage guidelines for commercial and personal projects",
    "image": "https://arabic-calligraphy-creator.com/free-fonts-og.png",
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
      "@id": "https://arabic-calligraphy-creator.com/resources/free-arabic-fonts"
    }
  }

  const howToSteps = [
    {
      title: "Choose a font from the curated list",
      description: "Browse featured Arabic fonts, review their style, license, and best use cases before downloading."
    },
    {
      title: "Review licensing and usage recommendations",
      description: "Each font card highlights licensing terms so you can confirm commercial or personal usage fits your project."
    },
    {
      title: "Download or preview in the generator",
      description: "Use the direct download link or open the font inside our online calligraphy generator for instant SVG/PNG exports."
    }
  ]

  const faqItems = [
    {
      question: "Are these Arabic fonts really free for commercial use?",
      answer: "Yes. Every font in this collection is licensed under permissive terms like the SIL Open Font License, allowing commercial and personal use without additional fees."
    },
    {
      question: "Can I use these fonts inside the Arabic Calligraphy Generator?",
      answer: "Absolutely. Select any featured font and open it in our generator to preview designs, customize colors, and export SVG or PNG files instantly."
    },
    {
      question: "Which file formats are available for download?",
      answer: "Most fonts provide TTF or OTF downloads. Once loaded into our generator, you can also export your lettering as high-resolution PNG or SVG graphics."
    }
  ]

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Arabic Calligraphy Generator",
    "description": "Free online Arabic calligraphy generator with instant SVG and PNG exports using premium Arabic fonts.",
    "url": "https://arabic-calligraphy-generator.com",
    "image": "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/og-image.png",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Modern web browser with JavaScript enabled",
    "softwareVersion": "2.0",
    "fileFormat": ["PNG", "SVG", "TTF", "OTF"],
    "featureList": [
      "30+ Arabic fonts including Naskh, Kufi, and Diwani styles",
      "Instant SVG and PNG export",
      "Commercial use allowed",
      "No registration required"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2030-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Generator"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to download free Arabic fonts",
    "description": "Follow these quick steps to download and use free Arabic fonts for commercial or personal projects.",
    "step": howToSteps.map((step) => ({
      "@type": "HowToStep",
      "name": step.title,
      "text": step.description
    }))
  }

  const freeFonts = [
    {
      name: "Cairo",
      category: "Sans Serif",
      rating: 5,
      downloads: "2M+",
      license: "SIL Open Font License",
      description: "Modern, clean Arabic font perfect for web and mobile applications. Excellent readability and performance.",
      features: ["Web optimized", "Multiple weights", "Latin support", "Open source"],
      downloadUrl: "/fonts/cairo",
      previewText: "القاهرة - خط عربي حديث"
    },
    {
      name: "Amiri",
      category: "Traditional",
      rating: 5,
      downloads: "1.5M+",
      license: "SIL Open Font License",
      description: "Classical Naskh-style font ideal for formal documents and traditional Arabic typography.",
      features: ["Traditional style", "High quality", "Academic use", "Extensive Unicode"],
      downloadUrl: "/fonts/amiri",
      previewText: "أميري - خط تقليدي أنيق"
    },
    {
      name: "Tajawal",
      category: "Modern",
      rating: 4,
      downloads: "800K+",
      license: "SIL Open Font License",
      description: "Contemporary Arabic font with geometric characteristics, perfect for modern branding and UI design.",
      features: ["Geometric design", "Brand friendly", "UI optimized", "Multiple weights"],
      downloadUrl: "/fonts/tajawal",
      previewText: "تجوال - خط هندسي معاصر"
    },
    {
      name: "Lateef",
      category: "Educational",
      rating: 4,
      downloads: "600K+",
      license: "SIL Open Font License",
      description: "Reliable Arabic font designed for educational content and long-form reading applications.",
      features: ["Educational focus", "High readability", "Scholarly use", "Stable design"],
      downloadUrl: "/fonts/lateef",
      previewText: "لطيف - خط تعليمي واضح"
    }
  ]

  return (
    <>
      <StaticNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Free Arabic Fonts Download
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access our curated collection of high-quality, free Arabic fonts. All fonts are available for 
              commercial and personal use with proper licensing. Download directly or use in our online generator.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3">
                  Try Fonts Online <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/fonts">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                  Browse All Fonts
                </Button>
              </Link>
            </div>
          </div>

          {/* How-to Section */}
          <div className="bg-white border border-emerald-200 rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">How to Download Free Arabic Fonts</h2>
            <ol className="space-y-6">
              {howToSteps.map((step, index) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white text-lg font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* License Information */}
          <Card className="mb-12 border-emerald-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-100 to-teal-100">
              <CardTitle className="text-2xl text-emerald-600">
                📄 Licensing & Usage Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Commercial Use</h3>
                  <p className="text-sm text-gray-600">Free for commercial projects and business applications</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Use</h3>
                  <p className="text-sm text-gray-600">Unlimited personal and educational usage rights</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Web Embedding</h3>
                  <p className="text-sm text-gray-600">Embed in websites and web applications freely</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">No Registration</h3>
                  <p className="text-sm text-gray-600">Direct download without account creation required</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Font Collection */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Featured Free Arabic Fonts
            </h2>

            {freeFonts.map((font, index) => (
              <Card key={index} className="border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Font Preview */}
                    <div className="text-center">
                      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-4">
                        <div className="text-3xl font-bold text-gray-900 mb-2" style={{fontFamily: 'serif'}}>
                          {font.previewText}
                        </div>
                        <div className="text-lg text-gray-600">
                          {font.name} Font Preview
                        </div>
                      </div>
                      <div className="flex justify-center items-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < font.rating ? 'text-amber-600 fill-current' : 'text-gray-600'}`} 
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">({font.downloads} downloads)</span>
                      </div>
                    </div>

                    {/* Font Information */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{font.name}</h3>
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                            {font.category}
                          </span>
                          <span className="bg-blue-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                            {font.license}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{font.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {font.features.map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Download Actions */}
                    <div className="text-center space-y-4">
                      <Link href={font.downloadUrl}>
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download Font
                        </Button>
                      </Link>
                      <Link href="/">
                        <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 w-full">
                          Try Online
                        </Button>
                      </Link>
                      <div className="text-xs text-gray-600">
                        Available in multiple formats:<br />
                        TTF, OTF, WOFF, WOFF2
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Installation Guide */}
          <Card className="mt-12 border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-600">
                💻 Font Installation Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Follow these simple steps to install Arabic fonts on your system and start using them 
                  in your design projects, documents, and applications.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-800 mb-4">🪟 Windows Installation</h4>
                    <ol className="text-sm text-amber-700 space-y-2">
                      <li>1. Download the font file (.ttf or .otf)</li>
                      <li>2. Right-click on the font file</li>
                      <li>3. Select "Install" from the context menu</li>
                      <li>4. Font will be available in all applications</li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">🍎 macOS Installation</h4>
                    <ol className="text-sm text-gray-600 space-y-2">
                      <li>1. Download and double-click the font file</li>
                      <li>2. Font Book application will open</li>
                      <li>3. Click "Install Font" button</li>
                      <li>4. Font is now available system-wide</li>
                    </ol>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-800 mb-4">🐧 Linux Installation</h4>
                    <ol className="text-sm text-amber-700 space-y-2">
                      <li>1. Copy font files to ~/.fonts/ directory</li>
                      <li>2. Run: fc-cache -f -v</li>
                      <li>3. Restart applications if needed</li>
                      <li>4. Fonts will appear in font menus</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-12">
            <Card className="bg-gradient-to-r from-emerald-100 to-teal-100 border-emerald-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-emerald-600 mb-4">
                  Start Creating with Free Arabic Fonts
                </h2>
                <p className="text-emerald-600 mb-6 max-w-2xl mx-auto">
                  Don't want to download? Use our online Arabic calligraphy generator to create 
                  beautiful designs instantly with all these fonts and more.
                </p>
                <Link href="/">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                    Create Online Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Free Arabic Font FAQ</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {faqItems.map((item) => (
                <Card key={item.question} className="border-emerald-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-emerald-700 mb-3">{item.question}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Resources */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Font Selection Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Learn how to choose the right Arabic font for your project</p>
                <Link href="/tutorials/arabic-font-selection-guide">
                  <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Selection Guide <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Online Generator</h3>
                <p className="text-sm text-gray-600 mb-4">Use these fonts with our online Arabic calligraphy generator</p>
                <Link href="/">
                  <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Start Creating <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Typography Trends</h3>
                <p className="text-sm text-gray-600 mb-4">Discover the latest trends in Arabic typography for 2025</p>
                <Link href="/guides/arabic-typography-trends-2025">
                  <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
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
