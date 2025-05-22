import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"

export const metadata: Metadata = {
  title: "Scheherazade Font | Traditional Arabic Typography | Arabic Calligraphy",
  description: "Explore the Scheherazade New font, a traditional Arabic typeface with exceptional readability, designed for scholarly publications and extensive text setting.",
  keywords: "Scheherazade font, Arabic typography, traditional Naskh, scholarly Arabic fonts, Arabic books typography, legible Arabic font",
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
    text: "الحمد لله رب العالمين",
    translation: "Praise be to God, Lord of the Worlds",
    context: "First verse of Al-Fatiha"
  },
  {
    text: "إن مع العسر يسرا",
    translation: "Verily, with hardship comes ease",
    context: "Verse from Surah Al-Inshirah"
  },
  {
    text: "خير الكلام ما قل ودل",
    translation: "The best speech is that which is brief and meaningful",
    context: "Traditional Arabic proverb"
  }
];

// Font features to showcase
const FONT_FEATURES = [
  {
    title: "Scholarly Design",
    description: "Optimized for academic publications with excellent readability for extended text"
  },
  {
    title: "Clear Letter Forms",
    description: "Distinct character shapes with appropriate spacing for maximum legibility"
  },
  {
    title: "Extended Character Set",
    description: "Support for Arabic, Persian, Urdu, and other languages that use Arabic script"
  },
  {
    title: "Vocalization Support",
    description: "Full support for diacritical marks (tashkil) and other scholarly notation"
  }
];

export default function ScheherazadeFontPage() {
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
            
            <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full">Traditional</span>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mt-4 mb-2">Scheherazade Font</h1>
            <p className="text-lg text-amber-700 mb-8">A traditional Naskh style typeface with excellent readability</p>
            
            <div className="prose prose-amber max-w-none">
              <div className="mb-8">
                <div className="rounded-lg overflow-hidden border border-amber-200 mb-4">
                  <div 
                    className="bg-amber-50 p-8 flex items-center justify-center"
                    style={{ fontFamily: "'Scheherazade New', serif", fontSize: "48px", direction: "rtl" }}
                  >
                    بسم الله الرحمن الرحيم
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Origin</h3>
                    <p className="text-amber-700">Traditional Naskh style optimized for scholarly publications</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Designer</h3>
                    <p className="text-amber-700">SIL International, updated as "Scheherazade New" in 2021</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Best Uses</h3>
                    <p className="text-amber-700">Academic texts, books, multilingual publications</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="history-and-background" className="text-2xl font-bold text-amber-800 mb-4">History and Background</h2>
              <p>
                Scheherazade is named after the famous storyteller from "One Thousand and One Nights" (known in Arabic as Alf Layla wa Layla). The font was developed by SIL International, an organization that specializes in linguistic research and supports language development worldwide, particularly for minority language communities.
              </p>
              <p>
                The font was designed specifically to meet the needs of scholarly publishing, with a focus on clarity and legibility for extended reading. In 2021, it was updated to "Scheherazade New," which brought improvements in both design and technical implementation, including enhanced OpenType support and greater language coverage.
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
                    style={{ fontFamily: "'Scheherazade New', serif", fontSize: "36px", direction: "rtl", lineHeight: 1.8 }}
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
                          style={{ fontFamily: "'Scheherazade New', serif", fontSize: "32px", direction: "rtl" }}
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
                    <span><strong className="text-amber-800">Academic Publications:</strong> Scholarly articles, research papers, and academic books</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Multilingual Typography:</strong> Documents containing multiple languages that use Arabic script</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Literary Works:</strong> Fiction, poetry, and other literary publications requiring excellent readability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Educational Materials:</strong> Textbooks, learning materials, and educational publications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Religious Texts:</strong> Clear presentation of religious content with proper diacritical marks</span>
                  </li>
                </ul>
              </div>
              
              <h2 id="technical-details" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Technical Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Font Format</h3>
                    <p className="text-amber-700">OpenType with advanced typographic features</p>
                    <p className="text-amber-700 mt-2">Support for right-to-left rendering and contextual shaping</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Weights & Styles</h3>
                    <p className="text-amber-700">Regular and Bold weights</p>
                    <p className="text-amber-700 mt-2">Comprehensive glyph set including specialized characters</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="language-support" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Extended Language Support</h2>
              <p className="mb-4">
                One of Scheherazade's strengths is its extensive language support for scripts based on Arabic. In addition to Standard Arabic, the font supports:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="border-amber-200">
                  <CardContent className="p-4 text-center">
                    <p className="text-amber-800 font-semibold">Persian (Farsi)</p>
                  </CardContent>
                </Card>
                <Card className="border-amber-200">
                  <CardContent className="p-4 text-center">
                    <p className="text-amber-800 font-semibold">Urdu</p>
                  </CardContent>
                </Card>
                <Card className="border-amber-200">
                  <CardContent className="p-4 text-center">
                    <p className="text-amber-800 font-semibold">Kurdish</p>
                  </CardContent>
                </Card>
                <Card className="border-amber-200">
                  <CardContent className="p-4 text-center">
                    <p className="text-amber-800 font-semibold">Pashto</p>
                  </CardContent>
                </Card>
                <Card className="border-amber-200">
                  <CardContent className="p-4 text-center">
                    <p className="text-amber-800 font-semibold">Sindhi</p>
                  </CardContent>
                </Card>
                <Card className="border-amber-200">
                  <CardContent className="p-4 text-center">
                    <p className="text-amber-800 font-semibold">Other regional languages</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="try-it-out" className="text-2xl font-bold text-amber-800 mt-10 mb-4">Try Scheherazade in Our Calligraphy Generator</h2>
              <p className="mb-6">
                Experience the clarity and legibility of Scheherazade New font by using our Arabic Calligraphy Generator. Create beautiful compositions with customizable text, colors, and styling options.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/fonts">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Explore More Fonts
                  </Link>
                </Button>
                
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/">Try Scheherazade in Our Generator</Link>
                </Button>
              </div>
              
              {/* 相关内容链接 */}
              <RelatedContent 
                title="You May Also Like"
                links={getContentSpecificLinks('font', 'scheherazade')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 