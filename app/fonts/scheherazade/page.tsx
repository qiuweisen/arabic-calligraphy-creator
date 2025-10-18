import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Layers, Globe, HelpCircle, CheckCircle, FileText, Type, Download } from "lucide-react"
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
  title: "Scheherazade Font Download Free - TTF Files | Traditional Arabic Naskh",
  description: "Download Scheherazade New Arabic font instantly. Free TTF files, 2 weights (Regular & Bold). Perfect for academic texts and multilingual documents. 100% free for commercial use. Supports 100+ languages.",
  keywords: "scheherazade font download, scheherazade new font free, arabic naskh font, academic arabic font, multilingual arabic fonts, free arabic fonts, scheherazade ttf",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/scheherazade",
  },
  openGraph: {
    title: "Scheherazade Font Download Free - Traditional Arabic Naskh",
    description: "Download Scheherazade New instantly. 2 weights, 100+ languages supported. Perfect for academic publishing.",
    url: "https://arabic-calligraphy-generator.com/fonts/scheherazade",
    siteName: "Arabic Calligraphy Generator",
    type: "website",
    locale: "en_US",
  },
}

// 核心预览示例
const PREVIEW_TEXT = {
  text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
  translation: "Then which of the favors of your Lord will you deny?",
  description: "Quran 55:13 - Traditional Naskh with Full Diacritics"
};

// 核心特性 - 3个最重要的卖点
const KEY_FEATURES = [
  {
    icon: <BookOpen className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Perfect for Academic Texts",
    description: "Traditional Naskh style optimized for scholarly publications, religious texts, and extended reading."
  },
  {
    icon: <Globe className="h-8 w-8 text-amber-600 mb-2" />,
    title: "100+ Languages Supported",
    description: "Extensive character set for Arabic, Persian, Urdu, Kurdish, Pashto, Sindhi, and many Ajami scripts."
  },
  {
    icon: <Layers className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Full Diacritics & Marks",
    description: "Comprehensive support for all Arabic diacritical marks (tashkil) and scholarly notations."
  }
];

// 使用场景
const USE_CASES = [
  {
    title: "Academic & Religious Publishing",
    description: "Ideal for journals, research papers, Quran, Hadith, and classical Islamic texts."
  },
  {
    title: "Multilingual Documentation",
    description: "Perfect for dictionaries, linguistic resources, and minority language preservation projects."
  },
  {
    title: "Educational Materials",
    description: "Excellent for textbooks, literacy programs, and Arabic language learning resources."
  }
];

// 文件信息
const FILE_INFO = [
  { label: "File Size", value: "~1.5 MB" },
  { label: "Format", value: "TTF (TrueType Font)" },
  { label: "Fonts Included", value: "2 (Regular, Bold)" },
  { label: "License", value: "SIL Open Font License 1.1" },
  { label: "Commercial Use", value: "Yes, 100% Free" },
  { label: "Developer", value: "SIL International" },
];

// FAQ
const FAQ_ITEMS = [
  {
    question: "Is Scheherazade New really free?",
    answer: "Yes! Scheherazade New is 100% free for both personal and commercial use under the SIL Open Font License 1.1. It's developed by SIL International, a non-profit organization dedicated to language development."
  },
  {
    question: "What's included in the download?",
    answer: "The ZIP file includes 2 TTF font files: ScheherazadeNew-Regular and ScheherazadeNew-Bold, plus the license file. The font supports extensive Arabic script coverage for multiple languages."
  },
  {
    question: "How do I install Scheherazade New?",
    answer: "Windows: Right-click the TTF file and select 'Install'. Mac: Double-click the TTF file and click 'Install Font'. Linux: Copy TTF files to ~/.fonts/ directory."
  },
  {
    question: "What languages does it support?",
    answer: "Scheherazade New supports 100+ languages using Arabic script including Arabic, Persian (Farsi), Urdu, Kurdish, Pashto, Sindhi, Uyghur, Balochi, Kashmiri, and various Ajami scripts."
  }
];

