import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { StaticFooter } from "@/components/static-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { GeneratorCTA } from "@/components/generator-cta"
import { MessageCircle, BookOpen, Star, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Generator FAQ - Free Tool Help & Font Questions",
  description: "Get instant answers about our free Arabic calligraphy generator! Font selection, downloads, commercial use, troubleshooting. Complete user guide & support.",
  keywords: "Arabic calligraphy FAQ, generator help, Arabic font questions, free calligraphy tool, font downloads, commercial use, generator support, Arabic typography help",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/faq",
  },
  openGraph: {
    title: "Arabic Calligraphy Generator FAQ - Get Instant Help",
    description: "Frequently asked questions about our free Arabic calligraphy generator. Learn about fonts, downloads, commercial use, and troubleshooting.",
    url: "https://arabic-calligraphy-generator.com/faq",
    siteName: "Arabic Calligraphy Generator",
    type: "website",
  },
}

const faqs = [
  {
    question: "What is Arabic calligraphy?",
    answer:
      "Arabic calligraphy is the artistic practice of handwriting and calligraphy based on the Arabic alphabet. It is known in Arabic as 'khatt' (خط), derived from the word 'line', 'design', or 'construction'. Arabic calligraphy is highly regarded in Islamic culture and has developed over centuries into various styles and forms.",
  },
  {
    question: "How many styles of Arabic calligraphy exist?",
    answer:
      "There are six major classical styles of Arabic calligraphy: Naskh, Thuluth, Diwani, Kufi, Riq'a, and Nastaliq. Each has distinct characteristics and uses. Naskh is commonly used for body text, Thuluth for decorative purposes, Kufi for architectural decoration, Diwani for official documents, Riq'a for everyday writing, and Nastaliq is popular in Persian and Urdu calligraphy. Our generator helps you explore some of these styles, particularly Kufic and others suitable for digital representation.",
  },
  {
    question: "What is Kashida in Arabic typography?",
    answer:
      "Kashida (كشيدة), also known as tatweel, is a typographic feature in Arabic writing that involves elongating certain characters by inserting a straight line between connected letters. It's used for text justification, aesthetic enhancement, and emphasis. Our <strong>Arabic calligraphy generator</strong> allows you to adjust Kashida length to create more elegant text arrangements.",
  },
  {
    question: "How do I use your Arabic calligraphy generator?",
    answer:
      "Using our <strong>Arabic calligraphy generator</strong> is simple: 1) Enter your Arabic text in the input field, 2) Select from various calligraphy styles and fonts, 3) Adjust size, color, and spacing options, 4) Preview your calligraphy in real-time, and 5) Download your creation as PNG, SVG, or PDF. The tool works directly in your browser without requiring any downloads or installations.",
  },
  {
    question: "Can I use the generated calligraphy commercially?",
    answer:
      "Yes! All calligraphy created with our <strong>Arabic calligraphy generator</strong> is free for both personal and commercial use. You retain full rights to your creations. However, please note that while the generated output is yours to use freely, the underlying fonts may have their own licensing terms for direct distribution.",
  },
  {
    question: "What formats can I download my calligraphy in?",
    answer:
      "Our <strong>Arabic calligraphy generator</strong> supports multiple export formats: PNG (for web use and printing), SVG (scalable vector format ideal for logos and designs), and PDF (perfect for documents and high-quality printing). Each format has its advantages depending on your intended use.",
  },
  {
    question: "Why doesn't my Arabic text display correctly?",
    answer:
      "If Arabic text isn't displaying correctly in our <strong>Arabic calligraphy generator</strong>, try these solutions: 1) Ensure you're using a modern browser (Chrome, Firefox, Safari, or Edge), 2) Check that your text is properly formatted Arabic script, 3) Verify your device supports Arabic fonts, and 4) Try refreshing the page. Most display issues are resolved by using an updated browser.",
  },
  {
    question: "Can I save my work to continue later?",
    answer:
      "Currently, our <strong>Arabic calligraphy generator</strong> doesn't include user accounts or cloud saving. However, you can bookmark specific designs by copying the URL when you're working on a piece, as the parameters are saved in the link. We recommend downloading your work as you create it to ensure you don't lose your designs.",
  },
  {
    question: "Which Arabic fonts are available in the generator?",
    answer:
      "Our <strong>Arabic calligraphy generator</strong> includes a carefully curated selection of Arabic fonts covering major calligraphy styles including modern interpretations of Kufic, Naskh-inspired fonts, decorative styles, and contemporary Arabic typefaces. Each font is optimized for digital display and includes proper Arabic text shaping and ligatures.",
  },
  {
    question: "Why doesn't my downloaded image match what I see in the preview?",
    answer:
      "This could happen for several reasons: 1) Some browsers may render Arabic text differently than others, 2) The export process might not capture certain advanced CSS effects perfectly, or 3) Custom fonts might not be properly embedded in the exported file. For best results with our <strong>arabic calligraphy generator</strong>, we recommend using the latest versions of Chrome or Firefox, and if you need a perfect reproduction, consider taking a screenshot or using the SVG export option.",
  },
  {
    question: "How can I learn Arabic calligraphy beyond using this generator?",
    answer:
      "While our <strong>arabic calligraphy generator</strong> is great for creating digital calligraphy, learning traditional Arabic calligraphy requires practice with proper tools. We recommend: 1) Taking courses from certified calligraphers, 2) Starting with basic letter forms in the Naskh style, 3) Practicing with traditional reed pens (qalam) and ink, 4) Studying historical manuscripts, and 5) Following our blog for tutorials and resources. Check our <a href='/blog/beginners-guide-to-calligraphy' class='text-amber-600 hover:underline'>Beginner's Guide to Arabic Calligraphy</a> for more information.",
  },
  {
    question: "How do I fix Arabic text appearing disconnected or reversed (outside the generator)?",
    answer:
      "If Arabic letters appear disconnected or in the wrong order when using text outside of our <strong>arabic calligraphy generator</strong> (e.g., in other software), make sure: 1) You've set the text direction to right-to-left (RTL) using the 'dir=\"rtl\"' attribute or software setting, 2) You're using a proper Arabic font that supports letter connections, 3) Your system has proper Arabic language support installed. Our generator handles these settings automatically within its preview.",
  },
]

