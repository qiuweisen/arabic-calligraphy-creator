import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Smartphone, Layers, Type, HelpCircle, CheckCircle, FileText, Globe, Download } from "lucide-react"
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
  title: "Cairo Font Download Free - TTF Files | Modern Arabic Sans-Serif",
  description: "Download Cairo Arabic font instantly. Free TTF files, 9 weights included (Thin to Black). Perfect for web & UI design. 100% free for commercial use. Works on Windows, Mac, Linux.",
  keywords: "cairo font download, cairo font free, cairo ttf, arabic sans serif download, free arabic fonts, modern arabic typography, arabic web font, google fonts cairo",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/cairo",
  },
  openGraph: {
    title: "Cairo Font Download Free - Modern Arabic Sans-Serif",
    description: "Download Cairo Arabic font instantly. 9 weights, 100% free for commercial use. Perfect for web & UI design.",
    url: "https://arabic-calligraphy-generator.com/fonts/cairo",
    siteName: "Arabic Calligraphy Generator",
    type: "website",
    locale: "en_US",
  },
}

// 核心预览示例
const PREVIEW_TEXT = {
  text: "مرحباً بالعالم الرقمي",
  translation: "Hello Digital World",
  description: "Modern UI Typography - Perfect for Digital Interfaces"
};

// 核心特性 - 3个最重要的卖点
const KEY_FEATURES = [
  {
    icon: <Smartphone className="h-8 w-8 text-sky-600 mb-2" />,
    title: "Perfect for UI/UX Design",
    description: "Modern sans-serif optimized for websites, mobile apps, and digital interfaces with excellent screen readability."
  },
  {
    icon: <Layers className="h-8 w-8 text-sky-600 mb-2" />,
    title: "9 Weights Included",
    description: "Thin, ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black for complete design flexibility."
  },
  {
    icon: <Globe className="h-8 w-8 text-sky-600 mb-2" />,
    title: "Bilingual Arabic-Latin",
    description: "Harmonious design for both Arabic and Latin scripts. Perfect for multilingual projects and international brands."
  }
];

// 使用场景
const USE_CASES = [
  {
    title: "Website & App Design",
    description: "Modern clean aesthetic perfect for navigation, buttons, body text, and all UI elements."
  },
  {
    title: "Branding & Marketing",
    description: "Contemporary style ideal for logos, corporate identity, and multilingual marketing materials."
  },
  {
    title: "Digital Publications",
    description: "Excellent readability for e-books, online reports, presentations, and educational content."
  }
];

// 文件信息
const FILE_INFO = [
  { label: "File Size", value: "~1.2 MB" },
  { label: "Format", value: "TTF (TrueType Font)" },
  { label: "Fonts Included", value: "9 (Thin, ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black)" },
  { label: "License", value: "SIL Open Font License 1.1" },
  { label: "Commercial Use", value: "Yes, 100% Free" },
  { label: "Designer", value: "Mohamed Gaber (TitraShop)" },
];

// FAQ
const FAQ_ITEMS = [
  {
    question: "Is Cairo font really free?",
    answer: "Yes! Cairo is 100% free for both personal and commercial use under the SIL Open Font License 1.1. It's also available on Google Fonts for easy web integration."
  },
  {
    question: "What's included in the download?",
    answer: "The ZIP file includes all 9 TTF font files: Cairo-Thin, Cairo-ExtraLight, Cairo-Light, Cairo-Regular, Cairo-Medium, Cairo-SemiBold, Cairo-Bold, Cairo-ExtraBold, and Cairo-Black, plus the license file."
  },
  {
    question: "How do I install Cairo font?",
    answer: "Windows: Right-click the TTF file and select 'Install'. Mac: Double-click the TTF file and click 'Install Font'. Linux: Copy TTF files to ~/.fonts/ directory. For web use, load via Google Fonts CDN."
  },
  {
    question: "Does Cairo support both Arabic and English?",
    answer: "Yes! Cairo is designed as a bilingual typeface with harmonious support for both Arabic and Latin (English) scripts, making it perfect for multilingual projects."
  }
];

