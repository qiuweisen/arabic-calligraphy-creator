import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Feather, Layers, PenTool, Sparkles, Type, Palette, Heart, Smile, Zap, CheckCircle, Blend } from "lucide-react"
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
  title: "Lemonada Font: Playful Arabic Typography",
  description: "Discover Lemonada, a playful Arabic font with rounded letterforms, perfect for friendly designs, children's content, and casual Arabic typography.",
  keywords: "lemonada font, Arabic typography, Arabic fonts, Islamic calligraphy, Arabic script, digital typography, web fonts",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/lemonada",
  },
  openGraph: {
    title: "Lemonada Font: Playful Arabic Typography",
    description: "Discover Lemonada, a playful Arabic font with rounded letterforms, perfect for friendly designs, children's content, and casual Arabic typography.",
    url: "https://arabic-calligraphy-generator.com/fonts/lemonada",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
  },
}

const TEXT_EXAMPLES = [
  {
    id: "friendly-greeting",
    text: "أهلاً وسهلاً", // Ahlan wa Sahlan
    translation: "Welcome",
    context: "A warm and inviting greeting, perfectly suited to Lemonada's friendly style."
  },
  {
    id: "cafe-menu-item",
    text: "عصير ليمون بالنعناع", // Aseer laymun bin-na'na'
    translation: "Lemonade with Mint",
    context: "A menu item for a cafe or a food blog, where Lemonada adds a casual, appealing touch."
  },
  {
    id: "childrens-book-title",
    text: "مغامرات قطة صغيرة", // Mughamarat qitta sagheera
    translation: "Adventures of a Little Cat",
    context: "A title for a children's book, where Lemonada's rounded forms are playful and appropriate."
  },
  {
    id: "app-button-text",
    text: "إبدأ الآن", // Ibda' al-aan
    translation: "Start Now",
    context: "Button text in a mobile app or website, conveying approachability."
  }
];

const FONT_FEATURES = [
  {
    icon: <Smile className="h-8 w-8 text-lime-600 mb-2" />,
    title: "Friendly & Approachable",
    description: "Characterized by its soft, rounded letterforms that create a warm, inviting, and approachable aesthetic."
  },
  {
    icon: <Blend className="h-8 w-8 text-lime-600 mb-2" />,
    title: "Modern & Versatile",
    description: "A contemporary design that adapts well to various applications, from digital interfaces to print materials."
  },
  {
    icon: <Type className="h-8 w-8 text-lime-600 mb-2" />,
    title: "Excellent Readability",
    description: "Despite its stylistic rounding, Lemonada maintains good clarity and readability, especially in medium sizes."
  },
  {
    icon: <Layers className="h-8 w-8 text-lime-600 mb-2" />,
    title: "Multiple Weights",
    description: "Available in a range of weights (e.g., Light, Regular, Medium, SemiBold, Bold), offering typographic flexibility."
  },
  {
    icon: <Palette className="h-8 w-8 text-lime-600 mb-2" />,
    title: "Bilingual Support (Arabic & Latin)",
    description: "Often designed with a harmonious Latin counterpart, making it suitable for multilingual designs."
  },
  {
    icon: <Zap className="h-8 w-8 text-lime-600 mb-2" />,
    title: "Distinctive Personality",
    description: "Its unique rounded style gives text a distinctive character and a touch of playful elegance."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Branding for Casual & Lifestyle Products",
    description: "Perfect for brands aiming for a friendly, modern, and approachable image (e.g., food, children's products, cafes).",
    icon: <Smile className="h-5 w-5 text-lime-700" />
  },
  {
    title: "User Interfaces (UI) for Apps & Websites",
    description: "Adds a soft and welcoming touch to buttons, menus, and text in digital interfaces, enhancing user experience.",
    icon: <Zap className="h-5 w-5 text-lime-700" />
  },
  {
    title: "Children's Books & Educational Materials",
    description: "Its playful and legible nature makes it ideal for content aimed at younger audiences.",
    icon: <Type className="h-5 w-5 text-lime-700" />
  },
  {
    title: "Social Media Graphics & Marketing",
    description: "Creates engaging and visually appealing posts and advertisements with a friendly vibe.",
    icon: <Palette className="h-5 w-5 text-lime-700" />
  },
  {
    title: "Packaging Design",
    description: "Can make product packaging look more inviting and distinctive on shelves.",
    icon: <Layers className="h-5 w-5 text-lime-700" />
  },
  {
    title: "Informal Communications & Invitations",
    description: "Adds a personal and cheerful touch to invitations, greeting cards, and informal notes.",
    icon: <CheckCircle className="h-5 w-5 text-lime-700" />
  }
];

