import type { Metadata } from 'next'
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Gift, Calendar, Users, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wedding Arabic Calligraphy - Beautiful Islamic Wedding Invitations | Arabic Wedding Fonts 2024',
  description: 'Create stunning Arabic wedding calligraphy for invitations, decorations, and ceremonies. Discover traditional and modern Arabic fonts perfect for Islamic weddings, with cultural significance and design ideas.',
  keywords: 'wedding arabic calligraphy,islamic wedding invitations,arabic wedding fonts,muslim wedding design,arabic calligraphy invitations,wedding arabic text,islamic wedding cards',
  openGraph: {
    title: 'Wedding Arabic Calligraphy - Beautiful Islamic Wedding Invitations',
    description: 'Create stunning Arabic wedding calligraphy for invitations, decorations, and ceremonies. Discover traditional and modern Arabic fonts perfect for Islamic weddings.',
    type: 'article',
    url: 'https://arabic-calligraphy-generator.com/use-cases/wedding-arabic-calligraphy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Arabic Calligraphy - Beautiful Islamic Wedding Invitations',
    description: 'Create stunning Arabic wedding calligraphy for invitations, decorations, and ceremonies. Discover traditional and modern Arabic fonts perfect for Islamic weddings.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-generator.com/use-cases/wedding-arabic-calligraphy',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Wedding Arabic Calligraphy', href: '/use-cases/wedding-arabic-calligraphy' },
]

export default function WeddingArabicCalligraphyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Wedding Arabic Calligraphy - Beautiful Islamic Wedding Invitations",
    "description": "Create stunning Arabic wedding calligraphy for invitations, decorations, and ceremonies with traditional and modern Arabic fonts",
    "image": "https://arabic-calligraphy-generator.com/wedding-calligraphy-og.png",
    "author": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Generator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Generator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arabic-calligraphy-generator.com/logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://arabic-calligraphy-generator.com/use-cases/wedding-arabic-calligraphy"
    }
  }

  return (
    <>
      <StaticNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wedding Arabic Calligraphy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create breathtaking Arabic calligraphy for your special day. From elegant wedding invitations 
              to beautiful ceremony decorations, discover how Arabic typography can add cultural richness and 
              spiritual meaning to your Islamic wedding celebration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3">
                  Create Wedding Calligraphy <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tutorials/arabic-font-selection-guide">
                <Button variant="outline" className="border-rose-600 text-gray-600 hover:bg-rose-50 px-6 py-3">
                  Choose Wedding Fonts
                </Button>
              </Link>
            </div>
          </div>

          {/* Wedding Applications Overview */}
          <Card className="mb-12 border-rose-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100">
              <CardTitle className="text-2xl text-gray-900">
                💒 Wedding Calligraphy Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Invitations</h3>
                  <p className="text-sm text-gray-600">Elegant wedding invitation cards with Arabic blessings</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Decorations</h3>
                  <p className="text-sm text-gray-600">Beautiful venue decorations and signage</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Save the Date</h3>
                  <p className="text-sm text-gray-600">Memorable save-the-date announcements</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Programs</h3>
                  <p className="text-sm text-gray-600">Ceremony programs and menu cards</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Popular Wedding Phrases */}
            <Card className="border-rose-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Heart className="h-6 w-6 mr-3" />
                  Popular Arabic Wedding Phrases & Blessings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    Arabic wedding calligraphy often features traditional Islamic blessings and Quranic verses 
                    that invoke Allah's blessings upon the couple. Here are the most popular phrases used in 
                    wedding invitations and decorations.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Traditional Islamic Blessings</h4>
                        <div className="space-y-4">
                          <div className="border-l-4 border-rose-400 pl-4">
                            <p className="text-lg font-arabic text-gray-900 mb-1">بسم الله الرحمن الرحيم</p>
                            <p className="text-sm text-gray-600 italic">In the name of Allah, the Most Gracious, the Most Merciful</p>
                            <p className="text-xs text-gray-600 mt-1">Perfect for invitation headers</p>
                          </div>
                          <div className="border-l-4 border-rose-400 pl-4">
                            <p className="text-lg font-arabic text-gray-900 mb-1">بارك الله لكما وبارك عليكما</p>
                            <p className="text-sm text-gray-600 italic">May Allah bless you both and bless your union</p>
                            <p className="text-xs text-gray-600 mt-1">Traditional wedding blessing</p>
                          </div>
                          <div className="border-l-4 border-rose-400 pl-4">
                            <p className="text-lg font-arabic text-gray-900 mb-1">وجعل بينكما مودة ورحمة</p>
                            <p className="text-sm text-gray-600 italic">And placed between you love and mercy</p>
                            <p className="text-xs text-gray-600 mt-1">From Quran 30:21</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Modern Wedding Phrases</h4>
                        <div className="space-y-4">
                          <div className="border-l-4 border-pink-400 pl-4">
                            <p className="text-lg font-arabic text-gray-900 mb-1">زفاف مبارك</p>
                            <p className="text-sm text-gray-600 italic">Blessed Wedding</p>
                            <p className="text-xs text-gray-600 mt-1">Simple and elegant</p>
                          </div>
                          <div className="border-l-4 border-pink-400 pl-4">
                            <p className="text-lg font-arabic text-gray-900 mb-1">حفل زواج</p>
                            <p className="text-sm text-gray-600 italic">Wedding Ceremony</p>
                            <p className="text-xs text-gray-600 mt-1">For ceremony programs</p>
                          </div>
                          <div className="border-l-4 border-pink-400 pl-4">
                            <p className="text-lg font-arabic text-gray-900 mb-1">احتفظوا بالتاريخ</p>
                            <p className="text-sm text-gray-600 italic">Save the Date</p>
                            <p className="text-xs text-gray-600 mt-1">For announcements</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-800 mb-3">💡 Cultural Considerations</h4>
                    <ul className="text-sm text-amber-700 space-y-2">
                      <li>• <strong>Religious Accuracy</strong>: Ensure correct Arabic spelling and pronunciation</li>
                      <li>• <strong>Cultural Sensitivity</strong>: Understand the meaning and context of phrases</li>
                      <li>• <strong>Regional Variations</strong>: Consider local customs and preferences</li>
                      <li>• <strong>Family Traditions</strong>: Include family-specific blessings or phrases</li>
                      <li>• <strong>Scholarly Review</strong>: Have religious texts reviewed by knowledgeable individuals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Font Recommendations */}
            <Card className="border-rose-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Star className="h-6 w-6 mr-3" />
                  Best Arabic Fonts for Weddings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    Choosing the right Arabic font is crucial for creating the perfect wedding atmosphere. 
                    Different fonts convey different emotions and suit various wedding styles.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-amber-800 mb-4">Traditional & Formal</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2">Amiri</h5>
                          <div className="flex items-center mb-2">
                            {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-amber-600" />)}
                          </div>
                          <p className="text-sm text-amber-700">Perfect for traditional Islamic weddings. Elegant and dignified.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2">Scheherazade</h5>
                          <div className="flex items-center mb-2">
                            {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-amber-600" />)}
                          </div>
                          <p className="text-sm text-amber-700">Classic Naskh style, ideal for religious texts and formal invitations.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-emerald-600 mb-4">Modern & Contemporary</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-emerald-600 mb-2">Cairo</h5>
                          <div className="flex items-center mb-2">
                            {[1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-amber-600" />)}
                            <Star className="h-3 w-3 text-gray-600" />
                          </div>
                          <p className="text-sm text-emerald-600">Clean and modern, perfect for contemporary wedding designs.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-emerald-600 mb-2">Tajawal</h5>
                          <div className="flex items-center mb-2">
                            {[1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-amber-600" />)}
                            <Star className="h-3 w-3 text-gray-600" />
                          </div>
                          <p className="text-sm text-emerald-600">Stylish and trendy, great for modern Muslim couples.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h4 className="font-semibold text-amber-800 mb-4">Decorative & Artistic</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2">Lemonada</h5>
                          <div className="flex items-center mb-2">
                            {[1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-amber-600" />)}
                            <Star className="h-3 w-3 text-gray-600" />
                          </div>
                          <p className="text-sm text-amber-700">Rounded and friendly, perfect for casual or outdoor weddings.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2">Rakkas</h5>
                          <div className="flex items-center mb-2">
                            {[1,2,3].map(i => <Star key={i} className="h-3 w-3 fill-yellow-400 text-amber-600" />)}
                            {[4,5].map(i => <Star key={i} className="h-3 w-3 text-gray-600" />)}
                          </div>
                          <p className="text-sm text-amber-700">Bold and decorative, use sparingly for accent text only.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">🎨 Wedding Design Guidelines</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Font Hierarchy</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• <strong>Main Blessing</strong>: Use traditional fonts (Amiri, Scheherazade)</li>
                          <li>• <strong>Couple Names</strong>: Elegant, readable fonts</li>
                          <li>• <strong>Details</strong>: Clean, modern fonts for dates and venues</li>
                          <li>• <strong>Decorative Elements</strong>: Artistic fonts for accents</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Color Recommendations</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• <strong>Gold & Cream</strong>: Classic and luxurious</li>
                          <li>• <strong>Deep Red & Gold</strong>: Traditional and rich</li>
                          <li>• <strong>Navy & Silver</strong>: Modern and elegant</li>
                          <li>• <strong>Emerald & Gold</strong>: Sophisticated and Islamic</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Design Ideas & Inspiration */}
            <Card className="border-rose-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  🎨 Wedding Design Ideas & Inspiration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    Discover creative ways to incorporate Arabic calligraphy into every aspect of your wedding celebration.
                    From intimate details to grand displays, Arabic typography can transform your special day.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Invitation Suite Ideas</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Main Invitation</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Feature Quranic verse about love and marriage</li>
                              <li>• Include couple's names in elegant Arabic calligraphy</li>
                              <li>• Add traditional Islamic geometric patterns</li>
                              <li>• Use gold foil for premium finish</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">RSVP Cards</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Simple "نعم" (Yes) and "لا" (No) options</li>
                              <li>• Include dietary preferences in Arabic</li>
                              <li>• Add small decorative Arabic motifs</li>
                              <li>• Match the main invitation's color scheme</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Information Cards</h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Venue details with Arabic address</li>
                              <li>• Dress code suggestions in Arabic</li>
                              <li>• Gift registry information</li>
                              <li>• Transportation and accommodation details</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-6">
                        <h4 className="font-semibold text-amber-800 mb-4">Ceremony Decorations</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Backdrop & Signage</h5>
                            <ul className="text-sm text-amber-600 space-y-1">
                              <li>• Large Arabic blessing as ceremony backdrop</li>
                              <li>• Welcome signs in Arabic and English</li>
                              <li>• Directional signage for different areas</li>
                              <li>• Photo booth props with Arabic phrases</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Table Settings</h5>
                            <ul className="text-sm text-amber-600 space-y-1">
                              <li>• Menu cards with Arabic dish names</li>
                              <li>• Table numbers in Arabic numerals</li>
                              <li>• Place cards with guest names in Arabic</li>
                              <li>• Centerpiece cards with love quotes</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Ceremony Programs</h5>
                            <ul className="text-sm text-amber-600 space-y-1">
                              <li>• Order of service in Arabic and English</li>
                              <li>• Explanation of Islamic wedding traditions</li>
                              <li>• Prayers and blessings for guests to follow</li>
                              <li>• Thank you message from the couple</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-emerald-600 mb-4">💡 Creative Applications</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-semibold text-emerald-600 mb-2">Digital Elements</h5>
                        <ul className="text-sm text-emerald-600 space-y-1">
                          <li>• Wedding website headers</li>
                          <li>• Social media announcements</li>
                          <li>• Digital save-the-dates</li>
                          <li>• Live streaming overlays</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-emerald-600 mb-2">Keepsakes & Favors</h5>
                        <ul className="text-sm text-emerald-600 space-y-1">
                          <li>• Personalized prayer books</li>
                          <li>• Arabic calligraphy bookmarks</li>
                          <li>• Custom Islamic art prints</li>
                          <li>• Engraved jewelry with Arabic text</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-emerald-600 mb-2">Photography Props</h5>
                        <ul className="text-sm text-emerald-600 space-y-1">
                          <li>• Arabic quote signs for photos</li>
                          <li>• Calligraphy banners and flags</li>
                          <li>• Decorative Arabic frames</li>
                          <li>• Henna design inspiration cards</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Guidelines & Etiquette */}
            <Card className="border-rose-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  🕌 Cultural Guidelines & Islamic Wedding Etiquette
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    Understanding Islamic wedding traditions and cultural sensitivities is essential when creating
                    Arabic wedding calligraphy. Here are important guidelines to ensure your designs are respectful and appropriate.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-amber-800 mb-4">Religious Considerations</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Quranic Verses</h5>
                            <ul className="text-sm text-amber-700 space-y-1">
                              <li>• Always verify accuracy with Islamic scholars</li>
                              <li>• Use complete verses, not partial quotes</li>
                              <li>• Ensure proper Arabic grammar and diacritics</li>
                              <li>• Consider the context and meaning</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Islamic Phrases</h5>
                            <ul className="text-sm text-amber-700 space-y-1">
                              <li>• Use authentic traditional blessings</li>
                              <li>• Avoid mixing religious and secular content inappropriately</li>
                              <li>• Respect the sacred nature of religious text</li>
                              <li>• Consider regional Islamic traditions</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-emerald-600 mb-4">Cultural Sensitivity</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-emerald-600 mb-2">Family Traditions</h5>
                            <ul className="text-sm text-emerald-600 space-y-1">
                              <li>• Consult with both families about preferences</li>
                              <li>• Consider regional Arabic dialects</li>
                              <li>• Respect different Islamic schools of thought</li>
                              <li>• Include family-specific customs</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-emerald-600 mb-2">Guest Considerations</h5>
                            <ul className="text-sm text-emerald-600 space-y-1">
                              <li>• Provide translations for non-Arabic speakers</li>
                              <li>• Explain the meaning of Arabic phrases</li>
                              <li>• Consider mixed-faith guest lists</li>
                              <li>• Ensure inclusive and welcoming language</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-amber-800 mb-4">📚 Recommended Quranic Verses for Weddings</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-400 pl-4">
                        <p className="text-sm font-semibold text-amber-700 mb-1">Quran 30:21</p>
                        <p className="text-lg font-arabic text-gray-900 mb-2">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>
                        <p className="text-sm text-amber-700 italic">
                          "And among His signs is that He created for you from yourselves mates that you may find tranquility in them;
                          and He placed between you affection and mercy."
                        </p>
                      </div>
                      <div className="border-l-4 border-purple-400 pl-4">
                        <p className="text-sm font-semibold text-amber-700 mb-1">Quran 2:187</p>
                        <p className="text-lg font-arabic text-gray-900 mb-2">هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ</p>
                        <p className="text-sm text-amber-700 italic">
                          "They are clothing for you and you are clothing for them."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="font-semibold text-red-600 mb-3">⚠️ Important Guidelines</h4>
                    <ul className="text-sm text-red-600 space-y-2">
                      <li>• <strong>Accuracy First</strong>: Always double-check Arabic text with native speakers or scholars</li>
                      <li>• <strong>Context Matters</strong>: Understand the full meaning and appropriate usage of religious texts</li>
                      <li>• <strong>Respect Traditions</strong>: Honor both families' cultural and religious backgrounds</li>
                      <li>• <strong>Professional Review</strong>: Consider having designs reviewed by Islamic scholars</li>
                      <li>• <strong>Inclusive Design</strong>: Create designs that welcome all guests while honoring Islamic traditions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Practical Tips & Implementation */}
            <Card className="border-rose-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  🛠️ Practical Implementation Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    Transform your Arabic calligraphy designs into beautiful wedding materials with these practical tips
                    for printing, digital use, and professional implementation.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Printing Guidelines</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• <strong>Resolution</strong>: Use 300 DPI minimum for print</li>
                        <li>• <strong>Color Mode</strong>: Convert to CMYK for printing</li>
                        <li>• <strong>Paper Choice</strong>: Consider texture and weight</li>
                        <li>• <strong>Bleed Area</strong>: Add 3mm bleed for trimming</li>
                        <li>• <strong>Test Prints</strong>: Always do test prints first</li>
                        <li>• <strong>Professional Printing</strong>: Use quality print services</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Digital Applications</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• <strong>Website Headers</strong>: Use SVG for scalability</li>
                        <li>• <strong>Social Media</strong>: Optimize for platform sizes</li>
                        <li>• <strong>Email Signatures</strong>: Keep file sizes small</li>
                        <li>• <strong>Digital Invites</strong>: Ensure mobile compatibility</li>
                        <li>• <strong>Video Overlays</strong>: Use transparent backgrounds</li>
                        <li>• <strong>Presentations</strong>: High contrast for visibility</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Timeline & Planning</h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• <strong>6 Months Before</strong>: Finalize design concepts</li>
                        <li>• <strong>4 Months Before</strong>: Complete invitation designs</li>
                        <li>• <strong>3 Months Before</strong>: Send save-the-dates</li>
                        <li>• <strong>2 Months Before</strong>: Send main invitations</li>
                        <li>• <strong>1 Month Before</strong>: Finalize ceremony materials</li>
                        <li>• <strong>1 Week Before</strong>: Prepare day-of signage</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-800 mb-4">💰 Budget Considerations</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Cost-Effective Options</h5>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• Use our free online generator for basic designs</li>
                          <li>• Print at home for small quantities</li>
                          <li>• Digital-only save-the-dates and RSVPs</li>
                          <li>• DIY decorations using printed designs</li>
                          <li>• Reuse designs across multiple items</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Premium Upgrades</h5>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• Professional calligraphy consultation</li>
                          <li>• Custom font creation and modification</li>
                          <li>• Luxury printing with foil and embossing</li>
                          <li>• Large format printing for backdrops</li>
                          <li>• Professional design services</li>
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
            <Card className="bg-gradient-to-r from-rose-100 to-pink-100 border-rose-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Create Your Wedding Calligraphy
                </h2>
                <p className="text-gray-900 mb-6 max-w-2xl mx-auto">
                  Start designing beautiful Arabic calligraphy for your special day. 
                  Choose from traditional blessings or create custom text with our easy-to-use generator.
                </p>
                <Link href="/">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg">
                    Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Font Selection Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Learn how to choose the perfect Arabic font for weddings</p>
                <Link href="/tutorials/arabic-font-selection-guide">
                  <Button variant="outline" size="sm" className="border-rose-600 text-gray-600 hover:bg-rose-50">
                    Font Guide <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Design Tips</h3>
                <p className="text-sm text-gray-600 mb-4">Master professional Arabic calligraphy design techniques</p>
                <Link href="/tutorials/arabic-calligraphy-design-tips">
                  <Button variant="outline" size="sm" className="border-rose-600 text-gray-600 hover:bg-rose-50">
                    Design Tips <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Business Use Cases</h3>
                <p className="text-sm text-gray-600 mb-4">Explore Arabic calligraphy for business and branding</p>
                <Link href="/use-cases/business-logo-arabic-fonts">
                  <Button variant="outline" size="sm" className="border-rose-600 text-gray-600 hover:bg-rose-50">
                    Business Cases <ArrowRight className="ml-1 h-3 w-3" />
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
