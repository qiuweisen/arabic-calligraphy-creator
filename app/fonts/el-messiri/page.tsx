import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Feather, Sparkles, Type, Palette, Layers, BookOpen, Award } from "lucide-react"
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
  title: "El Messiri Font: Elegant Naskh-Inspired Arabic Typeface | Arabic Calligraphy",
  description: "Discover El Messiri, an elegant Arabic typeface inspired by Naskh calligraphy with modern touches. Ideal for headlines, branding, and cultural projects.",
  keywords: "El Messiri font, Naskh Arabic font, elegant Arabic font, modern Naskh, Arabic display font, Arabic headline font, Mohamed Gaber, Arabic calligraphy",
  openGraph: {
    title: "El Messiri Font: Timeless Elegance Meets Modern Naskh | Arabic Calligraphy Generator",
    description: "Explore El Messiri by Mohamed Gaber, a sophisticated Naskh-inspired font that combines classical beauty with contemporary design, perfect for impactful text.",
    url: "https://arabic-calligraphy-generator.com/fonts/el-messiri",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",  },
}

const TEXT_EXAMPLES = [
  {
    id: "book-title-elegant",
    text: "ديوان الشعر العربي", // Diwan ash-Shi'r al-'Arabi
    translation: "Anthology of Arabic Poetry",
    context: "An elegant book title where El Messiri's Naskh-inspired sophistication shines."
  },
  {
    id: "luxury-brand-tagline",
    text: "فخامة بلا حدود", // Fakhama bila hudood
    translation: "Luxury Without Limits",
    context: "A tagline for a luxury brand, conveying elegance and exclusivity with El Messiri."
  },
  {
    id: "cultural-event-poster",
    text: "أمسية ثقافية", // Umsiya Thaqafiyya
    translation: "Cultural Evening",
    context: "Headline for a cultural event poster, where its refined style is appropriate."
  },
  {
    id: "invitation-text",
    text: "نتشرف بدعوتكم لحضور حفلنا السنوي", // Natasharraf bi-da'watikum li-hudhoor haflina as-sanawi
    translation: "We are honored to invite you to attend our annual ceremony",
    context: "Formal invitation text, benefiting from El Messiri's elegant and respectful tone."
  }
];

const FONT_FEATURES = [
  {
    icon: <Feather className="h-8 w-8 text-cyan-600 mb-2" />,
    title: "Elegant Naskh Inspiration",
    description: "Rooted in the grace of traditional Naskh calligraphy, refined for a sophisticated modern appearance."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-cyan-600 mb-2" />,
    title: "Modern & Open Forms",
    description: "Features more open counters and contemporary proportions compared to purely classical Naskh styles."
  },
  {
    icon: <Palette className="h-8 w-8 text-cyan-600 mb-2" />,
    title: "Sophisticated Aesthetic",
    description: "Offers a refined and cultured look, suitable for projects requiring a touch of class and distinction."
  },
  {
    icon: <Type className="h-8 w-8 text-cyan-600 mb-2" />,
    title: "Good for Headlines & Display",
    description: "Excels in headlines, titles, and short to medium text blocks where its elegance can be appreciated."
  },
  {
    icon: <Layers className="h-8 w-8 text-cyan-600 mb-2" />,
    title: "Multiple Weights",
    description: "Available in several weights (e.g., Regular, Medium, SemiBold, Bold) for typographic versatility."
  },
  {
    icon: <Award className="h-8 w-8 text-cyan-600 mb-2" />,
    title: "Designed by Mohamed Gaber",
    description: "A notable work by Egyptian type designer Mohamed Gaber, known for his contributions to modern Arabic typography."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Branding for Premium & Cultural Entities",
    description: "Lends an air of sophistication to logos, brand identities, and materials for cultural institutions or luxury goods.",
    icon: <Award className="h-5 w-5 text-cyan-700" />
  },
  {
    title: "Book Covers & Editorial Design",
    description: "Creates elegant and inviting titles and headings for books, magazines, and high-quality print publications.",
    icon: <BookOpen className="h-5 w-5 text-cyan-700" />
  },
  {
    title: "Formal Invitations & Stationery",
    description: "Adds a touch of class and formality to wedding invitations, official correspondence, and certificates.",
    icon: <Feather className="h-5 w-5 text-cyan-700" />
  },
  {
    title: "Website Headlines & Feature Text",
    description: "Elevates the visual appeal of websites with sophisticated headlines and introductory paragraphs.",
    icon: <Type className="h-5 w-5 text-cyan-700" />
  },
  {
    title: "Packaging for High-End Products",
    description: "Enhances the perceived value of luxury products through refined typographic packaging design.",
    icon: <Palette className="h-5 w-5 text-cyan-700" />
  },
  {
    title: "Cultural & Art Event Promotion",
    description: "Its elegant Naskh roots make it perfect for promoting art exhibitions, theatre, and cultural festivals.",
    icon: <Sparkles className="h-5 w-5 text-cyan-700" />
  }
];

