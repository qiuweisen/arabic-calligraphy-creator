import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Feather, Layers, Type, MonitorPlay, Edit3, Award } from "lucide-react"
import { StaticNavbar } from "@/components/static-navbar"
import { StaticFooter } from "@/components/static-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { DownloadButton } from "@/components/download-button"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Markazi Text: Elegant Arabic Text Font",
  description: "Explore Markazi Text, an elegant Arabic font optimized for body text with excellent readability and sophisticated letterform design.",
  keywords: "markazi text font, Arabic typography, Arabic fonts, Islamic calligraphy, Arabic script, digital typography, web fonts",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/markazi-text",
  },
  openGraph: {
    title: "Markazi Text: Elegant Arabic Text Font",
    description: "Explore Markazi Text, an elegant Arabic font optimized for body text with excellent readability and sophisticated letterform design.",
    url: "https://arabic-calligraphy-generator.com/fonts/markazi-text",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
  },
}

const TEXT_EXAMPLES = [
  {
    id: "academic-paper-snippet",
    text: "تعتبر اللغة العربية من أغنى اللغات من حيث المفردات والتراكيب اللغوية.", // Tu'tabar al-lugha al-'arabiyya min aghna al-lughaat min haythu al-mufradaat wat-taraakeeb al-lughawiyya.
    translation: "The Arabic language is considered one of the richest languages in terms of vocabulary and linguistic structures.",
    context: "A snippet from an academic paper or a scholarly article, where Markazi Text's readability excels."
  },
  {
    id: "news-article-body",
    text: "أفادت التقارير الأخيرة بأن المؤتمر سيُعقد في العاصمة الشهر المقبل.", // Afaadat at-taqaareer al-akheera bi-anna al-mu'tamar sayu'qad fil-'aasima ash-shahr al-muqbil.
    translation: "Recent reports indicated that the conference will be held in the capital next month.",
    context: "Body text from a news article, showcasing its suitability for continuous reading."
  },
  {
    id: "e-book-paragraph",
    text: "كانت الشمس تغرب ببطء، مرسلة أشعتها الذهبية عبر الأفق الواسع.", // Kaanat ash-shams taghrubu bi-but', mursilatan ashi''ataha adh-dhahabiyya 'abra al-ufuq al-waasi'.
    translation: "The sun was setting slowly, sending its golden rays across the vast horizon.",
    context: "A paragraph from an e-book, demonstrating its comfortable reading experience on screens."
  },
  {
    id: "website-long-form-content",
    text: "يهدف هذا المقال إلى استكشاف تاريخ وتطور فن الخط العربي عبر العصور المختلفة.", // Yahdifu hadha al-maqaal ila istikshaaf taareekh wa tatawwur fann al-khatt al-'arabi 'abra al-'usoor al-mukhtalifa.
    translation: "This article aims to explore the history and evolution of Arabic calligraphy art through different eras.",
    context: "Long-form content on a website, where sustained readability is crucial."
  }
];

const FONT_FEATURES = [
  {
    icon: <BookOpen className="h-8 w-8 text-emerald-600 mb-2" />,
    title: "Optimized for Readability",
    description: "Specifically designed for extended reading on screens, with clear letterforms and generous spacing."
  },
  {
    icon: <Feather className="h-8 w-8 text-emerald-600 mb-2" />,
    title: "Naskh-Inspired Aesthetics",
    description: "Draws from the rich heritage of Naskh calligraphy, adapted for contemporary digital needs."
  },
  {
    icon: <Edit3 className="h-8 w-8 text-emerald-600 mb-2" />,
    title: "Traditional with Modern Touch",
    description: "Balances classical calligraphic beauty with the functional demands of modern text typography."
  },
  {
    icon: <Layers className="h-8 w-8 text-emerald-600 mb-2" />,
    title: "Multiple Weights for Hierarchy",
    description: "Often available in several weights (e.g., Regular, Medium, Bold) to support clear typographic structure."
  },
  {
    icon: <MonitorPlay className="h-8 w-8 text-emerald-600 mb-2" />,
    title: "Excellent for Digital Publications",
    description: "Ideal for e-books, online articles, academic papers, and any long-form digital text."
  },
  {
    icon: <Award className="h-8 w-8 text-emerald-600 mb-2" />,
    title: "Award-Winning Design",
    description: "Recognized for its quality and contribution to Arabic type design (e.g., by Google Fonts & others)."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "E-books & Digital Publishing",
    description: "Provides a comfortable and engaging reading experience for lengthy texts on digital devices.",
    icon: <BookOpen className="h-5 w-5 text-emerald-600" />
  },
  {
    title: "Online Newspapers & Magazines",
    description: "Ensures excellent legibility for articles and news content, enhancing reader engagement.",
    icon: <MonitorPlay className="h-5 w-5 text-emerald-600" />
  },
  {
    title: "Academic Journals & Research Papers",
    description: "Its clarity and formal Naskh roots make it suitable for scholarly and academic publications.",
    icon: <Feather className="h-5 w-5 text-emerald-600" />
  },
  {
    title: "Website Content (Long-Form Articles)",
    description: "Perfect for blogs, detailed articles, and any web page with substantial text content.",
    icon: <Type className="h-5 w-5 text-emerald-600" />
  },
  {
    title: "Educational Texts & Materials",
    description: "Supports clear communication in textbooks, learning materials, and instructional content.",
    icon: <Edit3 className="h-5 w-5 text-emerald-600" />
  },
  {
    title: "Corporate Reports & Documentation",
    description: "Lends a professional and highly readable quality to official documents and reports.",
    icon: <Layers className="h-5 w-5 text-emerald-600" />
  }
];

