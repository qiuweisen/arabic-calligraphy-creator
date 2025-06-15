import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Globe, Languages, Type, Users, Zap } from "lucide-react"
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
  title: "Harmattan Font: West African Arabic Typography",
  description: "Discover Harmattan by SIL International, designed for West African Arabic scripts with support for Ajami languages and traditional letterforms.",
  keywords: "harmattan font, Arabic typography, Arabic fonts, Islamic calligraphy, Arabic script, digital typography, web fonts",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/harmattan",
  },
  openGraph: {
    title: "Harmattan Font: West African Arabic Typography",
    description: "Discover Harmattan by SIL International, designed for West African Arabic scripts with support for Ajami languages and traditional letterforms.",
    url: "https://arabic-calligraphy-generator.com/fonts/harmattan",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
  },
}

// Sample alphabet for demonstration
const ARABIC_ALPHABET = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";

// Sample text examples for demonstration
const TEXT_EXAMPLES = [
  {
    text: "بسم الله الرحمن الرحيم",
    translation: "In the name of God, the Most Gracious, the Most Merciful",
    context: "Opening phrase of the Quran"
  },
  {
    text: "اللغات الإفريقية بالخط العربي",
    translation: "African languages in Arabic script",
    context: "Linguistic context"
  },
  {
    text: "وضوح وسهولة القراءة",
    translation: "Clarity and ease of reading",
    context: "Design principle"
  },
  {
    text: "تعليم القراءة والكتابة",
    translation: "Literacy education",
    context: "Educational application"
  }
];

// Font features to showcase
const FONT_FEATURES = [
  {
    title: "Simplified Modern Style",
    description: "Offers a clean and unadorned design, focusing on clarity and straightforwardness for Arabic script."
  },
  {
    title: "Excellent Legibility",
    description: "Specifically designed for high readability, making it suitable for body text and extended reading."
  },
  {
    title: "African Language Support",
    description: "Often includes characters and features needed for various African languages that use the Arabic script."
  },
  {
    title: "Practical and Functional",
    description: "A functional typeface ideal for educational materials, information design, and everyday text usage."
  }
];

