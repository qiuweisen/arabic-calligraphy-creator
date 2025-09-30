import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Toolkit Components
import { GeneratorEmbed } from '@/components/toolkit/generator-embed'
import { WorkflowSteps } from '@/components/toolkit/workflow-steps'
import { FaqSection } from '@/components/toolkit/faq-section'

// Islamic Art Specialized Components
import { IslamicTextGallery } from '@/components/islamic-art/text-gallery'
import { IslamicCalligraphyStyles } from '@/components/islamic-art/calligraphy-styles'

// UI Components
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Quran Verse Calligraphy Generator - Sacred Islamic Art & Geometric Patterns',
  description: 'Create stunning Islamic art with authentic Arabic calligraphy. Generate sacred Quranic verses, geometric patterns, and traditional Islamic designs with our specialized calligraphy generator.',
  keywords: [
    'Quran verse calligraphy',
    'Islamic art',
    'Arabic calligraphy',
    'Islamic calligraphy',
    'sacred text',
    'geometric patterns',
    'Islamic design',
    'Arabic art',
    'religious art',
    'Islamic typography',
    'Arabic writing'
  ],
  openGraph: {
    title: 'Quran Verse Calligraphy Generator - Sacred Islamic Art & Geometric Patterns',
    description: 'Create stunning Islamic art with authentic Arabic calligraphy. Generate sacred Quranic verses and traditional Islamic designs.',
    url: 'https://arabic-calligraphy-creator.com/quran-verse-calligraphy',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quran Verse Calligraphy Generator',
    description: 'Create stunning Islamic art with authentic Arabic calligraphy and sacred Quranic verses.'
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/quran-verse-calligraphy'
  }
}

export default function QuranVerseCalligraphyPage() {
  const workflowSteps = [
    {
      title: "Select Sacred Text",
      description: "Choose from our curated collection of Islamic texts, Quranic verses, and traditional prayers with cultural context.",
      icon: "📖"
    },
    {
      title: "Choose Calligraphy Style",
      description: "Select from traditional Islamic scripts like Kufic, Naskh, or Thuluth, each with historical significance.",
      icon: "✨"
    },
    {
      title: "Customize Design",
      description: "Adjust colors, layouts, and decorative elements while maintaining cultural authenticity and respect.",
      icon: "🎨"
    },
    {
      title: "Generate & Download",
      description: "Create your Islamic art in high resolution for digital use, printing, or spiritual decoration.",
      icon: "⬇️"
    }
  ]

  const faqData = [
    {
      question: "What makes Islamic calligraphy special?",
      answer: "Islamic calligraphy is considered one of the highest forms of art in Islamic culture, combining spiritual meaning with aesthetic beauty. Each script has historical significance and specific use cases in religious and cultural contexts."
    },
    {
      question: "Can I use Quranic verses in my art?",
      answer: "Yes, but with respect and understanding. Our tool provides proper context and cultural guidelines for using sacred texts. Always consider the intended use and treat religious content with appropriate reverence."
    },
    {
      question: "Which calligraphy style should I choose?",
      answer: "It depends on your purpose: Naskh for readability, Kufic for geometric designs, Thuluth for artistic beauty, and Diwani for formal documents. Our style guide helps you understand each script's characteristics."
    },
    {
      question: "How do I ensure cultural authenticity?",
      answer: "Follow our cultural guidelines, use traditional scripts appropriately, understand the meaning of texts you're using, and consider the historical and spiritual context of Islamic art traditions."
    },
    {
      question: "Can I create art for commercial use?",
      answer: "Yes, but be mindful of religious sensitivities. Avoid commercializing sacred texts inappropriately. Our guidelines help you navigate respectful commercial use of Islamic art elements."
    },
    {
      question: "What file formats are available?",
      answer: "You can download your Islamic art in PNG, SVG, and PDF formats, suitable for digital display, printing, and professional design work."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quran Verse Calligraphy
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-emerald-100">
            Create Sacred & Beautiful Islamic Art
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-emerald-50">
            Generate authentic Islamic calligraphy with traditional scripts, sacred texts, and geometric patterns. 
            Honor the rich artistic heritage of Islamic culture with our specialized calligraphy generator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#generator">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Start Creating Islamic Art
              </Button>
            </Link>
            <Link href="#texts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Explore Sacred Texts
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {["Traditional Islamic Scripts", "Sacred Text Library", "Cultural Authenticity Guidelines", "Geometric Pattern Integration"].map((feature, idx) => (
              <div key={idx} className="text-sm text-emerald-100">
                ✓ {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Islamic Calligraphy Generator
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create beautiful Islamic art with authentic Arabic calligraphy. Choose from traditional scripts, 
              sacred texts, and cultural elements to design meaningful artwork.
            </p>
          </div>
          <GeneratorEmbed
            trackingContext="islamic-art"
            heading={
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Generate Your Islamic Art</h3>
                <p className="text-gray-600">Enter Arabic text or explore our sacred text collection below</p>
              </div>
            }
          />
        </div>
      </section>

      <section id="texts" className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <IslamicTextGallery />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <IslamicCalligraphyStyles />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <WorkflowSteps
            title="Creating Authentic Islamic Art"
            subtitle="Follow our guided process to create respectful and beautiful Islamic calligraphy that honors traditional artistic principles."
            steps={workflowSteps.map(step => ({
              icon: <span className="text-3xl">{step.icon}</span>,
              title: step.title,
              description: step.description
            }))}
            layout="grid"
          />
        </div>
      </section>

      <FaqSection
        title="Islamic Art & Calligraphy FAQ"
        subtitle="Common questions about creating respectful and authentic Islamic calligraphy art."
        questions={faqData}
        variant="default"
      />

      <Footer />
    </div>
  )
}
