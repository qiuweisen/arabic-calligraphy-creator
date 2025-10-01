import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Download, CheckCircle, Layers, Type, HelpCircle, FileText, Globe } from "lucide-react"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { DownloadButton } from "@/components/download-button"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Amiri Font Download Free - TTF Files | No Signup Required",
  description: "Download Amiri Arabic font instantly. Free TTF files, 4 weights included (Regular, Bold, Slanted, Bold Slanted). 100% free for commercial use. Works on Windows, Mac, Linux. 809KB ZIP package.",
  keywords: "amiri font download, amiri font free, amiri ttf, amiri font download free, free arabic fonts, naskh font download, arabic font ttf, quranic font",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/amiri",
  },
  openGraph: {
    title: "Amiri Font Download Free - TTF Files",
    description: "Download Amiri Arabic font instantly. 4 weights, 100% free for commercial use. No signup required.",
    url: "https://arabic-calligraphy-generator.com/fonts/amiri",
    siteName: "Arabic Calligraphy Generator",
    type: "website",
    locale: "en_US",
  },
}

// 核心预览示例
const PREVIEW_TEXT = {
  text: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
  translation: "In the name of God, the Most Gracious, the Most Merciful",
  description: "Basmala - Traditional Naskh calligraphy"
};

// 核心特性 - 3个最重要的卖点
const KEY_FEATURES = [
  {
    icon: <BookOpen className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Perfect for Religious Texts",
    description: "Traditional Naskh calligraphy optimized for Quranic text and Islamic publications."
  },
  {
    icon: <Layers className="h-8 w-8 text-amber-600 mb-2" />,
    title: "4 Weights Included",
    description: "Regular, Bold, Slanted, and Bold Slanted styles for complete typographic flexibility."
  },
  {
    icon: <Type className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Universal Compatibility",
    description: "TTF format works on Windows, macOS, and Linux. Supports Arabic, Persian, and Urdu."
  }
];

// 使用场景
const USE_CASES = [
  {
    title: "Religious & Quranic Texts",
    description: "Traditional Naskh forms make it ideal for Islamic publications and sacred texts."
  },
  {
    title: "Books & Documents",
    description: "Excellent readability for books, formal documents, and academic papers."
  },
  {
    title: "Digital & Web Content",
    description: "Highly readable on screens for websites, apps, and e-books."
  }
];

// 文件信息
const FILE_INFO = [
  { label: "File Size", value: "809 KB" },
  { label: "Format", value: "TTF (TrueType Font)" },
  { label: "Fonts Included", value: "4 (Regular, Bold, Slanted, Bold Slanted)" },
  { label: "License", value: "SIL Open Font License 1.1" },
  { label: "Commercial Use", value: "Yes, 100% Free" },
  { label: "Designer", value: "Dr. Khaled Hosny" },
];

// FAQ
const FAQ_ITEMS = [
  {
    question: "Is Amiri font really free?",
    answer: "Yes! Amiri is 100% free for both personal and commercial use under the SIL Open Font License 1.1. You can use it in any project without attribution."
  },
  {
    question: "What's included in the download?",
    answer: "The ZIP file (809 KB) includes 4 TTF font files: Amiri-Regular, Amiri-Bold, Amiri-Slanted, and Amiri-BoldSlanted, plus the license file."
  },
  {
    question: "How do I install Amiri font?",
    answer: "Windows: Right-click the TTF file and select 'Install'. Mac: Double-click the TTF file and click 'Install Font'. Linux: Copy TTF files to ~/.fonts/ directory."
  },
  {
    question: "Can I use Amiri for web projects?",
    answer: "Yes! You can convert TTF to WOFF/WOFF2 for web use, or use Google Fonts CDN to load Amiri directly on your website."
  }
];

