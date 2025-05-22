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
  title: "Aref Ruqaa Font | Elegant Ruqaa Calligraphy | Arabic Calligraphy",
  description: "Explore the Aref Ruqaa font, an ornate Arabic typeface inspired by the traditional Ottoman Ruqaa (Riq'a) calligraphy style, known for its compact and flowing script.",
  keywords: "Aref Ruqaa font, Arabic typography, Ruqaa font, Riq'a font, Ottoman calligraphy, Islamic calligraphy, Arabic fonts",
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
    text: "خط الرقعة الجميل",
    translation: "Beautiful Ruqaa Script",
    context: "Descriptive phrase"
  },
  {
    text: "مرحبا بكم في عالم الخط العربي",
    translation: "Welcome to the world of Arabic calligraphy",
    context: "Greeting phrase"
  },
  {
    text: "رسالة شكر وتقدير",
    translation: "A letter of thanks and appreciation",
    context: "Correspondence context"
  }
];

// Font features to showcase
const FONT_FEATURES = [
  {
    title: "Ottoman Ruqaa Influence",
    description: "Based on the Ruqaa (Riq'a) script, popular during the Ottoman era for everyday writing and official documents."
  },
  {
    title: "Compact and Flowing",
    description: "Features short horizontal strokes and a flowing, slightly slanted appearance, making it efficient for writing."
  },
  {
    title: "Ornate and Elegant",
    description: "Maintains an elegant and artistic quality despite its practicality, suitable for various decorative uses."
  },
  {
    title: "Good Legibility",
    description: "Offers good readability for its style, often used in titles, short texts, and correspondence."
  }
];

export default function ArefRuqaaFontPage() {
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
            
            <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full">Diwani</span>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mt-4 mb-2">Aref Ruqaa Font</h1>
            <p className="text-lg text-amber-700 mb-8">An ornate typeface inspired by Ottoman Diwani calligraphy</p>
            
            <div className="prose prose-amber max-w-none">
              <div className="mb-8">
                <div className="rounded-lg overflow-hidden border border-amber-200 mb-4">
                  <div 
                    className="bg-amber-50 p-8 flex items-center justify-center"
                    style={{ fontFamily: "'Aref Ruqaa', serif", fontSize: "48px", direction: "rtl" }}
                  >
                    بسم الله الرحمن الرحيم
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Origin</h3>
                    <p className="text-amber-700">Inspired by Ottoman Ruqaa (Riq'a) script</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Designer</h3>
                    <p className="text-amber-700">Abdullah Aref (often associated with this style)</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Best Uses</h3>
                    <p className="text-amber-700">Titles, certificates, invitations, short texts, decorative purposes</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="history-and-background" className="text-2xl font-bold text-amber-800 mb-4">History and Background</h2>
              <p>
                Aref Ruqaa is an Arabic typeface that emulates the Ruqaa (also Riq'a) script, a calligraphic style that gained prominence in the Ottoman Empire. Ruqaa was widely used for everyday handwriting, official correspondence, and documents due to its relative simplicity and speed of writing compared to more elaborate scripts like Diwani or Thuluth. It is characterized by its short, straight strokes and a compact, slightly slanted appearance.
              </p>
              <p>
                The Aref Ruqaa font aims to capture the essence of this historical script, providing a digital version that retains its characteristic flow and legibility. It often features in contexts where a touch of traditional elegance combined with clarity is desired.
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
                    style={{ fontFamily: "'Aref Ruqaa', serif", fontSize: "36px", direction: "rtl", lineHeight: 1.8 }}
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
                          style={{ fontFamily: "'Aref Ruqaa', serif", fontSize: "32px", direction: "rtl" }}
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
                    <span><strong className="text-amber-800">Headings & Titles:</strong> Its clear and compact style makes it suitable for titles that need to be legible yet elegant.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Invitations & Certificates:</strong> Adds a touch of traditional formality to official or celebratory documents.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Short Texts & Correspondence:</strong> Suitable for brief notes, letters, or digital messages where a traditional feel is desired.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Educational Materials:</strong> Can be used for teaching materials related to the Ruqaa script.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Decorative Elements:</strong> Its ornate nature allows it to be used in graphic design for a traditional Arabic aesthetic.</span>
                  </li>
                </ul>
              </div>
              
              <h2 id="technical-details" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Technical Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Font Format</h3>
                    <p className="text-amber-700">Typically available as OpenType (OTF) or TrueType (TTF).</p>
                    <p className="text-amber-700 mt-2">Supports standard Arabic character sets.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Weights & Styles</h3>
                    <p className="text-amber-700">Often available in regular and sometimes bold weights.</p>
                    <p className="text-amber-700 mt-2">Designed to maintain clarity even in its compact form.</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="try-it-out" className="text-2xl font-bold text-amber-800 mt-10 mb-4">Try Aref Ruqaa in Our Calligraphy Generator</h2>
              <p className="mb-6">
                Experience the traditional elegance of Aref Ruqaa with our Arabic Calligraphy Generator. Create beautiful texts with this classic Ottoman-inspired script.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/fonts">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Explore More Fonts
                  </Link>
                </Button>
                
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/?font=Aref%20Ruqaa">Try Aref Ruqaa in Our Generator</Link>
                </Button>
              </div>
              
              {/* 相关内容链接 */}
              <RelatedContent 
                title="You May Also Like"
                links={getContentSpecificLinks('font', 'aref-ruqaa')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 