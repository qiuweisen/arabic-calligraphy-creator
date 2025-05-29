import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { CalligraphyGenerator } from "@/components/calligraphy-generator"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Download, Palette, Type, ChevronRight, Laptop, Smartphone, Tablet } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const UseCasesSection = dynamic(() => 
  import("@/components/home/use-cases-section").then((mod) => mod.UseCasesSection)
)

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arabic-calligraphy-generator.com'; // Fallback for safety
const cdnBaseUrl = 'https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arabic Calligraphy Generator - Free Tool | الخط العربي",
  description: "Use our free Arabic calligraphy generator to create stunning script art online. Discover fonts, customize styles, and download your unique designs easily.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Free Arabic Calligraphy Generator - Online Islamic Art Tool | الخط العربي",
    description: "Design beautiful Arabic calligraphy & Islamic art online with our free generator. Multiple fonts, styles, & easy sharing.",
    url: siteUrl,
    siteName: 'Arabic Calligraphy Generator',
    images: [
      {
        url: `${cdnBaseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Arabic Calligraphy Generator - Online Tool for Arabic Script Art',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free Arabic Calligraphy Generator - Create Islamic Script Online | الخط العربي",
    description: "Use our free Arabic calligraphy generator to design beautiful Arabic script and Islamic art. Easy to use, multiple fonts and styles.",
    images: [`${cdnBaseUrl}/twitter-image.png`],
  },
  keywords: [
    "free arabic calligraphy generator",
    "islamic art generator",
    "arabic fonts",
    "الخط العربي",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
              Arabic Calligraphy Generator
            </h1>
            <p className="text-2xl md:text-3xl text-amber-800 font-semibold mt-2" lang="ar">الخط العربي</p>
            <p className="text-xl md:text-2xl text-amber-900 font-medium mt-1">Create Stunning Arabic Script Art Online with Our Free Tool</p>
            <p className="mt-4 text-amber-700 max-w-2xl mx-auto">
              Transform ordinary text into extraordinary art with our elegant free online Arabic calligraphy generator. Explore the beauty of Arabic script, discover a wide array of fonts, and create truly custom designs with this powerful tool.
            </p>
          </header>

          {/* Main Tool Section */}
          <div className="mb-12" id="calligraphy-tool-section">
            <CalligraphyGenerator />
          </div>

          {/* Key Features Section */}
          <section id="features" className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Features of Our Arabic Calligraphy Generator</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Type className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Extensive Arabic Font Library</h3>
                    <p className="text-amber-700">
                      Our platform provides an extensive font library for your designs, featuring various fonts including traditional Kufic and Naskh, modern, and decorative styles, allowing for diverse creative expression.
                    </p>
                    <ul className="mt-4 text-sm text-amber-700 text-left space-y-1">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>13 high-quality Arabic fonts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Font categorization by style (Kufic, Naskh, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Visual font preview</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Palette className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Advanced Customization Options</h3>
                    <p className="text-amber-700">
                      This tool for custom Arabic calligraphy generation allows deep personalization. Adjust colors, sizes, and alignments to craft the perfect Arabic script art.
                    </p>
                    <ul className="mt-4 text-sm text-amber-700 text-left space-y-1">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Gradient text effects</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Custom backgrounds & patterns</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Advanced typography controls</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Download className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">High-Quality Export Formats</h3>
                    <p className="text-amber-700">
                      Download your creations in high-quality PNG and SVG. Our easy Arabic calligraphy generator ensures your designs are ready for any application, digital or print.
                    </p>
                    <ul className="mt-4 text-sm text-amber-700 text-left space-y-1">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>PNG with transparency</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>SVG for vector graphics</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Direct social media sharing</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">How to Use This Arabic Calligraphy Generator</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Type className="h-6 w-6 text-amber-600" />,
                  title: "1. Enter Your Arabic Text",
                  description:
                    "Begin by typing or pasting your Arabic text into our online Arabic calligraphy generator. Utilize the virtual keyboard or copy-paste for convenience.",
                },
                {
                  icon: <Palette className="h-6 w-6 text-amber-600" />,
                  title: "2. Customize Your Design",
                  description:
                    "Choose from 13+ premium fonts and adjust styles. This versatile Arabic calligraphy art generator offers many options to perfect your script.",
                },
                {
                  icon: <Download className="h-6 w-6 text-amber-600" />,
                  title: "3. Download and Share",
                  description:
                    "Export your final design as a PNG or SVG. Our Arabic calligraphy generator makes it simple to save or share your unique artwork.",
                },
              ].map((step, index) => (
                <Card key={index} className="border-amber-200 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-800 font-bold text-xl">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-amber-800 mb-2">{step.title}</h3>
                      <p className="text-amber-700">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Use Cases Section - Now dynamically loaded */}
          <UseCasesSection />

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Your Arabic Calligraphy Generator Questions Answered</h2>
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "What is an Arabic calligraphy generator?",
                      answer:
                        "An Arabic calligraphy generator is an online tool that transforms standard Arabic text into various artistic calligraphy styles. It allows users to customize fonts, colors, sizes, and other elements to create beautiful, stylized Arabic script art without needing manual calligraphy skills. Our platform is a user-friendly tool for creating Arabic calligraphy.",
                    },
                    {
                      question: "Is this Arabic calligraphy generator free to use?",
                      answer:
                        "Yes, our online Arabic calligraphy generator is completely free for all users. All core features, including access to various fonts, customization tools, and standard downloads (PNG, SVG), are available at no cost. We aim to provide an accessible free tool for Arabic calligraphy creation.",
                    },
                    {
                      question: "What types of Arabic fonts are available?",
                      answer:
                        "Our Arabic calligraphy generator includes over 13 premium Arabic fonts. These span traditional styles like Kufic, Naskh, Thuluth, and Diwani, as well as modern and decorative script options to suit various artistic preferences for your calligraphy work.",
                    },
                    {
                      question: "Can I use the generated calligraphy for commercial projects?",
                      answer:
                        "Generally, yes. The calligraphy designs you create with our Arabic calligraphy generator can typically be used for both personal and commercial projects. However, always check the license terms for any specific premium fonts you choose, as some may have their own usage restrictions independent of our generator tool.",
                    },
                    {
                      question: "How can I create a name with this Arabic calligraphy generator?",
                      answer:
                        "To create name art, simply type the desired name into the text input field of our Arabic calligraphy generator. Then, experiment with different fonts—like Diwani or Thuluth for flowing name designs—adjust sizes, and add colors or effects until you achieve the perfect artistic representation of the name. This is a popular use for an Arabic calligraphy generator for names.",
                    },
                    {
                      question: "Does this tool support Arabic text with Harakat (vowel marks)?",
                      answer:
                        "Yes, our Arabic calligraphy generator generally supports text with Harakat (اعراب). You can type or paste Arabic text that includes these vowel marks, and the generator will render them along with the letters according to the chosen font's capabilities. Font support for Harakat can vary, so previewing is recommended.",
                    },
                    {
                      question: "What makes this a good Kufic Arabic calligraphy generator?",
                      answer:
                        "Our tool serves as an excellent Kufic Arabic calligraphy generator because it includes authentic Kufic style fonts and provides customization options that allow you to refine the geometric and angular aesthetics characteristic of Kufic script. You can adjust letter spacing and size to perfect your Kufic designs.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium text-amber-900">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-amber-700">
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-4 text-center">
                  <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    <Link href="/faq">View All FAQs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-amber-800 mb-4">Create Arabic Calligraphy On Any Device</h2>
                    <p className="text-amber-700 mb-6">
                      Our online Arabic calligraphy maker works seamlessly on all platforms and devices, offering a versatile app-like experience. Create beautiful Arabic script art anywhere with this accessible Arabic calligraphy generator.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Laptop className="h-5 w-5 text-amber-600" />
                        <span className="text-amber-700">Desktop</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tablet className="h-5 w-5 text-amber-600" />
                        <span className="text-amber-700">Tablet</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-amber-600" />
                        <span className="text-amber-700">Mobile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-amber-600" />
                        <span className="text-amber-700">All Browsers</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-amber-50 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Learn More</h3>
                    <div className="space-y-3">
                      <Link href="/blog" className="flex items-center text-amber-600 hover:text-amber-800">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Explore our blog for tips on creating stunning Arabic script</span>
                      </Link>
                      <Link href="#calligraphy-tool-section" className="flex items-center text-amber-600 hover:text-amber-800">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Browse templates for your next calligraphy design</span>
                      </Link>
                      <Link href="/fonts" className="flex items-center text-amber-600 hover:text-amber-800">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>View our rich font gallery for Arabic typography</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
