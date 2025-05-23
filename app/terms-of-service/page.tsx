import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service | Arabic Calligraphy Generator",
  description: "Our Terms of Service outline the rules, guidelines, and legal terms that govern your use of the Arabic Calligraphy Generator website and tools.",
  keywords: "terms of service, terms and conditions, user agreement, legal terms, Arabic calligraphy generator terms",
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Terms of Service</h1>
              <p className="text-amber-700 text-lg">
                Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
              </p>
            </div>

            <div className="prose prose-amber max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">1. Introduction</h2>
                <p>
                  Welcome to Arabic Calligraphy Generator. These Terms of Service govern your use of our website and services. By accessing or using our website at <Link href="/" className="text-amber-600 hover:text-amber-800">arabic-calligraphy-generator.com</Link>, you agree to be bound by these Terms of Service.
                </p>
                <p>
                  Please read these Terms carefully before using our service. If you do not agree to all the terms and conditions of this agreement, you may not access or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">2. Definitions</h2>
                <ul>
                  <li><strong>"Service"</strong> refers to the Arabic Calligraphy Generator website and all tools, features, and content provided therein.</li>
                  <li><strong>"User"</strong> refers to any individual who accesses or uses our Service.</li>
                  <li><strong>"Content"</strong> refers to text, images, graphics, logos, audio, video, and other material that may be displayed on our Service.</li>
                  <li><strong>"User Content"</strong> refers to any content, including calligraphy designs, that users create using our Service.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">3. Acceptable Use</h2>
                <p>
                  By using our Service, you agree to:
                </p>
                <ul>
                  <li>Comply with all applicable laws and regulations.</li>
                  <li>Not use the Service for any illegal or unauthorized purpose.</li>
                  <li>Not attempt to gain unauthorized access to any portion of the Service or any systems or networks connected to the Service.</li>
                  <li>Not interfere with or disrupt the integrity or performance of the Service or the data contained therein.</li>
                  <li>Not create or submit unwanted electronic communications, such as "spam," to other users of the Service.</li>
                  <li>Not use the Service to create content that is offensive, defamatory, obscene, or otherwise objectionable.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">4. Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold text-amber-700 mb-2">Our Content</h3>
                <p>
                  The Service and its original content, features, and functionality are owned by Arabic Calligraphy Generator and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
                
                <h3 className="text-xl font-semibold text-amber-700 mb-2 mt-4">User Content</h3>
                <p>
                  When you create calligraphy designs using our Service, you retain ownership of the content you create. However, by using our Service, you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, and display such content in connection with the operation and promotion of our Service.
                </p>
                
                <h3 className="text-xl font-semibold text-amber-700 mb-2 mt-4">Third-Party Content</h3>
                <p>
                  Our Service may include or provide access to third-party content, such as fonts, images, or software. Such content is the property of its respective owners and may be protected by applicable intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">5. User Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                </p>
                <p>
                  You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">6. Limitation of Liability</h2>
                <p>
                  In no event shall Arabic Calligraphy Generator, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul>
                  <li>Your access to or use of or inability to access or use the Service.</li>
                  <li>Any conduct or content of any third party on the Service.</li>
                  <li>Any content obtained from the Service.</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">7. Disclaimer</h2>
                <p>
                  The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Arabic Calligraphy Generator expressly disclaims all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  We do not guarantee that the Service will be uninterrupted, timely, secure, or error-free, or that the results that may be obtained from the use of the Service will be accurate or reliable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">8. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of changes by posting the updated Terms on this page and updating the "Last Updated" date.
                </p>
                <p>
                  Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. You are advised to review these Terms periodically for any changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">10. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul>
                  <li>By email: <a href="mailto:legal@arabic-calligraphy-generator.com" className="text-amber-600 hover:text-amber-800">legal@arabic-calligraphy-generator.com</a></li>
                  <li>By visiting our contact page: <Link href="/contact" className="text-amber-600 hover:text-amber-800">Contact Us</Link></li>
                </ul>
              </section>

              <div className="mt-12 flex justify-center">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/privacy-policy">View Privacy Policy</Link>
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