import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Download, Feather, Layers, PenTool, Sparkles, Type } from "lucide-react"
// 从字体数据文件中导入getFontInfoBySlug函数
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { DownloadButton } from "@/components/download-button"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Amiri Font: Masterpiece of Classical Naskh Arabic Typography | Arabic Calligraphy",
  description: "Delve into the Amiri font, a revival of classical Naskh calligraphy by Dr. Khaled Hosny. Perfect for Quranic text, academic publishing, and designs requiring authentic Arabic heritage.",
  keywords: "Amiri font, classical Naskh, Dr. Khaled Hosny, Bulaq Press, Arabic typography, Quranic font, Islamic calligraphy, Arabic fonts, traditional Arabic typeface, academic Arabic font",
  openGraph: {
    title: "Amiri Font: Reviving Classical Naskh Beauty | Arabic Calligraphy Generator",
    description: "Discover Amiri, a Naskh typeface by Dr. Khaled Hosny, ideal for traditional and academic Arabic texts. Explore its features and use cases.",
    url: "https://arabic-calligraphy-generator.com/fonts/amiri",
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
    id: "bismillah",
    text: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    translation: "In the name of God, the Most Gracious, the Most Merciful",
    context: "The Basmala, a ubiquitous phrase in Islamic tradition, opening most chapters of the Quran. Amiri's clarity and traditional Naskh style make it ideal for such foundational texts."
  },
  {
    id: "al-fatiha",
    text: "الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ",
    translation: "Praise be to God, Lord of the Worlds",
    context: "The first verse of Surah Al-Fatiha, the opening chapter of the Quran. Amiri's legibility ensures reverence and readability for sacred scriptures."
  },
  {
    id: "poetry-mutanabbi",
    text: "الخَيْلُ وَاللّيْلُ وَالبَيْداءُ تَعرِفُني \n وَالسّيفُ والرُمحُ والقِرطاسُ والقَلَمُ",
    translation: "The steeds, the night, and the desert know me; \n And the sword, the spear, the paper, and the pen.",
    context: "A famous verse by Al-Mutanabbi (915-965 AD), one of the greatest Arab poets. Amiri's classical elegance befits the richness of classical Arabic poetry."
  },
  {
    id: "proverb-knowledge",
    text: "اُطْلُبُوا العِلْمَ مِنَ الْمَهْدِ إِلى اللَّحْدِ",
    translation: "Seek knowledge from the cradle to the grave.",
    context: "A well-known Arabic proverb emphasizing the lifelong pursuit of knowledge. Amiri's formal yet clear style suits educational and wisdom literature."
  }
];

// Font features to showcase
const FONT_FEATURES = [
  {
    icon: <PenTool className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Faithful Naskh Revival",
    description: "Meticulously revives the beauty of early 20th-century Naskh typefaces, notably those from the Bulaq Press, ensuring authenticity."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Optimized for Readability",
    description: "Designed for extended reading, making it a prime choice for books, academic papers, and religious texts like the Quran."
  },
  {
    icon: <Layers className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Comprehensive Glyph Set",
    description: "Includes a vast range of characters, ligatures, contextual alternates, and diacritics for accurate Arabic and Quranic typesetting."
  },
  {
    icon: <Feather className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Elegant & Balanced",
    description: "Maintains consistent stroke thickness and balanced negative space, reflecting the grace of traditional calligraphy."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Quranic Support",
    description: "Features specific glyphs and OpenType features tailored for rendering Quranic text with accuracy and reverence."
  },
  {
    icon: <Type className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Multiple Weights & Styles",
    description: "Available in Regular, Bold, Slanted, and Bold Slanted, offering versatility for complex typographic hierarchies."
  }
];

// Ideal use cases for Amiri
const IDEAL_USE_CASES = [
  {
    title: "Religious Texts & Quranic Publications",
    description: "Its traditional Naskh forms and dedicated Quranic features make it the gold standard for rendering sacred Islamic texts.",
    icon: <BookOpen className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Academic Publishing & Scholarly Works",
    description: "Excellent legibility and formal tone are ideal for books, journals, and research papers in Arabic studies.",
    icon: <Feather className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Formal Documents & Certificates",
    description: "Lends an air of authenticity and gravitas to official documents, diplomas, and invitations.",
    icon: <PenTool className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Classical Literature & Poetry",
    description: "The elegant proportions beautifully complement the richness of classical Arabic prose and poetry.",
    icon: <Sparkles className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Projects Requiring Cultural Authenticity",
    description: "Perfect for designs that aim to convey a strong sense of Arabic heritage and tradition.",
    icon: <Layers className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Digital Content with a Traditional Feel",
    description: "Despite its classical roots, Amiri is highly readable on screens for websites and e-books needing a traditional touch.",
    icon: <Type className="h-5 w-5 text-amber-700" />
  }
];

// Technical details for Amiri
const TECHNICAL_DETAILS = [
  { 
    title: "Designer", 
    value: "Dr. Khaled Hosny",
    description: "An Egyptian physician and type designer, renowned for his contributions to Arabic open-source fonts. Dr. Hosny is also involved with the HarfBuzz text shaping engine."
  },
  { 
    title: "Foundry/Publisher", 
    value: "Open Source (The Amiri Project)",
    description: "Amiri is a free and open-source project, encouraging widespread adoption and contributions from the community."
  },
  { 
    title: "Release Year", 
    value: "2011 (Initial)",
    description: "The font has undergone continuous development and improvement since its first release."
  },
  { 
    title: "Key OpenType Features", 
    value: "liga, dlig, calt, salt, fina, medi, init, mset, ss01-ssXX, quran (for Quranic marks), numr (Mashriq digits), etc.",
    description: "Extensive OpenType support allows for precise typographic control and culturally accurate text rendering."
  },
  { 
    title: "Supported Scripts", 
    value: "Arabic (including extended characters for Persian, Urdu, etc.), Latin (basic support for compatibility)",
    description: "Primarily an Arabic typeface but includes basic Latin glyphs for multilingual contexts."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1",
    description: "Permits free use, modification, and distribution, fostering its use in diverse projects globally."
  }
];

