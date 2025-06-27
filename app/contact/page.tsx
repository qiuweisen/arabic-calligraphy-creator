import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Arabic Calligraphy Generator",
  description: "Get in touch with our team for questions, feedback, or support related to our Arabic Calligraphy Generator. We're here to help!",
  keywords: "contact, Arabic calligraphy support, feedback, calligraphy questions, Arabic typography help",
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
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Contact Us</h1>
              <p className="text-amber-700 text-lg max-w-2xl mx-auto">
                Have questions or feedback about our Arabic Calligraphy Generator? We'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="border border-amber-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow text-center">
                <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Email Us</h3>
                <p className="text-amber-700 mb-4">Our team is ready to assist you</p>
                <a href="mailto:contact@arabic-calligraphy-generator.com" className="text-amber-600 hover:text-amber-800 font-medium">
                  contact@arabic-calligraphy-generator.com
                </a>
              </div>

              <div className="border border-amber-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow text-center">
                <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Social Media</h3>
                <p className="text-amber-700 mb-4">Follow us and send a message</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-amber-600 hover:text-amber-800 font-medium">Twitter</a>
                  <a href="#" className="text-amber-600 hover:text-amber-800 font-medium">Facebook</a>
                  <a href="#" className="text-amber-600 hover:text-amber-800 font-medium">Instagram</a>
                </div>
              </div>

              <div className="border border-amber-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow text-center">
                <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-amber-800" />
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Office Hours</h3>
                <p className="text-amber-700 mb-4">We respond within 24 hours</p>
                <p className="text-amber-600">Monday - Friday</p>
                <p className="text-amber-600">9:00 AM - 5:00 PM EST</p>
              </div>
            </div>

            <div className="bg-white border border-amber-200 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-amber-800">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-amber-800">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email address" 
                      className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-amber-800">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What is your message about?" 
                    className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-amber-800">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your question or feedback in detail" 
                    className="min-h-[150px] border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>
                
                <div className="text-center">
                  <Button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-2">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-amber-700 mb-6">
                Looking for quick answers? Check out our FAQ section for common questions and solutions.
              </p>
              <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                <Link href="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 