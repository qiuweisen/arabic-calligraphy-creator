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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
              الخط العربي
            </h1>
            <p className="text-xl md:text-2xl text-amber-900 font-medium">Arabic Calligraphy Generator</p>
            <p className="mt-4 text-amber-700 max-w-2xl mx-auto">
              Transform ordinary text into extraordinary art with our elegant Arabic calligraphy generator. Explore the
              beauty of Arabic script through customizable designs.
            </p>
          </header>

          {/* Main Tool Section */}
          <div className="mb-12">
            <CalligraphyGenerator />
          </div>

          {/* Key Features Section */}
          <section id="features" className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Type className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Beautiful Arabic Fonts</h3>
                    <p className="text-amber-700">
                      Choose from a curated selection of premium Arabic fonts, including traditional, modern, and
                      decorative styles.
                    </p>
                    <ul className="mt-4 text-sm text-amber-700 text-left space-y-1">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>13 high-quality Arabic fonts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Font categorization by style</span>
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
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Advanced Customization</h3>
                    <p className="text-amber-700">
                      Personalize your design with custom colors, sizes, and alignments for the perfect look.
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
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Multiple Export Options</h3>
                    <p className="text-amber-700">
                      Download your designs in high-quality formats for both digital and print use.
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
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">How to Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Type className="h-6 w-6 text-amber-600" />,
                  title: "Enter Your Text",
                  description:
                    "Type or paste your Arabic text into the field. You can use our virtual keyboard for easy input.",
                },
                {
                  icon: <Palette className="h-6 w-6 text-amber-600" />,
                  title: "Customize Design",
                  description:
                    "Choose from 13 premium Arabic fonts, adjust size and colors, add effects, and perfect your style.",
                },
                {
                  icon: <Download className="h-6 w-6 text-amber-600" />,
                  title: "Download & Share",
                  description:
                    "Export your design as PNG or SVG and share it directly on social media or use it in your projects.",
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
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Frequently Asked Questions</h2>
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "What is Arabic calligraphy?",
                      answer:
                        "Arabic calligraphy (خط عربي) is the artistic practice of handwriting based on the Arabic alphabet. It has been a significant art form in Islamic culture for centuries, combining linguistic expression with visual aesthetics.",
                    },
                    {
                      question: "Do I need to know Arabic to use this tool?",
                      answer:
                        "No, you don't need to know Arabic to use our tool. You can copy and paste Arabic text from other sources, or use our pre-made templates with common phrases. We also provide a virtual Arabic keyboard to help you type characters easily.",
                    },
                    {
                      question: "What fonts are available in the generator?",
                      answer:
                        "Our generator includes 13 premium Arabic fonts covering traditional styles (Amiri, Scheherazade, Noto Naskh), modern designs (Cairo, Tajawal), decorative styles (Jomhuria, Rakkas), and specialized forms like Kufi and Nastaliq.",
                    },
                    {
                      question: "Can I use the generated calligraphy commercially?",
                      answer:
                        "Yes, you can use the calligraphy you create with our generator for both personal and commercial projects. We don't claim any rights to the artwork you create. However, if you're using specific premium fonts, please check their individual licenses as some may have restrictions on commercial use.",
                    },
                    {
                      question: "Is the calligraphy generator free to use?",
                      answer:
                        "Yes, our calligraphy generator is completely free to use. All features, including text customization, font selection, color options, and downloads are available at no cost.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium text-amber-900">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-amber-700">{faq.answer}</AccordionContent>
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
                    <h2 className="text-2xl font-bold text-amber-800 mb-4">Compatible With All Devices</h2>
                    <p className="text-amber-700 mb-6">
                      Our calligraphy generator works seamlessly on all platforms and devices.
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
                        <span>Explore our blog</span>
                      </Link>
                      <Link href="#features" className="flex items-center text-amber-600 hover:text-amber-800">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Browse templates</span>
                      </Link>
                      <Link href="/fonts" className="flex items-center text-amber-600 hover:text-amber-800">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>View font gallery</span>
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
