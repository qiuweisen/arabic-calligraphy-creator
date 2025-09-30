import React from 'react'
import { Metadata } from 'next'
import { ArrowRight, Heart, PenTool, Download, Edit3, Shield } from 'lucide-react'
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

// Tattoo-specific components
import { TattooSafetyWarnings } from '@/components/tattoo/safety-warnings'
import { TattooTextSuggestions } from '@/components/tattoo/text-suggestions'
import { TattooPlacementGuide } from '@/components/tattoo/placement-guide'

// Utils
import { getFontInfoBySlug } from '@/app/lib/font-data'

export const metadata: Metadata = {
  title: "Arabic Tattoo Calligraphy Generator | Meaningful Arabic Tattoo Design",
  description: "Design authentic Arabic tattoo lettering with verified meanings and cultural safety guidance. Preview calligraphy styles, get placement advice, and export artist-ready files instantly.",
  keywords: [
    "arabic tattoo design",
    "arabic lettering tattoo generator", 
    "meaningful arabic tattoo",
    "arabic calligraphy tattoo",
    "tattoo translation verification",
    "arabic tattoo placement guide"
  ],
  openGraph: {
    title: "Arabic Tattoo Calligraphy Generator | Meaningful Arabic Tattoo Design",
    description: "Create authentic Arabic tattoo designs with safety guidance, verified meanings, and placement recommendations from cultural experts.",
    url: "https://arabic-calligraphy-generator.com/arabic-tattoo-calligraphy",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arabic Tattoo Design Generator",
    description: "Design meaningful Arabic tattoos with cultural respect and translation accuracy."
  },
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/arabic-tattoo-calligraphy"
  }
}

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Arabic Tattoo Design", href: "/arabic-tattoo-calligraphy" }
]

const FONT_SLUGS = ["reem-kufi", "aref-ruqaa", "tajawal"]

const FAQ_ITEMS = [
  {
    question: "How can I verify my Arabic tattoo translation is accurate?",
    answer: "Always consult with native Arabic speakers or certified translators before tattooing. Our tool helps with design, but professional translation verification is essential for permanent body art. Consider cultural context and religious appropriateness."
  },
  {
    question: "Which Arabic calligraphy style is best for tattoos?",
    answer: "Reem Kufi and Tajawal work well for clean, modern tattoos with clear lines. Aref Ruqaa offers traditional elegance but requires skilled tattoo artists familiar with Arabic script. Consider your tattoo size and placement when choosing."
  },
  {
    question: "What should I consider for Arabic tattoo placement?",
    answer: "Arabic reads right-to-left, so horizontal placements (forearms, ribs) work naturally. Consider cultural sensitivity - some placements may be inappropriate for religious text. Consult our placement guide and discuss with experienced tattoo artists."
  },
  {
    question: "Can tattoo artists work with these design files?",
    answer: "Yes! Download high-resolution PNG files for stencils and SVG files for vector editing. Most professional tattoo artists can work with these formats. Share design files in advance so artists can prepare properly."
  },
  {
    question: "Are there cultural considerations for Arabic tattoos?",
    answer: "Absolutely. Avoid religious verses if you're not Muslim, research the cultural significance of your chosen text, and ensure proper respect for Arabic language and culture. Our safety warnings provide important guidance."
  }
]

// Workflow steps specific to tattoo design process
const TATTOO_WORKFLOW_STEPS = [
  {
    icon: <Edit3 className="h-8 w-8 text-rose-600" />,
    title: "Choose Your Meaningful Text",
    description: (
      <>
        Select from our curated collection of meaningful Arabic words or input your own text. 
        <strong> Always verify translations</strong> with native speakers before proceeding.
      </>
    ),
    customContent: <TattooTextSuggestions />
  },
  {
    icon: <PenTool className="h-8 w-8 text-rose-600" />,
    title: "Design & Preview",
    description: (
      <>
        Experiment with different calligraphy styles, sizes, and layouts. Consider how the design 
        will look on your chosen body placement and skin tone.
      </>
    )
  },
  {
    icon: <Shield className="h-8 w-8 text-rose-600" />,
    title: "Review Safety Guidelines",
    description: (
      <>
        Understand cultural considerations, placement recommendations, and safety guidelines 
        before making your final decision. Respect is crucial.
      </>
    )
  },
  {
    icon: <Download className="h-8 w-8 text-rose-600" />,
    title: "Export & Consult Artist",
    description: (
      <>
        Download high-resolution files and consult with experienced tattoo artists who 
        understand Arabic script and cultural significance.
      </>
    )
  }
]