export default function AmiriPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('amiri');
  
  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Amiri Font",
    "description": "A masterpiece of digital Arabic typography, the Amiri font revives the elegance of classical Naskh script. Designed by Dr. Khaled Hosny, inspired by the Bulaq Press typefaces.",
    "applicationCategory": "Font",
    "operatingSystem": "Cross-platform",
    "creator": {
      "@type": "Person",
      "name": "Dr. Khaled Hosny",
      "description": "Egyptian physician and type designer, renowned for contributions to Arabic open-source fonts"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "The Amiri Project"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "programmingLanguage": "OpenType",
    "keywords": ["Arabic font", "Naskh", "Classical typography", "Quranic text", "Islamic calligraphy", "Traditional Arabic"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5"
    },
    "featureList": [
      "Classical Naskh revival",
      "Quranic text optimization", 
      "Comprehensive glyph set",
      "OpenType features",
      "Multiple weights and styles",
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
            {/* 面包屑导航 */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Amiri", href: "/fonts/amiri" }
              ]}
            />
            
            <Button asChild variant="ghost" className="text-amber-600 hover:text-amber-800 hover:bg-amber-50 mb-6">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Font Library
              </Link>
            </Button>
            
            <Card className="mb-8 border-amber-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(3rem, 15vw, 6rem)", color: "#854d0e", lineHeight: 1.2, direction: 'rtl' }}>
                      أبجد
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full mb-2 inline-block">Traditional Naskh</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mt-1 mb-3">Amiri Font</h1>
                    <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                      A masterpiece of digital Arabic typography, the Amiri font revives the elegance of classical Naskh script. Designed by Dr. Khaled Hosny, it is inspired by the Bulaq Press typefaces of the early 20th century, offering unparalleled authenticity and readability for traditional and contemporary use.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                        <Link href="/?font=Amiri">Try Amiri in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="prose prose-amber max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Distinctive Features of Amiri</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-amber-200 flex flex-col">
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

              <h2 id="history-and-background" className="text-3xl font-bold text-amber-800 mt-12 mb-6">The Story of Amiri: A Legacy Reborn</h2>
              <Card className="border-amber-200 mb-12">
                <CardContent className="p-6 md:p-8 space-y-4 text-amber-700 leading-relaxed">
                  <p>
                    The Amiri font, released by Dr. Khaled Hosny in 2011, is not merely a digital typeface but a dedicated effort to revive and preserve the rich heritage of Arabic Naskh calligraphy. Its name pays homage to the <strong className="text-amber-800">Amiri Press (Al-Matba'a Al-Amiriya)</strong> in Bulaq, Cairo, established by Muhammad Ali Pasha in 1820. This historic press was pivotal in the modernization of Arabic printing and became renowned for the beauty and quality of its Naskh typefaces.
                  </p>
                  <p>
                    Dr. Hosny meticulously studied the letterforms produced by the Bulaq Press, which were themselves rooted in the aesthetics of Ottoman Naskh calligraphy. The goal was to create a font that captures the spirit and elegance of this tradition while leveraging modern OpenType technology for sophisticated typographic control. Amiri successfully bridges this gap, offering features for complex script requirements, including full vowelization, a wide range of ligatures, and specialized glyphs for Quranic text.
                  </p>
                  <p>
                    As an open-source project, Amiri has benefited from community contributions and has become a cornerstone for high-quality Arabic digital text, widely used in academic publishing, religious texts, and by designers seeking authentic Arabic typography.
                  </p>
                </CardContent>
              </Card>
              
              <h2 id="alphabet-showcase" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Amiri Alphabet Showcase</h2>
              <Card className="border-amber-200 mb-12">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800">Individual Letterforms</CardTitle>
                  <CardDescription className="text-amber-600">Observe the distinct shapes and balanced proportions of Amiri's Naskh characters.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div 
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Amiri', serif", fontSize: "40px", direction: "rtl" }}
                  >
                    ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي ء ى ة آ أ إ
                  </div>
                </CardContent>
              </Card>
              
              <h2 id="text-examples" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Amiri in Action: Text Examples</h2>
              <Tabs defaultValue={TEXT_EXAMPLES[0].id} className="w-full mb-12">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((example, index) => (
                    <TabsTrigger key={example.id} value={example.id}>
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TEXT_EXAMPLES.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <Card className="border-amber-200">
                      <CardContent className="p-6">
                        <div 
                          className="mb-4 text-center whitespace-pre-line"
                          style={{ fontFamily: "'Amiri', serif", fontSize: "32px", direction: "rtl", lineHeight: 1.7 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-amber-700 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-amber-600">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Ideal Use Cases for Amiri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-amber-200 flex">
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
                  <Card key={detail.title} className="border-amber-200">
                    <CardHeader>
                      <CardTitle className="text-xl text-amber-800">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-amber-700 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-amber-600">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-amber-50 rounded-lg border border-amber-200">
                 <h3 className="text-2xl font-semibold text-amber-800 text-center sm:text-left">Experience Amiri's Elegance</h3>
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/?font=Amiri">Use Amiri in Calligraphy Generator</Link>
                </Button>
              </div>
              
              <RelatedContent 
                title="Explore Similar Traditional Fonts"
                links={getContentSpecificLinks('font', 'amiri')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}