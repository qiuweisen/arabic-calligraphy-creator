import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Eye, Sparkles, Layers, Type, Palette, Megaphone, Bold, Crown, Feather, PenTool } from "lucide-react"
import { StaticNavbar } from "@/components/static-navbar"
import { StaticFooter } from "@/components/static-footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Jomhuria Font: Bold Arabic Display Typography",
  description: "Discover Jomhuria, a bold Arabic display font inspired by newspaper headlines, perfect for impactful titles and attention-grabbing Arabic text.",
  keywords: "jomhuria font, Arabic typography, Arabic fonts, Islamic calligraphy, Arabic script, digital typography, web fonts",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/jomhuria",
  },
  openGraph: {
    title: "Jomhuria Font: Bold Arabic Display Typography",
    description: "Discover Jomhuria, a bold Arabic display font inspired by newspaper headlines, perfect for impactful titles and attention-grabbing Arabic text.",
    url: "https://arabic-calligraphy-generator.com/fonts/jomhuria",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
  },
}

const TEXT_EXAMPLES = [
  {
    id: "event-poster-title",
    text: "مهرجان الفن", // Mahrajan al-Fann
    translation: "Art Festival",
    context: "A bold title for an event poster where Jomhuria's impactful style shines."
  },
  {
    id: "branding-statement",
    text: "قوة التصميم", // Quwwat at-Tasmeem
    translation: "The Power of Design",
    context: "A strong branding statement or slogan, where Jomhuria adds weight and authority."
  },
  {
    id: "book-cover-title",
    text: "العمارة الحديثة", // Al-Imarah al-Haditha
    translation: "Modern Architecture",
    context: "An eye-catching title for a book cover or a magazine feature."
  },
  {
    id: "exhibition-name",
    text: "كنوز الخط", // Kunooz al-Khatt
    translation: "Treasures of Calligraphy",
    context: "A prominent name for an exhibition, where Jomhuria's artistic Kufi roots are relevant."
  }
];

const FONT_FEATURES = [
  {
    icon: <Eye className="h-8 w-8 text-red-600 mb-2" />,
    title: "High Visual Impact",
    description: "Designed as a display font, Jomhuria features bold strokes and distinctive forms that immediately grab attention."
  },
  {
    icon: <Bold className="h-8 w-8 text-red-600 mb-2" />,
    title: "Strong Kufi Inspiration",
    description: "Draws heavily from Kufi calligraphic traditions, reinterpreted for a modern, impactful display aesthetic."
  },
  {
    icon: <Megaphone className="h-8 w-8 text-red-600 mb-2" />,
    title: "Ideal for Headlines & Titles",
    description: "Excels in large sizes for headlines, posters, logos, and any application requiring a strong visual statement."
  },
  {
    icon: <Palette className="h-8 w-8 text-red-600 mb-2" />,
    title: "Artistic & Expressive",
    description: "Its unique character shapes offer an artistic and expressive quality, perfect for creative projects."
  },
  {
    icon: <Layers className="h-8 w-8 text-red-600 mb-2" />,
    title: "Single, Powerful Weight",
    description: "Typically offered in a single, bold weight that embodies its display-centric design philosophy."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-red-600 mb-2" />,
    title: "Unique & Memorable",
    description: "Jomhuria's distinct style helps create memorable and recognizable typographic identities."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Posters & Event Promotion",
    description: "Commands attention on posters, flyers, and digital promotions for events and campaigns.",
    icon: <Megaphone className="h-5 w-5 text-red-600" />
  },
  {
    title: "Logos & Branding",
    description: "Creates strong, memorable logotypes and brand marks with a distinct Arabic character.",
    icon: <Bold className="h-5 w-5 text-red-600" />
  },
  {
    title: "Book & Magazine Covers",
    description: "Makes titles pop on book covers, magazine layouts, and editorial designs.",
    icon: <Type className="h-5 w-5 text-red-600" />
  },
  {
    title: "Exhibition & Signage Graphics",
    description: "Ideal for large-scale graphics in exhibitions, museums, and impactful signage.",
    icon: <Eye className="h-5 w-5 text-red-600" />
  },
  {
    title: "Creative Headlines on Web & Social Media",
    description: "Adds a powerful visual punch to website banners, social media graphics, and digital campaigns.",
    icon: <Sparkles className="h-5 w-5 text-red-600" />
  },
  {
    title: "Artistic & Cultural Projects",
    description: "Its Kufi-inspired aesthetic lends itself well to projects related to art, culture, and heritage.",
    icon: <Palette className="h-5 w-5 text-red-600" />
  }
];