const TECHNICAL_DETAILS = [
  {
    title: "Designer",
    value: "Mohamed Gaber",
    description: "El Messiri was designed by Mohamed Gaber, an Egyptian type designer who has made significant contributions to modern Arabic type design."
  },
  {
    title: "Foundry/Publisher",
    value: "Multiple, including Google Fonts",
    description: "Available through various channels, with Google Fonts being a prominent platform for its open-source distribution."
  },
  {
    title: "Typographic Style",
    value: "Modern Naskh / Display Naskh",
    description: "A contemporary take on the Naskh style, characterized by its elegance, open forms, and suitability for both display and some text use."
  },
  {
    title: "Key Characteristics",
    value: "Elegance, clarity, Naskh heritage with modern sensibility, good for headlines and cultural contexts.",
    description: "These features define El Messiri as a sophisticated choice for projects needing a refined Arabic typeface."
  },
  {
    title: "Supported Scripts",
    value: "Arabic (often includes extended character sets)",
    description: "Primarily designed for the Arabic script, focusing on its aesthetic and functional qualities."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Freely available for use, modification, and redistribution, facilitating its use in diverse projects."
  }
];

const ARABIC_ALPHABET_ELMESSIRI = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";

export default function ElMessiriFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('el-messiri');

  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "El Messiri Font",
    "description": "An elegant Arabic Naskh typeface by Mohamed Gaber, featuring refined letterforms and modern sensibility. Perfect for sophisticated headlines, branding, and cultural projects.",
    "applicationCategory": "Font",
    "operatingSystem": "Cross-platform",
    "creator": {
      "@type": "Person",
      "name": "Mohamed Gaber",
      "description": "Egyptian type designer known for contributions to modern Arabic typography"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Google Fonts",
      "url": "https://fonts.google.com"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "programmingLanguage": "OpenType",
    "keywords": ["Arabic font", "Naskh", "Elegant typography", "Modern Arabic", "Display font", "Cultural design"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "ratingCount": "110",
      "bestRating": "5"
    },
    "featureList": [
      "Elegant Naskh design",
      "Modern refinement", 
      "Cultural sophistication",
      "Display optimization",
      "Branding applications",
      "Cross-platform compatibility"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "El Messiri Font", href: "/fonts/el-messiri" }
              ]}
              className="mb-6"
            />

            <Button asChild variant="ghost" className="mb-4 text-cyan-600 hover:text-cyan-800 hover:bg-cyan-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            <Card className="mb-8 border-cyan-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 to-cyan-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'El Messiri', serif", fontSize: "clamp(3.5rem, 18vw, 6rem)", color: "#0891b2", lineHeight: 1.1, direction: 'rtl' }}>
                      المسيري
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-cyan-600 font-medium px-2 py-1 bg-cyan-50 rounded-full mb-2 inline-block">Elegant Naskh (Modern)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-cyan-800 mt-1 mb-3">El Messiri Font</h1>
                    <p className="text-lg text-cyan-700 mb-6 leading-relaxed">
                      El Messiri is an elegant Arabic typeface by Mohamed Gaber, inspired by traditional Naskh calligraphy but infused with modern, open forms. It offers sophistication for headlines, branding, and cultural projects.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                        <Link href="/?font=El%20Messiri">Try El Messiri in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-cyan max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-cyan-800 mt-12 mb-6">Distinctive Features of El Messiri</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-cyan-200 flex flex-col bg-white">
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl text-cyan-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-cyan-700 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="design-philosophy" className="text-3xl font-bold text-cyan-800 mt-12 mb-6">Design Philosophy: Graceful Naskh for the Modern Era</h2>
              <Card className="border-cyan-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-cyan-700 leading-relaxed">
                  <p>
                    El Messiri (المسيري), designed by the prominent Egyptian type designer <strong className="text-cyan-800">Mohamed Gaber</strong>, is a typeface that embodies elegance and a deep respect for the Naskh calligraphic tradition, skillfully adapted for contemporary usage. It seeks to provide a sophisticated yet highly usable Arabic font that carries the grace of classical forms into modern design contexts.
                  </p>
                  <p>
                    The design is characterized by its refined letterforms, which, while rooted in Naskh, feature more open counters and slightly modernized proportions to enhance clarity and aesthetic appeal in digital and print media. El Messiri often strikes a balance between the fluidity of traditional calligraphy and the structured needs of a versatile typeface, making it suitable for headlines, subheadings, and even short blocks of text where a touch of distinction is desired.
                  </p>
                  <p>
                    It is particularly well-suited for projects that require a sense of cultural richness, sophistication, or formality, such as branding for luxury goods, cultural publications, event invitations, and elegant website typography.
                  </p>
                </CardContent>
              </Card>

              <h2 id="alphabet-showcase" className="text-3xl font-bold text-cyan-800 mt-12 mb-6">El Messiri Alphabet Showcase</h2>
              <Card className="border-cyan-200 mb-12 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-800">Elegant & Refined Naskh Forms</CardTitle>
                  <CardDescription className="text-cyan-600">Observe the graceful, Naskh-inspired letterforms of El Messiri.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div
                    className="text-center leading-loose"
                    style={{ fontFamily: "'El Messiri', serif", fontSize: "32px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_ELMESSIRI}
                  </div>
                </CardContent>
              </Card>

              <h2 id="text-examples" className="text-3xl font-bold text-cyan-800 mt-12 mb-6">El Messiri in Action: Elegant Examples</h2>
              <Tabs defaultValue={TEXT_EXAMPLES[0].id} className="w-full mb-12">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((example, index) => (
                    <TabsTrigger key={example.id} value={example.id} className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TEXT_EXAMPLES.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <Card className="border-cyan-200 bg-white">
                      <CardContent className="p-6">
                        <div
                          className="mb-4 text-center whitespace-pre-line"
                          style={{ fontFamily: "'El Messiri', serif", fontSize: "26px", direction: "rtl", lineHeight: 1.8 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-cyan-700 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-cyan-600">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-cyan-800 mt-12 mb-6">Ideal Use Cases for El Messiri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-cyan-200 flex bg-white">
                    <div className="p-6 pr-0 flex items-center">{useCase.icon}</div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-cyan-800 mb-1">{useCase.title}</h3>
                      <p className="text-cyan-700 text-sm">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="technical-details" className="text-3xl font-bold text-cyan-800 mt-12 mb-6">Technical Specifications</h2>
              <div className="space-y-6 mb-12">
                {TECHNICAL_DETAILS.map((detail) => (
                  <Card key={detail.title} className="border-cyan-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl text-cyan-800">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-cyan-700 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-cyan-600">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-cyan-50 rounded-lg border border-cyan-200">
                 <h3 className="text-2xl font-semibold text-cyan-800 text-center sm:text-left">Add Elegance with El Messiri</h3>
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <Link href="/?font=El%20Messiri">Use El Messiri in Calligraphy Generator</Link>
                </Button>
              </div>

              <RelatedContent
                title="Explore Other Elegant Naskh-Inspired Fonts"
                links={getContentSpecificLinks('font', 'el-messiri')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 