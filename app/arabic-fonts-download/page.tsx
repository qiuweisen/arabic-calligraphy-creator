import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { StaticFooter } from "@/components/static-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FontCard } from "@/components/font-card"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { CheckCircle2, Download, Globe, Sword, BookOpen } from "lucide-react"

const FONT_SHORT_DESCRIPTIONS: Record<string, string> = {
  "amiri": "Classic Naskh script with Quran-ready ligatures and balanced stroke contrast.",
  "reem-kufi": "Geometric Kufi display font that delivers bold, modern branding impact.",
  "cairo": "Versatile bilingual sans-serif perfect for UI, web dashboards, and apps.",
  "scheherazade": "Professional Naskh typography optimised for long-form Islamic texts.",
  "tajawal": "Humanist sans-serif engineered for crisp Arabic on screens and mobile.",
  "noto-naskh-arabic": "Google's Naskh family with extensive diacritic support for education.",
  "lemonada": "Friendly rounded display face ideal for social media carousels and promos.",
  "lateef": "Elegant Nastaliq-inspired style tailored for Urdu and poetic compositions.",
  "mirza": "Modern Nastaliq variant with clean curves for refined editorial layouts.",
  "harmattan": "Lightweight hybrid design suited for multilingual dashboards and data viz.",
  "aref-ruqaa": "Ornamental Diwani-Ruqaa fusion crafted for invitations and ceremonial design.",
  "mada": "Minimalist geometric sans with seven weights for corporate presentations.",
  "rakkas": "Expressive display typography to headline culture-forward campaigns.",
  "jomhuria": "Thick-stroke display font adding statement headlines to hero sections.",
  "markazi-text": "High-legibility text face calibrated for dense editorial Arabic copy.",
  "marhey": "Playful rounded letterforms perfect for kid-focused creative material.",
  "el-messiri": "Naskh heritage with modern flair to bridge traditional and digital aesthetics."
}

type FontSection = {
  title: string
  subtitle: string
  badge?: string
  fonts: string[]
}

const FEATURED_SECTIONS: FontSection[] = [
  {
    title: "Most Downloaded Islamic Design Fonts",
    subtitle: "Grab the go-to Arabic calligraphy fonts designers export daily for Ramadan campaigns, Eid invites, and mosque signage.",
    badge: "SVG ready",
    fonts: ["amiri", "reem-kufi", "scheherazade", "tajawal"]
  },
  {
    title: "Fonts Optimised for Cricut & Laser Cutting",
    subtitle: "SVG stroke-friendly letterforms that keep curves clean when plotting vinyl decals or laser engraved art.",
    badge: "Cricut friendly",
    fonts: ["cairo", "noto-naskh-arabic", "harmattan", "lemonada"]
  },
  {
    title: "Nastaliq & Display Styles for Branding",
    subtitle: "Give wedding stationery, boutique logos, and cultural posters a premium finish with flowing Nastaliq and dramatic display fonts.",
    badge: "Branding",
    fonts: ["lateef", "mirza", "rakkas", "jomhuria"]
  }
]

const HOW_IT_WORKS_STEPS = [
  {
    title: "Choose a font",
    description: "Browse curated download sections or jump straight to your favourite script to preview the details." 
  },
  {
    title: "Click download",
    description: "Each button instantly fetches a ZIP containing TTF/OTF files plus ready-made SVG assets for Illustrator and Figma." 
  },
  {
    title: "Import & design",
    description: "Install the font locally or drop the SVG into Canva, Procreate, Cricut Design Space, or the Arabic Calligraphy Generator." 
  }
]

const FAQ_ITEMS = [
  {
    question: "Can I use these Arabic fonts for commercial Islamic design projects?",
    answer: "Yes. Each download includes licence notes that outline how you can safely use the fonts for branding, packaging, and client work." 
  },
  {
    question: "Do the ZIP files include SVG exports for Cricut or Glowforge crafts?",
    answer: "Absolutely. Every archive bundles high-resolution SVG previews alongside TTF/OTF files so you can cut vinyl, engrave wood, or laser acrylic without rebuilding paths." 
  },
  {
    question: "How do I preview the font before downloading?",
    answer: "Open our free Arabic Calligraphy Generator, paste your text, and switch between fonts in real-time with RTL-friendly styling controls." 
  }
]