export default function FAQPage() {
  const generalQuestionsEndIndex = 3;
  const generatorQuestionsStartIndex = 3;
  const generatorQuestionsEndIndex = 10;

  // Structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Arabic Calligraphy Generator FAQ",
    "description": "Frequently asked questions about our free Arabic calligraphy generator, fonts, downloads, and usage guide.",
    "url": "https://arabic-calligraphy-generator.com/faq",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, '') // Strip HTML tags for structured data
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { href: "/", name: "Home" },
              { href: "/faq", name: "FAQ" }
            ]} 
          />

          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="h-4 w-4" />
              Need Help?
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Find answers to common questions about Arabic calligraphy and our generator tool.
            </p>
          </header>

          {/* Quick Action Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow group">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Quick Start</h3>
              <p className="text-sm text-blue-700 mb-4">Create your first calligraphy instantly</p>
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md">
                <Link href="/">Start Now</Link>
              </Button>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow group">
              <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-900 mb-2">Browse Examples</h3>
              <p className="text-sm text-green-700 mb-4">View beautiful calligraphy templates</p>
              <Button size="sm" asChild className="bg-green-600 hover:bg-green-700 text-white font-semibold border-2 border-green-600 shadow-md">
                <Link href="/templates">View Templates</Link>
              </Button>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow group">
              <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-purple-900 mb-2">Learning Guides</h3>
              <p className="text-sm text-purple-700 mb-4">Learn about calligraphy art and techniques</p>
              <Button size="sm" asChild className="bg-purple-600 hover:bg-purple-700 text-white font-semibold border-2 border-purple-600 shadow-md">
                <Link href="/guides">Learn More</Link>
              </Button>
            </Card>
          </div>

          {/* FAQ Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* General Questions */}
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  General Calligraphy Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {faqs.slice(0, generalQuestionsEndIndex).map((faq, index) => (
                    <AccordionItem key={index} value={`general-${index}`}>
                      <AccordionTrigger className="text-left text-amber-800 font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-amber-700">
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Generator Questions */}
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  Generator Tool Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {faqs.slice(generatorQuestionsStartIndex, generatorQuestionsEndIndex).map((faq, index) => (
                    <AccordionItem key={index} value={`generator-${index}`}>
                      <AccordionTrigger className="text-left text-amber-800 font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-amber-700">
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Technical Questions */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                <MessageCircle className="h-6 w-6" />
                Technical & Advanced Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {faqs.slice(generatorQuestionsEndIndex).map((faq, index) => (
                  <AccordionItem key={index} value={`technical-${index}`}>
                    <AccordionTrigger className="text-left text-amber-800 font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-amber-700">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <GeneratorCTA variant="featured" className="mb-8" />

          {/* Contact Section */}
          <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Didn't find your answer?
              </h3>
              <p className="text-amber-700 mb-6 max-w-md mx-auto">
                Our team is here to help! Contact us for personalized support and detailed answers.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <StaticFooter />
    </>
  )
}
