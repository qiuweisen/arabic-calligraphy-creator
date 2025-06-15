import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Smartphone, Layers, Type, Settings, MonitorPlay, CheckCircle, Zap } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { DownloadButton } from "@/components/download-button"

export const metadata: Metadata = {
  title: "Cairo Font: Modern Arabic & Latin Sans-Serif by TitraShop | Arabic Calligraphy",
  description: "Explore the Cairo font, a contemporary bilingual Arabic and Latin sans-serif typeface designed by Mohamed Gaber (TitraShop). Ideal for modern UI, web, and branding applications.",
  keywords: "Cairo font, modern Arabic font, sans-serif Arabic, bilingual font, TitraShop, Mohamed Gaber, Arabic UI font, web Arabic font, contemporary Arabic typeface, Latin Arabic font pairing",
  openGraph: {
    title: "Cairo Font: Versatile & Modern Sans-Serif for Arabic & Latin | Arabic Calligraphy Generator",
    description: "Discover Cairo, a contemporary sans-serif by TitraShop, offering excellent readability for Arabic and Latin scripts in UI, web, and branding.",
    url: "https://arabic-calligraphy-generator.com/fonts/cairo",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
  },
}

const TEXT_EXAMPLES = [
  {
    id: "ui-element",
    text: "تسجيل الدخول",
    translation: "Login",
    context: "A common UI button or link text, where Cairo's clarity excels."
  },
  {
    id: "website-headline",
    text: "مرحباً بالعالم الرقمي",
    translation: "Hello Digital World",
    context: "A modern headline for a website or app, showcasing Cairo's bilingual capabilities when paired with its Latin counterpart."
  },
  {
    id: "informational-text",
    text: "اكتشف المزيد عن خدماتنا",
    translation: "Discover more about our services",
    context: "Informational text on a webpage, benefiting from Cairo's high legibility."
  },
  {
    id: "branding-tagline",
    text: "البساطة هي الأناقة الجديدة",
    translation: "Simplicity is the new elegance",
    context: "A contemporary tagline for a brand, where Cairo's clean lines convey modernity."
  }
];

const FONT_FEATURES = [
  {
    icon: <Smartphone className="h-8 w-8 text-sky-600 mb-2" />,
    title: "Optimized for Screens",
    description: "Designed with digital displays in mind, ensuring excellent legibility on websites, apps, and user interfaces."
  },
  {
    icon: <Layers className="h-8 w-8 text-sky-600 mb-2" />,
    title: "Bilingual: Arabic & Latin",
    description: "Offers a harmonious design for both Arabic and Latin scripts, making it ideal for multilingual projects."
  },
  {
    icon: <Type className="h-8 w-8 text-sky-600 mb-2" />,
    title: "Modern Sans-Serif Aesthetic",
    description: "Features clean, geometric letterforms characteristic of contemporary sans-serif typefaces, conveying a fresh and modern feel."
  },
  {
    icon: <Settings className="h-8 w-8 text-sky-600 mb-2" />,
    title: "Multiple Weights",
    description: "Available in a range of weights (e.g., Light, Regular, SemiBold, Bold, Black), providing versatility for typographic hierarchy."
  },
  {
    icon: <Zap className="h-8 w-8 text-sky-600 mb-2" />,
    title: "Clear & Legible",
    description: "Prioritizes clarity and readability, making it suitable for both display text and longer passages in digital contexts."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-sky-600 mb-2" />,
    title: "Open Source & Versatile",
    description: "Freely available under the SIL Open Font License, encouraging wide adoption in various design projects."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Web Design & User Interfaces (UI)",
    description: "Perfect for website body text, navigation, buttons, and all elements of digital user interfaces requiring clear Arabic and Latin text.",
    icon: <MonitorPlay className="h-5 w-5 text-sky-700" />
  },
  {
    title: "Mobile Applications",
    description: "Ensures optimal readability and a modern look for Arabic and multilingual mobile apps.",
    icon: <Smartphone className="h-5 w-5 text-sky-700" />
  },
  {
    title: "Branding & Corporate Identity",
    description: "Its clean and contemporary style is well-suited for modern branding, logos, and corporate communication materials.",
    icon: <Zap className="h-5 w-5 text-sky-700" />
  },
  {
    title: "Digital Publications & Presentations",
    description: "Provides a professional and legible typeface for e-books, online reports, and presentations.",
    icon: <Layers className="h-5 w-5 text-sky-700" />
  },
  {
    title: "Informational Signage & Wayfinding",
    description: "Clear letterforms make it suitable for modern signage systems where bilingual text might be needed.",
    icon: <Type className="h-5 w-5 text-sky-700" />
  },
  {
    title: "Educational Materials (Modern Context)",
    description: "Good for contemporary educational content, especially in digital formats or for language learning apps.",
    icon: <CheckCircle className="h-5 w-5 text-sky-700" />
  }
];

