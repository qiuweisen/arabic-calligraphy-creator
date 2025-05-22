import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ | Arabic Calligraphy Generator",
  description: "Frequently asked questions about Arabic calligraphy, our generator tool, and typography techniques.",
  keywords: "Arabic calligraphy FAQ, Arabic typography help, calligraphy questions, Arabic font generator help",
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
      "There are six major classical styles of Arabic calligraphy: Naskh, Thuluth, Diwani, Kufi, Riq'a, and Nastaliq. Each has distinct characteristics and uses. Naskh is commonly used for body text, Thuluth for decorative purposes, Kufi for architectural decoration, Diwani for official documents, Riq'a for everyday writing, and Nastaliq is popular in Persian and Urdu calligraphy.",
  },
  {
    question: "What is Kashida in Arabic typography?",
    answer:
      "Kashida (كشيدة), also known as tatweel, is a typographic feature in Arabic writing that involves elongating certain characters by inserting a straight line between connected letters. It's used for text justification, aesthetic enhancement, and emphasis. Our calligraphy generator allows you to adjust Kashida length to create more elegant text arrangements.",
  },
  {
    question: "Can I use the generated calligraphy commercially?",
    answer:
      "Yes, you can use the calligraphy you create with our generator for both personal and commercial projects. We don't claim any rights to the artwork you create. However, if you're using specific premium fonts, please check their individual licenses as some may have restrictions on commercial use.",
  },
  {
    question: "Why doesn't my downloaded image match what I see in the preview?",
    answer:
      "This could happen for several reasons: 1) Some browsers may render Arabic text differently than others, 2) The export process might not capture certain advanced CSS effects perfectly, or 3) Custom fonts might not be properly embedded in the exported file. For best results, we recommend using the latest versions of Chrome or Firefox, and if you need a perfect reproduction, consider taking a screenshot or using the SVG export option.",
  },
  {
    question: "How can I learn Arabic calligraphy beyond using this generator?",
    answer:
      "While our generator is great for creating digital calligraphy, learning traditional Arabic calligraphy requires practice with proper tools. We recommend: 1) Taking courses from certified calligraphers, 2) Starting with basic letter forms in the Naskh style, 3) Practicing with traditional reed pens (qalam) and ink, 4) Studying historical manuscripts, and 5) Following our blog for tutorials and resources. Check our <a href='/blog/beginners-guide-to-calligraphy' class='text-amber-600 hover:underline'>Beginner's Guide to Arabic Calligraphy</a> for more information.",
  },
  {
    question: "What are the best fonts for Arabic text?",
    answer:
      "The 'best' font depends on your purpose. For readability in body text, Naskh-style fonts like Amiri or Scheherazade New work well. For headlines, display fonts like Jomhuria or Rakkas create impact. For a modern look, sans-serif fonts like Cairo or Tajawal are excellent choices. Our generator includes a curated selection of high-quality Arabic fonts suitable for different purposes.",
  },
  {
    question: "How do I fix Arabic text appearing disconnected or reversed?",
    answer:
      "If Arabic letters appear disconnected or in the wrong order, make sure: 1) You've set the text direction to right-to-left (RTL) using the 'dir=\"rtl\"' attribute, 2) You're using a proper Arabic font that supports letter connections, 3) Your system has proper Arabic language support installed. Our generator handles these settings automatically, but if you're using the exported text elsewhere, you'll need to ensure proper RTL formatting.",
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Find answers to common questions about Arabic calligraphy and our generator tool.
          </p>
        </header>

        <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800">General Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-amber-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800">Technical Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(3).map((faq, index) => (
                <AccordionItem key={index + 3} value={`item-${index + 3}`}>
                  <AccordionTrigger className="text-lg font-medium text-amber-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="mb-4 text-amber-700">
            Didn't find what you're looking for? Check our blog for more in-depth articles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/">Try Our Calligraphy Generator</Link>
            </Button>
            <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Link href="/blog">Browse Our Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
