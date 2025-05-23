import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Blog | History, Styles & Tutorials",
  description:
    "Explore the rich world of Arabic calligraphy through our articles about history, styles, techniques and famous calligraphers.",
  keywords: "Arabic calligraphy, Arabic script, Islamic calligraphy, calligraphy history, Arabic typography tutorial",
}

const blogPosts = [
  {
    id: "history-of-arabic-calligraphy",
    title: "The Rich History of Arabic Calligraphy",
    description: "Explore the origins and development of Arabic calligraphy from the 7th century to modern times.",
    date: "May 15, 2023",
    image: "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/historical-manuscript-with-kufic-script.png",
    category: "History",
  },
  {
    id: "six-major-calligraphy-styles",
    title: "Understanding the Six Major Arabic Calligraphy Styles",
    description: "A detailed guide to Naskh, Thuluth, Diwani, Kufi, Riq'a, and Nastaliq calligraphy styles.",
    date: "June 3, 2023",
    image: "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/major-arabic-calligraphy-styles-displayed-in-a-decorative-arrangement.png",
    category: "Styles",
  },
  {
    id: "modern-arabic-typography",
    title: "Modern Arabic Typography in Digital Design",
    description: "How traditional Arabic calligraphy influences contemporary digital typography and design.",
    date: "July 12, 2023",
    image: "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/modern-arabic-typography-in-digital-interfaces.png",
    category: "Digital",
  },
  {
    id: "famous-arabic-calligraphers",
    title: "10 Famous Arabic Calligraphers You Should Know",
    description: "Discover the masters of Arabic calligraphy and their significant contributions to the art form.",
    date: "August 28, 2023",
    image: "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/arabic-calligraphy-artistic-collage.png",
    category: "Artists",
  },
  {
    id: "beginners-guide-to-calligraphy",
    title: "Beginner's Guide to Arabic Calligraphy",
    description: "Essential tips, tools, and techniques for those starting their journey in Arabic calligraphy.",
    date: "September 10, 2023",
    image: "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/arabic-calligraphy-tools-including-reed-pens.png",
    category: "Tutorials",
  },
  {
    id: "quran-and-calligraphy",
    title: "The Quran and Arabic Calligraphy: A Sacred Connection",
    description: "Exploring the spiritual dimension of calligraphy in Islamic sacred texts.",
    date: "October 5, 2023",
    image: "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/illuminated-quranic-manuscript-with-elaborate-calligraphy-and-gold-leaf-decoration.png",
    category: "Religion",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
            الخط العربي Blog
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Explore the rich world of Arabic calligraphy through our articles about history, styles, techniques, and
            more.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <Image 
                  src={post.image || "/placeholder.svg"} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority={blogPosts.indexOf(post) < 3}
                />
              </div>
              <CardHeader className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="text-xl text-amber-800">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="link" className="ml-auto text-amber-600 hover:text-amber-700 p-0">
                  <Link href={`/blog/${post.id}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/">Try Our Calligraphy Generator</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
