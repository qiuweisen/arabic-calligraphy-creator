import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, CheckCircle, Feather, Globe, Languages, Layers, PenTool, Sparkles, Type, Users, MonitorPlay, Edit3, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { DownloadButton } from "@/components/download-button"

export const metadata: Metadata = {
  title: "Scheherazade New Font: Premier Naskh for Scholarly & Multilingual Texts | Arabic Calligraphy",
  description: "Discover Scheherazade New by SIL International, a Naskh typeface optimized for academic publishing, extensive text, and multilingual support for Arabic script languages.",
  keywords: "Scheherazade New font, SIL International, Arabic Naskh font, scholarly Arabic font, multilingual Arabic typography, Arabic book typography, legible Arabic typeface, extended Arabic character set, Ajami scripts",
  openGraph: {
    title: "Scheherazade New: The Scholar\'s Choice for Arabic Script Typography",
    description: "Explore Scheherazade New, SIL International\'s Naskh font for clarity in academic and multilingual Arabic texts. Features extensive character support.",
    images: [
      {
        url: "/og-images/scheherazade-new-font-og.jpg", // 假设的OG图片路径
        width: 1200,
        height: 630,
        alt: "Scheherazade New Font Showcase",
      },
    ],
  },
}

const TEXT_EXAMPLES = [
  {
    id: "quran-rahman",
    text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    translation: "Then which of the favors of your Lord will you deny?",
    context: "A recurring verse from Surah Ar-Rahman in the Quran. Scheherazade New excels in rendering fully vocalized religious texts with utmost clarity."
  },
  {
    id: "hadith-actions",
    text: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    translation: "Verily, actions are by intentions, and every person will have only what they intended.",
    context: "A foundational Hadith (prophetic tradition). Ideal for Islamic scholarly works requiring precise diacritics and excellent readability."
  },
  {
    id: "literature-alf-layla",
    text: "قَالَتْ شَهْرَزَاد: بَلَغَنِي أَيُّهَا الْمَلِكُ السَّعِيدُ، ذُو الرَّأْيِ الرَّشِيدِ...",
    translation: "Scheherazade said: It has reached me, O fortunate King, possessor of sound judgment...",
    context: "An excerpt from \"One Thousand and One Nights\" (Alf Layla wa-Layla), after which the font is named. Its readability suits lengthy narratives."
  },
  {
    id: "proverb-knowledge-china",
    text: "اُطْلُبُوا الْعِلْمَ وَلَوْ فِي الصِّينِ",
    translation: "Seek knowledge even if it is in China.",
    context: "A famous proverb encouraging the pursuit of knowledge. Scheherazade New is well-suited for educational and wisdom literature across cultures."
  }
];

const FONT_FEATURES = [
  {
    icon: <BookOpen className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Optimized for Erudition",
    description: "Specifically engineered for academic and scholarly publications, ensuring exceptional clarity for extensive reading."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Unambiguous Letterforms",
    description: "Features distinct character shapes, generous counters, and appropriate spacing for maximum legibility, even at small sizes."
  },
  {
    icon: <Globe className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Broad Language Coverage",
    description: "Provides an extensive character set supporting numerous Arabic script-based languages beyond Arabic, including Persian, Urdu, Sindhi, and many Ajami scripts."
  },
  {
    icon: <Layers className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Full Vocalization & Diacritics",
    description: "Comprehensive support for all Arabic diacritical marks (tashkil) and common scholarly notations, ensuring accurate text representation."
  },
  {
    icon: <Users className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Community-Focused Design",
    description: "Developed by SIL International, serving linguists, translators, and minority language communities worldwide."
  },
  {
    icon: <PenTool className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Regular & Bold Weights",
    description: "Available in Regular and Bold, providing essential typographic hierarchy for complex document structures."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Academic & Scholarly Publishing",
    description: "The gold standard for journals, monographs, critical editions, and linguistic research papers using Arabic script.",
    icon: <BookOpen className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Multilingual Documentation & Literature",
    description: "Ideal for projects involving Arabic, Persian, Urdu, Kurdish, Pashto, Sindhi, and various Ajami scripts due to its vast character set.",
    icon: <Languages className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Lexicography & Dictionaries",
    description: "Its clarity and comprehensive glyph coverage make it suitable for complex dictionary entries and linguistic resources.",
    icon: <Type className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Religious & Classical Texts",
    description: "Provides a clear, respectful, and accurate rendering of the Quran, Hadith, and other classical religious or literary works.",
    icon: <Sparkles className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Educational Materials for Arabic Script Languages",
    description: "Excellent for textbooks, literacy materials, and software aimed at learners of Arabic and other related languages.",
    icon: <Feather className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Digital Archives & Libraries",
    description: "Ensures long-term readability and accurate representation of historical and contemporary texts in digital formats.",
    icon: <Layers className="h-5 w-5 text-amber-700" />
  }
];

