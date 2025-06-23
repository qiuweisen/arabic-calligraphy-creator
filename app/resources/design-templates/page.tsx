import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Eye, Heart, Palette, Layout, Image, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Arabic Calligraphy Design Templates 2025 - Free Download | Professional Layouts & Inspiration',
  description: 'Download free Arabic calligraphy design templates for logos, posters, social media, and print. Professional layouts with customizable Arabic typography and Islamic design elements.',
  keywords: 'arabic calligraphy templates,islamic design templates,arabic logo templates,calligraphy poster templates,arabic social media templates,free design resources',
  openGraph: {
    title: 'Arabic Calligraphy Design Templates 2025 - Free Download',
    description: 'Download free Arabic calligraphy design templates for logos, posters, social media, and print. Professional layouts with customizable typography.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/resources/design-templates',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic Calligraphy Design Templates 2025 - Free Download',
    description: 'Download free Arabic calligraphy design templates for logos, posters, social media, and print.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/resources/design-templates',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Resources', href: '/resources' },
  { name: 'Design Templates', href: '/resources/design-templates' },
]

export default function DesignTemplatesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arabic Calligraphy Design Templates 2025 - Free Download",
    "description": "Comprehensive collection of free Arabic calligraphy design templates for various applications including logos, posters, social media, and print materials",
    "image": "https://arabic-calligraphy-creator.com/design-templates-og.png",
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
      "@id": "https://arabic-calligraphy-creator.com/resources/design-templates"
    }
  }

  const templateCategories = [
    {
      title: "Logo & Branding",
      icon: <Palette className="h-8 w-8" />,
      description: "Professional Arabic logo templates for businesses and brands",
      count: "25+ Templates",
      color: "blue"
    },
    {
      title: "Social Media",
      icon: <Image className="h-8 w-8" />,
      description: "Instagram, Facebook, and Twitter post templates with Arabic calligraphy",
      count: "40+ Templates",
      color: "purple"
    },
    {
      title: "Print Materials",
      icon: <FileText className="h-8 w-8" />,
      description: "Posters, flyers, and brochures with beautiful Arabic typography",
      count: "30+ Templates",
      color: "green"
    },
    {
      title: "Web Design",
      icon: <Layout className="h-8 w-8" />,
      description: "Website headers, banners, and UI elements with Arabic text",
      count: "20+ Templates",
      color: "orange"
    }
  ]

  const featuredTemplates = [
    {
      title: "Modern Arabic Logo Set",
      category: "Logo & Branding",
      description: "Clean, contemporary logo templates perfect for tech companies and startups",
      formats: ["AI", "PSD", "SVG", "PNG"],
      downloads: "15K+",
      rating: 5,
      preview: "🎨 Modern Logo Collection"
    },
    {
      title: "Islamic Geometric Patterns",
      category: "Print Materials",
      description: "Traditional Islamic geometric patterns combined with Arabic calligraphy",
      formats: ["AI", "EPS", "PDF", "PNG"],
      downloads: "12K+",
      rating: 5,
      preview: "🕌 Geometric Art Templates"
    },
    {
      title: "Social Media Quote Cards",
      category: "Social Media",
      description: "Inspirational quote templates with beautiful Arabic typography",
      formats: ["PSD", "PNG", "JPG"],
      downloads: "20K+",
      rating: 4,
      preview: "📱 Quote Card Designs"
    },
    {
      title: "Wedding Invitation Suite",
      category: "Print Materials",
      description: "Elegant Arabic wedding invitation templates with traditional motifs",
      formats: ["AI", "PSD", "PDF"],
      downloads: "8K+",
      rating: 5,
      preview: "💒 Wedding Collection"
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Arabic Calligraphy Design Templates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Accelerate your design process with our professionally crafted Arabic calligraphy templates. 
              Perfect for logos, social media, print materials, and web design. All templates are free 
              to download and customize for your projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">
                  Create Custom Design <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resources/free-arabic-fonts">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3">
                  Free Fonts
                </Button>
              </Link>
            </div>
          </div>

          {/* Template Categories */}
          <Card className="mb-12 border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
              <CardTitle className="text-2xl text-purple-800">
                🎨 Template Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {templateCategories.map((category, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <div className={`text-${category.color}-600`}>
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                    <span className={`text-xs bg-${category.color}-100 text-${category.color}-800 px-2 py-1 rounded-full`}>
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Featured Templates */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Featured Design Templates
            </h2>

            {featuredTemplates.map((template, index) => (
              <Card key={index} className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Template Preview */}
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 rounded-lg p-8 mb-4 h-48 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">{template.preview.split(' ')[0]}</div>
                          <div className="text-sm text-gray-600 font-medium">
                            {template.preview.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Heart 
                              key={i} 
                              className={`h-4 w-4 ${i < template.rating ? 'text-red-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({template.downloads} downloads)</span>
                      </div>
                    </div>

                    {/* Template Information */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{template.title}</h3>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                          {template.category}
                        </span>
                        <p className="text-gray-700 mb-4">{template.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Available Formats:</h4>
                        <div className="flex flex-wrap gap-2">
                          {template.formats.map((format, formatIndex) => (
                            <span 
                              key={formatIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">✨ What's Included:</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                          <li>• Fully editable source files</li>
                          <li>• High-resolution exports</li>
                          <li>• Font files and installation guide</li>
                          <li>• Color variations and alternatives</li>
                          <li>• Commercial use license</li>
                        </ul>
                      </div>
                    </div>

                    {/* Download Actions */}
                    <div className="text-center space-y-4">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Template
                      </Button>
                      <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 w-full">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview Online
                      </Button>
                      <div className="text-xs text-gray-500">
                        File size: 15-25 MB<br />
                        Requires: Adobe Creative Suite or similar
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Usage Guide */}
          <Card className="mt-12 border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800">
                📖 How to Use Templates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">
                  Our Arabic calligraphy templates are designed to be easily customizable, even for beginners. 
                  Follow these simple steps to create professional designs in minutes.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-4">1️⃣ Download & Extract</h4>
                    <ul className="text-sm text-blue-600 space-y-2">
                      <li>• Download the template package</li>
                      <li>• Extract all files to a folder</li>
                      <li>• Install included fonts if needed</li>
                      <li>• Open the main design file</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-4">2️⃣ Customize Content</h4>
                    <ul className="text-sm text-green-600 space-y-2">
                      <li>• Replace placeholder text with your content</li>
                      <li>• Adjust colors to match your brand</li>
                      <li>• Modify layouts and positioning</li>
                      <li>• Add your own images or graphics</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h4 className="font-semibold text-orange-800 mb-4">3️⃣ Export & Use</h4>
                    <ul className="text-sm text-orange-600 space-y-2">
                      <li>• Export in your desired format</li>
                      <li>• Choose appropriate resolution</li>
                      <li>• Save source file for future edits</li>
                      <li>• Use in your projects freely</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
                  <h4 className="font-semibold text-purple-800 mb-4">💡 Pro Tips for Best Results</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Typography Tips:</h5>
                      <ul className="text-sm text-purple-600 space-y-1">
                        <li>• Maintain proper Arabic text direction (RTL)</li>
                        <li>• Ensure adequate line spacing for readability</li>
                        <li>• Use consistent font weights throughout</li>
                        <li>• Test readability at different sizes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Design Tips:</h5>
                      <ul className="text-sm text-purple-600 space-y-1">
                        <li>• Keep cultural sensitivity in mind</li>
                        <li>• Balance Arabic and Latin text if mixed</li>
                        <li>• Use high contrast for accessibility</li>
                        <li>• Consider your target audience</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-12">
            <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-purple-800 mb-4">
                  Create Your Own Custom Design
                </h2>
                <p className="text-purple-700 mb-6 max-w-2xl mx-auto">
                  Need something unique? Use our online Arabic calligraphy generator to create 
                  custom designs from scratch with professional fonts and styling options.
                </p>
                <Link href="/">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                    Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Resources */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Free Arabic Fonts</h3>
                <p className="text-sm text-gray-600 mb-4">Download high-quality Arabic fonts for your projects</p>
                <Link href="/resources/free-arabic-fonts">
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Download Fonts <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Design Tutorials</h3>
                <p className="text-sm text-gray-600 mb-4">Learn Arabic calligraphy design techniques and tips</p>
                <Link href="/tutorials/arabic-calligraphy-design-tips">
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Learn Design <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Color Palettes</h3>
                <p className="text-sm text-gray-600 mb-4">Discover beautiful color combinations for Arabic designs</p>
                <Link href="/tools/color-palette-generator">
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Color Tools <ArrowRight className="ml-1 h-3 w-3" />
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