const TECHNICAL_DETAILS = [
  {
    title: "Designer",
    value: "Borna Izadpanah, Fiona Ross, Tim Holloway (for Google Fonts)",
    description: "Markazi Text is a collaborative design, with Borna Izadpanah leading the effort, drawing on deep Naskh expertise."
  },
  {
    title: "Foundry/Publisher",
    value: "Google Fonts",
    description: "Commissioned and distributed by Google Fonts as part of their initiative to provide high-quality open-source Arabic typefaces."
  },
  {
    title: "Typographic Style",
    value: "Naskh (Optimized for Text)",
    description: "A contemporary interpretation of classical Naskh, specifically engineered for optimal on-screen text readability."
  },
  {
    title: "Key Design Goals",
    value: "Readability in small sizes, comfortable for long reading, traditional Naskh aesthetics with modern performance.",
    description: "These goals guided its development to serve as a premier Arabic text typeface for digital use."
  },
  {
    title: "Supported Scripts",
    value: "Arabic (including Persian, Urdu variants), Latin",
    description: "Often includes a companion Latin designed to harmonize with the Arabic, supporting bilingual documents."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Freely available for use, modification, and redistribution, fostering its wide adoption."
  }
];

const ARABIC_ALPHABET_MARKAZI = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";
const LATIN_ALPHABET_MARKAZI = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9";

