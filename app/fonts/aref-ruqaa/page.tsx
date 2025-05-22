import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Feather, Layers, PenTool, Sparkles, Type, Edit3, Palette } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"

export const metadata: Metadata = {
  title: "Aref Ruqaa Font: Elegant and Traditional Ruq'ah Script | Arabic Calligraphy",
  description: "Discover the Aref Ruqaa font, a beautiful rendition of the traditional Ruq'ah script. Ideal for headlines, short texts, and designs requiring a classic, flowing Arabic style.",
  keywords: "Aref Ruqaa font, Ruq'ah script, Arabic calligraphy, traditional Arabic font, headline font, Islamic calligraphy, Arabic display font, classic Arabic typeface",
  openGraph: {
    title: "Aref Ruqaa: Mastering the Beauty of Ruq'ah Script | Arabic Calligraphy Generator",
    description: "Explore Aref Ruqaa, a font that brings the elegance of Ruq'ah calligraphy to digital form. Perfect for distinctive titles and artistic expressions.",
    images: [
      {
        url: "/og-images/aref-ruqaa-og.jpg", // Placeholder - replace with actual image
        width: 1200,
        height: 630,
        alt: "Aref Ruqaa Font Showcase",
      },
    ],
  },
}

const TEXT_EXAMPLES = [
  {
    id: "greeting",
    text: "أهلاً وسهلاً",
    translation: "Welcome",
    context: "A common Arabic greeting, showcasing Aref Ruqaa's suitability for inviting and warm messages."
  },
  {
    id: "proverb-brevity",
    text: "خير الكلام ما قل ودل",
    translation: "The best speech is that which is concise and indicative",
    context: "A proverb where the compact nature of Ruq'ah script, as rendered by Aref Ruqaa, is fitting."
  },
  {
    id: "certificate-title",
    text: "شهادة تقدير",
    translation: "Certificate of Appreciation",
    context: "Titles on certificates or formal notices benefit from Aref Ruqaa's distinct and elegant style."
  },
  {
    id: "invitation-heading",
    text: "دعوة خاصة",
    translation: "Special Invitation",
    context: "Headings for invitations or announcements, where Aref Ruqaa adds a touch of classic charm."
  }
];

const FONT_FEATURES = [
  {
    icon: <Edit3 className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Authentic Ruq'ah Style",
    description: "Faithfully captures the characteristics of Ruq'ah script, known for its short, straight strokes and upward slant."
  },
  {
    icon: <Feather className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Elegant & Flowing",
    description: "Offers a graceful and flowing aesthetic, making it visually appealing for various applications."
  },
  {
    icon: <Type className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Ideal for Headlines",
    description: "Its distinct and clear letterforms make it an excellent choice for titles, headlines, and short textual elements."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Classic Charm",
    description: "Brings a touch of traditional Arabic calligraphy to digital designs, suitable for cultural and artistic projects."
  },
  {
    icon: <Layers className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Good Readability in Display Sizes",
    description: "While historically a handwriting script, Aref Ruqaa is optimized for readability in larger display sizes."
  },
  {
    icon: <Palette className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Multiple Weights",
    description: "Available in Regular and Bold, providing options for emphasis and typographic hierarchy."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Headlines and Titles",
    description: "Perfect for creating impactful and stylish headlines in newspapers, magazines, and digital media.",
    icon: <Type className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Short Texts & Captions",
    description: "Suitable for brief descriptive texts, captions, and annotations where a distinct style is desired.",
    icon: <Edit3 className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Branding & Identity (Niche)",
    description: "Can be used for branding in specific contexts that call for a traditional, handwritten Arabic feel.",
    icon: <Sparkles className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Certificates & Invitations",
    description: "Adds an element of formality and elegance to certificates, awards, and formal invitations.",
    icon: <PenTool className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Cultural & Artistic Projects",
    description: "Complements designs related to Arabic culture, heritage, and art due to its traditional roots.",
    icon: <Palette className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Educational Materials (Display)",
    description: "Can be used for titles or section headings in educational materials on Arabic calligraphy or language.",
    icon: <BookOpen className="h-5 w-5 text-amber-700" />
  }
];

