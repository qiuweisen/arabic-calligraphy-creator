import React from 'react'
import { Metadata } from 'next'
import { ArrowRight, Heart, PenTool, Download, Palette, Layout, Calendar, Users } from 'lucide-react'
import Link from 'next/link'

// Components
import { StaticNavbar } from '@/components/static-navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/breadcrumb'
import { FontCard } from '@/components/font-card'

// New component-based architecture
import { HeroSection } from '@/components/toolkit/hero-section'
import { GeneratorEmbed } from '@/components/toolkit/generator-embed'
import { WorkflowSteps } from '@/components/toolkit/workflow-steps'
import { FaqSection } from '@/components/toolkit/faq-section'

// Wedding-specific components
import { WeddingColorPalette } from '@/components/wedding/color-palette'
import { WeddingLayoutTemplates } from '@/components/wedding/layout-templates'
import { WeddingTextExamples } from '@/components/wedding/text-examples'

// Utils
import { getFontInfoBySlug } from '@/app/lib/font-data'

export const metadata: Metadata = {
  title: "Arabic Wedding Invitation Templates | Elegant Arabic Calligraphy Wedding Cards",
  description: "Design luxurious Arabic wedding invitations with authentic calligraphy. Pair bilingual layouts, curated color palettes, and downloadable SVG/PNG files ready for print.",
  keywords: [
    "arabic wedding invitation",
    "wedding card arabic calligraphy",
    "arabic wedding template",
    "bilingual wedding invitation",
    "luxury arabic wedding card design"
  ],
  openGraph: {
    title: "Arabic Wedding Invitation Templates | Elegant Arabic Calligraphy Wedding Cards",
    description: "Create premium Arabic wedding invitation designs with bilingual layouts, curated fonts, and printable exports.",
    url: "https://arabic-calligraphy-generator.com/arabic-wedding-invitations",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arabic Wedding Invitation Designer",
    description: "Craft elegant Arabic wedding invitations with curated fonts, color palettes, and print-ready downloads."
  },
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/arabic-calligraphy-wedding-invitation"
  }
}

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Arabic Wedding Invitations", href: "/arabic-wedding-invitations" }
]

const FONT_SLUGS = ["aref-ruqaa", "scheherazade", "amiri"]

const FAQ_ITEMS = [
  {
    question: "How do I create bilingual Arabic-English wedding invitations?",
    answer: "Our templates are specifically designed for bilingual layouts. Choose side-by-side or layered formats that give equal prominence to both languages. Consider Arabic reading direction (right-to-left) when planning your layout design."
  },
  {
    question: "Which Arabic fonts work best for wedding invitations?",
    answer: "Aref Ruqaa offers elegant traditional calligraphy perfect for formal ceremonies. Scheherazade provides excellent readability for longer text. Amiri combines classical beauty with modern clarity, ideal for luxury invitations."
  },
  {
    question: "Can I print these designs on professional wedding stationery?",
    answer: "Yes! Download high-resolution PNG files for direct printing or SVG files for professional printing services. Our designs work with gold foil, embossing, and premium paper stocks. Share files with your printer for best results."
  },
  {
    question: "How do I ensure cultural appropriateness in my Arabic wedding invitation?",
    answer: "Use our curated text examples and cultural guidance. Verify religious verses with knowledgeable sources, respect traditional formatting, and consider your guests' cultural backgrounds. Our examples include cultural context for proper usage."
  },
  {
    question: "What colors work best for Arabic wedding invitations?",
    answer: "Our color palette tool offers culturally significant combinations. Gold and burgundy represent luxury and tradition. Emerald symbolizes paradise in Islamic culture. Rose gold provides modern elegance. Consider your venue and ceremony style when choosing."
  }
]

// Workflow steps specific to wedding invitation design
const WEDDING_WORKFLOW_STEPS = [
  {
    icon: <Users className="h-8 w-8 text-pink-600" />,
    title: "Choose Your Names & Text",
    description: (
      <>
        Select from our curated Arabic wedding phrases or input your couple's names. 
        <strong> Verify spelling and cultural appropriateness</strong> before finalizing.
      </>
    ),
    customContent: <WeddingTextExamples />
  },
  {
    icon: <Layout className="h-8 w-8 text-pink-600" />,
    title: "Select Template Layout",
    description: (
      <>
        Choose from bilingual templates designed for Arabic-English invitations. 
        Consider your ceremony style and guest demographics when selecting layout.
      </>
    ),
    customContent: <WeddingLayoutTemplates />
  },
  {
    icon: <Palette className="h-8 w-8 text-pink-600" />,
    title: "Apply Color Palette",
    description: (
      <>
        Select from culturally significant color schemes that work beautifully 
        for printing and complement Arabic calligraphy aesthetics.
      </>
    ),
    customContent: <WeddingColorPalette />
  },
  {
    icon: <Download className="h-8 w-8 text-pink-600" />,
    title: "Export & Print",
    description: (
      <>
        Download print-ready files and work with professional stationers for 
        luxury finishes like gold foil, embossing, and premium paper stocks.
      </>
    )
  }
]