const TECHNICAL_DETAILS = [
  {
    title: "Designer/Developer",
    value: "SIL International (Updated by Bob Hallissy, et al.)",
    description: "SIL International is a faith-based nonprofit organization focused on language development, literacy, and translation globally."
  },
  {
    title: "Latest Version",
    value: "Scheherazade New (Version 3.300, released 2021)",
    description: "The \"New\" version offers significant improvements over the legacy Scheherazade font, including Graphite and enhanced OpenType support."
  },
  {
    title: "Key OpenType/Graphite Features",
    value: "Contextual alternates (calt), ligatures (liga, dlig), kerning (kern), mark positioning (mark, mkmk), localized forms (locl), character variants.",
    description: "Advanced features ensure correct script behavior and provide fine-grained typographic control for complex layouts."
  },
  {
    title: "Unicode Coverage",
    value: "Extensive, covering Arabic, Arabic Supplement, Arabic Extended-A, Arabic Presentation Forms-A/B, and more.",
    description: "Supports a wide array of characters for Arabic and numerous other languages using the Arabic script."
  },
  {
    title: "Supported Scripts",
    value: "Arabic (Core), Persian, Urdu, Kurdish (Sorani & Kurmanji), Pashto, Sindhi, Uyghur, Balochi, Kashmiri, and many other Ajami scripts.",
    description: "One of the most comprehensive fonts for minority languages using the Arabic script."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Allows free use, modification, and redistribution, promoting its accessibility and use in diverse linguistic projects."
  }
];

// Simplified alphabet, full range shown in use cases
const ARABIC_ALPHABET = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";

export default function ScheherazadeFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('scheherazade');

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-4 text-amber-600 hover:text-amber-800 hover:bg-amber-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            <Card className="mb-8 border-amber-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Scheherazade New', serif", fontSize: "clamp(2.5rem, 13vw, 5rem)", color: "#854d0e", lineHeight: 1.3, direction: 'rtl' }}>
                      أبجدية
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full mb-2 inline-block">Traditional Naskh (Scholarly)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mt-1 mb-3">Scheherazade New</h1>
                    <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                      Scheherazade is a traditional Naskh-style Arabic typeface that excels in readability and authenticity. Perfect for extended reading, academic texts, and projects requiring a classic Arabic aesthetic.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                        <Link href="/?font=Scheherazade">Try Scheherazade in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-amber max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Key Features of Scheherazade New</h2>
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

              <h2 id="history-and-background" className="text-3xl font-bold text-amber-800 mt-12 mb-6">A Legacy of Linguistic Support: The Story of Scheherazade</h2>
              <Card className="border-amber-200 mb-12">
                <CardContent className="p-6 md:p-8 space-y-4 text-amber-700 leading-relaxed">
                  <p>
                    Named after the legendary storyteller of "One Thousand and One Nights," the Scheherazade typeface family is a testament to <strong className="text-amber-800">SIL International's</strong> commitment to serving language communities worldwide. SIL (Summer Institute of Linguistics) is a global, faith-based nonprofit that works with communities to develop language solutions that promote literacy, education, and cultural heritage.
                  </p>
                  <p>
                    The original Scheherazade font was designed to provide a high-quality, Unicode-compliant Naskh typeface for a wide range of Arabic script-based languages, particularly those requiring extensive diacritics or special characters not always found in standard Arabic fonts. The goal was to create a font that is not only aesthetically pleasing but also highly functional for complex scholarly and multilingual typesetting.
                  </p>
                  <p>
                    The <strong className="text-amber-800">Scheherazade New</strong> version, significantly updated in 2021, builds upon this legacy. It incorporates improved outlines, expanded character sets (including more support for Ajami scripts used in Africa and Asia), and enhanced OpenType and Graphite features. This makes it an even more robust and versatile tool for linguists, translators, publishers, and educators working with Arabic script languages.
                  </p>
                </CardContent>
              </Card>

              <h2 id="alphabet-showcase" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Scheherazade New Alphabet Showcase</h2>
              <Card className="border-amber-200 mb-12">
                 <CardHeader>
                  <CardTitle className="text-xl text-amber-800">Basic Arabic Letterforms</CardTitle>
                  <CardDescription className="text-amber-600">Observe the clarity and traditional Naskh style of Scheherazade New characters.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div 
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Scheherazade New', serif", fontSize: "40px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET}
                  </div>
                  <p className="text-center text-sm text-amber-600 mt-4">Note: Scheherazade New supports a much wider range of Arabic script characters, including those for Persian, Urdu, Sindhi, Pashto, and numerous other languages. Full character set details are available on the SIL website.</p>
                </CardContent>
              </Card>
              
              <h2 id="text-examples" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Scheherazade New in Context: Text Examples</h2>
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
                          style={{ fontFamily: "'Scheherazade New', serif", fontSize: "30px", direction: "rtl", lineHeight: 1.8 }}
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

              <h2 id="use-cases" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Ideal Applications for Scheherazade New</h2>
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
                 <h3 className="text-2xl font-semibold text-amber-800 text-center sm:text-left">Utilize Scheherazade New's Clarity</h3>
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/?font=Scheherazade%20New">Use Scheherazade New in Generator</Link>
                </Button>
              </div>
              
              <RelatedContent 
                title="Further Reading & Similar Fonts"
                links={getContentSpecificLinks('font', 'scheherazade')} // slug might need to be 'scheherazade-new'
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 