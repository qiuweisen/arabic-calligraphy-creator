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
  title: "Reem Kufi Font | Modern Arabic Kufi Typography | Arabic Calligraphy",
  description: "Discover the Reem Kufi font, a modern Arabic Kufi typeface known for its geometric precision and contemporary feel, suitable for headlines and branding.",
  keywords: "Reem Kufi font, Arabic typography, Kufi font, modern Arabic fonts, Islamic calligraphy, geometric Arabic fonts, Arabic design",
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
    text: "الفن الكوفي الحديث",
    translation: "Modern Kufi Art",
    context: "Descriptive phrase"
  },
  {
    text: "تصميم شعار عربي",
    translation: "Arabic Logo Design",
    context: "Branding context"
  },
  {
    text: "هندسة معمارية إسلامية",
    translation: "Islamic Architecture",
    context: "Design and architecture"
  }
];

// Font features to showcase
const FONT_FEATURES = [
  {
    title: "Geometric Precision",
    description: "Characterized by its straight lines, sharp angles, and carefully constructed geometric forms."
  },
  {
    title: "Modern Aesthetic",
    description: "Offers a contemporary interpretation of the traditional Kufi script, ideal for modern design projects."
  },
  {
    title: "Strong Visual Impact",
    description: "Excellent for headlines, titles, logos, and other display purposes where a bold statement is needed."
  },
  {
    title: "Versatile Weights",
    description: "Often available in multiple weights, providing flexibility for various design applications."
  }
];

export default function ReemKufiFontPage() {
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
            
            <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full">Kufi</span>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mt-4 mb-2">Reem Kufi Font</h1>
            <p className="text-lg text-amber-700 mb-8">A modern Kufi typeface with geometric precision</p>
            
            <div className="prose prose-amber max-w-none">
              <div className="mb-8">
                <div className="rounded-lg overflow-hidden border border-amber-200 mb-4">
                  <div 
                    className="bg-amber-50 p-8 flex items-center justify-center"
                    style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: "48px", direction: "rtl" }}
                  >
                    بسم الله الرحمن الرحيم
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Origin</h3>
                    <p className="text-amber-700">Modern Kufi style, characterized by geometric shapes</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Designer</h3>
                    <p className="text-amber-700">Khaled Hosny (often credited for Reem Kufi)</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Best Uses</h3>
                    <p className="text-amber-700">Headlines, logos, posters, branding, modern Islamic art</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="history-and-background" className="text-2xl font-bold text-amber-800 mb-4">History and Background</h2>
              <p>
                Reem Kufi is a contemporary Arabic typeface that embodies the characteristics of the Kufi script, one of the oldest forms of Arabic calligraphy. Traditional Kufi is known for its angular, rectilinear letterforms. Reem Kufi takes these foundational elements and adapts them for modern usage, emphasizing geometric precision and a clean aesthetic.
              </p>
              <p>
                Developed by typeface designer Khaled Hosny, Reem Kufi is designed to be versatile for a range of applications, particularly where a strong, modern Arabic typographic presence is desired. It often features in branding, digital media, and contemporary art.
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
                    style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: "36px", direction: "rtl", lineHeight: 1.8 }}
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
                          style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: "32px", direction: "rtl" }}
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
                    <span><strong className="text-amber-800">Headlines & Titles:</strong> Its bold and geometric nature makes it stand out for titles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Logo Design:</strong> Creates memorable and impactful logos with a modern Arabic feel.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Branding & Identity:</strong> Suitable for companies and projects aiming for a contemporary Arabic identity.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Posters & Banners:</strong> Effective for display purposes in both print and digital media.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Modern Islamic Art:</strong> Used by artists for contemporary calligraphy pieces.</span>
                  </li>
                </ul>
              </div>
              
              <h2 id="technical-details" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Technical Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Font Format</h3>
                    <p className="text-amber-700">Typically available as OpenType (OTF) or TrueType (TTF).</p>
                    <p className="text-amber-700 mt-2">Often supports various OpenType features.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Weights & Styles</h3>
                    <p className="text-amber-700">Available in several weights, allowing for design flexibility.</p>
                    <p className="text-amber-700 mt-2">May include regular, bold, and sometimes other variations.</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="try-it-out" className="text-2xl font-bold text-amber-800 mt-10 mb-4">Try Reem Kufi in Our Calligraphy Generator</h2>
              <p className="mb-6">
                Explore the geometric elegance of Reem Kufi with our Arabic Calligraphy Generator. Design striking headlines, logos, and modern Kufi art with ease.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/fonts">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Explore More Fonts
                  </Link>
                </Button>
                
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/?font=Reem%20Kufi">Try Reem Kufi in Our Generator</Link>
                </Button>
              </div>
              
              {/* 相关内容链接 */}
              <RelatedContent 
                title="You May Also Like"
                links={getContentSpecificLinks('font', 'reem-kufi')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 