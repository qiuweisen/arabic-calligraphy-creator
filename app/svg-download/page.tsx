import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FontCard } from "@/components/font-card"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { ArrowRight, Download, Workflow, FileType, Layers, MonitorCog, Smartphone, Palette, ShieldCheck, Cloud } from "lucide-react"

export const metadata: Metadata = {
  title: "Download Arabic Calligraphy SVG Files | Arabic SVG Export Workflow",
  description: "Download crisp Arabic SVG files for logos, tattoos, print, and digital design. Learn export workflows, optimization tips, and integration steps for Figma, Illustrator, Cricut, and Glowforge.",
  keywords: [
    "arabic svg download",
    "download arabic calligraphy svg",
    "arabic svg for cricut",
    "arabic vector calligraphy",
    "arabic svg workflow"
  ],
  openGraph: {
    title: "Download Arabic Calligraphy SVG Files | Arabic SVG Export Workflow",
    description: "Export pixel-perfect Arabic calligraphy SVGs and integrate them into Cricut, Glowforge, Figma, Illustrator, and web projects.",
    url: "https://arabic-calligraphy-creator.com/svg-download",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arabic SVG Download Guide",
    description: "Download Arabic SVG files, optimize vectors, and integrate them into cutting machines and design apps."
  },
  alternates: {
    canonical: "https://arabic-calligraphy-creator.com/svg-download"
  }
}

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Arabic SVG Download", href: "/svg-download" }
]

const ADVANTAGES = [
  {
    title: "Lossless Vector Quality",
    description: "Scale Arabic calligraphy from mobile icons to billboard signage without losing sharpness or stroke detail.",
    icon: Layers
  },
  {
    title: "Universal Compatibility",
    description: "Import SVG files into Figma, Adobe Illustrator, Canva, Cricut Design Space, Glowforge, and laser cutting software instantly.",
    icon: MonitorCog
  },
  {
    title: "Faster Iteration",
    description: "Make last-minute edits, color changes, or layout tweaks without regenerating exports from scratch.",
    icon: Workflow
  }
]

const EXPORT_STEPS = [
  {
    title: "Compose Your Calligraphy",
    description: "Enter Arabic text, select fonts, and verify ligatures before exporting.",
    icon: Palette
  },
  {
    title: "Download SVG",
    description: "Use the SVG export button for instant vector files optimized for design workflows.",
    icon: Download
  },
  {
    title: "Optimize for Destination",
    description: "Clean up nodes, set stroke-outline preferences, and adjust artboards based on your platform (web, print, cutting devices).",
    icon: FileType
  },
  {
    title: "Deploy Across Devices",
    description: "Upload SVG to Cricut, Glowforge, Shopify, or React apps and maintain consistent visual quality.",
    icon: Cloud
  }
]

const FONT_SLUGS = ["tajawal", "reem-kufi", "amiri"]

const FAQ_ITEMS = [
  {
    question: "How do I convert SVG to PNG or PDF?",
    answer: "Open the SVG in Illustrator, Figma, or Photopea and export to PNG/PDF. Keep the original SVG for future edits and cutting machine workflows."
  },
  {
    question: "Can Cricut or Glowforge read these Arabic SVG files?",
    answer: "Yes. Upload the SVG, ensure outlines are closed paths, and adjust scaling within Cricut Design Space or Glowforge App before cutting or engraving."
  },
  {
    question: "How do I optimize SVG for the web?",
    answer: "Compress with SVGO or SVGOMG, remove unused metadata, and inline the SVG in your HTML for faster LCP on marketing pages."
  },
  {
    question: "What if my SVG shows disconnected strokes?",
    answer: "Enable the 'Outline strokes' option in Illustrator or use pathfinder unite. Ensure your cutting machine is set to combine overlapping paths."
  }
]