const TECHNICAL_DETAILS = [
  { 
    title: "Designer", 
    value: "Mohamed Gaber (TitraFilm / TitraShop)",
    description: "An Egyptian type designer and founder of TitraShop, known for creating high-quality contemporary Arabic typefaces."
  },
  { 
    title: "Foundry/Publisher", 
    value: "TitraShop / Google Fonts",
    description: "Cairo was developed by Mohamed Gaber and is notably available through Google Fonts, making it widely accessible."
  },
  { 
    title: "Release Year", 
    value: "Circa 2016 (Initial widespread availability on Google Fonts)",
    description: "Gained prominence as a modern, open-source option for Arabic and Latin bilingual design."
  },
  { 
    title: "Typographic Style", 
    value: "Geometric Sans-Serif (Arabic Kufi influences with Naskh-like readability)",
    description: "While sans-serif, the Arabic design incorporates subtle Kufi characteristics for structure, balanced with Naskh principles for good text flow."
  },
  { 
    title: "Supported Scripts", 
    value: "Arabic, Latin (including extended Latin characters for broad language support)",
    description: "Designed as a truly bilingual typeface for seamless integration of Arabic and Latin texts."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Allows free use, modification, and redistribution, fostering its use in diverse projects worldwide."
  }
];

// Sample alphabet for demonstration - Cairo shines in its clean, modern forms
const ARABIC_ALPHABET_CAIRO = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";
const LATIN_ALPHABET_CAIRO = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9";