export default function ArabicTattooCalligraphyPage() {
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
    "name": "How to Design Arabic Tattoo Calligraphy",
    "description": "Step-by-step guide to creating meaningful Arabic tattoo designs with cultural respect and translation accuracy.",
    "image": "https://arabic-calligraphy-generator.com/og-image.png",
    "totalTime": "PT30M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Arabic Calligraphy Generator Tool"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool", 
        "name": "Arabic Tattoo Design Generator",
        "url": "https://arabic-calligraphy-generator.com/arabic-tattoo-calligraphy"
      }
    ],
    "step": TATTOO_WORKFLOW_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": typeof step.description === 'string' ? step.description : step.title,
      "url": `https://arabic-calligraphy-generator.com/arabic-tattoo-calligraphy#step-${index + 1}`
    }))
  }

  return (
    <>
      <StaticNavbar />
      
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      
      <main className="bg-gradient-to-b from-rose-50 via-white to-amber-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section - Component-based */}
        <HeroSection
          badge="Tattoo Design Tool"
          title={
            <>
              Design Meaningful <span className="text-rose-600">Arabic Tattoos</span>
              <br />With Cultural Respect
            </>
          }
          subtitle={
            <>
              Create authentic Arabic calligraphy for your tattoo with expert guidance on translation accuracy, 
              cultural sensitivity, and placement recommendations. <strong>Avoid costly mistakes</strong> with our 
              comprehensive safety guidelines and verification resources.
            </>
          }
          primaryAction={
            <Button size="lg" onClick={scrollToGenerator} className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4">
              Start Designing Your Tattoo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          }
          secondaryAction={
            <Button variant="outline" size="lg" className="border-rose-300 text-rose-700 hover:bg-rose-50 px-8 py-4">
              Safety Guidelines First
            </Button>
          }
          layoutVariant="centered"
          className="pt-8"
        />

        {/* Safety Warnings - Tattoo-specific component */}
        <TattooSafetyWarnings />

        {/* Generator Section - Component-based */}
        <GeneratorEmbed
          initialFont="Reem Kufi"
          trackingContext="tattoo"
          heading="Design Your Arabic Tattoo"
          supportingText={
            <>
              Use our specialized tool to create beautiful Arabic calligraphy. Experiment with fonts, sizes, and styles 
              to find the perfect design for your tattoo placement.
            </>
          }
        />

        {/* Workflow Steps - Component-based with tattoo-specific content */}
        <WorkflowSteps
          title="Your Tattoo Design Journey"
          subtitle="Follow our expert-guided process to create a meaningful and culturally respectful Arabic tattoo."
          steps={TATTOO_WORKFLOW_STEPS}
          layout="horizontal"
          className="bg-white"
        />

        {/* Placement Guide - Tattoo-specific component */}
        <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Placement & Size Recommendations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn about the best body placements for Arabic tattoos, considering script direction, 
                cultural appropriateness, and healing considerations.
              </p>
            </div>
            <TattooPlacementGuide />
          </div>
        </section>

        {/* Recommended Fonts Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Best Arabic Fonts for Tattoos
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These carefully selected fonts offer clean lines, excellent readability, and work well 
                with most tattoo styles and placements.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {FONT_SLUGS.map((slug) => {
                const font = getFontInfoBySlug(slug)
                if (!font) return null
                return (
                  <FontCard
                    key={slug}
                    name={font.displayName}
                    slug={font.slug}
                    description={`Perfect for tattoo designs with clean, readable Arabic script.`}
                    zipFileName={font.zipFileName}
                    displayName={font.displayName}
                    previewText={slug === "reem-kufi" ? "قوة" : slug === "aref-ruqaa" ? "صبر" : "حب"}
                  />
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section - Component-based */}
        <FaqSection
          title="Arabic Tattoo Design FAQ"
          subtitle="Common questions about designing safe, meaningful, and culturally respectful Arabic tattoos."
          questions={FAQ_ITEMS}
          schemaId="https://arabic-calligraphy-generator.com/arabic-tattoo-calligraphy#faq"
          className="bg-gradient-to-b from-gray-50 to-white"
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Design Your Meaningful Arabic Tattoo?
            </h2>
            <p className="text-xl mb-8 text-rose-100 max-w-2xl mx-auto">
              Start with our safety guidelines, then create your perfect Arabic calligraphy design 
              with cultural respect and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToGenerator}
                className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4"
              >
                Design Your Tattoo Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4"
                asChild
              >
                <Link href="/tutorials">Learn About Arabic Calligraphy</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}