export default function MarkaziTextFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('markazi-text');

  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Markazi Text Font",
    "description": "A Naskh-inspired Arabic typeface by Borna Izadpanah, masterfully designed for optimal readability in extended text. Balances traditional aesthetics with modern screen performance for digital publications.",
    "genre": "Typography",
    "creator": [
      {
        "@type": "Person",
        "name": "Borna Izadpanah",
        "description": "Iranian type designer specializing in Arabic typography"
      },
      {
        "@type": "Person", 
        "name": "Fiona Ross",
        "description": "British type designer and Arabic script specialist"
      }
    ],
    "publisher": {
      "@type": "Organization", 
      "name": "Google Fonts",
      "url": "https://fonts.google.com"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "encodingFormat": "OpenType",
    "keywords": ["Arabic font", "Naskh typography", "Text optimization", "Digital reading", "Academic content", "Extended text"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "ratingCount": "125",
      "bestRating": "5"
    },
    "about": [
      "Text readability optimization",
      "Traditional Naskh aesthetics", 
      "Screen performance",
      "Extended reading comfort",
      "Bilingual Arabic-Latin support",
      "Award-winning design"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Markazi Text Font", href: "/fonts/markazi-text" }
              ]}
              className="mb-6"
            />

            <Button asChild variant="ghost" className="mb-4 text-emerald-600 hover:text-emerald-600 hover:bg-emerald-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            <Card className="mb-8 border-emerald-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Markazi Text', serif", fontSize: "clamp(3.5rem, 18vw, 6rem)", color: "#059669", lineHeight: 1.1, direction: 'rtl' }}>
                      مركزي
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-emerald-600 font-medium px-2 py-1 bg-emerald-50 rounded-full mb-2 inline-block">Naskh (Optimized for Text)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-emerald-600 mt-1 mb-3">Markazi Text Font</h1>
                    <p className="text-lg text-emerald-600 mb-6 leading-relaxed">
                      Markazi Text is a Naskh-inspired Arabic typeface masterfully designed by Borna Izadpanah for optimal readability in extended text. It beautifully balances traditional aesthetics with modern screen performance, making it ideal for digital publications and academic content.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Link href="/?font=Markazi%20Text">Try Markazi Text in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-emerald max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-emerald-600 mt-12 mb-6">Distinctive Features of Markazi Text</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-emerald-200 flex flex-col bg-white">
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl text-emerald-600">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-emerald-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="design-philosophy" className="text-3xl font-bold text-emerald-600 mt-12 mb-6">Design Philosophy: Readability Rooted in Tradition</h2>
              <Card className="border-emerald-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-emerald-600 leading-relaxed">
                  <p>
                    Markazi Text (مركزي, meaning "central" or "primary") is an Arabic typeface specifically designed by <strong className="text-emerald-600">Borna Izadpanah</strong>, with contributions from Fiona Ross and Tim Holloway for Google Fonts. Its primary goal is to provide an exceptional reading experience for extended Arabic text, particularly on digital screens.
                  </p>
                  <p>
                    The design draws deep inspiration from the classical Naskh calligraphic style, which has long been the standard for legible Arabic text. However, Markazi Text is not merely a digitization of historical forms; it is a careful reinterpretation and optimization for contemporary typographic needs. It features well-defined letter shapes, generous counters, and carefully considered spacing to enhance clarity and reduce reader fatigue during long reading sessions.
                  </p>
                  <p>
                    Markazi Text successfully bridges the gap between traditional calligraphic beauty and modern functional requirements. Its award-winning design is a testament to its quality and its significant contribution to making Arabic content more accessible and enjoyable to read in the digital age.
                  </p>
                </CardContent>
              </Card>

              <h2 id="alphabet-showcase" className="text-3xl font-bold text-emerald-600 mt-12 mb-6">Markazi Text Alphabet Showcase (Arabic & Latin)</h2>
              <Card className="border-emerald-200 mb-12 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-emerald-600">Clear Naskh-Inspired Letterforms</CardTitle>
                  <CardDescription className="text-emerald-600">Observe the legible and traditional yet modern style of Markazi Text.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-emerald-600 mb-2 text-center">Arabic</h3>
                  <div
                    className="text-center leading-loose mb-6"
                    style={{ fontFamily: "'Markazi Text', serif", fontSize: "30px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_MARKAZI}
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-600 mb-2 text-center">Latin (Example)</h3>
                  <div
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Markazi Text', serif", fontSize: "24px" }}
                  >
                    {LATIN_ALPHABET_MARKAZI}
                  </div>
                </CardContent>
              </Card>

              <h2 id="text-examples" className="text-3xl font-bold text-emerald-600 mt-12 mb-6">Markazi Text in Action: Reading Examples</h2>
              <Tabs defaultValue={TEXT_EXAMPLES[0].id} className="w-full mb-12">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((example, index) => (
                    <TabsTrigger key={example.id} value={example.id} className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TEXT_EXAMPLES.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <Card className="border-emerald-200 bg-white">
                      <CardContent className="p-6">
                        <div
                          className="mb-4 text-left whitespace-pre-line text-justify"
                          style={{ fontFamily: "'Markazi Text', serif", fontSize: "20px", direction: "rtl", lineHeight: 1.9 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-emerald-600 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-emerald-600">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-emerald-600 mt-12 mb-6">Ideal Use Cases for Markazi Text</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-emerald-200 flex bg-white">
                    <div className="p-6 pr-0 flex items-center">{useCase.icon}</div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-emerald-600 mb-1">{useCase.title}</h3>
                      <p className="text-emerald-600 text-sm">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="technical-details" className="text-3xl font-bold text-emerald-600 mt-12 mb-6">Technical Specifications</h2>
              <div className="space-y-6 mb-12">
                {TECHNICAL_DETAILS.map((detail) => (
                  <Card key={detail.title} className="border-emerald-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl text-emerald-600">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-emerald-600 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-emerald-600">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                 <h3 className="text-2xl font-semibold text-emerald-600 text-center sm:text-left">Experience Superior Readability with Markazi Text</h3>
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Link href="/?font=Markazi%20Text">Use Markazi Text in Calligraphy Generator</Link>
                </Button>
              </div>

              <RelatedContent
                title="Explore Other Naskh & Text-Optimized Fonts"
                links={getContentSpecificLinks('font', 'markazi-text')}
              />
            </div>
          </div>
        </div>
      </main>
      <StaticFooter />
    </>
  )
} 