import type { Metadata } from 'next'
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Share2, Heart, MessageCircle, TrendingUp, Camera, Video } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Arabic Fonts for Social Media - Free Instagram, TikTok & Facebook Typography',
  description: 'Create viral Arabic social media posts! Free Arabic fonts perfect for Instagram stories, TikTok videos & Facebook posts. Boost engagement instantly.',
  keywords: 'social media arabic typography,instagram arabic fonts,facebook arabic posts,tiktok arabic text,twitter arabic calligraphy,social content arabic,viral arabic posts',
  openGraph: {
    title: 'Arabic Fonts for Social Media - Free Instagram, TikTok & Facebook Typography',
    description: 'Create viral Arabic social media posts! Free Arabic fonts perfect for Instagram stories, TikTok videos & Facebook posts. Boost engagement instantly.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/use-cases/social-media-arabic-typography',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic Fonts for Social Media - Free Instagram, TikTok & Facebook Typography',
    description: 'Create viral Arabic social media posts! Free Arabic fonts perfect for Instagram stories, TikTok videos & Facebook posts. Boost engagement instantly.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/use-cases/social-media-arabic-typography',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Social Media Arabic Typography', href: '/use-cases/social-media-arabic-typography' },
]

export default function SocialMediaArabicTypographyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Social Media Arabic Typography - Instagram, Facebook, TikTok Arabic Fonts",
    "description": "Create viral social media content with stunning Arabic typography for Instagram, Facebook, TikTok, and other platforms",
    "image": "https://arabic-calligraphy-creator.com/social-media-arabic-og.png",
    "author": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Creator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Creator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arabic-calligraphy-creator.com/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://arabic-calligraphy-creator.com/use-cases/social-media-arabic-typography"
    }
  }

  return (
    <>
      <StaticNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Social Media Arabic Typography
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your social media presence with captivating Arabic typography. Create viral content, 
              boost engagement, and connect with Arabic-speaking audiences across Instagram, TikTok, Facebook, 
              and Twitter with culturally authentic and visually stunning designs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">
                  Create Social Content <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tutorials/arabic-calligraphy-design-tips">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3">
                  Design Tips
                </Button>
              </Link>
            </div>
          </div>

          {/* Platform-Specific Overview */}
          <Card className="mb-12 border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
              <CardTitle className="text-2xl text-purple-800">
                📱 Platform-Specific Arabic Typography
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
                  <p className="text-sm text-gray-600">Stories, posts, reels with Arabic aesthetics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">TikTok</h3>
                  <p className="text-sm text-gray-600">Viral Arabic content and trending hashtags</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Share2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Facebook</h3>
                  <p className="text-sm text-gray-600">Community posts and business content</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Twitter</h3>
                  <p className="text-sm text-gray-600">Trending topics and viral Arabic tweets</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Platform-Specific Strategies */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3" />
                  Platform-Specific Content Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Each social media platform has unique characteristics and audience behaviors. 
                    Tailoring your Arabic typography to match platform-specific requirements maximizes engagement and reach.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-lg p-6">
                        <h4 className="font-semibold text-pink-800 mb-4 flex items-center">
                          <Camera className="h-5 w-5 mr-2" />
                          Instagram Strategy
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-pink-700 mb-2">Content Types</h5>
                            <ul className="text-sm text-pink-600 space-y-1">
                              <li>• <strong>Feed Posts</strong>: Inspirational quotes in Arabic calligraphy</li>
                              <li>• <strong>Stories</strong>: Daily Arabic phrases with interactive elements</li>
                              <li>• <strong>Reels</strong>: Arabic typography tutorials and transformations</li>
                              <li>• <strong>IGTV</strong>: Behind-the-scenes calligraphy creation process</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-pink-700 mb-2">Best Fonts for Instagram</h5>
                            <ul className="text-sm text-pink-600 space-y-1">
                              <li>• <strong>Rakkas</strong> - Bold, eye-catching for posts</li>
                              <li>• <strong>Lemonada</strong> - Friendly, approachable for stories</li>
                              <li>• <strong>Amiri</strong> - Elegant for inspirational content</li>
                              <li>• <strong>Cairo</strong> - Clean, readable for captions</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-pink-700 mb-2">Engagement Tips</h5>
                            <ul className="text-sm text-pink-600 space-y-1">
                              <li>• Use trending Arabic hashtags</li>
                              <li>• Include English translations for broader reach</li>
                              <li>• Create carousel posts with step-by-step tutorials</li>
                              <li>• Collaborate with Arabic influencers</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                        <h4 className="font-semibold text-purple-800 mb-4 flex items-center">
                          <Video className="h-5 w-5 mr-2" />
                          TikTok Strategy
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-purple-700 mb-2">Viral Content Ideas</h5>
                            <ul className="text-sm text-purple-600 space-y-1">
                              <li>• <strong>Transformation Videos</strong>: Plain text to beautiful calligraphy</li>
                              <li>• <strong>Educational Content</strong>: Arabic alphabet and pronunciation</li>
                              <li>• <strong>Cultural Moments</strong>: Islamic holidays and celebrations</li>
                              <li>• <strong>Trending Challenges</strong>: Arabic typography challenges</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-purple-700 mb-2">Optimal Fonts for TikTok</h5>
                            <ul className="text-sm text-purple-600 space-y-1">
                              <li>• <strong>Jomhuria</strong> - Unique, memorable for viral content</li>
                              <li>• <strong>Rakkas</strong> - Bold, stands out in short videos</li>
                              <li>• <strong>Tajawal</strong> - Modern, appeals to young audiences</li>
                              <li>• <strong>Lemonada</strong> - Playful, perfect for fun content</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-purple-700 mb-2">Growth Tactics</h5>
                            <ul className="text-sm text-purple-600 space-y-1">
                              <li>• Jump on trending sounds with Arabic text</li>
                              <li>• Create duets with popular Arabic content</li>
                              <li>• Use relevant Arabic and English hashtags</li>
                              <li>• Post consistently during peak hours</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                        <Share2 className="h-5 w-5 mr-2" />
                        Facebook Strategy
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-blue-700 mb-2">Community Building</h5>
                          <ul className="text-sm text-blue-600 space-y-1">
                            <li>• Create Arabic calligraphy groups</li>
                            <li>• Share educational content about Arabic culture</li>
                            <li>• Host live calligraphy sessions</li>
                            <li>• Encourage user-generated content</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-700 mb-2">Business Applications</h5>
                          <ul className="text-sm text-blue-600 space-y-1">
                            <li>• Promote Arabic language services</li>
                            <li>• Share customer testimonials in Arabic</li>
                            <li>• Create event announcements</li>
                            <li>• Showcase portfolio work</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Twitter Strategy
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-green-700 mb-2">Trending Topics</h5>
                          <ul className="text-sm text-green-600 space-y-1">
                            <li>• Participate in Arabic trending hashtags</li>
                            <li>• Share daily Arabic wisdom quotes</li>
                            <li>• Comment on cultural events and holidays</li>
                            <li>• Engage with Arabic-speaking communities</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-700 mb-2">Content Format</h5>
                          <ul className="text-sm text-green-600 space-y-1">
                            <li>• Short, impactful Arabic phrases</li>
                            <li>• Thread series about Arabic typography</li>
                            <li>• Quote tweets with Arabic commentary</li>
                            <li>• Visual tweets with Arabic calligraphy</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-800 mb-4">📊 Cross-Platform Content Strategy</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Content Repurposing</h5>
                        <ul className="text-sm text-amber-600 space-y-1">
                          <li>• Adapt Instagram posts for Facebook</li>
                          <li>• Turn TikTok videos into Instagram Reels</li>
                          <li>• Extract quotes for Twitter posts</li>
                          <li>• Create platform-specific variations</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Consistent Branding</h5>
                        <ul className="text-sm text-amber-600 space-y-1">
                          <li>• Use consistent color schemes</li>
                          <li>• Maintain font style preferences</li>
                          <li>• Apply unified visual identity</li>
                          <li>• Create recognizable templates</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Analytics & Optimization</h5>
                        <ul className="text-sm text-amber-600 space-y-1">
                          <li>• Track engagement across platforms</li>
                          <li>• A/B test different font styles</li>
                          <li>• Monitor audience preferences</li>
                          <li>• Optimize posting schedules</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Viral Content Ideas & Templates */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800 flex items-center">
                  <Heart className="h-6 w-6 mr-3" />
                  Viral Arabic Content Ideas & Templates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Create content that resonates with Arabic-speaking audiences and has the potential to go viral.
                    These proven content formats and ideas have generated millions of views and high engagement rates.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                        <h4 className="font-semibold text-rose-800 mb-4">💫 Inspirational Content</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-rose-700 mb-2">Daily Motivation</h5>
                            <ul className="text-sm text-rose-600 space-y-1">
                              <li>• <strong>Morning Duas</strong>: Beautiful Islamic prayers for starting the day</li>
                              <li>• <strong>Success Quotes</strong>: Motivational Arabic quotes about achievement</li>
                              <li>• <strong>Life Wisdom</strong>: Traditional Arabic proverbs and sayings</li>
                              <li>• <strong>Gratitude Posts</strong>: Daily reminders about thankfulness</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-rose-700 mb-2">Popular Phrases</h5>
                            <div className="space-y-2">
                              <div className="border-l-4 border-rose-400 pl-3">
                                <p className="text-sm font-arabic text-gray-900">الحمد لله</p>
                                <p className="text-xs text-rose-600">Alhamdulillah (Praise be to Allah)</p>
                              </div>
                              <div className="border-l-4 border-rose-400 pl-3">
                                <p className="text-sm font-arabic text-gray-900">لا تيأس من رحمة الله</p>
                                <p className="text-xs text-rose-600">Never despair of Allah's mercy</p>
                              </div>
                              <div className="border-l-4 border-rose-400 pl-3">
                                <p className="text-sm font-arabic text-gray-900">كل شيء بوقته جميل</p>
                                <p className="text-xs text-rose-600">Everything is beautiful in its time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-800 mb-4">📚 Educational Content</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Language Learning</h5>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• <strong>Word of the Day</strong>: Daily Arabic vocabulary with beautiful typography</li>
                              <li>• <strong>Grammar Tips</strong>: Simple Arabic grammar rules with visual examples</li>
                              <li>• <strong>Pronunciation Guides</strong>: Audio-visual content for correct pronunciation</li>
                              <li>• <strong>Cultural Context</strong>: Explaining the cultural significance of phrases</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Calligraphy Tutorials</h5>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Step-by-step letter formation guides</li>
                              <li>• Different calligraphy styles comparison</li>
                              <li>• Tools and materials recommendations</li>
                              <li>• Historical background of Arabic scripts</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-green-800 mb-4">🎉 Trending & Seasonal</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Islamic Holidays</h5>
                            <ul className="text-sm text-green-600 space-y-1">
                              <li>• <strong>Ramadan</strong>: Daily iftar wishes and Quranic verses</li>
                              <li>• <strong>Eid Celebrations</strong>: Festive greetings and blessings</li>
                              <li>• <strong>Hajj Season</strong>: Prayers for pilgrims and spiritual content</li>
                              <li>• <strong>Islamic New Year</strong>: Reflective content and resolutions</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Cultural Moments</h5>
                            <ul className="text-sm text-green-600 space-y-1">
                              <li>• Arabic Language Day celebrations</li>
                              <li>• National days of Arabic-speaking countries</li>
                              <li>• Poetry appreciation posts</li>
                              <li>• Traditional arts and crafts features</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h4 className="font-semibold text-purple-800 mb-4">🎨 Creative Challenges</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-purple-700 mb-2">User Engagement</h5>
                            <ul className="text-sm text-purple-600 space-y-1">
                              <li>• <strong>Font Guessing Games</strong>: Identify the Arabic font style</li>
                              <li>• <strong>Translation Challenges</strong>: Guess the meaning of Arabic phrases</li>
                              <li>• <strong>Calligraphy Contests</strong>: User-submitted Arabic calligraphy</li>
                              <li>• <strong>Story Completion</strong>: Collaborative Arabic storytelling</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-purple-700 mb-2">Trending Hashtags</h5>
                            <ul className="text-sm text-purple-600 space-y-1">
                              <li>• #ArabicCalligraphy #الخط_العربي</li>
                              <li>• #ArabicQuotes #اقتباسات_عربية</li>
                              <li>• #LearnArabic #تعلم_العربية</li>
                              <li>• #ArabicCulture #الثقافة_العربية</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
                    <h4 className="font-semibold text-orange-800 mb-4">🔥 Viral Content Formula</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-orange-600 font-bold">1</span>
                        </div>
                        <h5 className="font-semibold text-orange-700 mb-1">Hook</h5>
                        <p className="text-xs text-orange-600">Attention-grabbing Arabic phrase or question</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-orange-600 font-bold">2</span>
                        </div>
                        <h5 className="font-semibold text-orange-700 mb-1">Visual</h5>
                        <p className="text-xs text-orange-600">Beautiful Arabic typography with cultural elements</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-orange-600 font-bold">3</span>
                        </div>
                        <h5 className="font-semibold text-orange-700 mb-1">Value</h5>
                        <p className="text-xs text-orange-600">Educational, inspirational, or entertaining content</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-orange-600 font-bold">4</span>
                        </div>
                        <h5 className="font-semibold text-orange-700 mb-1">CTA</h5>
                        <p className="text-xs text-orange-600">Clear call-to-action for engagement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Optimization & Best Practices */}
            <Card className="border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800">
                  ⚙️ Technical Optimization & Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Optimize your Arabic social media content for maximum reach, engagement, and technical performance
                    across different platforms and devices.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">📱 Mobile Optimization</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Text Readability</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Use minimum 14px font size for mobile screens</li>
                              <li>• Ensure high contrast between text and background</li>
                              <li>• Test readability on various device sizes</li>
                              <li>• Consider thumb-friendly interaction areas</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Image Specifications</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Instagram: 1080x1080px (square), 1080x1350px (portrait)</li>
                              <li>• TikTok: 1080x1920px (vertical)</li>
                              <li>• Facebook: 1200x630px (landscape)</li>
                              <li>• Twitter: 1200x675px (landscape)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">🎨 Design Guidelines</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Color Psychology</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• <strong>Gold</strong>: Luxury, tradition, Islamic heritage</li>
                              <li>• <strong>Green</strong>: Islam, peace, nature, growth</li>
                              <li>• <strong>Blue</strong>: Trust, wisdom, professionalism</li>
                              <li>• <strong>Red</strong>: Passion, energy, attention-grabbing</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Layout Principles</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Follow right-to-left reading pattern for Arabic</li>
                              <li>• Use generous white space for clarity</li>
                              <li>• Maintain consistent visual hierarchy</li>
                              <li>• Balance decorative and functional elements</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">📊 Analytics & Performance</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Key Metrics to Track</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Engagement rate (likes, comments, shares)</li>
                              <li>• Reach and impressions</li>
                              <li>• Click-through rates on links</li>
                              <li>• Follower growth and retention</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">A/B Testing Ideas</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Different Arabic fonts for same content</li>
                              <li>• Color schemes and backgrounds</li>
                              <li>• Post timing and frequency</li>
                              <li>• Caption length and hashtag usage</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">🚀 Growth Strategies</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Community Building</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Respond to comments in Arabic and English</li>
                              <li>• Collaborate with Arabic content creators</li>
                              <li>• Create user-generated content campaigns</li>
                              <li>• Host live sessions and Q&As</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-2">Content Consistency</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Maintain regular posting schedule</li>
                              <li>• Develop recognizable visual style</li>
                              <li>• Create content series and themes</li>
                              <li>• Plan content calendar around cultural events</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h4 className="font-semibold text-indigo-800 mb-4">🎯 Platform-Specific Optimization Tips</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <h5 className="font-semibold text-indigo-700 mb-2">Instagram</h5>
                        <ul className="text-sm text-indigo-600 space-y-1">
                          <li>• Use 3-5 relevant hashtags</li>
                          <li>• Post during peak hours (7-9 PM)</li>
                          <li>• Include location tags for local reach</li>
                          <li>• Create highlight covers in Arabic</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-indigo-700 mb-2">TikTok</h5>
                        <ul className="text-sm text-indigo-600 space-y-1">
                          <li>• Keep videos under 60 seconds</li>
                          <li>• Use trending sounds and effects</li>
                          <li>• Add captions for accessibility</li>
                          <li>• Engage with comments quickly</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-indigo-700 mb-2">Facebook</h5>
                        <ul className="text-sm text-indigo-600 space-y-1">
                          <li>• Write longer, engaging captions</li>
                          <li>• Use Facebook Groups for community</li>
                          <li>• Schedule posts for optimal timing</li>
                          <li>• Cross-promote on Instagram</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-indigo-700 mb-2">Twitter</h5>
                        <ul className="text-sm text-indigo-600 space-y-1">
                          <li>• Keep tweets concise and impactful</li>
                          <li>• Use relevant trending hashtags</li>
                          <li>• Engage in conversations</li>
                          <li>• Share threads for longer content</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-12">
            <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-purple-800 mb-4">
                  Start Creating Viral Arabic Content
                </h2>
                <p className="text-purple-700 mb-6 max-w-2xl mx-auto">
                  Transform your social media presence with stunning Arabic typography. 
                  Create content that resonates with Arabic-speaking audiences and boosts your engagement.
                </p>
                <Link href="/">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                    Create Content Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Design Tips</h3>
                <p className="text-sm text-gray-600 mb-4">Master professional Arabic calligraphy design techniques</p>
                <Link href="/tutorials/arabic-calligraphy-design-tips">
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Design Tips <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Font Selection</h3>
                <p className="text-sm text-gray-600 mb-4">Choose the perfect Arabic font for social media</p>
                <Link href="/tutorials/arabic-font-selection-guide">
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Font Guide <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Business Applications</h3>
                <p className="text-sm text-gray-600 mb-4">Explore Arabic typography for business branding</p>
                <Link href="/use-cases/business-logo-arabic-fonts">
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Business Use <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
          <Footer />
    </>
  )
}
