import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Smartphone, Layers, Type, HelpCircle, CheckCircle, FileText, Globe } from "lucide-react"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  
  // Structured data - 不包含虚假评分
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
    "downloadUrl": "https://arabic-calligraphy-generator.com/fonts/cairo",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 面包屑导航 */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Cairo", href: "/fonts/cairo" }
              ]}
            />
            
            <Button asChild variant="ghost" className="mb-4 text-amber-700 hover:text-amber-800 hover:bg-sky-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>
            
            <Card className="mb-8 border-sky-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-sky-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: "clamp(3rem, 15vw, 6rem)", color: "#0284c7", lineHeight: 1.2, direction: 'rtl' }}>
                      قاهرة
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-amber-700 font-medium px-2 py-1 bg-sky-50 rounded-full mb-2 inline-block">Modern Sans-Serif (Bilingual)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mt-1 mb-3">Cairo Font</h1>
                    <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                      Cairo is a contemporary Arabic and Latin sans-serif typeface designed by Mohamed Gaber (TitraShop). It offers excellent readability and a modern aesthetic, making it a versatile choice for UI/UX, web design, and branding.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                        <Link href="/?font=Cairo">Try Cairo in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="prose prose-sky max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Distinctive Features of Cairo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-sky-200 flex flex-col bg-white">
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl text-amber-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-amber-700 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="design-philosophy" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Design Philosophy: Modernity & Harmony</h2>
              <Card className="border-sky-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-amber-700 leading-relaxed">
                  <p>
                    The Cairo typeface, designed by Egyptian type designer <strong className="text-amber-800">Mohamed Gaber</strong> of TitraShop, represents a significant step in contemporary Arabic typography. Its core design philosophy revolves around creating a versatile, modern sans-serif that performs exceptionally well in digital environments for both Arabic and Latin scripts.
                  </p>
                  <p>
                    Cairo achieves a harmonious balance between the two scripts. The Arabic letterforms, while modern and clean, subtly incorporate structural elements inspired by Kufi for clarity, combined with Naskh principles for optimal readability in text settings. The Latin counterpart is designed to complement the Arabic aesthetically, ensuring visual consistency in multilingual contexts. This makes Cairo an excellent choice for projects requiring seamless integration of Arabic and Latin text, such as websites, applications, and international branding.
                  </p>
                  <p>
                    Available through Google Fonts, Cairo has gained widespread popularity due to its open-source nature, extensive weight range, and robust performance across various platforms and screen sizes.
                  </p>
                </CardContent>
              </Card>
              
              <h2 id="alphabet-showcase" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Cairo Alphabet Showcase (Arabic & Latin)</h2>
              <Card className="border-sky-200 mb-12 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800">Clean Sans-Serif Letterforms</CardTitle>
                  <CardDescription className="text-amber-700">Observe the modern, geometric shapes of Cairo in both Arabic and Latin scripts.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-amber-700 mb-2 text-center">Arabic</h3>
                  <div 
                    className="text-center leading-loose mb-6"
                    style={{ fontFamily: "'Cairo', sans-serif", fontSize: "30px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_CAIRO}
                  </div>
                  <h3 className="text-lg font-semibold text-amber-700 mb-2 text-center">Latin</h3>
                  <div 
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Cairo', sans-serif", fontSize: "24px" }}
                  >
                    {LATIN_ALPHABET_CAIRO}
                  </div>
                </CardContent>
              </Card>
              
              <h2 id="text-examples" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Cairo in Action: Text Examples</h2>
              <Tabs defaultValue={TEXT_EXAMPLES[0].id} className="w-full mb-12">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((example, index) => (
                    <TabsTrigger key={example.id} value={example.id} className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TEXT_EXAMPLES.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <Card className="border-sky-200 bg-white">
                      <CardContent className="p-6">
                        <div 
                          className="mb-4 text-center whitespace-pre-line"
                          style={{ fontFamily: "'Cairo', sans-serif", fontSize: "28px", direction: "rtl", lineHeight: 1.8 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-amber-700 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-amber-700">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Ideal Use Cases for Cairo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-sky-200 flex bg-white">
                    <div className="p-6 pr-0 flex items-center">{useCase.icon}</div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-amber-800 mb-1">{useCase.title}</h3>
                      <p className="text-amber-700 text-sm">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <h2 id="technical-details" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Technical Specifications</h2>
              <div className="space-y-6 mb-12">
                {TECHNICAL_DETAILS.map((detail) => (
                  <Card key={detail.title} className="border-sky-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl text-amber-800">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-amber-700 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-amber-700">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-sky-50 rounded-lg border border-sky-200">
                 <h3 className="text-2xl font-semibold text-amber-800 text-center sm:text-left">Design with Cairo's Modern Clarity</h3>
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                  <Link href="/?font=Cairo">Use Cairo in Calligraphy Generator</Link>
                </Button>
              </div>
              
              <RelatedContent 
                title="Explore Other Modern & Sans-Serif Fonts"
                links={getContentSpecificLinks('font', 'cairo')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 