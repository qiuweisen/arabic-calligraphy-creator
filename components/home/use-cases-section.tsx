"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import { useTranslations } from 'next-intl';

const cdnBaseUrl = 'https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev';

export function UseCasesSection() {
  const t = useTranslations('homepage.useCasesSection');

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('title')}</h2>
      <Tabs defaultValue="social" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-6">
          <TabsTrigger value="social">{t('socialMedia.title')}</TabsTrigger>
          <TabsTrigger value="print">{t('print.title')}</TabsTrigger>
          <TabsTrigger value="web">{t('web.title')}</TabsTrigger>
          <TabsTrigger value="art">{t('art.title')}</TabsTrigger>
        </TabsList>
        <TabsContent value="social">
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-3">{t('socialMedia.subtitle')}</h3>
                  <p className="text-amber-700 mb-4">
                    {t('socialMedia.description')}
                  </p>
                  <ul className="space-y-2 text-amber-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('socialMedia.instagram')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('socialMedia.facebook')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('socialMedia.twitter')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('socialMedia.profiles')}</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-[300px] h-[200px] rounded-lg border border-amber-200">
                    <Image
                      src={`${cdnBaseUrl}/arabic-calligraphy-in-twitter-post.png`}
                      alt="Social media examples"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="print">
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-3">{t('print.subtitle')}</h3>
                  <p className="text-amber-700 mb-4">
                    {t('print.description')}
                  </p>
                  <ul className="space-y-2 text-amber-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('print.business')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('print.invitations')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('print.posters')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('print.certificates')}</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-[300px] h-[200px] rounded-lg border border-amber-200">
                    <Image
                      src={`${cdnBaseUrl}/business-cards-with-arabic-typography.png`}
                      alt="Print examples"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="web">
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-3">{t('web.subtitle')}</h3>
                  <p className="text-amber-700 mb-4">
                    {t('web.description')}
                  </p>
                  <ul className="space-y-2 text-amber-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('web.logos')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('web.banners')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('web.icons')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('web.graphics')}</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-[300px] h-[200px] rounded-lg border border-amber-200">
                    <Image
                      src={`${cdnBaseUrl}/website-with-arabic-typography.png`}
                      alt="Web design examples"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="art">
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-3">{t('art.subtitle')}</h3>
                  <p className="text-amber-700 mb-4">
                    {t('art.description')}
                  </p>
                  <ul className="space-y-2 text-amber-700">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('art.wallArt')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('art.islamic')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('art.modern')}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                      <span>{t('art.traditional')}</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-[300px] h-[200px] rounded-lg border border-amber-200">
                    <Image
                      src={`${cdnBaseUrl}/arabic-calligraphy-flat-lay-composition.png`}
                      alt="Art examples"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                      sizes="300px"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
} 