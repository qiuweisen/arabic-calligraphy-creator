import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Type, Layers, CheckCircle, MonitorPlay, Globe, Zap, Box } from "lucide-react"
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
  title: "Tajawal Font: Geometric Arabic & Latin Sans-Serif | Arabic Calligraphy",
  description: "Discover Tajawal, a modern geometric Arabic and Latin sans-serif typeface. Known for its clarity and contemporary feel, perfect for UI, web, and branding.",
  keywords: "Tajawal font, geometric Arabic font, modern Arabic font, bilingual font, Arabic UI font, sans-serif Arabic, Arabic web font, contemporary Arabic typeface, Latin Arabic font pairing",
  openGraph: {
    title: "Tajawal Font: Clean Geometric Lines for Arabic & Latin | Arabic Calligraphy Generator",
    description: "Explore Tajawal, a versatile and legible geometric sans-serif for Arabic and Latin scripts, ideal for modern digital and print applications.",
    url: "https://arabic-calligraphy-generator.com/fonts/tajawal",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",  },
}

const TEXT_EXAMPLES = [
  {
    id: "website-navigation",
    text: "الرئيسية | من نحن | اتصل بنا", // Ar-ra'eesiyya | Man Nahnu | Ittasil Bina
    translation: "Home | About Us | Contact Us",
    context: "Typical website navigation links, where Tajawal's clarity and bilingual support shine."
  },
  {
    id: "app-interface-label",
    text: "بحث متقدم", // Bahth Mutaqaddim
    translation: "Advanced Search",
    context: "A label in a software or app interface, benefiting from Tajawal's modern geometric style."
  },
  {
    id: "corporate-brochure-headline",
    text: "حلول مبتكرة للمستقبل", // Hulool Mubtakira lil-Mustaqbal
    translation: "Innovative Solutions for the Future",
    context: "A headline in a corporate brochure or presentation, conveying modernity and professionalism."
  },
  {
    id: "product-description-snippet",
    text: "متوفر الآن بخمسة ألوان", // Mutawaffir al-aan bi-khamsati alwaan
    translation: "Now available in five colors",
    context: "A snippet from a product description, where Tajawal ensures clear communication."
  }
];

const FONT_FEATURES = [
  {
    icon: <Box className="h-8 w-8 text-indigo-600 mb-2" />,
    title: "Geometric Construction",
    description: "Based on clear geometric shapes, giving it a structured, modern, and clean appearance."
  },
  {
    icon: <Globe className="h-8 w-8 text-indigo-600 mb-2" />,
    title: "Bilingual: Arabic & Latin",
    description: "Offers harmonious designs for both Arabic and Latin scripts, ensuring consistency in multilingual projects."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-indigo-600 mb-2" />,
    title: "Excellent Legibility",
    description: "Designed for high readability across various sizes and media, especially on digital screens."
  },
  {
    icon: <Layers className="h-8 w-8 text-indigo-600 mb-2" />,
    title: "Extensive Weight Range",
    description: "Available in multiple weights (from ExtraLight to Black), providing broad typographic flexibility."
  },
  {
    icon: <MonitorPlay className="h-8 w-8 text-indigo-600 mb-2" />,
    title: "Optimized for Screens",
    description: "Performs exceptionally well in UI/UX design, web content, and digital applications."
  },
  {
    icon: <Zap className="h-8 w-8 text-indigo-600 mb-2" />,
    title: "Modern & Professional",
    description: "Its contemporary and clean style lends a professional and forward-looking tone to designs."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "User Interfaces (UI/UX)",
    description: "Perfect for all elements of digital interfaces, from navigation to body text, in both Arabic and Latin.",
    icon: <MonitorPlay className="h-5 w-5 text-indigo-700" />
  },
  {
    title: "Web Design & Applications",
    description: "Ensures a modern, clean, and legible experience for websites and web-based applications.",
    icon: <Globe className="h-5 w-5 text-indigo-700" />
  },
  {
    title: "Branding & Corporate Identity",
    description: "Its geometric and professional style is well-suited for contemporary branding and corporate communications.",
    icon: <Zap className="h-5 w-5 text-indigo-700" />
  },
  {
    title: "Digital & Print Publications",
    description: "Offers a clear and modern typographic voice for reports, magazines, and online articles.",
    icon: <Type className="h-5 w-5 text-indigo-700" />
  },
  {
    title: "Mobile App Development",
    description: "Provides excellent readability and a modern aesthetic for multilingual mobile applications.",
    icon: <Layers className="h-5 w-5 text-indigo-700" />
  },
  {
    title: "Wayfinding & Signage Systems",
    description: "Its clarity and geometric forms make it suitable for modern, bilingual signage.",
    icon: <CheckCircle className="h-5 w-5 text-indigo-700" />
  }
];