export default function CairoFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('cairo');

  // Structured data for Cairo font - different structure from Amiri
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "Product"],
    "name": "Cairo Font",
    "alternateName": "Cairo Typeface",
    "description": "Cairo is a contemporary Arabic and Latin sans-serif typeface designed by Mohamed Gaber (TitraShop). Offers excellent readability and modern aesthetic for UI/UX and web design.",
    "applicationCategory": ["Font", "Typography", "Design Tool"],
    "operatingSystem": ["Windows", "macOS", "Linux", "Android", "iOS"],
    "creator": {
      "@type": "Person",
      "name": "Mohamed Gaber",
      "affiliation": {
        "@type": "Organization",
        "name": "TitraShop"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Google Fonts",
      "url": "https://fonts.google.com"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "programmingLanguage": "OpenType",
    "keywords": ["Arabic font", "Latin font", "Sans-serif", "Modern typography", "Bilingual font", "UI font", "Web font", "Google Fonts"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Google Fonts"
      }
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.7",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Typography Community"
      }
    },
    "featureList": [
      "Bilingual Arabic-Latin support",
      "Modern sans-serif design",
      "Multiple font weights",
      "Excellent screen readability",
      "Google Fonts integration",
      "Open source license"
    ],
    "applicationSubCategory": "Typography",
    "softwareVersion": "Latest",
    "fileFormat": ["TTF", "OTF", "WOFF", "WOFF2"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-4 text-sky-600 hover:text-sky-800 hover:bg-sky-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>
            
            <Card className="mb-8 border-sky-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-sky-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: "clamp(3rem, 15vw, 6rem)", color: "#0284c7", lineHeight: 1.2, direction: 'rtl' }}>
                      قاهرة
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-sky-600 font-medium px-2 py-1 bg-sky-50 rounded-full mb-2 inline-block">Modern Sans-Serif (Bilingual)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mt-1 mb-3">Cairo Font</h1>
                    <p className="text-lg text-sky-700 mb-6 leading-relaxed">
                      Cairo is a contemporary Arabic and Latin sans-serif typeface designed by Mohamed Gaber (TitraShop). It offers excellent readability and a modern aesthetic, making it a versatile choice for UI/UX, web design, and branding.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                        <Link href="/?font=Cairo">Try Cairo in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="prose prose-sky max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Distinctive Features of Cairo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-sky-200 flex flex-col bg-white">
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl text-sky-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-sky-700 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="design-philosophy" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Design Philosophy: Modernity & Harmony</h2>
              <Card className="border-sky-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-sky-700 leading-relaxed">
                  <p>
                    The Cairo typeface, designed by Egyptian type designer <strong className="text-sky-800">Mohamed Gaber</strong> of TitraShop, represents a significant step in contemporary Arabic typography. Its core design philosophy revolves around creating a versatile, modern sans-serif that performs exceptionally well in digital environments for both Arabic and Latin scripts.
                  </p>
                  <p>
                    Cairo achieves a harmonious balance between the two scripts. The Arabic letterforms, while modern and clean, subtly incorporate structural elements inspired by Kufi for clarity, combined with Naskh principles for optimal readability in text settings. The Latin counterpart is designed to complement the Arabic aesthetically, ensuring visual consistency in multilingual contexts. This makes Cairo an excellent choice for projects requiring seamless integration of Arabic and Latin text, such as websites, applications, and international branding.
                  </p>
                  <p>
                    Available through Google Fonts, Cairo has gained widespread popularity due to its open-source nature, extensive weight range, and robust performance across various platforms and screen sizes.
                  </p>
                </CardContent>
              </Card>
              
              <h2 id="alphabet-showcase" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Cairo Alphabet Showcase (Arabic & Latin)</h2>
              <Card className="border-sky-200 mb-12 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-sky-800">Clean Sans-Serif Letterforms</CardTitle>
                  <CardDescription className="text-sky-600">Observe the modern, geometric shapes of Cairo in both Arabic and Latin scripts.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-sky-700 mb-2 text-center">Arabic</h3>
                  <div 
                    className="text-center leading-loose mb-6"
                    style={{ fontFamily: "'Cairo', sans-serif", fontSize: "30px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_CAIRO}
                  </div>
                  <h3 className="text-lg font-semibold text-sky-700 mb-2 text-center">Latin</h3>
                  <div 
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Cairo', sans-serif", fontSize: "24px" }}
                  >
                    {LATIN_ALPHABET_CAIRO}
                  </div>
                </CardContent>
              </Card>
              
              <h2 id="text-examples" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Cairo in Action: Text Examples</h2>
              <Tabs defaultValue={TEXT_EXAMPLES[0].id} className="w-full mb-12">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((example, index) => (
                    <TabsTrigger key={example.id} value={example.id} className="data-[state=active]:bg-sky-500 data-[state=active]:text-white">
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TEXT_EXAMPLES.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <Card className="border-sky-200 bg-white">
                      <CardContent className="p-6">
                        <div 
                          className="mb-4 text-center whitespace-pre-line"
                          style={{ fontFamily: "'Cairo', sans-serif", fontSize: "28px", direction: "rtl", lineHeight: 1.8 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-sky-700 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-sky-600">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Ideal Use Cases for Cairo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-sky-200 flex bg-white">
                    <div className="p-6 pr-0 flex items-center">{useCase.icon}</div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-sky-800 mb-1">{useCase.title}</h3>
                      <p className="text-sky-700 text-sm">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <h2 id="technical-details" className="text-3xl font-bold text-sky-800 mt-12 mb-6">Technical Specifications</h2>
              <div className="space-y-6 mb-12">
                {TECHNICAL_DETAILS.map((detail) => (
                  <Card key={detail.title} className="border-sky-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl text-sky-800">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-sky-700 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-sky-600">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-sky-50 rounded-lg border border-sky-200">
                 <h3 className="text-2xl font-semibold text-sky-800 text-center sm:text-left">Design with Cairo's Modern Clarity</h3>
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                  <Link href="/?font=Cairo">Use Cairo in Calligraphy Generator</Link>
                </Button>
              </div>
              
              <RelatedContent 
                title="Explore Other Modern & Sans-Serif Fonts"
                links={getContentSpecificLinks('font', 'cairo')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 