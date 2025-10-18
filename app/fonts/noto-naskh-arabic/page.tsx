import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Smartphone, Globe, CheckCircle, HelpCircle, FileText, Type, Download, Layers } from "lucide-react"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { DownloadButton } from "@/components/download-button"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Noto Naskh Arabic Font Download Free - TTF Files | Google Fonts",
  description: "Download Noto Naskh Arabic font instantly. Free TTF files, multiple weights. Google's premium Naskh typeface perfect for web, apps, and digital content. 100% free for commercial use.",
  keywords: "noto naskh arabic download, google arabic fonts, naskh font free, noto fonts download, arabic web fonts, google fonts arabic, noto naskh ttf",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/noto-naskh-arabic",
  },
  openGraph: {
    title: "Noto Naskh Arabic Font Download Free - Google Fonts",
    description: "Download Noto Naskh Arabic instantly. Google's premium Naskh typeface. Multiple weights, perfect for web & apps.",
    url: "https://arabic-calligraphy-generator.com/fonts/noto-naskh-arabic",
    siteName: "Arabic Calligraphy Generator",
    type: "website",
    locale: "en_US",
  },
}

// 核心预览示例
const PREVIEW_TEXT = {
  text: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
  translation: "In the name of God, the Most Gracious, the Most Merciful",
  description: "Basmala - Perfect Digital Clarity"
};

// 核心特性 - 3个最重要的卖点
const KEY_FEATURES = [
  {
    icon: <Smartphone className="h-8 w-8 text-blue-600 mb-2" />,
    title: "Perfect for Digital Screens",
    description: "Engineered by Google for flawless readability on websites, mobile apps, and digital interfaces across all devices."
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600 mb-2" />,
    title: "Part of Google Noto Project",
    description: "Universal font supporting all languages. No more \"tofu\" (missing character boxes). Works everywhere, every time."
  },
  {
    icon: <Layers className="h-8 w-8 text-blue-600 mb-2" />,
    title: "Multiple Weights Included",
    description: "Regular, Medium, SemiBold, Bold weights plus UI variant optimized for user interfaces and small sizes."
  }
];

// 使用场景
const USE_CASES = [
  {
    title: "Web & Mobile Apps",
    description: "Optimized for websites, mobile applications, and digital interfaces with excellent on-screen readability."
  },
  {
    title: "Digital Documents & E-books",
    description: "Perfect for PDFs, e-publications, online articles, and any digital reading content."
  },
  {
    title: "Software Localization",
    description: "Reliable choice for localizing software, OS interfaces, and applications into Arabic."
  }
];

// 文件信息
const FILE_INFO = [
  { label: "File Size", value: "~2 MB" },
  { label: "Format", value: "TTF (TrueType Font)" },
  { label: "Fonts Included", value: "4+ (Regular, Medium, SemiBold, Bold)" },
  { label: "License", value: "SIL Open Font License 1.1" },
  { label: "Commercial Use", value: "Yes, 100% Free" },
  { label: "Developer", value: "Google (Noto Project)" },
];

// FAQ
const FAQ_ITEMS = [
  {
    question: "Is Noto Naskh Arabic really free?",
    answer: "Yes! Noto Naskh Arabic is 100% free for both personal and commercial use under the SIL Open Font License 1.1. It's part of Google's Noto project and available on Google Fonts."
  },
  {
    question: "What's included in the download?",
    answer: "The ZIP file includes multiple TTF font files with different weights: Noto Naskh Arabic Regular, Medium, SemiBold, Bold, and possibly a UI variant, plus the license file."
  },
  {
    question: "How do I install Noto Naskh Arabic?",
    answer: "Windows: Right-click the TTF file and select 'Install'. Mac: Double-click the TTF file and click 'Install Font'. Linux: Copy TTF files to ~/.fonts/ directory. For web use, load via Google Fonts CDN."
  },
  {
    question: "What makes Noto Naskh Arabic special?",
    answer: "It's engineered by Google specifically for digital screens with perfect clarity. Part of the Noto (No Tofu) project ensuring universal character support. It's the default Arabic font on Android and many systems."
  }
];

