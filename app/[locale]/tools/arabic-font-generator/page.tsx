import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { locales, defaultLocale } from "@/i18n"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { ToolGeneratorClient } from "../tool-generator-client"

const TOOL_SLUG = "arabic-font-generator"
const TOOL_NAME = "Arabic Font Generator"
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arabic-calligraphy-generator.com"

const getToolUrl = (locale: string) =>
  locale === defaultLocale ? `${siteUrl}/tools/${TOOL_SLUG}` : `${siteUrl}/${locale}/tools/${TOOL_SLUG}`

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "tools.arabicFontGenerator.meta" })
  const canonical = getToolUrl(locale)
  const languages = Object.fromEntries(locales.map((lang) => [lang, getToolUrl(lang)]))

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": `${siteUrl}/tools/${TOOL_SLUG}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: canonical,
      siteName: "Arabic Calligraphy Generator",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  }
}

export default async function ArabicFontGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "tools.arabicFontGenerator" })
  const homeT = await getTranslations({ locale, namespace: "homepage" })
  const generatorT = await getTranslations({ locale, namespace: "generator" })
  const navT = await getTranslations({ locale, namespace: "navigation" })
  const generatorToolsT = await getTranslations({ locale, namespace: "footer.generatorTools" })
  const textToolT = await getTranslations({ locale, namespace: "tools.arabicTextGenerator" })
  const features = t.raw("features") as Array<{ title: string; description: string }>
  const howToSteps = t.raw("howTo.steps") as string[]
  const faqItems = t.raw("faq.items") as Array<{ question: string; answer: string }>
  const toolBase = locale === defaultLocale ? "" : `/${locale}`
  const homeHref = locale === defaultLocale ? "/" : `/${locale}`
  const textToolHref = `${toolBase}/tools/arabic-text-generator`
  const canonical = getToolUrl(locale)
  const fontLibraryItems = homeT.raw("features.fontLibrary.items") as string[]
  const fontShowcase = [
    { slug: "amiri", category: "Traditional" },
    { slug: "scheherazade", category: "Traditional" },
    { slug: "reem-kufi", category: "Kufi" },
    { slug: "aref-ruqaa", category: "Diwani" },
    { slug: "mirza", category: "Nastaliq" },
    { slug: "cairo", category: "Modern" },
    { slug: "tajawal", category: "Modern" },
    { slug: "rakkas", category: "Display" },
  ]
  const fontCards = fontShowcase
    .map((font) => ({ ...font, info: getFontInfoBySlug(font.slug) }))
    .filter((font) => font.info)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: TOOL_NAME,
    description: t("hero.description"),
    url: canonical,
    applicationCategory: "DesignApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: features.map((feature) => feature.title),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <section className="container mx-auto px-4 py-10 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-amber-700 mb-4">
              {t.rich("hero.eyebrow", {
                link: (chunks) => (
                  <Link href={homeHref} className="underline">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {t("hero.description")}
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <a href="#calligraphy-tool-section" className="inline-flex items-center gap-2">
                {t("hero.cta")} <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section id="calligraphy-tool-section" className="container mx-auto px-4 pb-12">
          <ToolGeneratorClient initialFont="Cairo" />
        </section>

        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-3">
              {homeT("features.fontLibrary.title")}
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              {homeT("features.fontLibrary.description")}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {fontCards.map((font) => (
                <Link key={font.slug} href={`/fonts/${font.slug}`} className="block">
                  <Card className="border-amber-100 hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-5">
                      <div className="text-xs uppercase tracking-wide text-amber-600 mb-2">
                        {generatorT(`fontCategories.${font.category}`)}
                      </div>
                      <h3 className="text-lg font-semibold text-amber-800">{font.info?.displayName}</h3>
                      <p className="text-xs text-gray-500 mt-2">{navT("arabicFonts")}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {fontLibraryItems.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-amber-600 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/fonts">{generatorT("ui.exploreFonts")}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-amber-200 text-amber-700 hover:bg-amber-50"
              >
                <Link href="/resources/free-arabic-fonts">{navT("dropdown.freeArabicFonts")}</Link>
              </Button>
            </div>
            <div className="mt-6 rounded-xl border border-amber-100 bg-white px-6 py-4 text-sm text-gray-600">
              {homeT("technicalFeatures.fontCollection.note")}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-12">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-amber-100">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-amber-800 mb-2">{feature.title}</h2>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-3xl mx-auto bg-white border border-amber-100 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              {t("howTo.title")}
            </h2>
            <ul className="space-y-3 text-gray-600">
              {howToSteps.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">{t("faq.title")}</h2>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <Card key={faq.question} className="border-amber-100">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-amber-800 mb-2">{faq.question}</h3>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              {generatorToolsT("title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link href={textToolHref} className="block">
                <Card className="border-amber-100 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">
                      {textToolT("hero.title")}
                    </h3>
                    <p className="text-sm text-gray-600">{textToolT("hero.description")}</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href={homeHref} className="block">
                <Card className="border-amber-100 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">
                      {generatorToolsT("arabicCalligraphy.title")}
                    </h3>
                    <p className="text-sm text-gray-600">{generatorToolsT("arabicCalligraphy.desc")}</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
