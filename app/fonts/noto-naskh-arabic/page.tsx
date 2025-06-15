import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Smartphone, CheckCircle, Users, Globe, Palette, Type, Settings, SearchCode, BookOpen, Feather, Layers, MonitorPlay, Edit3, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { DownloadButton } from "@/components/download-button"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Noto Naskh Arabic: Universally Readable & Screen-Optimized Naskh | Arabic Calligraphy",
  description: "Explore Google's Noto Naskh Arabic, part of the Noto project aiming to eliminate \"tofu\". Optimized for all screens, offering clarity and wide language support for modern digital Arabic.",
  keywords: "Noto Naskh Arabic, Google Noto fonts, Arabic screen font, Naskh UI font, digital Arabic, no tofu Arabic, Unicode Arabic font, open source Arabic font, Android Arabic font, web Arabic font",
  openGraph: {
    title: "Noto Naskh Arabic: Clear, Accessible, and Universal Arabic Font",
    description: "Discover Noto Naskh Arabic by Google. Perfect for web, UI, and digital content, ensuring every Arabic character displays beautifully everywhere.",
    url: "https://arabic-calligraphy-generator.com/fonts/noto-naskh-arabic",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",  },
}

const TEXT_EXAMPLES = [
  {
    id: "bismillah-digital",
    text: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    translation: "In the name of God, the Most Gracious, the Most Merciful",
    context: "The Basmala, clearly rendered for digital legibility, a common sight in apps and websites."
  },
  {
    id: "app-interface-greeting",
    text: "مرحباً بك في تطبيقنا",
    translation: "Welcome to our application",
    context: "A typical greeting in a user interface, where Noto Naskh Arabic's clarity shines."
  },
  {
    id: "news-headline-web",
    text: "أحدث الأخبار العالمية والعربية",
    translation: "Latest international and Arab news",
    context: "A news headline example, demonstrating readability for online content consumption."
  },
  {
    id: "educational-material-online",
    text: "تعلم اللغة العربية بسهولة عبر الإنترنت",
    translation: "Learn Arabic easily online",
    context: "Phrase from online educational material, benefiting from Noto's screen-friendly design."
  }
];

const FONT_FEATURES = [
  {
    icon: <Smartphone className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Flawless Screen Legibility",
    description: "Engineered by Google for optimal clarity on all digital displays, from mobile screens to desktops, ensuring a comfortable reading experience."
  },
  {
    icon: <Globe className="h-8 w-8 text-amber-600 mb-2" />,
    title: "No More \"Tofu\"",
    description: "Part of the Noto (No Tofu) project, aiming to support all Unicode characters, ensuring Arabic text renders correctly everywhere."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Comprehensive Character Set",
    description: "Includes a vast array of Arabic characters, diacritics, and symbols for accurate and complete text representation in diverse contexts."
  },
  {
    icon: <Palette className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Modern & Harmonious Naskh",
    description: "A contemporary interpretation of traditional Naskh, designed to harmonize visually with other Noto fonts across different scripts."
  },
  {
    icon: <Users className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Open Source & Widely Adopted",
    description: "Available under the SIL Open Font License, fostering broad usage. It's a standard font on Android and many Linux distributions."
  },
  {
    icon: <Settings className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Multiple Weights & UI Variant",
    description: "Offers various weights (Regular, Medium, Bold, etc.) and a specific Noto Naskh Arabic UI variant optimized for user interfaces."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Web Content & Online Articles",
    description: "Ensures crisp and readable Arabic text for websites, blogs, news portals, and any online content.",
    icon: <Globe className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Application & OS User Interfaces",
    description: "The Noto Naskh Arabic UI variant is specifically tailored for system UIs, apps on Android, ChromeOS, and other platforms.",
    icon: <Smartphone className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Digital Documents & E-books",
    description: "Excellent for PDFs, e-publications, and any digital document where Arabic text clarity is paramount.",
    icon: <BookOpen className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Educational Platforms & E-Learning",
    description: "Provides highly legible text for online courses, language learning apps, and digital educational resources.",
    icon: <Type className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Software Localization",
    description: "A reliable choice for localizing software interfaces into Arabic, ensuring broad compatibility and readability.",
    icon: <Settings className="h-5 w-5 text-amber-700" />
  },
  {
    title: "General Digital Communication",
    description: "Versatile for emails, presentations, and everyday digital communication requiring clear Arabic script.",
    icon: <CheckCircle className="h-5 w-5 text-amber-700" />
  }
];

const TECHNICAL_DETAILS = [
  {
    title: "Project Initiator",
    value: "Google",
    description: "Noto Naskh Arabic is a key component of Google's Noto font initiative, a global effort for universal script support."
  },
  {
    title: "Design & Development",
    value: "Monotype (commissioned by Google) and various contributors",
    description: "Developed by a team of expert typographers and font engineers to meet Google's high standards for the Noto project."
  },
  {
    title: "Unicode Compliance",
    value: "Fully compliant with the latest Unicode standards for the Arabic script.",
    description: "Ensures accurate rendering of all standard Arabic characters, diacritics, and numerals."
  },
  {
    title: "Available Weights",
    value: "Typically Regular, Medium, SemiBold, Bold. A UI variant is also available.",
    description: "Offers a range of weights to create effective typographic hierarchy in digital designs."
  },
  {
    title: "Formats",
    value: "Primarily OpenType (OTF), also available as TrueType (TTF) and Web Open Font Format (WOFF/WOFF2).",
    description: "Versatile font formats suitable for desktop applications, web embedding, and mobile OS integration."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Free to use, modify, and redistribute, promoting its global adoption and accessibility."
  }
];

