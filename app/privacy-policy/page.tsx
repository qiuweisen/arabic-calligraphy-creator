import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | Arabic Calligraphy Generator",
  description: "Our privacy policy outlines how we collect, use, and protect your personal information when you use the Arabic Calligraphy Generator.",
  keywords: "privacy policy, data protection, user privacy, Arabic calligraphy generator terms",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Privacy Policy</h1>
              <p className="text-amber-700 text-lg">
                Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
              </p>
            </div>

            <div className="prose prose-amber max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Introduction</h2>
                <p>
                  This Privacy Policy explains how Arabic Calligraphy Generator ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website, use our calligraphy generation tool, or interact with our services.
                </p>
                <p>
                  We respect your privacy and are committed to protecting your personal data. Please read this Privacy Policy carefully to understand how we handle your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-amber-700 mb-2">Information You Provide to Us</h3>
                <p>We may collect the following types of information when you use our services:</p>
                <ul>
                  <li><strong>Account Information:</strong> If you create an account, we collect your name, email address, and password.</li>
                  <li><strong>Content Data:</strong> The Arabic text and design choices you create using our generator.</li>
                  <li><strong>Communication Data:</strong> Information you provide when contacting us, such as through our contact form or email.</li>
                  <li><strong>Subscription Information:</strong> If you subscribe to our newsletter, we collect your email address.</li>
                </ul>

                <h3 className="text-xl font-semibold text-amber-700 mb-2 mt-4">Information Collected Automatically</h3>
                <p>When you visit our website, we automatically collect certain information about your device and your interaction with our website, including:</p>
                <ul>
                  <li><strong>Usage Data:</strong> Information about how you use our website and services, such as the features you use and the time spent on the site.</li>
                  <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system, and platform.</li>
                  <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and to hold certain information.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul>
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To allow you to participate in interactive features when you choose to do so</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>To personalize your experience and to deliver content relevant to your interests</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Sharing Your Information</h2>
                <p>We may share your personal information in the following situations:</p>
                <ul>
                  <li><strong>With Service Providers:</strong> We may share your information with third-party service providers to help us operate our business, such as hosting providers, email service providers, and analytics services.</li>
                  <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                  <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
                  <li><strong>To Comply with Legal Obligations:</strong> We may disclose your information where we are legally required to do so.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Data Retention</h2>
                <p>
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Your Data Protection Rights</h2>
                <p>Depending on your location, you may have the following data protection rights:</p>
                <ul>
                  <li>The right to access, update, or delete the information we have on you.</li>
                  <li>The right of rectification - the right to have your information corrected if it is inaccurate or incomplete.</li>
                  <li>The right to object to our processing of your personal data.</li>
                  <li>The right of restriction - the right to request that we restrict the processing of your personal information.</li>
                  <li>The right to data portability - the right to request that we transfer the data we have collected to another organization, or directly to you.</li>
                  <li>The right to withdraw consent at any time, where we relied on your consent to process your personal information.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Cookies Policy</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul>
                  <li>By email: <a href="mailto:privacy@arabiccalligraphygenerator.site" className="text-amber-600 hover:text-amber-800">privacy@arabiccalligraphygenerator.site</a></li>
                  <li>By visiting our contact page: <Link href="/contact" className="text-amber-600 hover:text-amber-800">Contact Us</Link></li>
                </ul>
              </section>

              <div className="mt-12 flex justify-center">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/terms-of-service">View Terms of Service</Link>
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