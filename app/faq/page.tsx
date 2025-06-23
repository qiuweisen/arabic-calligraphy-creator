import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ | Arabic Calligraphy Generator",
  description: "Frequently asked questions about our Arabic calligraphy generator, Arabic typography, font choices, commercial use, and creating specific styles like Kufic calligraphy or name art.",
  keywords: "Arabic calligraphy FAQ, Arabic calligraphy generator FAQ, Kufic calligraphy generator, Arabic name art, Harakat support, free calligraphy tool questions, Arabic typography help, calligraphy questions, Arabic font generator help",
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
    question: "What is an Arabic calligraphy generator?",
    answer:
      "An <strong>Arabic calligraphy generator</strong> is an online tool that transforms standard Arabic text into various artistic calligraphy styles. It allows users to customize fonts, colors, sizes, and other elements to create beautiful, stylized Arabic script art without needing manual calligraphy skills. Our platform is a user-friendly <strong>arabic calligraphy generator</strong>.",
  },
  {
    question: "Is this Arabic calligraphy generator free to use?",
    answer:
      "Yes, our <strong>online Arabic calligraphy generator</strong> is completely free for all users. All core features, including access to various fonts, customization tools, and standard downloads (PNG, SVG), are available at no cost. We aim to provide an accessible <strong>free Arabic calligraphy generator</strong>.",
  },
  {
    question: "What types of Arabic fonts are available in the generator?",
    answer:
      "Our <strong>Arabic calligraphy generator</strong> includes over 13 premium Arabic fonts. These span traditional styles like Kufic, Naskh, Thuluth, and Diwani, as well as modern and decorative script options to suit various artistic preferences for your calligraphy work.",
  },
  {
    question: "Can I use the calligraphy generated with this tool commercially?",
    answer:
      "Generally, yes. The calligraphy designs you create with our <strong>Arabic calligraphy generator</strong> can typically be used for both personal and commercial projects. However, always check the license terms for any specific premium fonts you choose, as some may have their own usage restrictions independent of our generator tool.",
  },
  {
    question: "How can I create a name with this Arabic calligraphy generator?",
    answer:
      "To create name art, simply type the desired name into the text input field of our <strong>Arabic calligraphy generator</strong>. Then, experiment with different fonts—like Diwani or Thuluth for flowing name designs—adjust sizes, and add colors or effects until you achieve the perfect artistic representation of the name. This is a popular use for an <strong>arabic calligraphy generator for names</strong>.",
  },
  {
    question: "Does this tool support Arabic text with Harakat (vowel marks)?",
    answer:
      "Yes, our <strong>Arabic calligraphy generator</strong> generally supports text with Harakat (اعراب). You can type or paste Arabic text that includes these vowel marks, and the generator will render them along with the letters according to the chosen font's capabilities. Font support for Harakat can vary, so previewing is recommended.",
  },
  {
    question: "What makes this a good Kufic Arabic calligraphy generator?",
    answer:
      "Our tool serves as an excellent <strong>Kufic Arabic calligraphy generator</strong> because it includes authentic Kufic style fonts and provides customization options that allow you to refine the geometric and angular aesthetics characteristic of Kufic script. You can adjust letter spacing and size to perfect your Kufic designs.",
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Find answers to common questions about Arabic calligraphy and our <strong>Arabic calligraphy generator</strong> tool.
          </p>
        </header>

        <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800">General Calligraphy Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(0, generalQuestionsEndIndex).map((faq, index) => (
                <AccordionItem key={`general-${index}`} value={`general-item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-amber-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800">About Our Arabic Calligraphy Generator</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(generatorQuestionsStartIndex, generatorQuestionsEndIndex).map((faq, index) => (
                <AccordionItem key={`generator-${index}`} value={`generator-item-${index}`}>
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
            <CardTitle className="text-2xl text-amber-800">Technical & Further Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(generatorQuestionsEndIndex).map((faq, index) => (
                <AccordionItem key={`technical-${index}`} value={`technical-item-${index + generatorQuestionsEndIndex}`}>
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
            Didn't find what you're looking for? Our <strong>Arabic calligraphy generator</strong> is easy to use, or check our blog for more in-depth articles.
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
    <Footer />
    </>
  )
}
