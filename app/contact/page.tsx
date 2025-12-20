import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, MapPin, Phone, Clock, HelpCircle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { GeneratorCTA } from "@/components/generator-cta"

export const metadata: Metadata = {
  title: "Contact Us | Arabic Calligraphy Generator - Support & Feedback",
  description: "Get in touch with our team for questions, feedback, or support related to our Arabic Calligraphy Generator. We're here to help with technical support and general inquiries.",
  keywords: "contact, Arabic calligraphy support, feedback, calligraphy questions, Arabic typography help, customer service",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Us",
      "description": "Get in touch with our Arabic calligraphy experts. Contact us for support, feedback, or collaboration opportunities.",
      "url": "https://arabic-calligraphy-generator.com/contact"
}) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { href: "/", name: "Home" },
              { href: "/contact", name: "Contact" }
            ]} 
          />

          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageSquare className="h-4 w-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Have questions or feedback about our Arabic Calligraphy Generator? We'd love to hear from you!
            </p>
          </header>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Email Support</h3>
              <p className="text-sm text-blue-700 mb-4">Get detailed answers to your questions</p>
              <a 
                href="mailto:contact@arabic-calligraphy-generator.com" 
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                contact@arabic-calligraphy-generator.com
              </a>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">Response Time</h3>
              <p className="text-sm text-green-700 mb-4">We respond within 24 hours</p>
              <p className="text-green-600 font-medium text-sm">Monday - Friday</p>
              <p className="text-green-600 text-sm">9:00 AM - 5:00 PM EST</p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
              <HelpCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Quick Help</h3>
              <p className="text-sm text-purple-700 mb-4">Check our FAQ for instant answers</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/faq">Browse FAQ</Link>
              </Button>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-amber-800 font-medium">Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Your full name" 
                        className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-amber-800 font-medium">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-amber-800 font-medium">Subject *</Label>
                    <Input 
                      id="subject" 
                      placeholder="What is your message about?" 
                      className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-amber-800 font-medium">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your question, feedback, or issue in detail. The more information you provide, the better we can help you." 
                      className="min-h-[120px] border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      required
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button type="submit" className="bg-amber-600 hover:bg-amber-700 px-8">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & Help */}
            <div className="space-y-6">
              {/* FAQ Section */}
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 mb-4">
                    Before contacting us, check out our comprehensive FAQ section. You might find the answer you're looking for instantly!
                  </p>
                  <ul className="space-y-2 text-sm text-amber-600 mb-4">
                    <li>• How to use the Arabic calligraphy generator</li>
                    <li>• Supported fonts and export formats</li>
                    <li>• Troubleshooting display issues</li>
                    <li>• Commercial usage guidelines</li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/faq">Browse All FAQs</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Support Types */}
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800">What We Can Help With</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-amber-800">Technical Support:</strong>
                        <p className="text-amber-700">Generator issues, font problems, export troubles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-amber-800">Feature Requests:</strong>
                        <p className="text-amber-700">New fonts, features, or improvements you'd like to see</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-amber-800">General Feedback:</strong>
                        <p className="text-amber-700">Your thoughts on our tool and suggestions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-amber-800">Collaboration:</strong>
                        <p className="text-amber-700">Partnership opportunities and business inquiries</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <GeneratorCTA variant="featured" className="mb-8" />

          {/* Quick Links */}
          <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Explore More Resources
              </h3>
              <p className="text-amber-700 mb-6 max-w-md mx-auto">
                While you're here, discover more about Arabic calligraphy and our tools.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/guides">Learning Guides</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/blog">Blog Articles</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/templates">Templates</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