const ARABIC_ALPHABET = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";

export default function NotoNaskhArabicFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('noto-naskh-arabic');

  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Noto Naskh Arabic Font",
    "description": "A versatile and highly legible Arabic Naskh typeface by Google, combining traditional aesthetics with modern digital optimization for screen and print applications.",
    "applicationCategory": "Font",
    "operatingSystem": "Cross-platform",
    "creator": {
      "@type": "Organization",
      "name": "Google",
      "description": "Part of Google's Noto font initiative for universal script support"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Google Fonts",
      "url": "https://fonts.google.com"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "programmingLanguage": "OpenType",
    "keywords": ["Arabic font", "Naskh", "Google Noto", "Screen optimized", "Digital typography", "Universal font"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "200",
      "bestRating": "5"
    },
    "featureList": [
      "Modern Naskh design",
      "Screen optimization", 
      "Universal script support",
      "Multiple weights",
      "Cross-platform compatibility",
      "Unicode compliance"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 面包屑导航 */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Noto Naskh Arabic", href: "/fonts/noto-naskh-arabic" }
              ]}
              className="mb-6"
            />
            
            <Button asChild variant="ghost" className="mb-4 text-amber-600 hover:text-amber-800 hover:bg-amber-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            <Card className="mb-8 border-amber-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-sky-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Noto Naskh Arabic', serif", fontSize: "clamp(2.5rem, 12vw, 5rem)", color: "#0c4a6e", lineHeight: 1.3, direction: 'rtl' }}>
                      نص واضح
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-sky-700 font-medium px-2 py-1 bg-sky-50 rounded-full mb-2 inline-block">Modern Naskh (Screen Optimized)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mt-1 mb-3">Noto Naskh Arabic</h1>
                    <p className="text-lg text-sky-700 mb-6 leading-relaxed">
                      Noto Naskh Arabic is a versatile and highly legible Arabic typeface designed by Google. It combines traditional Naskh aesthetics with modern digital optimization, making it perfect for both screen and print applications.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                        <Link href="/?font=Noto%20Naskh%20Arabic">Try Noto Naskh Arabic in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-sky max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Key Features of Noto Naskh Arabic</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-sky-200 flex flex-col bg-white">
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl text-sky-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-sky-700 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="history-and-background" className="text-3xl font-bold text-sky-800 mt-12 mb-6">The Noto Project: A Universal Vision</h2>
              <Card className="border-sky-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-sky-700 leading-relaxed">
                  <p>
                    Noto Naskh Arabic is a vital part of the <strong className="text-sky-800">Google Noto (No Tofu)</strong> font family. Launched by Google, the Noto project is an ambitious initiative to create a harmonious and comprehensive font collection that supports all scripts encoded in the Unicode standard. The name "Noto" signifies the goal of eliminating "tofu" – the blank rectangles (▯) that appear when a device or application lacks the necessary font to display specific characters.
                  </p>
                  <p>
                    For the Arabic script, Noto Naskh Arabic provides a contemporary, highly legible Naskh typeface optimized for digital environments. It ensures that Arabic text is rendered accurately and consistently across websites, applications, operating systems (like Android and ChromeOS where it's a default), and digital documents. The font family also includes Noto Naskh Arabic UI, a version specifically tailored for user interface elements.
                  </p>
                  <p>
                    Developed with meticulous attention to typographic detail and extensive language coverage, Noto Naskh Arabic stands as a testament to Google's commitment to global language support and digital accessibility.
                  </p>
                </CardContent>
              </Card>

              <h2 id="alphabet-showcase" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Noto Naskh Arabic: Alphabet Clarity</h2>
              <Card className="border-sky-200 mb-12 bg-white">
                 <CardHeader>
                  <CardTitle className="text-xl text-sky-800">Modern Naskh Letterforms</CardTitle>
                  <CardDescription className="text-sky-600">Clean and clear Arabic characters designed for on-screen readability.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div 
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Noto Naskh Arabic', serif", fontSize: "40px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET}
                  </div>
                  <p className="text-center text-sm text-sky-600 mt-4">Note: Noto Naskh Arabic offers extensive Unicode coverage for Arabic and related scripts, ensuring comprehensive character display.</p>
                </CardContent>
              </Card>
              
              <h2 id="text-examples" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Noto Naskh Arabic in Digital Contexts</h2>
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
                          style={{ fontFamily: "'Noto Naskh Arabic', serif", fontSize: "30px", direction: "rtl", lineHeight: 1.8 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-sky-700 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-sky-600">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Ideal Applications for Noto Naskh Arabic</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-sky-200 flex bg-white">
                    <div className="p-6 pr-0 flex items-center">{useCase.icon}</div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-sky-800 mb-1">{useCase.title}</h3>
                      <p className="text-sky-700 text-sm">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <h2 id="technical-details" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Technical Specifications</h2>
              <div className="space-y-6 mb-12">
                {TECHNICAL_DETAILS.map((detail) => (
                  <Card key={detail.title} className="border-sky-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl text-sky-800">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-sky-700 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-sky-600">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-sky-50 rounded-lg border border-sky-200">
                 <h3 className="text-2xl font-semibold text-sky-800 text-center sm:text-left">Use Noto Naskh Arabic for Universal Clarity</h3>
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                  <Link href="/?font=Noto%20Naskh%20Arabic">Try Noto Naskh Arabic in Generator</Link>
                </Button>
              </div>
              
              <RelatedContent 
                title="Explore Other Screen-Optimized Fonts"
                links={getContentSpecificLinks('font', 'noto-naskh-arabic')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 