const TECHNICAL_DETAILS = [
  {
    title: "Designer",
    value: "Eduardo Tunni (often associated with the Google Fonts version)",
    description: "Lemonada was designed by Eduardo Tunni, with contributions from other designers for its various scripts and weights."
  },
  {
    title: "Foundry/Publisher",
    value: "Multiple, notably Google Fonts",
    description: "Widely available as an open-source font, with Google Fonts being a primary distributor."
  },
  {
    title: "Typographic Style",
    value: "Rounded Sans-Serif",
    description: "A modern sans-serif characterized by its distinctly rounded terminals and stroke endings, giving it a soft appearance."
  },
  {
    title: "Supported Scripts",
    value: "Arabic, Latin (often with extended character sets)",
    description: "Designed to support bilingual text environments effectively."
  },
  {
    title: "Key Features",
    value: "Rounded terminals, multiple weights, good legibility, friendly character.",
    description: "These features combine to create a versatile and appealing typeface for various uses."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Allows free use, modification, and distribution, promoting its widespread adoption."
  }
];

const ARABIC_ALPHABET_LEMONADA = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";
const LATIN_ALPHABET_LEMONADA = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9";

export default function LemonadaFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('lemonada');

  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Lemonada Font",
    "description": "A modern and friendly Arabic typeface by Eduardo Tunni featuring distinctive rounded letterforms. Perfect for branding, UI, and casual designs with bilingual Arabic-Latin support.",
    "applicationCategory": "Font",
    "operatingSystem": "Cross-platform",
    "creator": {
      "@type": "Person",
      "name": "Eduardo Tunni",
      "description": "Argentine type designer known for friendly and approachable typeface designs"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Google Fonts",
      "url": "https://fonts.google.com"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "programmingLanguage": "OpenType",
    "keywords": ["Arabic font", "Rounded sans-serif", "Friendly typography", "Bilingual font", "UI design", "Casual design"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "95",
      "bestRating": "5"
    },
    "featureList": [
      "Rounded letterforms",
      "Friendly character", 
      "Bilingual Arabic-Latin support",
      "Multiple weights",
      "UI optimization",
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
      <main className="min-h-screen bg-gradient-to-b from-lime-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Lemonada Font", href: "/fonts/lemonada" }
              ]}
              className="mb-6"
            />

            <Button asChild variant="ghost" className="mb-4 text-lime-600 hover:text-lime-800 hover:bg-lime-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            <Card className="mb-8 border-lime-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-lime-100 to-lime-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Lemonada', cursive", fontSize: "clamp(3rem, 15vw, 5.5rem)", color: "#4d7c0f", lineHeight: 1.2, direction: 'rtl' }}>
                      ليمونادة
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-lime-600 font-medium px-2 py-1 bg-lime-50 rounded-full mb-2 inline-block">Rounded Sans-Serif (Bilingual)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-lime-800 mt-1 mb-3">Lemonada Font</h1>
                    <p className="text-lg text-lime-700 mb-6 leading-relaxed">
                      Lemonada is a modern and friendly Arabic typeface featuring distinctive rounded letterforms. Designed by Eduardo Tunni, it brings warmth and personality to branding, UI, and casual designs, supporting both Arabic and Latin scripts.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-lime-600 hover:bg-lime-700 text-white">
                        <Link href="/?font=Lemonada">Try Lemonada in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lime max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-lime-800 mt-12 mb-6">Distinctive Features of Lemonada</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-lime-200 flex flex-col bg-white">
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl text-lime-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-lime-700 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="design-philosophy" className="text-3xl font-bold text-lime-800 mt-12 mb-6">Design Philosophy: Friendly Modernity</h2>
              <Card className="border-lime-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-lime-700 leading-relaxed">
                  <p>
                    Lemonada, designed by <strong className="text-lime-800">Eduardo Tunni</strong>, is a typeface that beautifully balances modernity with a friendly, approachable character. Its most defining feature is the consistent use of rounded terminals and soft curves throughout both its Arabic and Latin letterforms. This deliberate design choice imbues the font with a sense of warmth and playfulness, making it stand out from more traditional or strictly geometric sans-serifs.
                  </p>
                  <p>
                    The font was conceived to be highly versatile, suitable for a wide range of applications where a touch of personality is desired without sacrificing clarity. The Arabic script in Lemonada is designed to harmonize with the Latin, ensuring visual coherence in bilingual settings. This makes it an excellent choice for international brands, user interfaces that cater to diverse audiences, and any project that benefits from a typeface that feels contemporary and inviting.
                  </p>
                  <p>
                    Its availability in multiple weights further enhances its utility, allowing designers to create nuanced typographic hierarchies while maintaining the font's signature friendly aesthetic.
                  </p>
                </CardContent>
              </Card>

              <h2 id="alphabet-showcase" className="text-3xl font-bold text-lime-800 mt-12 mb-6">Lemonada Alphabet Showcase (Arabic & Latin)</h2>
              <Card className="border-lime-200 mb-12 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-lime-800">Soft & Rounded Letterforms</CardTitle>
                  <CardDescription className="text-lime-600">Observe the friendly, rounded style of Lemonada in both Arabic and Latin scripts.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-lime-700 mb-2 text-center">Arabic</h3>
                  <div
                    className="text-center leading-loose mb-6"
                    style={{ fontFamily: "'Lemonada', cursive", fontSize: "30px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_LEMONADA}
                  </div>
                  <h3 className="text-lg font-semibold text-lime-700 mb-2 text-center">Latin</h3>
                  <div
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Lemonada', cursive", fontSize: "24px" }}
                  >
                    {LATIN_ALPHABET_LEMONADA}
                  </div>
                </CardContent>
              </Card>

              <h2 id="text-examples" className="text-3xl font-bold text-lime-800 mt-12 mb-6">Lemonada in Action: Text Examples</h2>
              <Tabs defaultValue={TEXT_EXAMPLES[0].id} className="w-full mb-12">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((example, index) => (
                    <TabsTrigger key={example.id} value={example.id} className="data-[state=active]:bg-lime-600 data-[state=active]:text-white">
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TEXT_EXAMPLES.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <Card className="border-lime-200 bg-white">
                      <CardContent className="p-6">
                        <div
                          className="mb-4 text-center whitespace-pre-line"
                          style={{ fontFamily: "'Lemonada', cursive", fontSize: "28px", direction: "rtl", lineHeight: 1.8 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-lime-700 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-lime-600">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-lime-800 mt-12 mb-6">Ideal Use Cases for Lemonada</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-lime-200 flex bg-white">
                    <div className="p-6 pr-0 flex items-center">{useCase.icon}</div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-lime-800 mb-1">{useCase.title}</h3>
                      <p className="text-lime-700 text-sm">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="technical-details" className="text-3xl font-bold text-lime-800 mt-12 mb-6">Technical Specifications</h2>
              <div className="space-y-6 mb-12">
                {TECHNICAL_DETAILS.map((detail) => (
                  <Card key={detail.title} className="border-lime-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl text-lime-800">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-lime-700 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-lime-600">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-lime-50 rounded-lg border border-lime-200">
                 <h3 className="text-2xl font-semibold text-lime-800 text-center sm:text-left">Add a Friendly Touch with Lemonada</h3>
                <Button asChild size="lg" className="bg-lime-600 hover:bg-lime-700 text-white">
                  <Link href="/?font=Lemonada">Use Lemonada in Calligraphy Generator</Link>
                </Button>
              </div>

              <RelatedContent
                title="Explore Other Friendly & Rounded Fonts"
                links={getContentSpecificLinks('font', 'lemonada')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 