import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Palette, Zap, Users, Target } from "lucide-react";
import { StaticNavbar } from "@/components/static-navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Arabic Calligraphy Generator",
  description: "Learn about our mission to create the best online Arabic calligraphy generator, blending art, technology, and user experience.",
  keywords: "about Arabic calligraphy generator, our mission, Arabic art tool, calligraphy technology, online design tool",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 text-amber-600 hover:text-amber-800 hover:bg-amber-50">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl border border-amber-100">
              <div className="text-center mb-10">
                <Target className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">Our Mission</h1>
                <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                  To empower creativity by providing a beautiful, powerful, and user-friendly online Arabic calligraphy generator that surpasses existing tools in aesthetics, functionality, and overall experience.
                </p>
              </div>

              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-12 border border-amber-200">
                <Image
                  src="/arabic-calligraphy-flat-lay-composition.png"
                  alt="Arabic calligraphy tools and artwork"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center px-4">Blending Tradition with Modern Technology</h2>
                </div>
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-amber-800 mb-6 flex items-center">
                  <Sparkles className="h-8 w-8 text-amber-600 mr-3" />
                  What We Aim For
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  We are passionate about Arabic calligraphy, a timeless art form rich in history and beauty. Our goal is to make this art accessible to everyone, from seasoned artists to curious beginners. We believe that technology can enhance tradition, and our platform is built on this philosophy.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our project, the "Next-Generation Arabic Calligraphy Online Generator (Deluxe Edition)," is driven by the desire to offer an unparalleled creative experience. We're not just building another tool; we're crafting an environment where art and technology meet seamlessly.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-amber-800 mb-8 flex items-center">
                  <Palette className="h-8 w-8 text-amber-600 mr-3" />
                  Core Principles Guiding Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <div className="p-3 bg-amber-100 rounded-full mr-4">
                      <Sparkles className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-700 mb-2">Superior UI/UX</h3>
                      <p className="text-gray-600 leading-relaxed">
                        A modern, elegant interface inspired by Arabic art, with warm color palettes. We prioritize intuitive navigation and a delightful user experience on both desktop and mobile.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-amber-100 rounded-full mr-4">
                      <Zap className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-700 mb-2">Powerful Core Features</h3>
                      <p className="text-gray-600 leading-relaxed">
                        From extensive font libraries with live previews to advanced styling options like gradients, shadows, and Kashida control, we offer robust tools for creative expression.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-amber-100 rounded-full mr-4">
                      <Users className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-700 mb-2">Enhanced Functionality & Content</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We provide curated design templates, comprehensive FAQs, "How-to-Use" guides, and insightful blog content covering calligraphy history, styles, and tutorials.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-amber-100 rounded-full mr-4">
                      <Target className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-700 mb-2">SEO and Smart Linking</h3>
                      <p className="text-gray-600 leading-relaxed">
                        High-quality content optimized for search engines, with intelligent internal linking between our tools, blogs, and font guides to provide a rich, interconnected experience.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="mb-10">
                <h2 className="text-3xl font-semibold text-amber-800 mb-6 flex items-center">
                  <Zap className="h-8 w-8 text-amber-600 mr-3" />
                  Our Commitment
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  We are committed to continuous improvement, listening to our users, and evolving our platform to meet the needs of the creative community. Our vision is to be the leading resource for online Arabic calligraphy creation, fostering a space where art, culture, and technology thrive together.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Explore our <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold">calligraphy generator</Link>, dive into our <Link href="/blog" className="text-amber-600 hover:text-amber-700 font-semibold">blog</Link>, or browse our <Link href="/fonts" className="text-amber-600 hover:text-amber-700 font-semibold">font library</Link> to start your journey with us.
                </p>
              </section>

              <div className="text-center mt-12">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6" asChild>
                  <Link href="/">Start Creating Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
