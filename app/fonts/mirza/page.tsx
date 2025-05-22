import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Feather, Layers, PenTool, Sparkles, Type, Palette, Edit2, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"

export const metadata: Metadata = {
  title: "Mirza Font: Elegant Nastaliq Script for Persian & Urdu | Arabic Calligraphy",
  description: "Explore the Mirza font, a beautiful Arabic typeface in the Nastaliq style, ideal for Persian, Urdu, and other languages. Known for its flowing elegance and traditional calligraphic feel.",
  keywords: "Mirza font, Nastaliq font, Persian font, Urdu font, Arabic calligraphy, Islamic calligraphy, Arabic typeface, traditional Arabic font, Iranian fonts, South Asian fonts",
  openGraph: {
    title: "Mirza Font: Classic Nastaliq Elegance for Persian & Urdu | Arabic Calligraphy Generator",
    description: "Discover Mirza, a font that captures the beauty of Nastaliq calligraphy. Perfect for literary works, poetry, and designs requiring an authentic Perso-Arabic aesthetic.",
    images: [
      {
        url: "/og-images/mirza-font-og.jpg", // Placeholder - replace with actual image
        width: 1200,
        height: 630,
        alt: "Mirza Font Showcase",
      },
    ],
  },
}

const TEXT_EXAMPLES = [
  {
    id: "persian-poetry-hafez",
    text: "هرگز نمیرد آنکه دلش زنده شد به عشق", // Hargez namirad ânke delash zendeh shod be eshgh
    translation: "Never dies the one whose heart is alive with love.",
    context: "A famous verse by Hafez, the celebrated Persian poet. Mirza's Nastaliq style is perfectly suited for classical Persian poetry."
  },
  {
    id: "urdu-proverb-unity",
    text: "اتحاد میں برکت ہے", // Ittehad mein barkat hai
    translation: "There is blessing in unity.",
    context: "An Urdu proverb where Mirza's clear and elegant script enhances the message."
  },
  {
    id: "book-title-persian",
    text: "شاهنامه فردوسی", // Shāhnāmeh-ye Ferdowsī
    translation: "The Shahnameh of Ferdowsi",
    context: "The title of the epic Persian poem, for which Mirza provides an authentic and distinguished look."
  },
  {
    id: "artistic-quote-arabic",
    text: "الجمال في البساطة", // Al-jamāl fī al-basāta
    translation: "Beauty is in simplicity.",
    context: "An Arabic quote where Mirza's calligraphic qualities can add an artistic touch, even beyond its primary language targets."
  }
];

const FONT_FEATURES = [
  {
    icon: <Edit2 className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Authentic Nastaliq Style",
    description: "Faithfully embodies the characteristics of Nastaliq script, including its sloped baseline, variable stroke thickness, and fluid connections."
  },
  {
    icon: <Feather className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Flowing & Elegant Script",
    description: "Known for its inherent grace and elegance, making it a prime choice for texts that require an artistic and traditional calligraphic feel."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Ideal for Persian & Urdu",
    description: "Primarily designed for Persian, Urdu, and other languages of the Perso-Arabic script family, ensuring cultural and typographic accuracy."
  },
  {
    icon: <Palette className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Artistic & Decorative",
    description: "Its calligraphic nature makes it highly suitable for artistic layouts, decorative headlines, and literary publications."
  },
  {
    icon: <Layers className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Comprehensive Glyph Set",
    description: "Includes a wide range of characters, ligatures, and contextual forms necessary for accurate Nastaliq typesetting."
  },
  {
    icon: <Users className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Multiple Weights (Often Regular & Bold)",
    description: "Typically offered in regular and bold weights, providing versatility for emphasis and design hierarchy."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Persian & Urdu Literature",
    description: "The standard choice for books, poetry collections, and literary magazines in Persian, Urdu, and related languages.",
    icon: <BookOpen className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Classical & Contemporary Poetry",
    description: "Mirza beautifully renders the nuances of poetic verse, making it a favorite for poetry publications.",
    icon: <Feather className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Artistic & Cultural Publications",
    description: "Enhances designs for art books, cultural event posters, and materials requiring a traditional Perso-Arabic aesthetic.",
    icon: <Palette className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Formal Invitations & Certificates",
    description: "Lends an air of sophistication and tradition to high-end invitations, certificates, and formal announcements.",
    icon: <PenTool className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Branding with a Heritage Feel",
    description: "Suitable for brands that wish to evoke a sense of tradition, luxury, and cultural richness, particularly in Iranian or South Asian contexts.",
    icon: <Sparkles className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Headlines & Display Text",
    description: "While primarily for text, its elegance makes it effective for impactful headlines in appropriate contexts.",
    icon: <Type className="h-5 w-5 text-amber-700" />
  }
];

