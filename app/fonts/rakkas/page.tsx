import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Crown, Feather, Layers, PenTool, Sparkles, Type } from "lucide-react"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Rakkas Font: Decorative Arabic Display Typography",
  description: "Explore Rakkas, a decorative Arabic display font with ornamental features, ideal for artistic projects and traditional Arabic design applications.",
  keywords: "rakkas font, Arabic typography, Arabic fonts, Islamic calligraphy, Arabic script, digital typography, web fonts",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/rakkas",
  },
  openGraph: {
    title: "Rakkas Font: Decorative Arabic Display Typography",
    description: "Explore Rakkas, a decorative Arabic display font with ornamental features, ideal for artistic projects and traditional Arabic design applications.",
    url: "https://arabic-calligraphy-generator.com/fonts/rakkas",
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
    text: "رقص الحروف العربية",
    translation: "Dance of the Arabic Letters",
    context: "Playful phrase, as Rakkas means \"dancer\""
  },
  {
    text: "عناوين فنية جذابة",
    translation: "Attractive Artistic Titles",
    context: "Design application"
  },
  {
    text: "إبداع بلا حدود",
    translation: "Creativity Without Borders",
    context: "Artistic expression"
  }
];

// Font features to showcase
const FONT_FEATURES = [
  {
    title: "Decorative Display Style",
    description: "A highly stylized display font designed to grab attention with its unique, handwritten-like forms."
  },
  {
    title: "Distinctive Character",
    description: "Features fluid, energetic strokes and a playful rhythm, setting it apart from more formal scripts."
  },
  {
    title: "Inspired by Ruqaa",
    description: "Shows influences from the Ruqaa script but with a much more expressive and decorative flair."
  },
  {
    title: "Ideal for Creative Titles",
    description: "Perfect for headlines, logos, posters, and any design needing a touch of artistic, handwritten Arabic."
  }
];

export default function RakkasFontPage() {
  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Rakkas Font",
    "description": "A decorative display Arabic font by Zeynep Akay with distinctive handwritten character. Features fluid, energetic strokes inspired by Ruqaa script, perfect for creative titles and artistic projects.",
    "creator": {
      "@type": "Person",
      "name": "Zeynep Akay",
      "description": "Turkish type designer known for expressive Arabic display fonts"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Google Fonts",
      "url": "https://fonts.google.com"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "keywords": ["Arabic font", "Decorative display", "Handwritten style", "Ruqaa inspired", "Creative typography", "Artistic font"],
    "genre": "Typography",
    "inLanguage": "ar",
    "artform": "Calligraphic display typography"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Rakkas Font", href: "/fonts/rakkas" }
              ]}
              className="mb-6"
            />

            <Button asChild variant="ghost" className="mb-4 text-amber-600 hover:text-amber-800 hover:bg-amber-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>
            
            <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full">Display</span>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mt-4 mb-2">Rakkas Font</h1>
            <p className="text-lg text-amber-700 mb-8">A decorative display font with distinctive, handwritten character</p>
            
            <div className="prose prose-amber max-w-none">
              <div className="mb-8">
                <div className="rounded-lg overflow-hidden border border-amber-200 mb-4">
                  <div 
                    className="bg-amber-50 p-8 flex items-center justify-center"
                    style={{ fontFamily: "'Rakkas', cursive", fontSize: "60px", direction: "rtl" }} // Cursive as a fallback
                  >
                    بسم الله الرحمن الرحيم
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Origin</h3>
                    <p className="text-amber-700">Decorative display style, handwritten feel, Ruqaa influences</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Designer</h3>
                    <p className="text-amber-700">Zeynep Akay (often associated with Rakkas)</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Best Uses</h3>
                    <p className="text-amber-700">Headlines, titles, posters, branding, artistic invitations, creative projects</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="history-and-background" className="text-2xl font-bold text-amber-800 mb-4">History and Background</h2>
              <p>
                Rakkas, meaning "dancer" in Arabic, is a lively and decorative Arabic display typeface designed by Zeynep Akay. It captures a sense of energy and movement with its fluid, handwritten-like letterforms. While it draws inspiration from elements of the Ruqaa script, Rakkas transforms them into a much more expressive and artistic style, suitable for eye-catching typographic work.
              </p>
              <p>
                This font is specifically intended for display purposes where a strong visual personality is desired. Its distinctive character makes it a popular choice for headlines, posters, book covers, branding, and any design that benefits from a playful yet elegant Arabic script. Rakkas is usually offered as a single-weight font, emphasizing its role in creating impactful visual statements.
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
                    style={{ fontFamily: "'Rakkas', cursive", fontSize: "48px", direction: "rtl", lineHeight: 1.8 }}
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
                          style={{ fontFamily: "'Rakkas', cursive", fontSize: "40px", direction: "rtl" }}
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
                    <span><strong className="text-amber-800">Creative Headlines:</strong> Adds an artistic and energetic touch to titles and headings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Poster Design:</strong> Creates visually appealing posters with a strong calligraphic feel.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Branding & Logos:</strong> Suitable for brands wanting a distinctive and artistic Arabic identity.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Book Covers & Packaging:</strong> Lends a unique and attractive look to print materials.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span><strong className="text-amber-800">Social Media Graphics:</strong> Makes engaging visuals for online content.</span>
                  </li>
                </ul>
              </div>
              
              <h2 id="technical-details" className="text-2xl font-bold text-amber-800 mt-8 mb-4">Technical Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Font Format</h3>
                    <p className="text-amber-700">Typically available as OpenType (OTF) or TrueType (TTF).</p>
                  </CardContent>
                </Card>
                
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Weights & Styles</h3>
                    <p className="text-amber-700">Usually offered in a single, expressive display weight.</p>
                  </CardContent>
                </Card>
              </div>
              
              <h2 id="try-it-out" className="text-2xl font-bold text-amber-800 mt-10 mb-4">Try Rakkas in Our Calligraphy Generator</h2>
              <p className="mb-6">
                Unleash your creativity with the Rakkas font using our Arabic Calligraphy Generator. Perfect for designs that need a distinctive and artistic Arabic touch.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/fonts">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Explore More Fonts
                  </Link>
                </Button>
                
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/?font=Rakkas">Try Rakkas in Our Generator</Link>
                </Button>
              </div>
              
              {/* 相关内容链接 */}
              <RelatedContent 
                title="You May Also Like"
                links={getContentSpecificLinks('font', 'rakkas')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 