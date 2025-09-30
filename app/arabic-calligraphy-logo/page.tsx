import React from 'react'
import { Metadata } from 'next'
import { ArrowRight, Target, PenTool, Download, Building2, Lightbulb, Briefcase } from 'lucide-react'
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

// Logo-specific components
import { LogoCategorySelector } from '@/components/logo/category-selector'
import { LogoDesignTips } from '@/components/logo/design-tips'
import { BusinessNameSuggestions } from '@/components/logo/business-names'

// Utils
import { getFontInfoBySlug } from '@/app/lib/font-data'

export const metadata: Metadata = {
  title: "Arabic Business Logo Design Generator | Professional Arabic Logo Creator",
  description: "Create professional Arabic business logos with authentic calligraphy. Choose from business categories, get design guidance, and export scalable SVG logos for your brand identity.",
  keywords: [
    "arabic logo design",
    "business logo arabic",
    "arabic calligraphy logo",
    "professional arabic logo",
    "arabic brand identity",
    "arabic logo generator"
  ],
  openGraph: {
    title: "Arabic Business Logo Design Generator | Professional Arabic Logo Creator",
    description: "Design professional Arabic business logos with cultural authenticity, expert guidance, and scalable formats for complete brand identity.",
    url: "https://arabic-calligraphy-generator.com/arabic-business-logo-design",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arabic Business Logo Designer",
    description: "Create professional Arabic logos with cultural authenticity and business expertise."
  },
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/arabic-calligraphy-logo"
  }
}

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Arabic Business Logo Design", href: "/arabic-business-logo-design" }
]

const FONT_SLUGS = ["cairo", "tajawal", "aref-ruqaa"]

const FAQ_ITEMS = [
  {
    question: "How do I choose the right Arabic font for my business logo?",
    answer: "Consider your industry and brand personality. Cairo and Tajawal work well for modern businesses with clean, professional needs. Aref Ruqaa is perfect for traditional or luxury brands requiring elegant calligraphy. Test readability at small sizes for business cards and websites."
  },
  {
    question: "Can I use Arabic business names if I'm not an Arabic speaker?",
    answer: "Yes, but with proper research and cultural sensitivity. Always verify meanings with native Arabic speakers, ensure cultural appropriateness for your industry, and consider your target market's familiarity with Arabic text. Our curated name suggestions include cultural context to guide your choice."
  },
  {
    question: "What file formats should I use for my Arabic business logo?",
    answer: "Always start with SVG for infinite scalability and crisp rendering. Export PNG for immediate use on websites and social media. Keep your original design in vector format for future modifications, printing, and professional applications like business cards and signage."
  },
  {
    question: "How can I ensure my Arabic logo works for both Arabic and international markets?",
    answer: "Design with bilingual flexibility in mind. Create versions with both Arabic and English text, test readability across different screen sizes and print applications, and ensure your logo maintains its impact in single-color applications for cost-effective printing."
  },
  {
    question: "What are the key design principles for professional Arabic business logos?",
    answer: "Focus on scalability, cultural appropriateness, and brand consistency. Ensure your Arabic text has proper visual hierarchy, choose colors that work across business contexts, maintain readability at small sizes, and respect Arabic reading direction (right-to-left) in your composition."
  }
]

// Workflow steps specific to business logo design
const LOGO_WORKFLOW_STEPS = [
  {
    icon: <Building2 className="h-8 w-8 text-blue-600" />,
    title: "Select Business Category",
    description: (
      <>
        Choose your industry category to get specialized design guidance, 
        <strong> font recommendations</strong>, and culturally appropriate styling suggestions.
      </>
    ),
    customContent: <LogoCategorySelector />
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: "Choose Business Name",
    description: (
      <>
        Select from our curated Arabic business names or input your own text. 
        Get cultural context, pronunciation guides, and industry-specific recommendations.
      </>
    ),
    customContent: <BusinessNameSuggestions />
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    title: "Apply Design Best Practices",
    description: (
      <>
        Follow professional logo design guidelines for Arabic typography, 
        layout, colors, and cultural considerations to ensure business success.
      </>
    ),
    customContent: <LogoDesignTips />
  },
  {
    icon: <Download className="h-8 w-8 text-blue-600" />,
    title: "Export Professional Files",
    description: (
      <>
        Download scalable SVG files for professional use, PNG files for immediate 
        web applications, and maintain vector sources for future brand development.
      </>
    )
  }
]