const TECHNICAL_DETAILS = [
  { 
    title: "Designer(s)", 
    value: "KB Sajjadi, Peter Verkinderen, et al. (Google Fonts team and contributors)",
    description: "Mirza is often associated with collaborative efforts to bring classic Nastaliq forms into the digital realm, with significant contributions for its Google Fonts release."
  },
  { 
    title: "Foundry/Publisher", 
    value: "Open Source (Google Fonts)",
    description: "Mirza is freely available through Google Fonts, making it widely accessible for personal and commercial projects."
  },
  { 
    title: "Script Style", 
    value: "Nastaliq (Taʿlīq)",
    description: "A faithful digital representation of the Nastaliq calligraphic style, renowned for its beauty in Persian and Urdu scripts."
  },
  { 
    title: "Key OpenType Features", 
    value: "Rich in OpenType features including `calt` (contextual alternates), `liga` (standard ligatures), `dlig` (discretionary ligatures), `fina` (final forms), `medi` (medial forms), `init` (initial forms), and robust mark positioning for diacritics.",
    description: "These features are crucial for achieving the correct flow and aesthetic of Nastaliq script."
  },
  { 
    title: "Supported Languages", 
    value: "Persian, Urdu, Arabic (with Nastaliq flavor), and other languages using the Perso-Arabic script.",
    description: "Offers comprehensive character support for its target languages."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Allows free use, modification, and distribution, fostering its adoption globally."
  }
];

const ARABIC_ALPHABET_MIRZA = "ا ب پ ت ٹ ث ج چ ح خ د ڈ ذ ر ڑ ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن ں ه و ی ے";

export default function MirzaFontPage() {
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
                    <div style={{ fontFamily: "'Mirza', cursive", fontSize: "clamp(3rem, 15vw, 6rem)", color: "#854d0e", lineHeight: 1.2, direction: 'rtl' }}>
                      میرزا
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full mb-2 inline-block">Nastaliq (Persian/Urdu)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mt-1 mb-3">Mirza Font</h1>
                    <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                      The Mirza font is a distinguished Arabic typeface in the Nastaliq style, celebrated for its flowing elegance. It is an ideal choice for Persian, Urdu, and other languages requiring the traditional beauty of this calligraphic script.
                    </p>
                    <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Link href="/?font=Mirza">Try Mirza in Our Generator</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="prose prose-amber max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Distinctive Features of Mirza</h2>
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

              <h2 id="history-and-background" className="text-3xl font-bold text-amber-800 mt-12 mb-6">The Story of Mirza: Digital Nastaliq Perfected</h2>
              <Card className="border-amber-200 mb-12">
                <CardContent className="p-6 md:p-8 space-y-4 text-amber-700 leading-relaxed">
                  <p>
                    Nastaliq (نستعلیق), a portmanteau of Naskh and Ta'liq, is one of the most fluid and elegant calligraphic styles of the Arabic script. It has historically been the predominant style for writing Persian, and is also widely used for Urdu, Kashmiri, and other South Asian languages. Its characteristic features include a distinct right-to-left slope, varied stroke thickness, and harmonious connections between letters.
                  </p>
                  <p>
                    The <strong className="text-amber-800">Mirza</strong> font is a modern digital rendition that aims to capture the sophisticated beauty of traditional Nastaliq. Developed through collaborative efforts and made widely available via platforms like Google Fonts, Mirza provides a high-quality, open-source solution for typesetting in this challenging yet revered script. It leverages advanced OpenType features to manage the complex ligatures, contextual alternates, and positioning required to achieve an authentic Nastaliq appearance.
                  </p>
                  <p>
                    The name "Mirza" itself can evoke a sense of nobility or scholarship, aligning well with the script's historical association with poetry, literature, and royal decrees. Mirza has become a popular choice for digital publications, websites, and artistic projects that require a genuine Nastaliq aesthetic.
                  </p>
                </CardContent>
              </Card>
              
              <h2 id="alphabet-showcase" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Mirza Alphabet Showcase (Nastaliq Style)</h2>
              <Card className="border-amber-200 mb-12">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800">Flowing Letterforms and Connections</CardTitle>
                  <CardDescription className="text-amber-600">Observe the characteristic sloped baseline and elegant ligatures of Mirza's Nastaliq script.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div 
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Mirza', cursive", fontSize: "38px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_MIRZA}
                  </div>
                  <p className="text-sm text-amber-600 mt-2 text-center">Note: The full aesthetic of Mirza, like all Nastaliq fonts, is best appreciated in connected text demonstrating its rich ligatures and contextual shaping.</p>
                </CardContent>
              </Card>
              
              <h2 id="text-examples" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Mirza in Action: Text Examples</h2>
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
                          style={{ fontFamily: "'Mirza', cursive", fontSize: "32px", direction: "rtl", lineHeight: 1.9 }}
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

              <h2 id="use-cases" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Ideal Use Cases for Mirza</h2>
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
                 <h3 className="text-2xl font-semibold text-amber-800 text-center sm:text-left">Embrace Nastaliq Elegance with Mirza</h3>
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/?font=Mirza">Use Mirza in Calligraphy Generator</Link>
                </Button>
              </div>
              
              <RelatedContent 
                title="Explore Other Nastaliq & Traditional Fonts"
                links={getContentSpecificLinks('font', 'mirza')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 