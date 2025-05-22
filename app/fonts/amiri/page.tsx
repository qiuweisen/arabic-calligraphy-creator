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
  title: "Amiri Font | Traditional Arabic Typography | Arabic Calligraphy",
  description: "Explore the Amiri font, a traditional Arabic typeface inspired by classical Naskh calligraphy with elegant proportions and exceptional legibility.",
  keywords: "Amiri font, Arabic typography, traditional Naskh, Islamic calligraphy, Arabic fonts, digital Arabic typography",
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
    text: "العلم نور والجهل ظلام",
    translation: "Knowledge is light and ignorance is darkness",
    context: "Traditional Arabic proverb"
  },
  {
    text: "كن جميلاً ترى الوجود جميلا",
    translation: "Be beautiful and you will see the world as beautiful",
    context: "Line from poet Eliya Abu Madi"
  }
];

// Font features to showcase
const FONT_FEATURES = [
  {
    title: "Classical Proportions",
    description: "Follows traditional Naskh proportional rules established by Ibn Muqla and refined by Ottoman calligraphers"
  },
  {
    title: "Elegant Transitions",
    description: "Smooth and flowing connections between letters that maintain the rhythm of traditional calligraphy"
  },
  {
    title: "Comprehensive Glyph Set",
    description: "Includes all necessary letter forms, ligatures, and diacritical marks for complete Arabic typography"
  },
  {
    title: "Balanced Weight",
    description: "Maintains consistent stroke thickness and balanced negative space for optimal readability"
  }
];

export default function AmiriFontPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mt-4 mb-2">Amiri Font</h1>
            <p className="text-lg text-amber-700 mb-8">An elegant typeface inspired by classical Arabic typography</p>
            
            <div className="prose prose-amber max-w-none">
              <div className="mb-8">
                <div className="rounded-lg overflow-hidden border border-amber-200 mb-4">
                  <div 
                    className="bg-amber-50 p-8 flex items-center justify-center"
                    style={{ fontFamily: "'Amiri', serif", fontSize: "48px", direction: "rtl" }}
                  >
                    بسم الله الرحمن الرحيم
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Origin</h3>
                    <p className="text-amber-700">Traditional Naskh style based on classical Arabic manuscripts</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Designer</h3>
                    <p className="text-amber-700">Khaled Hosny, released in 2010</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Best Uses</h3>
                    <p className="text-amber-700">Religious texts, books, formal documents</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="history-and-background" className="text-2xl font-bold text-amber-800 mb-4">History and Background</h2>
              <p>
                Amiri is a classical Arabic typeface in Naskh style designed by Khaled Hosny. The font was designed with careful attention to the rich tradition of Arabic typography and named after Amiri Press in Cairo, Egypt, which was established in the early 20th century. The press was known for its high-quality printed materials, particularly religious texts.
              </p>
              <p>
                The design draws inspiration from the beautiful typefaces created by the Bulaq Press in Cairo in the early 20th century. These typefaces were themselves based on traditional Ottoman calligraphy, creating a direct link to centuries of Arabic calligraphic tradition. Amiri aims to capture the elegance and aesthetic qualities of traditional hand-written Naskh while adapting it for modern digital use.
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
                    style={{ fontFamily: "'Amiri', serif", fontSize: "36px", direction: "rtl", lineHeight: 1.8 }}
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
                          style={{ fontFamily: "'Amiri', serif", fontSize: "32px", direction: "rtl" }}
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
                    <span><strong className="text-amber-800">Religious Texts:</strong> Amiri's traditional design makes it perfect for Quranic texts and religious publications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Book Typography:</strong> Excellent readability for long-form text in books and scholarly publications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Formal Documents:</strong> Certificates, invitations, and other formal texts benefit from its elegant, traditional style</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Classical Poetry:</strong> The balanced proportions complement classical Arabic poetry beautifully</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Digital Publications:</strong> Despite its traditional roots, Amiri works well in digital formats with excellent screen readability</span>
                  </li>
                </ul>
              </div>
              
              <h2 id="technical-details" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Technical Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Font Format</h3>
                    <p className="text-amber-700">OpenType with advanced typographic features</p>
                    <p className="text-amber-700 mt-2">Unicode compliant with extensive Arabic character support</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Weights & Styles</h3>
                    <p className="text-amber-700">Regular, Bold, Italic, and Bold Italic</p>
                    <p className="text-amber-700 mt-2">Comprehensive set of weights suitable for various typographic needs</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="try-it-out" className="text-2xl font-bold text-amber-800 mt-10 mb-4">Try Amiri in Our Calligraphy Generator</h2>
              <p className="mb-6">
                Experience the elegance of Amiri font firsthand by using our Arabic Calligraphy Generator. Create beautiful compositions with customizable text, colors, and styling options.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/fonts">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Explore More Fonts
                  </Link>
                </Button>
                
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/">Try Amiri in Our Generator</Link>
                </Button>
              </div>
              
              {/* 相关内容链接 */}
              <RelatedContent 
                title="You May Also Like"
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