export default function AmiriPage() {
  const fontInfo = getFontInfoBySlug('amiri');
  
  // Structured data - 不包含虚假评分
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Amiri Font",
    "applicationCategory": "DesignApplication",
    "description": "Traditional Naskh Arabic font perfect for Quranic text and Islamic publications. 4 weights included.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Windows, macOS, Linux",
    "fileFormat": "TTF",
    "fileSize": "809KB",
    "downloadUrl": "https://arabic-calligraphy-generator.com/fonts/amiri",
    "license": "https://scripts.sil.org/OFL",
    "author": {
      "@type": "Person",
      "name": "Dr. Khaled Hosny"
    }
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Amiri", href: "/fonts/amiri" }
              ]}
            />
            
            <Button asChild variant="ghost" className="text-amber-600 hover:text-amber-900 hover:bg-amber-50 mb-6">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            {/* Hero Section - Download CTA 突出 */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 text-white rounded-2xl p-8 md:p-12 mb-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full mb-3 inline-block">Traditional Naskh</span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Download Amiri Font Free
                  </h1>
                  <p className="text-amber-100 text-lg mb-6">
                    Traditional Arabic Naskh calligraphy font. Perfect for Quranic text and Islamic publications. 4 weights, instant download, no signup required.
                  </p>
                  
                  {/* Key benefits badges */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      100% Free
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      TTF Format
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Commercial Use OK
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {fontInfo && (
                      <DownloadButton 
                        zipFileName={fontInfo.zipFileName}
                        displayName={fontInfo.displayName}
                      />
                    )}
                    <Button 
                      asChild 
                      size="lg" 
                      variant="outline" 
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    >
                      <Link href="/?font=Amiri">
                        Try Online First
                        <Type className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Font Preview */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <div 
                    style={{ 
                      fontFamily: "'Amiri', serif", 
                      fontSize: "clamp(3rem, 8vw, 5rem)", 
                      lineHeight: 1.2,
                      direction: 'rtl'
                    }}
                    className="text-white mb-4"
                  >
                    أميري
                  </div>
                  <p className="text-amber-100 text-sm">Amiri - أميري</p>
                </div>
              </div>
            </div>

            {/* File Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-white">
                <CardContent className="pt-6 text-center">
                  <Download className="h-10 w-10 text-amber-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-amber-600 mb-1">809 KB</div>
                  <div className="text-sm text-gray-600">Complete Package</div>
                  <div className="text-xs text-gray-500 mt-2">4 font files + license</div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
                <CardContent className="pt-6 text-center">
                  <FileText className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-600 mb-1">TTF</div>
                  <div className="text-sm text-gray-600">Universal Format</div>
                  <div className="text-xs text-gray-500 mt-2">Works on all systems</div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="pt-6 text-center">
                  <CheckCircle className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-1">Free</div>
                  <div className="text-sm text-gray-600">SIL OFL 1.1 License</div>
                  <div className="text-xs text-gray-500 mt-2">Commercial use allowed</div>
                </CardContent>
              </Card>
            </div>

            {/* Download Options Tabs */}
            <Tabs defaultValue="download" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="download">
                  <Download className="mr-2 h-4 w-4" />
                  Download Files
                </TabsTrigger>
                <TabsTrigger value="cdn">
                  <Globe className="mr-2 h-4 w-4" />
                  Use via CDN
                </TabsTrigger>
              </TabsList>

              <TabsContent value="download">
                <Card>
                  <CardHeader>
                    <CardTitle>Download Amiri Font Package</CardTitle>
                    <CardDescription>
                      Get all 4 weights in TTF format. Perfect for desktop publishing and design software.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-white p-3 rounded-lg">
                          <Download className="h-6 w-6 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">What's included:</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              Amiri-Regular.ttf
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              Amiri-Bold.ttf
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              Amiri-Slanted.ttf
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              Amiri-BoldSlanted.ttf
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              OFL.txt (license file)
                            </li>
                          </ul>
                        </div>
                      </div>
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <p className="text-xs text-gray-500 mt-3">
                        ✓ No registration required • ✓ Instant download • ✓ 100% free
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cdn">
                <Card>
                  <CardHeader>
                    <CardTitle>Use Amiri via Google Fonts CDN</CardTitle>
                    <CardDescription>
                      Fastest way to use Amiri on your website. No download needed.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Add to your HTML <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code>:</p>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                        &lt;link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet"&gt;
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Use in your CSS:</p>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs">
                        font-family: 'Amiri', serif;
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Key Features */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Amiri?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {KEY_FEATURES.map((feature) => (
                <Card key={feature.title} className="border-amber-200">
                  <CardHeader className="items-center text-center">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Preview Example */}
            <Card className="mb-8 border-amber-200">
              <CardHeader>
                <CardTitle>Font Preview</CardTitle>
                <CardDescription>{PREVIEW_TEXT.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg"
                  style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(2rem, 6vw, 3.5rem)", direction: "rtl", lineHeight: 1.7 }}
                >
                  {PREVIEW_TEXT.text}
                </div>
                <p className="text-center text-gray-600 mt-4 italic">{PREVIEW_TEXT.translation}</p>
              </CardContent>
            </Card>

            {/* Use Cases */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {USE_CASES.map((useCase) => (
                <Card key={useCase.title} className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technical Specifications */}
            <Card className="mb-8 border-gray-200">
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {FILE_INFO.map((info) => (
                    <div key={info.label} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">{info.label}</span>
                      <span className="text-sm font-medium text-gray-900">{info.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* About Amiri - 增加内容深度 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Amiri Font</h2>
              <Card className="border-amber-200">
                <CardContent className="p-6 md:p-8">
                  <div className="prose prose-amber max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Amiri is a classical Arabic typeface designed by Dr. Khaled Hosny, drawing inspiration from the beautiful Naskh script used by the historic <strong>Bulaq Press</strong> in Cairo during the early 20th century. This font represents a careful digital revival of traditional Arabic calligraphy, combining timeless elegance with modern OpenType technology.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Released in 2011 as an <strong>open-source project</strong>, Amiri has become the go-to choice for Quranic publications, Islamic literature, and formal Arabic documents. It features extensive <strong>OpenType support</strong> including contextual alternates, ligatures, and specialized glyphs for Quranic marks, making it technically sophisticated while maintaining visual authenticity.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      What sets Amiri apart is its dedication to readability in extended text while preserving the grace of traditional calligraphy. With 4 weights (Regular, Bold, Slanted, and Bold Slanted), it offers flexibility for complex typographic hierarchies in both print and digital media.
                    </p>
                    
                    {/* 相关链接 */}
                    <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-amber-900 mb-2">Learn More About Arabic Typography</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/blog/six-major-calligraphy-styles" className="text-amber-700 hover:text-amber-900 underline">
                            The Six Major Arabic Calligraphy Styles
                          </Link>
                          {" "}- Explore Naskh and other traditional scripts
                        </li>
                        <li>
                          <Link href="/guides/arabic-font-comparison" className="text-amber-700 hover:text-amber-900 underline">
                            Arabic Font Comparison Guide
                          </Link>
                          {" "}- Compare Amiri with other traditional fonts
                        </li>
                        <li>
                          <Link href="/tutorials/download-and-use-arabic-fonts" className="text-amber-700 hover:text-amber-900 underline">
                            How to Download and Use Arabic Fonts
                          </Link>
                          {" "}- Step-by-step installation tutorial
                        </li>
                        <li>
                          <Link href="/fonts" className="text-amber-700 hover:text-amber-900 underline">
                            Browse All Arabic Fonts
                          </Link>
                          {" "}- Discover 17+ free Arabic fonts
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <HelpCircle className="h-8 w-8 text-amber-600" />
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-2xl p-8 md:p-12 text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Download Amiri?</h3>
              <p className="text-amber-100 mb-6 max-w-2xl mx-auto text-lg">
                Get started with this beautiful traditional Naskh font. Free forever, no strings attached.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {fontInfo && (
                  <DownloadButton 
                    zipFileName={fontInfo.zipFileName}
                    displayName={fontInfo.displayName}
                  />
                )}
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  <Link href="/?font=Amiri">Try in Generator</Link>
                </Button>
              </div>
            </div>

            {/* Related Content */}
            <RelatedContent 
              title="Explore More Arabic Fonts"
              links={getContentSpecificLinks('font', 'amiri')}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