const TECHNICAL_DETAILS = [
  { 
    title: "Designer(s)", 
    value: "Abdullah Aref, Khaled Hosny",
    description: "Aref Ruqaa is a collaborative effort, building upon traditional Ruq'ah forms with modern font engineering."
  },
  { 
    title: "Foundry/Publisher", 
    value: "Open Source (Google Fonts, Silicon Arabia)",
    description: "Widely available as an open-source font, making it accessible for various projects."
  },
  { 
    title: "Release Year", 
    value: "Initially developed earlier, significantly updated and popularized via Google Fonts around 2016-2017.",
    description: "Has seen ongoing improvements and broader adoption over the years."
  },
  { 
    title: "Key OpenType Features", 
    value: "Includes ligatures (liga), contextual alternates (calt), and kerning (kern) for improved text flow and appearance.",
    description: "Utilizes OpenType features to render the Ruq'ah script accurately and aesthetically."
  },
  { 
    title: "Supported Scripts", 
    value: "Arabic",
    description: "Primarily designed for the Arabic script, capturing the nuances of Ruq'ah."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Allows free use, modification, and distribution, encouraging its widespread application."
  }
];

const ARABIC_ALPHABET_RUQAA = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي"; // Standard alphabet for example

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
            
            <Card className="mb-8 border-amber-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Aref Ruqaa', serif", fontSize: "clamp(3rem, 15vw, 6rem)", color: "#854d0e", lineHeight: 1.2, direction: 'rtl' }}>
                      رقعه
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full mb-2 inline-block">Traditional Ruq'ah</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mt-1 mb-3">Aref Ruqaa Font</h1>
                    <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                      Aref Ruqaa beautifully embodies the traditional Ruq'ah script, known for its clarity, conciseness, and distinctive upward slant. It's an excellent choice for headlines, short texts, and designs seeking a classic Arabic calligraphic touch.
                    </p>
                    <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Link href="/?font=Aref%20Ruqaa">Try Aref Ruqaa in Our Generator</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="prose prose-amber max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Distinctive Features of Aref Ruqaa</h2>
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

              <h2 id="history-and-background" className="text-3xl font-bold text-amber-800 mt-12 mb-6">The Story of Aref Ruqaa: Modernizing a Classic Script</h2>
              <Card className="border-amber-200 mb-12">
                <CardContent className="p-6 md:p-8 space-y-4 text-amber-700 leading-relaxed">
                  <p>
                    The Ruq'ah (الرقعة) script is one of the most common calligraphic styles in everyday Arabic writing and was historically popular in the Ottoman Empire. It's characterized by its simple, short strokes, often with a slight upward tilt to the left, and its relatively compact letterforms, making it quick to write and easy to read in short bursts.
                  </p>
                  <p>
                    Aref Ruqaa, a collaborative project involving designers like Abdullah Aref and Khaled Hosny, aims to bring this functional and aesthetically pleasing script into the digital age. The font captures the essence of traditional Ruq'ah, emphasizing clarity and the script's characteristic flow, while ensuring it is well-rendered on modern devices.
                  </p>
                  <p>
                    As an open-source font, often distributed via platforms like Google Fonts, Aref Ruqaa has made the distinct style of Ruq'ah accessible for a wide range of applications, from headlines and formal notices to cultural designs that require an authentic traditional feel. It is typically available in regular and bold weights, enhancing its versatility.
                  </p>
                </CardContent>
              </Card>
              
              <h2 id="alphabet-showcase" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Aref Ruqaa Alphabet Showcase</h2>
              <Card className="border-amber-200 mb-12">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800">Individual Letterforms</CardTitle>
                  <CardDescription className="text-amber-600">Observe the characteristic short strokes and flowing connections of Aref Ruqaa.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div 
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Aref Ruqaa', serif", fontSize: "40px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_RUQAA}
                  </div>
                </CardContent>
              </Card>
              
              <h2 id="text-examples" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Aref Ruqaa in Action: Text Examples</h2>
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
                          style={{ fontFamily: "'Aref Ruqaa', serif", fontSize: "32px", direction: "rtl", lineHeight: 1.7 }}
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

              <h2 id="use-cases" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Ideal Use Cases for Aref Ruqaa</h2>
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
                 <h3 className="text-2xl font-semibold text-amber-800 text-center sm:text-left">Experience Aref Ruqaa's Elegance</h3>
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/?font=Aref%20Ruqaa">Use Aref Ruqaa in Calligraphy Generator</Link>
                </Button>
              </div>
              
              <RelatedContent 
                title="Explore Similar Traditional & Display Fonts"
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