export default function HarmattanFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('harmattan');

  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Harmattan Font",
    "description": "A simplified modern Arabic typeface by SIL International with excellent legibility, specifically designed for West African languages using Arabic script (Ajami) and educational materials.",
    "applicationCategory": "Font",
    "operatingSystem": "Cross-platform",
    "creator": {
      "@type": "Organization",
      "name": "SIL International",
      "description": "Faith-based nonprofit organization focused on language development and literacy"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "SIL International",
      "url": "https://software.sil.org"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "programmingLanguage": "OpenType",
    "keywords": ["Arabic font", "Ajami script", "West African languages", "Educational typography", "Simplified Arabic", "Legible font"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "ratingCount": "65",
      "bestRating": "5"
    },
    "featureList": [
      "Simplified modern design",
      "Excellent legibility", 
      "West African language support",
      "Educational focus",
      "Ajami script optimization",
      "Cross-platform compatibility"
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
            {/* Breadcrumb Navigation */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Harmattan Font", href: "/fonts/harmattan" }
              ]}
              className="mb-6"
            />

            <Button asChild variant="ghost" className="mb-4 text-amber-600 hover:text-amber-800 hover:bg-amber-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>
            
            <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full">Modern</span>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mt-4 mb-2">Harmattan Font</h1>
            <p className="text-lg text-amber-700 mb-4">A simplified modern Arabic typeface with excellent legibility</p>
            
            <div className="flex gap-4 mb-8">
              {fontInfo && (
                <DownloadButton 
                  zipFileName={fontInfo.zipFileName}
                  displayName={fontInfo.displayName}
                />
              )}
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/?font=Harmattan">Try Harmattan in Our Generator</Link>
              </Button>
            </div>
            
            <div className="prose prose-amber max-w-none">
              <div className="mb-8">
                <div className="rounded-lg overflow-hidden border border-amber-200 mb-4">
                  <div 
                    className="bg-amber-50 p-8 flex items-center justify-center"
                    style={{ fontFamily: "'Harmattan', serif", fontSize: "48px", direction: "rtl" }}
                  >
                    بسم الله الرحمن الرحيم
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Origin</h3>
                    <p className="text-amber-700">Modern, legible Arabic script, often for African languages</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Designer</h3>
                    <p className="text-amber-700">SIL International (known for developing such fonts)</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Best Uses</h3>
                    <p className="text-amber-700">Educational materials, body text, multilingual publications, information design</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="history-and-background" className="text-2xl font-bold text-amber-800 mb-4">History and Background</h2>
              <p>
                Harmattan is a typeface designed by SIL International, specifically tailored to meet the needs of languages in West Africa that use the Arabic script (Ajami). The name "Harmattan" refers to a dry, dusty trade wind that blows over West Africa. The font prioritizes clarity and legibility, making it suitable for a wide range of reading materials, including educational content and scriptures.
              </p>
              <p>
                While it serves general Arabic text well, its design considerations often include the specific character shapes and diacritics required by various African languages. Harmattan provides a clean, modern, and highly readable option for communities using these scripts, contributing to literacy and language preservation efforts.
              </p>
              
              <h2 id="distinctive-features" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Distinctive Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {FONT_FEATURES.map((feature, index) => (
                  <Card key={index} className="border-amber-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-amber-800 mb-2">{feature.title}</h3>
                      <p className="text-amber-700">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <h2 id="alphabet-showcase" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Alphabet Showcase</h2>
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div 
                    className="text-center"
                    style={{ fontFamily: "'Harmattan', serif", fontSize: "36px", direction: "rtl", lineHeight: 1.8 }}
                  >
                    {ARABIC_ALPHABET}
                  </div>
                </CardContent>
              </Card>
              
              <h2 id="text-examples" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Text Examples</h2>
              
              <Tabs defaultValue="sample1" className="w-full">
                <TabsList className="grid" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((_, index) => (
                    <TabsTrigger key={index} value={`sample${index + 1}`}>
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {TEXT_EXAMPLES.map((example, index) => (
                  <TabsContent key={index} value={`sample${index + 1}`}>
                    <Card className="border-amber-200">
                      <CardContent className="p-6">
                        <div 
                          className="mb-4 text-center"
                          style={{ fontFamily: "'Harmattan', serif", fontSize: "32px", direction: "rtl" }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center italic text-amber-700 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-amber-600">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
              
              <h2 id="use-cases" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Ideal Use Cases</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Educational Materials:</strong> Excellent for textbooks, literacy programs, and learning resources, especially in African contexts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Body Text:</strong> Its high legibility makes it suitable for extended reading in books, articles, and digital content.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Multilingual Publications:</strong> Ideal for documents that include Arabic script alongside other languages, particularly African languages.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Information Design:</strong> Clear and functional for reports, signage, and public information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Religious Texts:</strong> Can be used for scriptures and religious literature requiring clear rendering.</span>
                  </li>
                </ul>
              </div>
              
              <h2 id="technical-details" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Technical Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Font Format</h3>
                    <p className="text-amber-700">Available as OpenType (OTF) and TrueType (TTF).</p>
                    <p className="text-amber-700 mt-2">Unicode compliant, with extensive character support for Arabic and Ajami scripts.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Weights & Styles</h3>
                    <p className="text-amber-700">Typically offered in regular and bold weights to provide basic typographic contrast.</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="try-it-out" className="text-2xl font-bold text-amber-800 mt-10 mb-4">Try Harmattan in Our Calligraphy Generator</h2>
              <p className="mb-6">
                Experience the clarity of the Harmattan font with our Arabic Calligraphy Generator. Create highly legible Arabic text suitable for a variety of applications.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/fonts">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Explore More Fonts
                  </Link>
                </Button>
                
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/?font=Harmattan">Try Harmattan in Our Generator</Link>
                </Button>
              </div>
              
              {/* 相关内容链接 */}
              <RelatedContent 
                title="You May Also Like"
                links={getContentSpecificLinks('font', 'harmattan')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 