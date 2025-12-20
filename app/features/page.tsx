import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Generator Features | Tool Capabilities",
  description: "Discover the powerful features of our Arabic calligraphy generator: 17+ fonts, customization options, instant downloads, and professional-quality output.",
  keywords: "arabic calligraphy generator features, calligraphy tool capabilities, arabic font features, generator specifications, calligraphy tool functions",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/features",
  },
}

const FEATURES = [
  {
    title: "Rich Font Library",
    description: "Access a comprehensive collection of traditional and modern Arabic fonts including Naskh, Kufi, Diwani, and more.",
    icon: "📚",
  },
  {
    title: "Real-time Preview",
    description: "See your calligraphy design update instantly as you make changes to text, colors, and styling.",
    icon: "👁️",
  },
  {
    title: "Customization Options",
    description: "Adjust font size, colors, shadows, stroke width, and more to create your perfect design.",
    icon: "🎨",
  },
  {
    title: "Background Options",
    description: "Choose from solid colors, gradients, or upload your own background image for your calligraphy.",
    icon: "🖼️",
  },
  {
    title: "Multiple Export Formats",
    description: "Download your creations as PNG with transparency or SVG for use in various projects.",
    icon: "💾",
  },
  {
    title: "Arabic Keyboard",
    description: "Type Arabic text easily with our built-in virtual keyboard, even if you don't have an Arabic keyboard layout.",
    icon: "⌨️",
  },
  {
    title: "Text Alignment & Spacing",
    description: "Control text direction, alignment, letter spacing, and line height for perfect composition.",
    icon: "↔️",
  },
  {
    title: "Preset Templates",
    description: "Start with beautiful preset designs and templates featuring common phrases and Quranic verses.",
    icon: "📝",
  },
]

const ADVANCED_FEATURES = [
  "Advanced shadow effects with multiple layers",
  "Text stroke customization",
  "Kashida (letter stretching) control",
  "Font style variations (regular, bold)",
  "Responsive design for all devices",
  "Adjustable letter spacing and height",
  "Background pattern selection",
  "Social media sharing capabilities",
]

export default function FeaturesPage() {
  return (
    <>
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Powerful Arabic Calligraphy Features</h1>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Our Arabic Calligraphy Generator offers a comprehensive suite of tools to create beautiful Arabic typography with ease.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {FEATURES.map((feature, index) => (
                <div 
                  key={index} 
                  className="border border-amber-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl" aria-hidden="true">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800 mb-2">{feature.title}</h3>
                      <p className="text-amber-700">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Advanced Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {ADVANCED_FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span className="text-amber-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Ready to Create Beautiful Arabic Calligraphy?</h2>
              <p className="text-amber-700 mb-6">
                Experience all these features and more with our easy-to-use Arabic Calligraphy Generator.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2">
                <Link href="/">Try It Now</Link>
              </Button>
            </div>

            <div className="border-t border-amber-200 pt-10 mt-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-4 text-center">Additional Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <Link 
                  href="/fonts" 
                  className="border border-amber-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow text-center"
                >
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">Font Gallery</h3>
                  <p className="text-amber-700 text-sm">Explore our collection of Arabic fonts</p>
                </Link>
                <Link 
                  href="/blog/beginners-guide-to-calligraphy" 
                  className="border border-amber-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow text-center"
                >
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">Beginner's Guide</h3>
                  <p className="text-amber-700 text-sm">Learn the basics of Arabic calligraphy</p>
                </Link>
                <Link 
                  href="/faq" 
                  className="border border-amber-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow text-center"
                >
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">FAQ</h3>
                  <p className="text-amber-700 text-sm">Find answers to common questions</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 
