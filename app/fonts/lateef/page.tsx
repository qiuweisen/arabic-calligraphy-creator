import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Feather, Layers, PenTool, Sparkles, Type, Edit, Palette, Languages } from "lucide-react"
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
  title: "Lateef Font: Extended Arabic Script Typography",
  description: "Discover Lateef by SIL International, an Arabic font with extensive character support for multilingual projects and minority language documentation.",
  keywords: "lateef font, Arabic typography, Arabic fonts, Islamic calligraphy, Arabic script, digital typography, web fonts",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/lateef",
  },
  openGraph: {
    title: "Lateef Font: Extended Arabic Script Typography",
    description: "Discover Lateef by SIL International, an Arabic font with extensive character support for multilingual projects and minority language documentation.",
    url: "https://arabic-calligraphy-generator.com/fonts/lateef",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
  },
}

const TEXT_EXAMPLES = [
  {
    id: "urdu-poetry-ghalib",
    text: "نقش فریادی ہے کس کی شوخئ تحریر کا", // Naqsh faryādi hai kis kī shōkhī-e taḥrīr kā
    translation: "Whose playful writing does this image lament?",
    context: "A famous verse from Ghalib, a renowned Urdu poet. Lateef's cursive style beautifully complements Urdu poetry."
  },
  {
    id: "sindhi-proverb",
    text: "جيڪو لکندو سو پڙهندو", // Jeko likhando so parhando
    translation: "He who writes, will read.",
    context: "A Sindhi proverb emphasizing the importance of literacy, rendered clearly in Lateef."
  },
  {
    id: "arabic-greeting-elegant",
    text: "أطيب التحيات", // Atyab at-tahiyat
    translation: "Kindest regards",
    context: "An elegant Arabic greeting where Lateef's flowing nature adds a personal touch."
  },
  {
    id: "book-title-literary",
    text: "ديوان الشعر", // Diwan ash-shi'r
    translation: "Collection of Poetry",
    context: "A title for a literary work, where Lateef's artistic style is highly appropriate."
  }
];

const FONT_FEATURES = [
  {
    icon: <Edit className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Graceful Cursive Forms",
    description: "Characterized by its flowing, cursive letterforms that emulate a natural handwriting style, often associated with Nastaliq influences."
  },
  {
    icon: <Languages className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Optimized for Urdu & Sindhi",
    description: "Specifically designed by SIL International to support the needs of Urdu, Sindhi, and other South Asian languages using the Arabic script."
  },
  {
    icon: <Feather className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Elegant & Artistic",
    description: "Offers a sophisticated and artistic aesthetic, making it ideal for literary works, poetry, and designs requiring a touch of calligraphic beauty."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Excellent Readability for Target Languages",
    description: "Ensures clarity and readability for its primary target languages, even with its cursive and connected script style."
  },
  {
    icon: <PenTool className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Wide Character Set",
    description: "Includes a comprehensive set of characters and diacritics required for accurate typesetting of Urdu, Sindhi, and related languages."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Regular & Bold Weights",
    description: "Available in Regular and Bold weights, allowing for typographic emphasis and hierarchy in text."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Urdu & Sindhi Literature",
    description: "The primary choice for typesetting books, magazines, and digital content in Urdu, Sindhi, and similar languages.",
    icon: <BookOpen className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Poetry & Calligraphic Art",
    description: "Its flowing, artistic style beautifully renders poetry and can be used for contemporary calligraphic art pieces.",
    icon: <Palette className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Personal Correspondence & Invitations",
    description: "Adds an elegant and personal touch to letters, invitations, and greeting cards.",
    icon: <Feather className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Cultural & Heritage Projects",
    description: "Suitable for designs related to the cultural heritage of Urdu and Sindhi speaking regions.",
    icon: <Layers className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Educational Materials for Target Languages",
    description: "Can be used in textbooks and learning materials for Urdu, Sindhi, and other languages it supports.",
    icon: <Type className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Branding with an Artistic Flair",
    description: "For brands that wish to convey elegance, tradition, and artistry, especially those targeting South Asian communities.",
    icon: <Sparkles className="h-5 w-5 text-amber-700" />
  }
];

const TECHNICAL_DETAILS = [
  { 
    title: "Designer/Developer", 
    value: "SIL International (primarily Jonathan Kew, et al.)",
    description: "Lateef is a product of SIL International, an organization dedicated to language development and providing resources for minority languages."
  },
  { 
    title: "Foundry/Publisher", 
    value: "SIL International (Open Source)",
    description: "Distributed freely under the SIL Open Font License, promoting wide accessibility and use."
  },
  { 
    title: "Primary Language Focus", 
    value: "Urdu, Sindhi, and other Arabic script languages of South Asia.",
    description: "Tailored to meet the specific typographic requirements and aesthetic preferences of these language communities."
  },
  { 
    title: "Key OpenType/Graphite Features", 
    value: "Extensive support for contextual alternates (calt), ligatures (liga, dlig), kerning (kern), and mark positioning (mark, mkmk) to render the cursive script correctly and beautifully.",
    description: "Leverages advanced font technologies for accurate and fluid script behavior."
  },
  { 
    title: "Unicode Coverage", 
    value: "Comprehensive coverage for Arabic, Arabic Supplement, and characters needed for target languages.",
    description: "Ensures that all necessary characters for Urdu, Sindhi, etc., are available and correctly rendered."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Allows for free use, modification, and redistribution, fostering its global adoption."
  }
];

