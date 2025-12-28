import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Tag, BookOpen, TrendingUp } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { GeneratorCTA } from "@/components/generator-cta"
import { StaticNavbar } from "@/components/static-navbar"
import { StaticFooter } from "@/components/static-footer"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Knowledge Base | History & Cultural Insights",
  description:
    "Explore the rich cultural heritage of Arabic calligraphy through our articles about history, traditional styles, famous calligraphers, and cultural significance.",
  keywords: "Arabic calligraphy history, Islamic calligraphy culture, Arabic script heritage, calligraphy styles, famous calligraphers, Arabic typography culture",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/blog",
  },
}

const blogPosts = [
  {
    id: "the-rich-history-of-arabic-calligraphy",
    title: "The Rich History of Arabic Calligraphy",
    description: "Explore the origins and development of Arabic calligraphy from the 7th century to modern times.",
    date: "May 15, 2023",
    category: "History",
    readTime: "8 min read",
    featured: true
  },
  {
    id: "six-major-calligraphy-styles",
    title: "Understanding the Six Major Arabic Calligraphy Styles",
    description: "A detailed guide to Naskh, Thuluth, Diwani, Kufi, Riq'a, and Nastaliq calligraphy styles.",
    date: "June 3, 2023",
    category: "Styles",
    readTime: "12 min read",
    featured: true
  },
  {
    id: "modern-arabic-typography",
    title: "Modern Arabic Typography in Digital Design",
    description: "How traditional Arabic calligraphy influences contemporary digital typography and design.",
    date: "July 12, 2023",
    category: "Digital",
    readTime: "10 min read",
    featured: false
  },
  {
    id: "famous-arabic-calligraphers",
    title: "10 Famous Arabic Calligraphers You Should Know",
    description: "Discover the masters of Arabic calligraphy and their significant contributions to the art form.",
    date: "August 28, 2023",
    category: "Masters",
    readTime: "15 min read",
    featured: true
  },
  {
    id: "beginners-guide-to-calligraphy",
    title: "Complete Beginner's Guide to Arabic Calligraphy",
    description: "A comprehensive guide to start your Arabic calligraphy journey with practical tips and techniques.",
    date: "September 5, 2023",
    category: "Learning",
    readTime: "20 min read",
    featured: true
  },
  {
    id: "quran-and-calligraphy",
    title: "The Sacred Art: Quran and Arabic Calligraphy",
    description: "Understanding the spiritual significance and artistic beauty of Quranic calligraphy.",
    date: "October 10, 2023",
    category: "Culture",
    readTime: "12 min read",
    featured: false
  }
]

const categories = ["All", "History", "Styles", "Digital", "Masters", "Learning", "Culture"]

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "History": "bg-blue-100 text-blue-800",
    "Styles": "bg-green-100 text-green-800",
    "Digital": "bg-purple-100 text-purple-800",
    "Masters": "bg-amber-200 text-amber-900",
    "Learning": "bg-red-100 text-red-800",
    "Culture": "bg-indigo-100 text-indigo-800"
  }
  return colors[category] || "bg-gray-100 text-gray-800"
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Arabic Calligraphy Knowledge Base",
      "description": "Explore the rich cultural heritage of Arabic calligraphy through our articles about history, traditional styles, famous calligraphers, and cultural significance.",
      "url": "https://arabic-calligraphy-generator.com/blog"
}) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { href: "/", name: "Home" },
              { href: "/blog", name: "Blog" }
            ]} 
          />

          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Knowledge Base
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
              Arabic Calligraphy Blog
            </h1>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Explore the rich heritage and modern applications of Arabic calligraphy through expert articles and cultural insights.
            </p>
          </header>

          {/* Blog Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">In-Depth Articles</h3>
              <p className="text-sm text-blue-700 mb-4">Expert knowledge and cultural insights</p>
              <div className="text-2xl font-bold text-blue-600">{blogPosts.length}+</div>
              <div className="text-sm text-blue-600">Articles Available</div>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">Regular Updates</h3>
              <p className="text-sm text-green-700 mb-4">Fresh content and latest trends</p>
              <div className="text-2xl font-bold text-green-600">Weekly</div>
              <div className="text-sm text-green-600">New Content</div>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
              <Tag className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Diverse Topics</h3>
              <p className="text-sm text-purple-700 mb-4">From history to modern applications</p>
              <div className="text-2xl font-bold text-purple-600">{categories.length - 1}</div>
              <div className="text-sm text-purple-600">Categories</div>
            </Card>
          </div>

          {/* Featured Articles */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Featured Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="border border-amber-200 hover:shadow-md transition-shadow overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-amber-100 via-amber-200 to-orange-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <BookOpen className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-sm font-medium text-amber-800">{post.category}</div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-amber-800 mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-amber-700 text-sm mb-3 line-clamp-2">{post.description}</p>
                      <div className="flex items-center justify-between text-xs text-amber-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <div>{post.readTime}</div>
                      </div>
                      <Button asChild size="sm" className="w-full bg-amber-600 hover:bg-amber-700">
                        <Link href={`/blog/${post.id}`} className="flex items-center gap-1 justify-center">
                          Read Article
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All Articles */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                All Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="border border-amber-200 hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative w-full md:w-48 h-32 flex-shrink-0 bg-gradient-to-br from-amber-100 via-amber-200 to-orange-200 rounded flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-1">
                              <BookOpen className="h-6 w-6 text-white" />
                            </div>
                            <div className="text-xs font-medium text-amber-800">{post.category}</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                                {post.category}
                              </span>
                              {post.featured && (
                                <span className="px-2 py-1 bg-amber-200 text-amber-900 rounded-full text-xs font-medium">
                                  Featured
                                </span>
                              )}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-amber-800 mb-2">{post.title}</h3>
                          <p className="text-amber-700 text-sm mb-3">{post.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-xs text-amber-600">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {post.date}
                              </div>
                              <div>{post.readTime}</div>
                            </div>
                            <Button asChild size="sm" variant="outline">
                              <Link href={`/blog/${post.id}`} className="flex items-center gap-1">
                                Read More
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categories Overview */}
          <Card className="border-amber-200 bg-gradient-to-r from-blue-50 to-blue-100 mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                Explore by Category
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.slice(1).map((category) => (
                  <div key={category} className="text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 ${getCategoryColor(category)}`}>
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h4 className="font-medium text-blue-800 text-sm">{category}</h4>
                    <p className="text-blue-600 text-xs">
                      {blogPosts.filter(post => post.category === category).length} articles
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <GeneratorCTA variant="featured" className="mb-8" />

          {/* Newsletter/Subscribe Section */}
          <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Stay Updated
              </h3>
              <p className="text-amber-700 mb-6 max-w-md mx-auto">
                Get notified when we publish new articles about Arabic calligraphy, typography trends, and cultural insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/guides">Learning Guides</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/faq">FAQ</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <StaticFooter />
    </>
  )
}