const TECHNICAL_DETAILS = [
  {
    title: "Designer(s)",
    value: "Boutros Fonts (Initial design often attributed to Ibrahim Hamdi)",
    description: "Tajawal is a collaborative project, with significant contributions from various designers, often associated with Boutros Fonts and available through Google Fonts."
  },
  {
    title: "Foundry/Publisher",
    value: "Google Fonts / Boutros Fonts",
    description: "Widely accessible as an open-source font, prominently featured on Google Fonts."
  },
  {
    title: "Typographic Style",
    value: "Geometric Sans-Serif",
    description: "Characterized by its construction from simple geometric shapes, lending it a modern, clean, and structured feel."
  },
  {
    title: "Supported Scripts",
    value: "Arabic, Latin (including extended Latin characters for broad language support)",
    description: "A true bilingual typeface designed for seamless integration of both script systems."
  },
  {
    title: "Key Features",
    value: "Geometric construction, extensive weight range, bilingual support, excellent screen legibility, modern aesthetic.",
    description: "These features make Tajawal a versatile and popular choice for contemporary design."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Allows free use, modification, and redistribution, which has contributed to its widespread use."
  }
];

const ARABIC_ALPHABET_TAJAWAL = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";
const LATIN_ALPHABET_TAJAWAL = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9";