export default function ArabicBusinessLogoPage() {
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
    "name": "How to Design Professional Arabic Business Logos",
    "description": "Step-by-step guide to creating effective Arabic business logos with cultural authenticity and professional quality.",
    "image": "https://arabic-calligraphy-generator.com/og-image.png",
    "totalTime": "PT60M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Business Category Guidelines"
      },
      {
        "@type": "HowToSupply", 
        "name": "Arabic Business Name Database"
      },
      {
        "@type": "HowToSupply",
        "name": "Professional Design Tips"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool", 
        "name": "Arabic Business Logo Generator",
        "url": "https://arabic-calligraphy-generator.com/arabic-business-logo-design"
      }
    ],
    "step": LOGO_WORKFLOW_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": typeof step.description === 'string' ? step.description : step.title,
      "url": `https://arabic-calligraphy-generator.com/arabic-business-logo-design#step-${index + 1}`
    }))
  }

  // Generate SoftwareApplication structured data
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Arabic Business Logo Generator",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Generate Arabic business logos",
      "Business category guidance",
      "Cultural appropriateness checking",
      "Professional font recommendations",
      "Scalable SVG export",
      "Design best practices guidance"
    ],
    "url": "https://arabic-calligraphy-generator.com/arabic-business-logo-design"
  }

  return (
    <>
      <StaticNavbar />
      
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      
      <main className="bg-gradient-to-b from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section - Component-based */}
        <HeroSection
          badge="Business Logo Designer"
          title={
            <>
              Create Professional <span className="text-blue-600">Arabic Business</span>
              <br />Logos with Cultural Authenticity
            </>
          }
          subtitle={
            <>
              Design impactful Arabic business logos that honor calligraphy traditions while meeting 
              modern branding needs. Get <strong>expert guidance</strong> on typography, cultural appropriateness, 
              and professional applications for complete brand identity success.
            </>
          }
          primaryAction={
            <Button size="lg" onClick={scrollToGenerator} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              Start Logo Design <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          }
          secondaryAction={
            <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4">
              Browse Categories
            </Button>
          }
          layoutVariant="centered"
          className="pt-8"
        />

        {/* Generator Section - Component-based */}
        <GeneratorEmbed
          initialFont="Cairo"
          trackingContext="logo"
          heading="Design Your Business Logo"
          supportingText={
            <>
              Create professional Arabic logos with our specialized business typography tools. 
              Experiment with industry-appropriate fonts and layouts optimized for brand recognition.
            </>
          }
        />

        {/* Workflow Steps - Component-based with logo-specific content */}
        <WorkflowSteps
          title="Your Logo Design Process"
          subtitle="Follow our professional workflow to create Arabic business logos that combine cultural authenticity with modern business effectiveness."
          steps={LOGO_WORKFLOW_STEPS}
          layout="vertical"
          className="bg-gradient-to-br from-blue-50 to-indigo-50"
        />

        {/* Recommended Fonts Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Best Arabic Fonts for Business Logos
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These professionally selected fonts offer the perfect balance of readability, 
                scalability, and business appropriateness for your Arabic brand identity.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {FONT_SLUGS.map((slug) => {
                const font = getFontInfoBySlug(slug)
                if (!font) return null
                const previewText = slug === "cairo" ? "شركة التقدم" : 
                                  slug === "tajawal" ? "دار الابتكار" : "بيت الحرف"
                return (
                  <FontCard
                    key={slug}
                    name={font.displayName}
                    slug={font.slug}
                    description={`Professional ${font.displayName} perfect for ${
                      slug === "cairo" ? "modern business" : 
                      slug === "tajawal" ? "tech companies" : "traditional brands"
                    } logos with excellent scalability.`}
                    zipFileName={font.zipFileName}
                    displayName={font.displayName}
                    previewText={previewText}
                  />
                )
              })}
            </div>
          </div>
        </section>

        {/* Business Success Stories Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <Briefcase className="h-8 w-8 text-blue-600" />
                Logo Applications & Success Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn how to apply your Arabic logo across business touchpoints and ensure 
                maximum impact in diverse market contexts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <PenTool className="h-5 w-5 text-blue-600" />
                  Digital Applications
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Website headers and favicons</li>
                  <li>• Social media profile images</li>
                  <li>• Email signatures and newsletters</li>
                  <li>• Mobile app icons and interfaces</li>
                  <li>• Digital business presentations</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Print Materials
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Business cards and letterheads</li>
                  <li>• Brochures and marketing materials</li>
                  <li>• Storefront signage and banners</li>
                  <li>• Product packaging and labels</li>
                  <li>• Trade show displays</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                  Brand Consistency
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Maintain proportions across all sizes</li>
                  <li>• Create style guides for team use</li>
                  <li>• Test legibility in various contexts</li>
                  <li>• Establish clear usage guidelines</li>
                  <li>• Document color and font specifications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Component-based */}
        <FaqSection
          title="Arabic Business Logo Design FAQ"
          subtitle="Common questions about creating professional, culturally appropriate Arabic business logos."
          questions={FAQ_ITEMS}
          schemaId="https://arabic-calligraphy-generator.com/arabic-business-logo-design#faq"
          className="bg-gradient-to-b from-gray-50 to-white"
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Arabic Brand Identity?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Start with our professional guidance and create an Arabic business logo 
              that represents your values, connects with your market, and scales with your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToGenerator}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
              >
                Design Your Logo Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
                asChild
              >
                <Link href="/guides">Learn Design Principles</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}