function getFontCardProps(slug: string) {
  const fontInfo = getFontInfoBySlug(slug)
  if (!fontInfo) {
    return null
  }

  const description = FONT_SHORT_DESCRIPTIONS[slug] ?? "High quality Arabic typography ready for download."

  return {
    name: fontInfo.displayName,
    slug: fontInfo.slug,
    description,
    zipFileName: fontInfo.zipFileName,
    displayName: fontInfo.displayName
  }
}

export const metadata: Metadata = {
  title: "Arabic Fonts Download Center – Free SVG & Islamic Typography Kits",
  description: "Download 17+ Arabic calligraphy fonts with ready-made SVG assets for Islamic art, Cricut crafts, and Illustrator projects. One click to install TTF/OTF files and preview online.",
  keywords: [
    "arabic fonts download",
    "free arabic svg fonts",
    "islamic calligraphy font pack",
    "cricut arabic font",
    "download arabic ttf"
  ],
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/arabic-fonts-download"
  },
  openGraph: {
    title: "Download Free Arabic Fonts – SVG Ready Islamic Typography",
    description: "One hub for downloading Arabic calligraphy fonts with Illustrator-ready SVG files, Cricut friendly outlines, and Islamic design templates.",
    url: "https://arabic-calligraphy-generator.com/arabic-fonts-download",
    siteName: "Arabic Calligraphy Generator",
    type: "website",
    locale: "en_US"
  }
}