export default function ArabicSvgDownloadPage() {
  const softwareApplicationLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Arabic SVG Export Generator",
    applicationCategory: "DesignApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    featureList: [
      "Generate Arabic calligraphy SVG files",
      "Optimize vectors for cutting machines",
      "Export PNG and SVG simultaneously",
      "Share assets with designers and engineers"
    ],
    url: "https://arabic-calligraphy-creator.com/svg-download"
  }

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to download Arabic calligraphy SVG files",
    description: "Generate Arabic calligraphy, export SVG, and prepare files for design tools, web apps, and cutting machines.",
    image: "https://arabic-calligraphy-creator.com/og-image.png",
    totalTime: "PT8M",
    tool: [
      {
        "@type": "HowToTool",
        name: "Arabic Calligraphy Creator",
        url: "https://arabic-calligraphy-creator.com"
      }
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Compose calligraphy",
        text: "Enter Arabic text, adjust diacritics, and preview styles.",
        url: "https://arabic-calligraphy-creator.com/svg-download#step-1"
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Download SVG",
        text: "Click the SVG export button to save a vector file locally.",
        url: "https://arabic-calligraphy-creator.com/svg-download#step-2"
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Optimize vectors",
        text: "Clean paths or convert strokes to fills based on your production workflow.",
        url: "https://arabic-calligraphy-creator.com/svg-download#step-3"
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Deploy assets",
        text: "Import SVG into Cricut, Glowforge, Shopify, or React design systems.",
        url: "https://arabic-calligraphy-creator.com/svg-download#step-4"
      }
    ]
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  }

  return (
    <>
      <StaticNavbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main className="bg-gradient-to-b from-slate-50 via-sky-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />

          <section className="text-center mt-10 mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-semibold text-sky-700 bg-sky-100 rounded-full">
              Arabic SVG Export Workflow
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Download Crisp Arabic SVG Files in Seconds
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Generate scalable Arabic calligraphy, optimize vector paths, and ship production-ready SVG files for product design, signage, and cutting machines.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3">
                  Export SVG Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/arabic-fonts-download">
                <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50 px-6 py-3">
                  Download Font Packs
                </Button>
              </Link>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-16">
            {ADVANTAGES.map((item) => (
              <Card key={item.title} className="border-sky-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Best Arabic Fonts for Clean SVG Paths</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These fonts produce precise bezier curves that stay smooth after scaling, cutting, or laser engraving.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {FONT_SLUGS.map((slug) => {
                const font = getFontInfoBySlug(slug)
                if (!font) return null
                const preview = slug === "tajawal" ? "تصميم متجاوب" : slug === "reem-kufi" ? "ملفات متجهة" : "دقة عالية"
                return (
                  <FontCard
                    key={slug}
                    name={font.displayName}
                    slug={font.slug}
                    description={`Download ${font.displayName} with SVG-friendly paths.`}
                    zipFileName={font.zipFileName}
                    displayName={font.displayName}
                    previewText={preview}
                  />
                )
              })}
            </div>
          </section>

          <section id="svg-steps" className="mb-16">
            <Card className="border-sky-200 shadow-md">
              <CardHeader className="bg-sky-100">
                <CardTitle className="text-2xl text-sky-700">SVG Export Checklist</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {EXPORT_STEPS.map((step, index) => (
                    <div key={step.title} className="flex gap-4" id={`step-${index + 1}`}>
                      <div className="w-12 h-12 rounded-full bg-sky-200 flex items-center justify-center text-sky-700 font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <step.icon className="h-5 w-5 text-sky-600" /> {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mt-2">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16 grid lg:grid-cols-2 gap-8">
            <Card className="border-sky-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-sky-600" /> Mobile & Responsive Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <p className="leading-relaxed">
                  Optimize Arabic SVGs for responsive websites, apps, and digital signage without compromising load speed or accessibility.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Inline SVG to control colors with CSS variables.</li>
                  <li>
                    Add descriptive <span className="font-semibold">&lt;title&gt;</span> and <span className="font-semibold">&lt;desc&gt;</span> tags for screen readers.
                  </li>
                  <li>Use vector-effect="non-scaling-stroke" to maintain stroke widths on scale.</li>
                  <li>Lazy-load large hero illustrations with Intersection Observer.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-sky-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-sky-600" /> Production Quality Safeguards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <p className="leading-relaxed">
                  Keep your SVG workflow reliable for industrial cutting, embroidery, and UV printing.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Convert strokes to outlines before sending to vinyl cutters.</li>
                  <li>Group overlapping shapes to avoid double cuts or engravings.</li>
                  <li>Export backup PNG at 300 DPI for print proofing.</li>
                  <li>Maintain version control with semantic filenames (arabic-logo-v3.svg).</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="text-center mb-16">
            <Card className="bg-gradient-to-r from-sky-100 to-indigo-100 border-sky-200">
              <CardContent className="py-10 px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Export SVG Calligraphy Ready for Any Platform</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                  Generate Arabic calligraphy, export pristine SVG files, and keep full control over your creative pipeline.
                </p>
                <Link href="/">
                  <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg">
                    Launch Generator <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">SVG Download FAQs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {FAQ_ITEMS.map((faq) => (
                <Card key={faq.question} className="border-sky-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-gray-900 mb-4 text-center">Keep Learning</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/arabic-calligraphy-logo">
                <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50">
                  Arabic Logo Guide
                </Button>
              </Link>
              <Link href="/arabic-tattoo-calligraphy">
                <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50">
                  Arabic Tattoo Planner
                </Button>
              </Link>
              <Link href="/quran-verse-calligraphy">
                <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50">
                  Islamic Art Composition Tips
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