// Sample alphabet for demonstration - Lateef's beauty is in connected text
const ARABIC_ALPHABET_LATEEF = "ا ب پ ت ٹ ث ج چ ح خ د ڈ ذ ر ڑ ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن ں ه و ی ے";

export default function LateefFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('lateef');

  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Lateef Font",
    "description": "A gracefully flowing cursive Arabic script font by SIL International, specifically designed for Urdu, Sindhi, and South Asian languages. Features elegant Nastaliq-influenced letterforms.",
    "creator": {
      "@type": "Organization",
      "name": "SIL International",
      "description": "Faith-based nonprofit organization focused on language development and typography"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "SIL International",
      "url": "https://software.sil.org"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "keywords": ["Arabic font", "Cursive script", "Urdu typography", "Sindhi font", "Nastaliq influence", "South Asian languages"],
    "genre": "Typography",
    "inLanguage": ["ar", "ur", "sd"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
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
                { name: "Lateef Font", href: "/fonts/lateef" }
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
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 p-6 aspect-square">
                    {/* Using a placeholder text that shows some characteristic connections */}
                    <div style={{ fontFamily: "'Lateef', cursive", fontSize: "clamp(2.5rem, 12vw, 5rem)", color: "#854d0e", lineHeight: 1.3, direction: 'rtl' }}>
                      لطیف
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full mb-2 inline-block">Cursive (Urdu/Sindhi Focus)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mt-1 mb-3">Lateef Font</h1>
                    <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                      The Lateef font, from SIL International, offers a gracefully flowing cursive script primarily designed for Urdu, Sindhi, and other South Asian languages using Arabic script. It is celebrated for its elegance and readability in literary and artistic contexts.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                        <Link href="/?font=Lateef">Try Lateef in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="prose prose-amber max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Distinctive Features of Lateef</h2>
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

              <h2 id="history-and-background" className="text-3xl font-bold text-amber-800 mt-12 mb-6">The Story of Lateef: Serving South Asian Languages</h2>
              <Card className="border-amber-200 mb-12">
                <CardContent className="p-6 md:p-8 space-y-4 text-amber-700 leading-relaxed">
                  <p>
                    The Lateef font is a significant contribution by <strong className="text-amber-800">SIL International</strong>, an organization renowned for its work in linguistic research and font development for minority languages. "Lateef" (لطیف) itself is an Arabic word meaning "gentle," "graceful," or "subtle," aptly reflecting the font's aesthetic qualities.
                  </p>
                  <p>
                    Lateef was specifically developed to address the typographic needs of languages like <strong className="text-amber-800">Urdu and Sindhi</strong>, which utilize the Arabic script with additional characters and distinct calligraphic traditions, often influenced by Nastaliq and other cursive styles. While not a pure Nastaliq font (which has very complex rendering rules), Lateef provides a highly readable and aesthetically pleasing cursive style that is well-suited for extended text in these languages.
                  </p>
                  <p>
                    The font incorporates advanced OpenType and Graphite features to handle the complex contextual shaping and ligatures required for connected cursive scripts. Its development ensures that literary works, educational materials, and digital content in these languages can be presented with clarity and cultural appropriateness. As an open-source font, Lateef has become a valuable resource for publishers, designers, and users in these language communities.
                  </p>
                </CardContent>
              </Card>
              
              <h2 id="alphabet-showcase" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Lateef Alphabet Showcase (Urdu/Sindhi Context)</h2>
              <Card className="border-amber-200 mb-12">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800">Characteristic Letterforms & Connections</CardTitle>
                  <CardDescription className="text-amber-600">Observe the flowing, cursive nature of Lateef, particularly suited for Urdu and Sindhi characters.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div 
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Lateef', cursive", fontSize: "36px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_LATEEF}
                  </div>
                  <p className="text-sm text-amber-600 mt-2 text-center">Note: The true beauty of Lateef is seen in connected text where its cursive ligatures and contextual forms come alive.</p>
                </CardContent>
              </Card>
              
              <h2 id="text-examples" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Lateef in Action: Text Examples</h2>
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
                          style={{ fontFamily: "'Lateef', cursive", fontSize: "30px", direction: "rtl", lineHeight: 1.8 }}
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

              <h2 id="use-cases" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Ideal Use Cases for Lateef</h2>
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
                 <h3 className="text-2xl font-semibold text-amber-800 text-center sm:text-left">Experience Lateef's Graceful Flow</h3>
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/?font=Lateef">Use Lateef in Calligraphy Generator</Link>
                </Button>
              </div>
              
              <RelatedContent 
                title="Explore Similar Cursive & Artistic Fonts"
                links={getContentSpecificLinks('font', 'lateef')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 