export default function ArabicFontsDownloadPage() {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Arabic Fonts Download Center",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web",
    "url": "https://arabic-calligraphy-generator.com/arabic-fonts-download",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Instant SVG downloads",
      "TTF/OTF font bundles",
      "Islamic calligraphy templates",
      "Cricut compatible files"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Generator",
      "url": "https://arabic-calligraphy-generator.com"
    }
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to download Arabic calligraphy fonts",
    "description": "Step-by-step guide to download Arabic fonts and SVG files for Islamic design and Cricut crafts.",
    "totalTime": "PT2M",
    "supply": [
      "Arabic font ZIP file",
      "Design software (Illustrator, Figma, Cricut Design Space)",
      "Arabic Calligraphy Generator account"
    ],
    "step": HOW_IT_WORKS_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description
    }))
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white">
        <section className="border-b border-amber-100 bg-white/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] items-center">
              <div>
                <Badge variant="outline" className="mb-4 border-emerald-200 bg-emerald-50 text-emerald-700">
                  Free Arabic Font Pack
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
                  Download Arabic Fonts with SVG Previews in One Click
                </h1>
                <p className="text-lg text-amber-700 leading-relaxed mb-6">
                  Access 17+ Islamic calligraphy fonts, Nastaliq scripts, and modern Arabic sans-serifs. Every download includes TTF/OTF files, SVG exports, and ready-to-use previews for Cricut, Glowforge, Illustrator, and Canva.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-amber-800 text-sm font-medium">
                    <Download className="h-4 w-4" /> TTF / OTF / SVG packaged
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sky-700 text-sm font-medium">
                    <Globe className="h-4 w-4" /> RTL ready, diacritics included
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 text-sm font-medium">
                    <Sword className="h-4 w-4" /> Optimised for Islamic design
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-6 py-3">
                    <Link href="#download-sections">Browse Download Sections</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-amber-500 text-amber-700 hover:bg-amber-50">
                    <Link href="/">Open Calligraphy Generator</Link>
                  </Button>
                </div>
              </div>
              <Card className="shadow-lg border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 text-xl">Included in every download</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-amber-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <p>TTF + OTF font files for macOS, Windows, Procreate, Figma, and Adobe workflows.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <p>SVG calligraphy previews in gold/black palettes sized for Cricut Design Space and Glowforge.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <p>Cheat sheet describing ideal use cases, stylistic notes, and Islamic design inspiration.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <p>Quick link back to the Arabic Calligraphy Generator so you can preview text live.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="download-sections" className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">Curated collections</Badge>
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Pick the Arabic Font Bundle That Match Your Project</h2>
            <p className="text-amber-700 text-lg">
              Whether you are cutting vinyl Ayah wall art, shipping Ramadan marketing campaigns, or writing Urdu poetry, these bundles surface the best fonts for your workflow.
            </p>
          </div>

          <div className="space-y-16">
            {FEATURED_SECTIONS.map((section) => (
              <div key={section.title} className="bg-white/80 border border-amber-100 rounded-3xl shadow-sm p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    {section.badge && (
                      <Badge className="mb-3 bg-emerald-500/10 text-emerald-700">{section.badge}</Badge>
                    )}
                    <h3 className="text-2xl font-semibold text-amber-900 mb-2">{section.title}</h3>
                    <p className="text-amber-700 max-w-2xl">{section.subtitle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {section.fonts.map((slug) => {
                    const cardProps = getFontCardProps(slug)
                    return cardProps ? <FontCard key={slug} {...cardProps} /> : null
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-emerald-50 via-white to-amber-50 border-t border-b border-emerald-200/40">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <Badge variant="outline" className="mb-3 border-sky-200 text-sky-700 bg-white">Workflow tips</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">
                  Import fonts once, then iterate in the Arabic Calligraphy Generator
                </h2>
                <p className="text-emerald-700 leading-relaxed mb-6">
                  After downloading, visit the generator to preview Ayah, duaa, and names across every font in this pack. Mix multiple export styles, swap background textures, and generate transparent PNG or SVG output for Cricut, Glowforge, and Canva mockups.
                </p>
                <div className="space-y-3 text-emerald-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5" />
                    <span>Auto RTL alignment with adjustable spacing, ligatures, and gold foil textures.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5" />
                    <span>Export high-resolution PNG or SVG to keep strokes sharp at large sizes.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5" />
                    <span>Save favourite styles and reuse them across wedding cards, logos, or Quran study notes.</span>
                  </div>
                </div>
                <Button asChild size="lg" className="mt-8 bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/">Generate Calligraphy Now</Link>
                </Button>
              </div>
              <Card className="border-emerald-200 bg-white/90">
                <CardHeader>
                  <CardTitle className="text-emerald-700">How the download workflow works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {HOW_IT_WORKS_STEPS.map((step) => (
                    <div key={step.title} className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/60">
                      <h3 className="text-emerald-800 font-semibold mb-1">{step.title}</h3>
                      <p className="text-emerald-700 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <Badge variant="outline" className="mb-3 border-amber-200 text-amber-700 bg-amber-50">FAQ</Badge>
            <h2 className="text-3xl font-bold text-amber-900 mb-3">Frequently asked questions</h2>
            <p className="text-amber-700">Everything you need to know before downloading the Arabic font pack.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((item) => (
              <Card key={item.question} className="border-amber-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-amber-900 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-amber-600" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-amber-700 leading-relaxed">
                  {item.answer}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-amber-900 text-amber-50">
          <div className="container mx-auto px-4 py-12 md:py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to craft Islamic calligraphy that stands out?</h2>
            <p className="max-w-2xl mx-auto text-amber-100 mb-6 text-lg">
              Download the font bundles you need, then open the Arabic Calligraphy Generator to style ayah, wedding vows, brand marks, and product packaging without leaving your browser.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-amber-100 text-amber-900 hover:bg-white">
                <Link href="/">Launch the Generator</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-amber-200 text-amber-50 hover:bg-amber-800">
                <Link href="#download-sections">View Download Collections</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <StaticFooter />
    </>
  )
}
