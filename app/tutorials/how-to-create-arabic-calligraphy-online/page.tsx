import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Palette, Type, Settings } from 'lucide-react'
import Link from 'next/link'

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
        </div>
      </div>
    </>
  )
}