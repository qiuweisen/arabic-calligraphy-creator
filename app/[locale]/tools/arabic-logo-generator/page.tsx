import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { locales, defaultLocale } from "@/i18n"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ToolGeneratorClient } from "../tool-generator-client"

const TOOL_SLUG = "arabic-logo-generator"
const TOOL_NAME = "Arabic Calligraphy Logo Generator"
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
  const t = await getTranslations({ locale, namespace: "tools.arabicLogoGenerator.meta" })
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

export default async function ArabicLogoGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "tools.arabicLogoGenerator" })
  const generatorToolsT = await getTranslations({ locale, namespace: "footer.generatorTools" })
  const textToolT = await getTranslations({ locale, namespace: "tools.arabicTextGenerator" })
  const fontToolT = await getTranslations({ locale, namespace: "tools.arabicFontGenerator" })
  const features = t.raw("features") as Array<{ title: string; description: string }>
  const howToSteps = t.raw("howTo.steps") as string[]
  const faqItems = t.raw("faq.items") as Array<{ question: string; answer: string }>
  const showcaseItems = t.raw("showcase.items") as Array<{ title: string; description: string }>
  const applicationItems = t.raw("applications.items") as Array<{ title: string; description: string }>
  const checklistItems = t.raw("checklist.items") as string[]
  const toolBase = locale === defaultLocale ? "" : `/${locale}`
  const homeHref = locale === defaultLocale ? "/" : `/${locale}`
  const textToolHref = `${toolBase}/tools/arabic-text-generator`
  const fontToolHref = `${toolBase}/tools/arabic-font-generator`

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
    url: getToolUrl(locale),
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
          <ToolGeneratorClient initialFont="Reem Kufi" />
        </section>

        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">{t("showcase.title")}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {showcaseItems.map((item) => (
                <Card key={item.title} className="border-amber-100">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">{t("applications.title")}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {applicationItems.map((item) => (
                <Card key={item.title} className="border-amber-100">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-3xl mx-auto bg-white border border-amber-100 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">{t("checklist.title")}</h2>
            <ul className="space-y-3 text-gray-600">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
            <div className="grid gap-6 md:grid-cols-3">
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
              <Link href={fontToolHref} className="block">
                <Card className="border-amber-100 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">
                      {fontToolT("hero.title")}
                    </h3>
                    <p className="text-sm text-gray-600">{fontToolT("hero.description")}</p>
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