const TECHNICAL_DETAILS = [
  {
    title: "Designer",
    value: "Kourosh Beigpour (for TitraShop)",
    description: "Jomhuria was designed by Kourosh Beigpour, an Iranian graphic and type designer known for his contemporary Kufi-inspired work."
  },
  {
    title: "Foundry/Publisher",
    value: "TitraShop / Google Fonts",
    description: "Initially released through TitraShop and later made available via Google Fonts, broadening its accessibility."
  },
  {
    title: "Typographic Style",
    value: "Display / Kufi-Inspired",
    description: "A bold, geometric display typeface drawing clear inspiration from various Kufi calligraphic styles, modernized for impact."
  },
  {
    title: "Primary Use",
    value: "Large sizes, headlines, titles, branding",
    description: "Specifically engineered for applications where typography needs to be a dominant visual element."
  },
  {
    title: "Character Set",
    value: "Arabic, Persian, Urdu. Often includes basic Latin for pairing.",
    description: "Supports the core character sets for its intended Perso-Arabic language applications."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Freely available for use, modification, and redistribution under the OFL."
  }
];

// Jomhuria is best shown with short, impactful words
const ARABIC_ALPHABET_JOMHURIA = "جمهورية قلم فن قوة"; // Republic, Pen, Art, Power

export default function JomhuriaFontPage() {
  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Jomhuria Font",
    "description": "A powerful Arabic display font by Kourosh Beigpour for TitraShop, featuring bold Kufi-inspired letterforms designed for headlines, posters, and impactful branding applications.",
    "creator": {
      "@type": "Person",
      "name": "Kourosh Beigpour",
      "description": "Iranian graphic and type designer known for contemporary Kufi-inspired work"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "TitraShop",
      "url": "https://fonts.google.com"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "keywords": ["Arabic font", "Display font", "Kufi inspired", "Bold typography", "Headlines", "Poster design"],
    "genre": "Typography",
    "inLanguage": ["ar", "fa", "ur"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-red-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Jomhuria Font", href: "/fonts/jomhuria" }
              ]}
              className="mb-6"
            />

            <Button asChild variant="ghost" className="mb-4 text-red-600 hover:text-red-600 hover:bg-red-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            <Card className="mb-8 border-red-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-100 to-red-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Jomhuria', cursive", fontSize: "clamp(3.5rem, 18vw, 7rem)", color: "#b91c1c", lineHeight: 1.1, direction: 'rtl' }}>
                      جمهورية
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-red-600 font-medium px-2 py-1 bg-red-50 rounded-full mb-2 inline-block">Display (Kufi Inspired)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-red-600 mt-1 mb-3">Jomhuria Font</h1>
                    <p className="text-lg text-red-600 mb-6 leading-relaxed">
                      Jomhuria is a powerful Arabic display font designed by Kourosh Beigpour for TitraShop. Its bold, Kufi-inspired letterforms are crafted to make a strong visual statement, perfect for headlines, posters, and impactful branding.
                    </p>
                    <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                      <Link href="/?font=Jomhuria">Try Jomhuria in Our Generator</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-red max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-red-600 mt-12 mb-6">Distinctive Features of Jomhuria</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-red-200 flex flex-col bg-white">
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl text-red-600">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-red-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="design-philosophy" className="text-3xl font-bold text-red-600 mt-12 mb-6">Design Philosophy: Boldness & Kufi Heritage</h2>
              <Card className="border-red-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-red-600 leading-relaxed">
                  <p>
                    Jomhuria (جمهورية, meaning "Republic") is a typeface that embodies strength and modernity through its bold letterforms and clear Kufi influences. Designed by <strong className="text-red-600">Kourosh Beigpour</strong> for TitraShop, Jomhuria is intended for display purposes where visual impact is paramount.
                  </p>
                  <p>
                    The design draws inspiration from various historical Kufi styles, particularly the geometric and monumental aspects, but reinterprets them with a contemporary sensibility. The characters are often thick-stroked, with a strong emphasis on geometric shapes and a distinct rhythm. This makes Jomhuria exceptionally well-suited for headlines, logos, posters, and any application that needs to command attention and convey a sense of authority or artistic boldness.
                  </p>
                  <p>
                    Despite its boldness, Jomhuria maintains a certain elegance through its carefully crafted proportions and the interplay of solid forms and negative space. It's a font that speaks with confidence and artistic flair.
                  </p>
                </CardContent>
              </Card>

              <h2 id="alphabet-showcase" className="text-3xl font-bold text-red-600 mt-12 mb-6">Jomhuria Showcase: Impactful Words</h2>
              <Card className="border-red-200 mb-12 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Bold Kufi-Inspired Letterforms</CardTitle>
                  <CardDescription className="text-red-600">Observe the strong, geometric, and impactful style of Jomhuria.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div
                    className="text-center leading-none"
                    style={{ fontFamily: "'Jomhuria', cursive", fontSize: "clamp(3rem, 20vw, 6rem)", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_JOMHURIA}
                  </div>
                  <p className="text-sm text-red-600 mt-4 text-center">Jomhuria is designed for maximum impact with short, powerful words and headlines.</p>
                </CardContent>
              </Card>

              <h2 id="text-examples" className="text-3xl font-bold text-red-600 mt-12 mb-6">Jomhuria in Action: Display Examples</h2>
              <Tabs defaultValue={TEXT_EXAMPLES[0].id} className="w-full mb-12">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((example, index) => (
                    <TabsTrigger key={example.id} value={example.id} className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TEXT_EXAMPLES.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <Card className="border-red-200 bg-white">
                      <CardContent className="p-6">
                        <div
                          className="mb-4 text-center whitespace-pre-line"
                          style={{ fontFamily: "'Jomhuria', cursive", fontSize: "clamp(2rem, 10vw, 3.5rem)", direction: "rtl", lineHeight: 1.5 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-red-600 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-red-600">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-red-600 mt-12 mb-6">Ideal Use Cases for Jomhuria</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-red-200 flex bg-white">
                    <div className="p-6 pr-0 flex items-center">{useCase.icon}</div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-red-600 mb-1">{useCase.title}</h3>
                      <p className="text-red-600 text-sm">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="technical-details" className="text-3xl font-bold text-red-600 mt-12 mb-6">Technical Specifications</h2>
              <div className="space-y-6 mb-12">
                {TECHNICAL_DETAILS.map((detail) => (
                  <Card key={detail.title} className="border-red-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl text-red-600">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-red-600 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-red-600">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-red-50 rounded-lg border border-red-200">
                 <h3 className="text-2xl font-semibold text-red-600 text-center sm:text-left">Make a Statement with Jomhuria</h3>
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href="/?font=Jomhuria">Use Jomhuria in Calligraphy Generator</Link>
                </Button>
              </div>

              <RelatedContent
                title="Explore Other Bold & Display Fonts"
                links={getContentSpecificLinks('font', 'jomhuria')}
              />
            </div>
          </div>
        </div>
      </main>
      <StaticFooter />
    </>
  )
} 