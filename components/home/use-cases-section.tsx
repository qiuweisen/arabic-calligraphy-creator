"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

const cdnBaseUrl = 'https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev';

export function UseCasesSection() {
  const t = useTranslations('homepage.useCasesSection');

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('title')}</h2>
      <p className="text-amber-700 text-center mb-8 max-w-3xl mx-auto">
        Discover how our Arabic calligraphy generator serves different creative needs across industries and personal projects
      </p>
      
      {/* 四象限网格布局 - 替代Tab切换 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Social Media Card */}
        <Card className="border-amber-200 bg-white hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">{t('socialMedia.title')}</h3>
            
            <p className="text-amber-700 mb-4 text-sm">
              {t('socialMedia.description')}
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('socialMedia.instagram')}</span>
              </div>
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('socialMedia.facebook')}</span>
              </div>
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('socialMedia.twitter')}</span>
              </div>
            </div>
            
            <div className="relative w-full h-32 mb-4 rounded border border-amber-200 overflow-hidden">
              <Image
                src={`${cdnBaseUrl}/arabic-calligraphy-in-twitter-post.png`}
                alt={t('socialMedia.imageAlt')}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            
            <Link 
              href="/use-cases/social-media-arabic-typography" 
              className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm"
            >
              Learn More →
            </Link>
          </CardContent>
        </Card>
        
        {/* Print & Wedding Card */}
        <Card className="border-amber-200 bg-white hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">{t('print.title')}</h3>
            
            <p className="text-amber-700 mb-4 text-sm">
              {t('print.description')}
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('print.business')}</span>
              </div>
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('print.invitations')}</span>
              </div>
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('print.posters')}</span>
              </div>
            </div>
            
            <div className="relative w-full h-32 mb-4 rounded border border-amber-200 overflow-hidden">
              <Image
                src={`${cdnBaseUrl}/business-cards-with-arabic-typography.png`}
                alt="Print examples"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            
            <Link 
              href="/use-cases/wedding-arabic-calligraphy" 
              className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm"
            >
              Learn More →
            </Link>
          </CardContent>
        </Card>
        
        {/* Web & Business Card */}
        <Card className="border-amber-200 bg-white hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">{t('web.title')}</h3>
            
            <p className="text-amber-700 mb-4 text-sm">
              {t('web.description')}
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('web.logos')}</span>
              </div>
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('web.banners')}</span>
              </div>
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('web.icons')}</span>
              </div>
            </div>
            
            <div className="relative w-full h-32 mb-4 rounded border border-amber-200 overflow-hidden">
              <Image
                src={`${cdnBaseUrl}/website-with-arabic-typography.png`}
                alt="Web design examples"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            
            <Link 
              href="/use-cases/business-logo-arabic-fonts" 
              className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm"
            >
              Learn More →
            </Link>
          </CardContent>
        </Card>
        
        {/* Islamic Art & Decoration Card */}
        <Card className="border-amber-200 bg-white hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-amber-800 mb-3">{t('art.title')}</h3>
            
            <p className="text-amber-700 mb-4 text-sm">
              {t('art.description')}
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('art.wallArt')}</span>
              </div>
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('art.islamic')}</span>
              </div>
              <div className="flex items-center text-sm text-amber-700">
                <span className="text-amber-600 mr-2">•</span>
                <span>{t('art.modern')}</span>
              </div>
            </div>
            
            <div className="relative w-full h-32 mb-4 rounded border border-amber-200 overflow-hidden">
              <Image
                src={`${cdnBaseUrl}/arabic-calligraphy-flat-lay-composition.png`}
                alt="Art examples"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            
            <Link 
              href="/use-cases/religious-arabic-calligraphy" 
              className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm"
            >
              Learn More →
            </Link>
          </CardContent>
        </Card>
        
      </div>
    </section>
  );
} 