export default function ArabicWeddingInvitationPage() {
  // Scroll to generator function
  const scrollToGenerator = () => {
    const element = document.getElementById('generator-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Generate structured data for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((faq) => ({
      "@type": "Question", 
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  // Generate HowTo structured data
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Design Arabic Wedding Invitations",
    "description": "Step-by-step guide to creating elegant Arabic wedding invitations with bilingual layouts and cultural sensitivity.",
    "image": "https://arabic-calligraphy-generator.com/og-image.png",
    "totalTime": "PT45M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Arabic Wedding Invitation Templates"
      },
      {
        "@type": "HowToSupply", 
        "name": "Color Palette Guide"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool", 
        "name": "Arabic Wedding Invitation Generator",
        "url": "https://arabic-calligraphy-generator.com/arabic-wedding-invitations"
      }
    ],
    "step": WEDDING_WORKFLOW_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": typeof step.description === 'string' ? step.description : step.title,
      "url": `https://arabic-calligraphy-generator.com/arabic-wedding-invitations#step-${index + 1}`
    }))
  }

  return (
    <>
      <StaticNavbar />
      
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      
      <main className="bg-gradient-to-b from-pink-50 via-white to-rose-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section - Component-based */}
        <HeroSection
          badge="Wedding Invitation Designer"
          title={
            <>
              Create Elegant <span className="text-pink-600">Arabic Wedding</span>
              <br />Invitations with Style
            </>
          }
          subtitle={
            <>
              Design luxurious bilingual wedding invitations that honor Arabic calligraphy traditions 
              while embracing modern elegance. Perfect for <strong>multicultural celebrations</strong> with 
              professionally curated templates, color palettes, and cultural guidance.
            </>
          }
          primaryAction={
            <Button size="lg" onClick={scrollToGenerator} className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4">
              Start Designing Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          }
          secondaryAction={
            <Button variant="outline" size="lg" className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4">
              Browse Templates
            </Button>
          }
          layoutVariant="centered"
          className="pt-8"
        />

        {/* Generator Section - Component-based */}
        <GeneratorEmbed
          initialFont="Aref Ruqaa"
          trackingContext="wedding"
          heading="Design Your Wedding Invitation"
          supportingText={
            <>
              Create beautiful Arabic calligraphy for your wedding invitations. Experiment with elegant fonts, 
              romantic phrases, and layouts perfect for your special celebration.
            </>
          }
        />

        {/* Workflow Steps - Component-based with wedding-specific content */}
        <WorkflowSteps
          title="Your Wedding Invitation Design Journey"
          subtitle="Follow our expert-guided process to create culturally respectful and visually stunning Arabic wedding invitations."
          steps={WEDDING_WORKFLOW_STEPS}
          layout="vertical"
          className="bg-gradient-to-br from-pink-50 to-rose-50"
        />

        {/* Recommended Fonts Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Best Arabic Fonts for Wedding Invitations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These carefully selected calligraphy styles offer the perfect balance of elegance, 
                readability, and cultural authenticity for your wedding stationery.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {FONT_SLUGS.map((slug) => {
                const font = getFontInfoBySlug(slug)
                if (!font) return null
                const previewText = slug === "aref-ruqaa" ? "أحمد و فاطمة" : 
                                  slug === "scheherazade" ? "حبيبان إلى الأبد" : "بارك الله لكما"
                return (
                  <FontCard
                    key={slug}
                    name={font.displayName}
                    slug={font.slug}
                    description={`Elegant ${font.displayName} perfect for sophisticated wedding invitations with romantic Arabic calligraphy.`}
                    zipFileName={font.zipFileName}
                    displayName={font.displayName}
                    previewText={previewText}
                  />
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section - Component-based */}
        <FaqSection
          title="Arabic Wedding Invitation Design FAQ"
          subtitle="Common questions about creating beautiful, culturally appropriate Arabic wedding invitations."
          questions={FAQ_ITEMS}
          schemaId="https://arabic-calligraphy-generator.com/arabic-wedding-invitations#faq"
          className="bg-gradient-to-b from-gray-50 to-white"
        />

        {/* Cultural Guidance Section */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <Heart className="h-8 w-8 text-amber-600" />
                Cultural Guidance & Etiquette
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Honor Arabic and Islamic traditions while creating modern, inclusive wedding invitations 
                that celebrate your unique love story.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <PenTool className="h-5 w-5 text-amber-600" />
                  Typography Guidelines
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Arabic text reads right-to-left</li>
                  <li>• Give equal visual weight to both languages</li>
                  <li>• Use appropriate diacritics for formal text</li>
                  <li>• Consider line spacing for readability</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-amber-600" />
                  Religious Considerations
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Verify Quranic verses with scholars</li>
                  <li>• Use appropriate blessings and prayers</li>
                  <li>• Consider guest religious backgrounds</li>
                  <li>• Respect sacred text placement</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-amber-600" />
                  Cultural Traditions
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Include family blessings when appropriate</li>
                  <li>• Honor regional naming conventions</li>
                  <li>• Consider lunar calendar dates</li>
                  <li>• Respect ceremonial timing traditions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Dream Wedding Invitation?
            </h2>
            <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
              Start with our professional templates and cultural guidance to design 
              invitations that honor tradition while celebrating your unique love story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToGenerator}
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4"
              >
                Design Your Invitation Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4"
                asChild
              >
                <Link href="/tutorials">Learn Arabic Calligraphy</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}