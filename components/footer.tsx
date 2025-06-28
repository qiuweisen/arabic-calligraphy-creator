import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  return (
    <footer className="bg-amber-900 text-amber-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-900 font-bold text-lg">
                خط
              </div>
              <span className="font-bold text-amber-100">ArabicCalligraphy</span>
            </div>
            <p className="text-amber-200 mb-4 text-sm">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase">{t('arabicCalligraphy')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-amber-200 hover:text-white transition-colors">
                  {t('generator')}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-amber-200 hover:text-white transition-colors">
                  {t('features')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-amber-200 hover:text-white transition-colors">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-amber-200 hover:text-white transition-colors">
                  {t('faq')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-200 hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase">{t('learning')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tutorials" className="text-amber-200 hover:text-white transition-colors">
                  {t('tutorials')}
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-amber-200 hover:text-white transition-colors">
                  {t('beginnerGuide')}
                </Link>
              </li>
              <li>
                <Link href="/fonts" className="text-amber-200 hover:text-white transition-colors">
                  {t('fontLibrary')}
                </Link>
              </li>
              <li>
                <Link href="/resources/free-arabic-fonts" className="text-amber-200 hover:text-white transition-colors">
                  {t('fontDownloads')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase">{t('popular.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fonts/amiri" className="text-amber-200 hover:text-white transition-colors">
                  {t('popular.amiriFont')}
                </Link>
              </li>
              <li>
                <Link href="/fonts/cairo" className="text-amber-200 hover:text-white transition-colors">
                  {t('popular.cairoFont')}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/wedding-arabic-calligraphy" className="text-amber-200 hover:text-white transition-colors">
                  {t('popular.weddingCalligraphy')}
                </Link>
              </li>
              <li>
                <Link href="/use-cases/business-logo-arabic-fonts" className="text-amber-200 hover:text-white transition-colors">
                  {t('popular.businessLogos')}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-amber-200 hover:text-white transition-colors">
                  {t('popular.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-amber-200 hover:text-white transition-colors">
                  {t('popular.termsOfService')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-amber-800 text-center text-sm text-amber-300">
          {t('copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  )
}