export default function CairoPage() {
  const fontInfo = getFontInfoBySlug('cairo');
  
  // Structured data - SoftwareApplication
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Cairo Font",
    "applicationCategory": "DesignApplication",
    "description": "Modern Arabic-Latin sans-serif font perfect for UI/UX design and web projects. 9 weights included.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Windows, macOS, Linux",
    "fileFormat": "TTF",
    "fileSize": "1.2MB",
    "downloadUrl": "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/fonts/Cairo.zip",
    "license": "https://scripts.sil.org/OFL",
    "author": {
      "@type": "Person",
      "name": "Mohamed Gaber",
      "affiliation": {
        "@type": "Organization",
        "name": "TitraShop"
      }
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
      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Cairo", href: "/fonts/cairo" }
              ]}
            />
            
            <Button asChild variant="ghost" className="text-sky-600 hover:text-sky-900 hover:bg-sky-50 mb-6">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            {/* Hero Section - Download CTA 突出 */}
            <div className="bg-gradient-to-br from-sky-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 mb-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full mb-3 inline-block">Modern Sans-Serif</span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Download Cairo Font Free
                  </h1>
                  <p className="text-sky-100 text-lg mb-6">
                    Modern Arabic-Latin sans-serif perfect for UI/UX design. 9 weights, instant download, no signup required. Ideal for websites and mobile apps.
                  </p>
                  
                  {/* Key benefits badges */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      100% Free
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      9 Weights
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Bilingual
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
                      <Link href="/?font=Cairo">
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
                      fontFamily: "'Cairo', sans-serif", 
                      fontSize: "clamp(3rem, 8vw, 5rem)", 
                      lineHeight: 1.2,
                      direction: 'rtl'
                    }}
                    className="text-white mb-4"
                  >
                    قاهرة
                  </div>
                  <p className="text-sky-100 text-sm">Cairo - قاهرة</p>
                </div>
              </div>
            </div>

            {/* File Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-sky-200 bg-gradient-to-br from-sky-50 to-white">
                <CardContent className="pt-6 text-center">
                  <Download className="h-10 w-10 text-sky-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-sky-600 mb-1">1.2 MB</div>
                  <div className="text-sm text-gray-600">Complete Package</div>
                  <div className="text-xs text-gray-500 mt-2">9 font files + license</div>
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
                    <CardTitle>Download Cairo Font Package</CardTitle>
                    <CardDescription>
                      Get all 9 weights in TTF format. Perfect for desktop publishing and design software.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-white p-3 rounded-lg">
                          <Download className="h-6 w-6 text-sky-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">What's included:</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              9 font weight files (Thin to Black)
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              Arabic & Latin script support
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
                    <CardTitle>Use Cairo via Google Fonts CDN</CardTitle>
                    <CardDescription>
                      Fastest way to use Cairo on your website. No download needed.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Add to your HTML <code className="bg-gray-100 px-1 rounded">&lt;head&gt;</code>:</p>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                        &lt;link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"&gt;
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Use in your CSS:</p>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-xs">
                        font-family: 'Cairo', sans-serif;
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Key Features */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Cairo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {KEY_FEATURES.map((feature) => (
                <Card key={feature.title} className="border-sky-200">
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
            <Card className="mb-8 border-sky-200">
              <CardHeader>
                <CardTitle>Font Preview</CardTitle>
                <CardDescription>{PREVIEW_TEXT.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="text-center p-8 bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg"
                  style={{ fontFamily: "'Cairo', sans-serif", fontSize: "clamp(2rem, 6vw, 3.5rem)", direction: "rtl", lineHeight: 1.5 }}
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

            {/* About Cairo - 增加内容深度 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Cairo Font</h2>
              <Card className="border-sky-200">
                <CardContent className="p-6 md:p-8">
                  <div className="prose prose-sky max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Cairo is a contemporary Arabic-Latin sans-serif typeface designed by <strong>Mohamed Gaber</strong> of TitraShop, an Egyptian type foundry known for creating high-quality modern Arabic fonts. Released around 2016 and made widely accessible through <strong>Google Fonts</strong>, Cairo has become one of the most popular choices for digital Arabic typography.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The font features <strong>geometric letterforms</strong> that blend subtle Kufi influences with Naskh readability principles, creating a uniquely modern aesthetic that works beautifully across both Arabic and Latin scripts. With 9 weights ranging from Thin to Black, Cairo provides exceptional flexibility for establishing typographic hierarchy in complex UI/UX projects.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      What makes Cairo stand out is its optimization for screen displays. The generous x-height, open counters, and carefully crafted spacing ensure excellent legibility at all sizes, making it ideal for websites, mobile applications, and digital publications where clarity is paramount.
                    </p>
                    
                    {/* 相关链接 */}
                    <div className="bg-sky-50 border-l-4 border-sky-600 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-sky-900 mb-2">Learn More About Arabic Typography</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/blog/modern-arabic-typography" className="text-sky-700 hover:text-sky-900 underline">
                            Modern Arabic Typography
                          </Link>
                          {" "}- Understanding contemporary Arabic type design
                        </li>
                        <li>
                          <Link href="/guides/arabic-font-comparison" className="text-sky-700 hover:text-sky-900 underline">
                            Arabic Font Comparison Guide
                          </Link>
                          {" "}- Compare Cairo with other modern fonts
                        </li>
                        <li>
                          <Link href="/tutorials/download-and-use-arabic-fonts" className="text-sky-700 hover:text-sky-900 underline">
                            How to Download and Use Arabic Fonts
                          </Link>
                          {" "}- Installation and usage tutorial
                        </li>
                        <li>
                          <Link href="/fonts" className="text-sky-700 hover:text-sky-900 underline">
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
                <HelpCircle className="h-8 w-8 text-sky-600" />
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
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Download Cairo?</h3>
              <p className="text-sky-100 mb-6 max-w-2xl mx-auto text-lg">
                Get started with this modern Arabic-Latin font. Perfect for your next design project. Free forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {fontInfo && (
                  <DownloadButton 
                    zipFileName={fontInfo.zipFileName}
                    displayName={fontInfo.displayName}
                  />
                )}
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  <Link href="/?font=Cairo">Try in Generator</Link>
                </Button>
              </div>
            </div>

            {/* Related Content */}
            <RelatedContent 
              title="Explore More Arabic Fonts"
              links={getContentSpecificLinks('font', 'cairo')}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