export default function TajawalFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('tajawal');

  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Tajawal Font",
    "description": "A modern geometric sans-serif typeface supporting both Arabic and Latin scripts. Features extensive weight range and excellent screen legibility for UI/UX and web design.",
    "applicationCategory": "Font",
    "operatingSystem": "Cross-platform",
    "creator": {
      "@type": "Organization",
      "name": "Boutros International",
      "description": "Leading Arabic type foundry specializing in bilingual typography"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Google Fonts",
      "url": "https://fonts.google.com"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "programmingLanguage": "OpenType",
    "keywords": ["Arabic font", "Geometric sans-serif", "Bilingual typography", "UI font", "Web design", "Modern Arabic"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "180",
      "bestRating": "5"
    },
    "featureList": [
      "Geometric sans-serif design",
      "Bilingual Arabic-Latin support", 
      "Extensive weight range",
      "UI/UX optimization",
      "Screen legibility",
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
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 面包屑导航 */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Tajawal", href: "/fonts/tajawal" }
              ]}
              className="mb-6"
            />
            
            <Button asChild variant="ghost" className="mb-4 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            <Card className="mb-8 border-indigo-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Tajawal', sans-serif", fontSize: "clamp(3.5rem, 18vw, 6.5rem)", color: "#4338ca", lineHeight: 1.1, direction: 'rtl' }}>
                      تجول
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-indigo-600 font-medium px-2 py-1 bg-indigo-50 rounded-full mb-2 inline-block">Geometric Sans-Serif (Bilingual)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mt-1 mb-3">Tajawal Font</h1>
                    <p className="text-lg text-indigo-700 mb-6 leading-relaxed">
                      Tajawal is a modern geometric sans-serif typeface that supports both Arabic and Latin scripts. Known for its clarity, contemporary feel, and extensive weight range, it is an excellent choice for UI/UX, web design, and branding projects.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        <Link href="/?font=Tajawal">Try Tajawal in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-indigo max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-indigo-800 mt-12 mb-6">Distinctive Features of Tajawal</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-indigo-200 flex flex-col bg-white">
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl text-indigo-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-indigo-700 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="design-philosophy" className="text-3xl font-bold text-indigo-800 mt-12 mb-6">Design Philosophy: Geometric Clarity & Bilingual Harmony</h2>
              <Card className="border-indigo-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-indigo-700 leading-relaxed">
                  <p>
                    Tajawal (تجول, meaning "to roam" or "to wander") is a bilingual typeface that masterfully blends <strong className="text-indigo-800">geometric precision with a modern, accessible feel</strong>. It was designed to serve the needs of contemporary digital and print media, offering robust support for both Arabic and Latin scripts.
                  </p>
                  <p>
                    The design of Tajawal is rooted in geometric principles, resulting in clean, well-defined letterforms. This clarity makes it highly legible across various screen sizes and resolutions, a key consideration for UI/UX and web design. The Arabic and Latin characters are crafted to work harmoniously together, ensuring visual consistency in multilingual contexts. This makes Tajawal particularly valuable for international branding and global digital products.
                  </p>
                  <p>
                    With an extensive range of weights, from ExtraLight to Black, Tajawal provides designers with significant typographic flexibility. This allows for the creation of sophisticated visual hierarchies, making it a versatile tool for a wide array of design challenges.
                  </p>
                </CardContent>
              </Card>

              <h2 id="alphabet-showcase" className="text-3xl font-bold text-indigo-800 mt-12 mb-6">Tajawal Alphabet Showcase (Arabic & Latin)</h2>
              <Card className="border-indigo-200 mb-12 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-indigo-800">Clean Geometric Letterforms</CardTitle>
                  <CardDescription className="text-indigo-600">Observe the modern, geometric style of Tajawal in both Arabic and Latin scripts.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-indigo-700 mb-2 text-center">Arabic</h3>
                  <div
                    className="text-center leading-relaxed mb-6"
                    style={{ fontFamily: "'Tajawal', sans-serif", fontSize: "30px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_TAJAWAL}
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-700 mb-2 text-center">Latin</h3>
                  <div
                    className="text-center leading-relaxed"
                    style={{ fontFamily: "'Tajawal', sans-serif", fontSize: "24px" }}
                  >
                    {LATIN_ALPHABET_TAJAWAL}
                  </div>
                </CardContent>
              </Card>

              <h2 id="text-examples" className="text-3xl font-bold text-indigo-800 mt-12 mb-6">Tajawal in Action: Text Examples</h2>
              <Tabs defaultValue={TEXT_EXAMPLES[0].id} className="w-full mb-12">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((example, index) => (
                    <TabsTrigger key={example.id} value={example.id} className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TEXT_EXAMPLES.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <Card className="border-indigo-200 bg-white">
                      <CardContent className="p-6">
                        <div
                          className="mb-4 text-left whitespace-pre-line md:text-center"
                          style={{ fontFamily: "'Tajawal', sans-serif", fontSize: "22px", direction: "rtl", lineHeight: 1.8 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-indigo-700 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-indigo-600">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-indigo-800 mt-12 mb-6">Ideal Use Cases for Tajawal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-indigo-200 flex bg-white">
                    <div className="p-6 pr-0 flex items-center">{useCase.icon}</div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-indigo-800 mb-1">{useCase.title}</h3>
                      <p className="text-indigo-700 text-sm">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="technical-details" className="text-3xl font-bold text-indigo-800 mt-12 mb-6">Technical Specifications</h2>
              <div className="space-y-6 mb-12">
                {TECHNICAL_DETAILS.map((detail) => (
                  <Card key={detail.title} className="border-indigo-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl text-indigo-800">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-indigo-700 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-indigo-600">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                 <h3 className="text-2xl font-semibold text-indigo-800 text-center sm:text-left">Design with Tajawal's Geometric Elegance</h3>
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Link href="/?font=Tajawal">Use Tajawal in Calligraphy Generator</Link>
                </Button>
              </div>

              <RelatedContent
                title="Explore Other Geometric & Bilingual Fonts"
                links={getContentSpecificLinks('font', 'tajawal')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 