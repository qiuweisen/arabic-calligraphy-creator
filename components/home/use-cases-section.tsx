"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';

export function UseCasesSection() {
  const t = useTranslations('homepage.useCasesSection');
  const [activeCase, setActiveCase] = useState('socialMedia');

  const useCases = [
    {
      id: 'socialMedia',
      icon: '📱',
      title: t('socialMedia.title'),
      description: t('socialMedia.description'),
      image: 'arabic-calligraphy-in-twitter-post.png'
    },
    {
      id: 'print',
      icon: '🎨',
      title: t('print.title'),
      description: t('print.description'),
      image: 'business-cards-with-arabic-typography.png'
    },
    {
      id: 'web',
      icon: '🌐',
      title: t('web.title'),
      description: t('web.description'),
      image: 'website-with-arabic-typography.png'
    },
    {
      id: 'art',
      icon: '🕌',
      title: t('art.title'),
      description: t('art.description'),
      image: 'arabic-calligraphy-flat-lay-composition.png'
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('title')}</h2>
      <p className="text-amber-700 text-center mb-8 max-w-3xl mx-auto">
        {t('description')}
      </p>
      
      {/* 左右分栏布局：左侧列表，右侧图片 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 左侧：场景列表 */}
        <div className="space-y-2">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="border border-amber-200 rounded-lg overflow-hidden">
              {/* 场景标题 */}
              <button
                className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-amber-50 transition-colors ${
                  activeCase === useCase.id ? 'bg-amber-100 border-amber-300 text-amber-900 font-semibold' : 'text-amber-700'
                }`}
                onClick={() => setActiveCase(useCase.id)} // 修改点击逻辑，始终选中
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{useCase.icon}</span>
                  <span className="font-semibold text-amber-900">{useCase.title}</span>
                </div>
                {activeCase === useCase.id ? (
                  <ChevronDown className="w-5 h-5 text-amber-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-amber-500" />
                )}
              </button>
              
              {/* 展开的描述 */}
              {activeCase === useCase.id && (
                <div className="px-4 pb-4 pt-2 bg-amber-50 border-t border-amber-200">
                  <p className="text-sm text-amber-700">{useCase.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* 右侧：对应图片 */}
        <div className="flex items-center justify-center">
          {activeCase && (
            <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden border border-amber-200">
              <Image
                src={`https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/${useCases.find(uc => uc.id === activeCase)?.image}`}
                alt={`${useCases.find(uc => uc.id === activeCase)?.title} example`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          )}
          {!activeCase && (
            <div className="flex items-center justify-center w-full h-64 lg:h-80 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-600 text-center">
                点击左侧场景查看示例图片
              </p>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
} 