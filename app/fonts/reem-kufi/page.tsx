import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Ruler, Sparkles, PenTool, Layers, Palette, Blend, DraftingCompass } from "lucide-react"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { DownloadButton } from "@/components/download-button"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Reem Kufi Arabic Font Download - Modern Geometric Display Font for Headlines | Free Typography",
  description: "Download Reem Kufi Arabic font free - bold geometric display typeface inspired by traditional Kufi calligraphy. Perfect for logos, headlines, and modern branding. Create stunning Arabic display typography instantly.",
  keywords: "reem kufi arabic font download, kufi arabic fonts, geometric display fonts arabic, modern kufi typography, arabic headline fonts, bold arabic fonts, arabic logo fonts, contemporary kufi calligraphy",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/reem-kufi",
  },
  openGraph: {
    title: "Reem Kufi Arabic Font Download - Modern Geometric Display Font for Headlines | Free Typography",
    description: "Download Reem Kufi Arabic font free - bold geometric display typeface inspired by traditional Kufi calligraphy. Perfect for logos, headlines, and modern branding. Create stunning Arabic display typography instantly.",
    url: "https://arabic-calligraphy-generator.com/fonts/reem-kufi",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://arabic-calligraphy-generator.com/og-reem-kufi-font.png",
        width: 1200,
        height: 630,
        alt: "Reem Kufi Arabic Font - Modern Geometric Display Typography Sample"
      }
    ],
  },
}

const TEXT_EXAMPLES = [
  {
    id: "brand-name-kufi",
    text: "هوية بصرية", // Visual Identity
    translation: "Visual Identity",
    context: "A common term in branding, where Reem Kufi's strong presence is effective."
  },
  {
    id: "modern-art-title",
    text: "فن معاصر", // Contemporary Art
    translation: "Contemporary Art",
    context: "Titles for art exhibitions or modern designs benefit from its stylish geometry."
  },
  {
    id: "tech-company-logo",
    text: "تقنية", // Technology
    translation: "Technology",
    context: "Short, impactful words like 'Technology' are ideal for logos using Reem Kufi."
  },
  {
    id: "event-headline",
    text: "مهرجان الثقافة", // Culture Festival
    translation: "Culture Festival",
    context: "Headlines for events requiring a modern and distinct Arabic typographic feel."
  }
];

const FONT_FEATURES = [
  {
    icon: <DraftingCompass className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Geometric Foundation",
    description: "Built on precise geometric principles, featuring clean lines, defined angles, and a structured, contemporary Kufi aesthetic."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Modern & Bold Appeal",
    description: "A fresh interpretation of the Kufi script, offering a bold and stylish character perfect for modern visual communication."
  },
  {
    icon: <PenTool className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Sharp & Clean Edges",
    description: "Letterforms are characterized by their crisp, sharp edges, contributing to a highly impactful and defined look."
  },
  {
    icon: <Layers className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Multiple Weights",
    description: "Often available in several weights (e.g., Regular, Bold), providing versatility for typographic hierarchy in display settings."
  },
  {
    icon: <Blend className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Balanced Negative Space",
    description: "Careful attention to negative space ensures clarity and visual harmony, even with its strong geometric forms."
  },
  {
    icon: <Palette className="h-8 w-8 text-amber-600 mb-2" />,
    title: "Ideal for Display",
    description: "Excels in headlines, logos, posters, and any application needing a strong, memorable Arabic typographic statement."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Logos & Brand Identities",
    description: "Its unique geometric Kufi style creates memorable and modern Arabic logos and branding elements.",
    icon: <Sparkles className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Headlines & Titles",
    description: "Makes a strong visual impact for titles in print, web, and video, capturing attention effectively.",
    icon: <Ruler className="h-5 w-5 text-amber-700" /> // Ruler for measurement/display
  },
  {
    title: "Poster & Packaging Design",
    description: "Well-suited for bold typographic statements on posters, packaging, and other promotional materials.",
    icon: <Layers className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Digital Media & Social Graphics",
    description: "Creates eye-catching text for social media posts, web banners, and digital advertisements.",
    icon: <Blend className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Contemporary Islamic Art & Decor",
    description: "Used by artists and designers for modern interpretations of Kufi calligraphy in art and decor.",
    icon: <Palette className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Architectural & Signage Applications",
    description: "Its clarity and geometric nature make it suitable for architectural lettering and modern signage.",
    icon: <DraftingCompass className="h-5 w-5 text-amber-700" />
  }
];