export default function NotoNaskhArabicPage() {
  const fontInfo = getFontInfoBySlug('noto-naskh-arabic');
  
  // Structured data - 不包含虚假评分
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Noto Naskh Arabic Font",
    "applicationCategory": "DesignApplication",
    "description": "Google's premium Naskh Arabic font optimized for digital screens. Multiple weights for web and app design.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Windows, macOS, Linux, Android",
    "fileFormat": "TTF",
    "fileSize": "2MB",
    "downloadUrl": "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/fonts/Noto_Naskh_Arabic.zip",
    "license": "https://scripts.sil.org/OFL",
    "author": {
      "@type": "Organization",
      "name": "Google",
      "url": "https://fonts.google.com"
    }
  };
  
  // FAQPage structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Noto Naskh Arabic", href: "/fonts/noto-naskh-arabic" }
              ]}
            />
            
            <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-900 hover:bg-blue-50 mb-6">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            {/* Hero Section - Download CTA 突出 */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 mb-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full mb-3 inline-block">Google Noto Project</span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Download Noto Naskh Arabic Free
                  </h1>
                  <p className="text-blue-100 text-lg mb-6">
                    Google's premium Naskh font optimized for digital screens. Perfect for websites, mobile apps, and digital content. Multiple weights, instant download, no signup required.
                  </p>
                  
                  {/* Key benefits badges */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      100% Free
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Google Fonts
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Screen Optimized
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
                      <Link href="/?font=Noto%20Naskh%20Arabic">
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
                      fontFamily: "'Noto Naskh Arabic', serif", 
                      fontSize: "clamp(2.5rem, 7vw, 4.5rem)", 
                      lineHeight: 1.3,
                      direction: 'rtl'
                    }}
                    className="text-white mb-4"
                  >
                    نوتو
                  </div>
                  <p className="text-blue-100 text-sm">Noto Naskh Arabic - نوتو</p>
                </div>
              </div>
            </div>

            {/* File Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="pt-6 text-center">
                  <Download className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-1">2 MB</div>
                  <div className="text-sm text-gray-600">Complete Package</div>
                  <div className="text-xs text-gray-500 mt-2">4+ font files + license</div>
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

              <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-white">
                <CardContent className="pt-6 text-center">
                  <CheckCircle className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-indigo-600 mb-1">Free</div>
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
                    <CardTitle>Download Noto Naskh Arabic Package</CardTitle>
                    <CardDescription>
                      Get multiple weights in TTF format. Perfect for desktop apps and digital publishing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-white p-3 rounded-lg">
                          <Download className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">What's included:</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              Multiple weight files (Regular to Bold)
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              UI variant for interface design
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              Complete Arabic character set
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
                    <CardTitle>Use Noto Naskh Arabic via Google Fonts CDN</CardTitle>
                    <CardDescription>
                      Fastest way to use this font on your website. No download needed.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Add to your HTML <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code>:</p>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                        &lt;link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet"&gt;
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Use in your CSS:</p>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs">
                        font-family: 'Noto Naskh Arabic', serif;
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Key Features */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Noto Naskh Arabic?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {KEY_FEATURES.map((feature) => (
                <Card key={feature.title} className="border-blue-200">
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
            <Card className="mb-8 border-blue-200">
              <CardHeader>
                <CardTitle>Font Preview</CardTitle>
                <CardDescription>{PREVIEW_TEXT.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg"
                  style={{ fontFamily: "'Noto Naskh Arabic', serif", fontSize: "clamp(2rem, 6vw, 3.5rem)", direction: "rtl", lineHeight: 1.7 }}
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

            {/* About Noto Naskh Arabic - 增加内容深度 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Noto Naskh Arabic Font</h2>
              <Card className="border-blue-200">
                <CardContent className="p-6 md:p-8">
                  <div className="prose prose-blue max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Noto Naskh Arabic</strong> is a cornerstone of <strong>Google's ambitious Noto font project</strong>, which aims to support all the world's languages with a harmonious, high-quality typeface family. The name "Noto" stands for "No Tofu" — referring to the elimination of those empty rectangular boxes (tofu) that appear when a font doesn't support a particular character.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Developed by <strong>Monotype</strong> (commissioned by Google) with contributions from typography experts worldwide, Noto Naskh Arabic combines traditional Naskh calligraphic principles with modern digital optimization. The result is a font that displays beautifully on all screen sizes while maintaining the elegance of classical Arabic script.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      As the <strong>default Arabic font on Android</strong> and many Linux distributions, Noto Naskh Arabic has proven its reliability for millions of users worldwide. Its multiple weights (Regular, Medium, SemiBold, Bold) and specialized UI variant make it incredibly versatile for both content and interface design.
                    </p>
                    
                    {/* 相关链接 */}
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Learn More About Arabic Typography</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/blog/modern-arabic-typography" className="text-blue-700 hover:text-blue-900 underline">
                            Modern Arabic Typography
                          </Link>
                          {" "}- Understanding contemporary font design
                        </li>
                        <li>
                          <Link href="/guides/arabic-font-comparison" className="text-blue-700 hover:text-blue-900 underline">
                            Arabic Font Comparison Guide
                          </Link>
                          {" "}- Compare Noto with other popular fonts
                        </li>
                        <li>
                          <Link href="/tutorials/download-and-use-arabic-fonts" className="text-blue-700 hover:text-blue-900 underline">
                            How to Download and Use Arabic Fonts
                          </Link>
                          {" "}- Installation and implementation guide
                        </li>
                        <li>
                          <Link href="/fonts" className="text-blue-700 hover:text-blue-900 underline">
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
                <HelpCircle className="h-8 w-8 text-blue-600" />
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
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Download Noto Naskh Arabic?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
                Get started with Google's premium Arabic font. Perfect for digital content and professional projects. Free forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {fontInfo && (
                  <DownloadButton 
                    zipFileName={fontInfo.zipFileName}
                    displayName={fontInfo.displayName}
                  />
                )}
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  <Link href="/?font=Noto%20Naskh%20Arabic">Try in Generator</Link>
                </Button>
              </div>
            </div>

            {/* Related Content */}
            <RelatedContent 
              title="Explore More Arabic Fonts"
              links={getContentSpecificLinks('font', 'noto-naskh-arabic')}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
