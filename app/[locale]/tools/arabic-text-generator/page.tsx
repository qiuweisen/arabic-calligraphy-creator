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

const TOOL_SLUG = "arabic-text-generator"
const TOOL_NAME = "Arabic Text Generator"
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
  const t = await getTranslations({ locale, namespace: "tools.arabicTextGenerator.meta" })
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

export default async function ArabicTextGeneratorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "tools.arabicTextGenerator" })
  const homeT = await getTranslations({ locale, namespace: "homepage" })
  const generatorT = await getTranslations({ locale, namespace: "generator" })
  const navT = await getTranslations({ locale, namespace: "navigation" })
  const generatorToolsT = await getTranslations({ locale, namespace: "footer.generatorTools" })
  const fontToolT = await getTranslations({ locale, namespace: "tools.arabicFontGenerator" })
  const features = t.raw("features") as Array<{ title: string; description: string }>
  const howToSteps = t.raw("howTo.steps") as string[]
  const faqItems = t.raw("faq.items") as Array<{ question: string; answer: string }>
  const toolBase = locale === defaultLocale ? "" : `/${locale}`
  const homeHref = locale === defaultLocale ? "/" : `/${locale}`
  const fontToolHref = `${toolBase}/tools/arabic-font-generator`
  const canonical = getToolUrl(locale)
  const exportItems = homeT.raw("features.export.items") as string[]
  const phraseTemplates = [
    { label: "Bismillah", key: "bismillah" },
    { label: "Alhamdulillah", key: "alhamdulillah" },
    { label: "Mashallah", key: "mashallah" },
    { label: "Subhanallah", key: "subhanallah" },
    { label: "Allahu Akbar", key: "allahuakbar" },
    { label: "La ilaha illallah", key: "lailahaillallah" },
    { label: "Astaghfirullah", key: "astaghfirullah" },
    { label: "Allahumma salli", key: "allahummasalli" },
  ]
  const useCases = [
    { title: homeT("useCases.wedding.title"), description: homeT("useCases.wedding.description") },
    { title: homeT("useCases.business.title"), description: homeT("useCases.business.description") },
    { title: homeT("useCases.social.title"), description: homeT("useCases.social.description") },
    { title: homeT("useCases.religious.title"), description: homeT("useCases.religious.description") },
  ]
  const outputHighlights = [
    {
      title: homeT("features.export.title"),
      description: homeT("features.export.description"),
      items: exportItems,
    },
    {
      title: homeT("features.sharing.title"),
      description: homeT("features.sharing.description"),
    },
    {
      title: homeT("features.privacy.title"),
      description: homeT("features.privacy.description"),
    },
  ]

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
          <ToolGeneratorClient initialFont="Amiri" />
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              {generatorT("textTab.templates")}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {phraseTemplates.map((phrase) => (
                <Card key={phrase.key} className="border-amber-100">
                  <CardContent className="p-5">
                    <div className="text-xs uppercase tracking-wide text-amber-600 mb-2">
                      {phrase.label}
                    </div>
                    <p className="text-sm text-gray-600">
                      {generatorT(`commonPhrases.${phrase.key}`)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              {homeT("useCases.title")}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {useCases.map((useCase) => (
                <Card key={useCase.title} className="border-amber-100">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">{useCase.title}</h3>
                    <p className="text-sm text-gray-600">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6 md:grid-cols-3">
              {outputHighlights.map((highlight) => (
                <Card key={highlight.title} className="border-amber-100">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">{highlight.title}</h3>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                    {highlight.items ? (
                      <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        {highlight.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-amber-600 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </CardContent>
                </Card>
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