const TECHNICAL_DETAILS = [
  {
    title: "Designer",
    value: "Khaled Hosny (Principal designer)",
    description: "An Egyptian typographer and font engineer known for his significant contributions to Arabic open-source fonts, including Amiri and Scheherazade (as contributor)."
  },
  {
    title: "Foundry/Publisher",
    value: "Open Source / Google Fonts",
    description: "Reem Kufi is available as an open-source font, notably distributed via Google Fonts, making it widely accessible."
  },
  {
    title: "Release Year",
    value: "Circa 2015 (Initial widespread availability)",
    description: "Gained popularity and wider distribution around this period."
  },
  {
    title: "Key OpenType Features",
    value: "May include ligatures (liga), kerning (kern). Specific features can vary by version.",
    description: "Designed with modern typographic needs in mind, though Kufi styles often have fewer complex OpenType features than Naskh."
  },
  {
    title: "Supported Scripts",
    value: "Arabic (primarily). May have basic Latin support in some versions for compatibility.",
    description: "Focused on providing a robust solution for modern Arabic Kufi typography."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Allows for free use, modification, and redistribution, encouraging its adoption in various projects."
  }
];

const ARABIC_ALPHABET = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";

export default function ReemKufiFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('reem-kufi');
  
  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Reem Kufi Font",
    "description": "A contemporary Arabic Kufi typeface by Khaled Hosny, featuring bold geometric precision and modern aesthetic. Perfect for headlines, logos, and branding applications.",
    "genre": "Typography",
    "creator": {
      "@type": "Person",
      "name": "Khaled Hosny",
      "description": "Egyptian typographer and font engineer known for contributions to Arabic open-source fonts"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Google Fonts",
      "url": "https://fonts.google.com"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "encodingFormat": "OpenType",
    "keywords": ["Arabic font", "Kufi", "Geometric typography", "Modern Arabic", "Display font", "Branding"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "ratingCount": "95",
      "bestRating": "5"
    },
    "about": [
      "Modern Kufi design",
      "Geometric precision", 
      "Bold visual impact",
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
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 面包屑导航 */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Reem Kufi", href: "/fonts/reem-kufi" }
              ]}
            />
            
            <Button asChild variant="ghost" className="mb-4 text-amber-600 hover:text-amber-900 hover:bg-amber-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            <Card className="mb-8 border-amber-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: "clamp(3rem, 15vw, 6rem)", color: "#854d0e", lineHeight: 1.1, direction: 'rtl' }}>
                      كوفي
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full mb-2 inline-block">Modern Kufi (Geometric)</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mt-1 mb-3">Reem Kufi</h1>
                    <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                      Reem Kufi is a contemporary Arabic typeface celebrated for its bold geometric precision and modern Kufi aesthetic. Designed by Khaled Hosny, it's perfect for impactful headlines, striking logos, and modern branding.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                        <Link href="/?font=Reem%20Kufi">Try Reem Kufi Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-amber max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Distinctive Features of Reem Kufi</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-amber-200 flex flex-col bg-white">
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

              <h2 id="history-and-background" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Reem Kufi: A Modern Take on Ancient Script</h2>
              <Card className="border-amber-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-amber-700 leading-relaxed">
                  <p>
                    The Kufi script, one of the oldest calligraphic forms of the Arabic alphabet, originated in Kufa, Iraq, in the late 7th century. It is characterized by its angular, rectilinear letterforms. <strong className="text-amber-800">Reem Kufi</strong>, designed by the renowned Egyptian typographer Khaled Hosny, is a vibrant contemporary interpretation of this ancient script.
                  </p>
                  <p>
                    Reem Kufi masterfully blends the historical gravitas of traditional Kufi with a clean, geometric, and modern sensibility. It strips down the letterforms to their essential geometric shapes, emphasizing clarity, balance, and a strong visual presence. This makes it exceptionally well-suited for display purposes in an era that values minimalism and impactful design.
                  </p>
                  <p>
                    Available as an open-source font, often via Google Fonts, Reem Kufi has gained popularity for its versatility in branding, headlines, and digital media, offering a fresh and stylish voice for Arabic typography.
                  </p>
                </CardContent>
              </Card>

              <h2 id="alphabet-showcase" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Reem Kufi Alphabet: Geometric Forms</h2>
              <Card className="border-amber-200 mb-12 bg-white">
                 <CardHeader>
                  <CardTitle className="text-xl text-amber-800">Individual Letterforms</CardTitle>
                  <CardDescription className="text-amber-600">Observe the sharp angles and clean lines of Reem Kufi's characters.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div 
                    className="text-center leading-loose"
                    style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: "40px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET}
                  </div>
                </CardContent>
              </Card>
              
              <h2 id="text-examples" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Reem Kufi in Action: Design Examples</h2>
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
                    <Card className="border-amber-200 bg-white">
                      <CardContent className="p-6">
                        <div 
                          className="mb-4 text-center whitespace-pre-line"
                          style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: "32px", direction: "rtl", lineHeight: 1.7 }}
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

              <h2 id="use-cases" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Ideal Applications for Reem Kufi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-amber-200 flex bg-white">
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
                  <Card key={detail.title} className="border-amber-200 bg-white">
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
                 <h3 className="text-2xl font-semibold text-amber-800 text-center sm:text-left">Craft Bold Designs with Reem Kufi</h3>
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/?font=Reem%20Kufi">Use Reem Kufi in Generator</Link>
                </Button>
              </div>
              
              <RelatedContent 
                title="Discover Other Modern & Kufi Fonts"
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