export default function ScheherazadePage() {
  const fontInfo = getFontInfoBySlug('scheherazade');
  
  // Structured data - 不包含虚假评分
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Scheherazade New Font",
    "applicationCategory": "DesignApplication",
    "description": "Traditional Naskh Arabic font perfect for scholarly publications and multilingual texts. Supports 100+ languages.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": "Windows, macOS, Linux",
    "fileFormat": "TTF",
    "fileSize": "1.5MB",
    "downloadUrl": "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/fonts/Scheherazade_New.zip",
    "license": "https://scripts.sil.org/OFL",
    "author": {
      "@type": "Organization",
      "name": "SIL International",
      "url": "https://software.sil.org"
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
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Scheherazade", href: "/fonts/scheherazade" }
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
                    Download Scheherazade New Free
                  </h1>
                  <p className="text-amber-100 text-lg mb-6">
                    Traditional Arabic Naskh font for scholarly texts. Perfect for academic publishing, religious texts, and multilingual projects. 100+ languages supported, instant download.
                  </p>
                  
                  {/* Key benefits badges */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      100% Free
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      100+ Languages
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Academic Use
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
                      <Link href="/?font=Scheherazade%20New">
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
                      fontFamily: "'Scheherazade New', serif", 
                      fontSize: "clamp(2.5rem, 7vw, 4.5rem)", 
                      lineHeight: 1.3,
                      direction: 'rtl'
                    }}
                    className="text-white mb-4"
                  >
                    شهرزاد
                  </div>
                  <p className="text-amber-100 text-sm">Scheherazade - شهرزاد</p>
                </div>
              </div>
            </div>

            {/* File Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-white">
                <CardContent className="pt-6 text-center">
                  <Download className="h-10 w-10 text-amber-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-amber-600 mb-1">1.5 MB</div>
                  <div className="text-sm text-gray-600">Complete Package</div>
                  <div className="text-xs text-gray-500 mt-2">2 font files + license</div>
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
                <TabsTrigger value="info">
                  <FileText className="mr-2 h-4 w-4" />
                  Installation Guide
                </TabsTrigger>
              </TabsList>

              <TabsContent value="download">
                <Card>
                  <CardHeader>
                    <CardTitle>Download Scheherazade New Package</CardTitle>
                    <CardDescription>
                      Get both Regular and Bold weights in TTF format. Perfect for academic and multilingual publishing.
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
                              ScheherazadeNew-Regular.ttf
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              ScheherazadeNew-Bold.ttf
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              Supports 100+ languages
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              Full diacritics & OpenType features
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

              <TabsContent value="info">
                <Card>
                  <CardHeader>
                    <CardTitle>Installation Instructions</CardTitle>
                    <CardDescription>
                      Quick guide to install Scheherazade New on your system
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Windows</h4>
                      <p className="text-sm text-gray-600">Right-click the TTF file and select "Install" or "Install for all users". The font will be available immediately in all applications.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">macOS</h4>
                      <p className="text-sm text-gray-600">Double-click the TTF file to open Font Book, then click "Install Font". Restart applications to use the font.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Linux</h4>
                      <p className="text-sm text-gray-600">Copy the TTF files to <code className="bg-gray-100 px-1 rounded">~/.fonts/</code> directory, then run <code className="bg-gray-100 px-1 rounded">fc-cache -f -v</code>.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Key Features */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Scheherazade New?</h2>
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
                  style={{ fontFamily: "'Scheherazade New', serif", fontSize: "clamp(1.8rem, 5vw, 3rem)", direction: "rtl", lineHeight: 1.8 }}
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

            {/* About Scheherazade - 增加内容深度 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Scheherazade New Font</h2>
              <Card className="border-amber-200">
                <CardContent className="p-6 md:p-8">
                  <div className="prose prose-amber max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Named after the legendary storyteller of <em>"One Thousand and One Nights"</em>, <strong>Scheherazade New</strong> is a traditional Naskh-style Arabic typeface developed by <strong>SIL International</strong>, a global non-profit organization dedicated to language development and literacy. First released in 2021 as an improved version of the original Scheherazade, it represents one of the most comprehensive Arabic fonts for scholarly and multilingual work.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The font's design philosophy centers on <strong>readability and linguistic inclusivity</strong>. Unlike many Arabic fonts that focus solely on Modern Standard Arabic, Scheherazade New provides extensive character coverage for <strong>100+ languages</strong> using the Arabic script, including Persian (Farsi), Urdu, Pashto, Sindhi, Kurdish, Uyghur, and numerous Ajami scripts used in African and Asian minority languages.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      What distinguishes Scheherazade New is its sophisticated <strong>OpenType and Graphite features</strong>, including contextual alternates, extensive ligature support, and comprehensive diacritical mark positioning. This makes it ideal for complex scholarly publications, religious texts requiring full vocalization, and linguistic research materials.
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
                          {" "}- Compare Scheherazade with other academic fonts
                        </li>
                        <li>
                          <Link href="/tutorials/download-and-use-arabic-fonts" className="text-amber-700 hover:text-amber-900 underline">
                            How to Download and Use Arabic Fonts
                          </Link>
                          {" "}- Installation and font usage tutorial
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
              <h3 className="text-3xl font-bold mb-4">Ready to Download Scheherazade New?</h3>
              <p className="text-amber-100 mb-6 max-w-2xl mx-auto text-lg">
                Get started with this comprehensive traditional Naskh font. Perfect for scholarly work and multilingual publishing. Free forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {fontInfo && (
                  <DownloadButton 
                    zipFileName={fontInfo.zipFileName}
                    displayName={fontInfo.displayName}
                  />
                )}
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  <Link href="/?font=Scheherazade%20New">Try in Generator</Link>
                </Button>
              </div>
            </div>

            {/* Related Content */}
            <RelatedContent 
              title="Explore More Arabic Fonts"
              links={getContentSpecificLinks('font', 'scheherazade')}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
