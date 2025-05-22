import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, Book, Lightbulb, Palette, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Tutorials | Learn Arabic Typography",
  description: "Learn how to create beautiful Arabic calligraphy with our step-by-step tutorials. From basics to advanced techniques for both beginners and experts.",
  keywords: "Arabic calligraphy tutorial, how to create Arabic typography, Arabic calligraphy generator guide, learn Arabic calligraphy, Arabic font tutorial",
}

const BEGINNER_TUTORIALS = [
  {
    title: "Getting Started with Arabic Calligraphy Generator",
    description: "Learn the basics of using our Arabic Calligraphy Generator tool with this beginner-friendly introduction.",
    icon: <PlayCircle className="h-6 w-6 text-amber-600" />,
    duration: "5 min",
    slug: "getting-started",
    link: "/blog/beginners-guide-to-calligraphy"
  },
  {
    title: "Understanding Arabic Font Styles",
    description: "Explore the differences between Naskh, Kufi, Diwani, and other popular Arabic calligraphy styles.",
    icon: <Book className="h-6 w-6 text-amber-600" />,
    duration: "8 min",
    slug: "arabic-font-styles",
    link: "/blog/six-major-calligraphy-styles"
  },
  {
    title: "Basic Text Customization",
    description: "Learn how to adjust font size, color, and basic styling options to personalize your Arabic text.",
    icon: <Palette className="h-6 w-6 text-amber-600" />,
    duration: "7 min",
    slug: "basic-customization",
    link: "/"
  },
]

const INTERMEDIATE_TUTORIALS = [
  {
    title: "Working with Arabic Text Direction",
    description: "Master right-to-left text alignment and proper Arabic text formatting for beautiful calligraphy.",
    icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
    duration: "10 min",
    slug: "text-direction",
    link: "/blog/modern-arabic-typography"
  },
  {
    title: "Creating Beautiful Text Shadows",
    description: "Learn how to add dimension to your calligraphy with multi-layered shadow effects.",
    icon: <Palette className="h-6 w-6 text-amber-600" />,
    duration: "12 min",
    slug: "text-shadows",
    link: "/"
  },
  {
    title: "Using Custom Backgrounds",
    description: "Discover how to upload custom backgrounds or create gradient backgrounds for your calligraphy art.",
    icon: <Palette className="h-6 w-6 text-amber-600" />,
    duration: "9 min",
    slug: "custom-backgrounds",
    link: "/"
  },
]

const ADVANCED_TUTORIALS = [
  {
    title: "Mastering Kashida Extensions",
    description: "Advanced techniques for using Kashida (letter stretching) to create balanced and beautiful compositions.",
    icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
    duration: "15 min",
    slug: "kashida-techniques",
    link: "/blog/famous-arabic-calligraphers"
  },
  {
    title: "Creating Logo Designs with Arabic Calligraphy",
    description: "Learn professional techniques for creating logos and branding materials using Arabic typography.",
    icon: <Palette className="h-6 w-6 text-amber-600" />,
    duration: "18 min",
    slug: "logo-design",
    link: "/blog/modern-arabic-typography"
  },
  {
    title: "Exporting for Print and Digital Media",
    description: "Master the export options and best practices for using your calligraphy designs in various media.",
    icon: <Book className="h-6 w-6 text-amber-600" />,
    duration: "11 min",
    slug: "export-options",
    link: "/features"
  },
]

export default function TutorialsPage() {
  // 修改为使用每个教程项中预定义的link属性，而不是构建可能不存在的链接
  const getTutorialLink = (tutorial: any) => {
    return tutorial.link || "/"; // 如果没有指定链接，则返回首页
  };

  const renderTutorialCard = (tutorial: any) => (
    <Card className="border-amber-200 hover:border-amber-400 hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="mt-1">{tutorial.icon}</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">{tutorial.title}</h3>
            <p className="text-amber-700 text-sm mb-3">{tutorial.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-amber-500">{tutorial.duration} read</span>
              <Link 
                href={getTutorialLink(tutorial)}
                className="text-sm font-medium text-amber-600 hover:text-amber-800 flex items-center"
              >
                View Tutorial
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Arabic Calligraphy Tutorials</h1>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Learn how to create beautiful Arabic calligraphy with our step-by-step guides for all skill levels.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-200 pb-2">Beginner Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {BEGINNER_TUTORIALS.map((tutorial, index) => (
                    <div key={index}>
                      {renderTutorialCard(tutorial)}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-200 pb-2">Intermediate Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {INTERMEDIATE_TUTORIALS.map((tutorial, index) => (
                    <div key={index}>
                      {renderTutorialCard(tutorial)}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-200 pb-2">Advanced Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {ADVANCED_TUTORIALS.map((tutorial, index) => (
                    <div key={index}>
                      {renderTutorialCard(tutorial)}
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Ready to Apply What You've Learned?</h2>
                <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                  Put your new skills into practice with our Arabic Calligraphy Generator. Create beautiful designs with just a few clicks!
                </p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2">
                  <Link href="/">Try the Calligraphy Generator</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-xl font-bold text-amber-800 mb-4">Looking for More Resources?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/blog/beginners-guide-to-calligraphy">Beginner's Guide</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/fonts">Font Gallery</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/blog/history-of-arabic-calligraphy">History of Calligraphy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 