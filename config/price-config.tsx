'use client';

import type { PricePlan } from '@/payment/types';
import { useTranslations } from 'next-intl';
import { websiteConfig } from './website';

/**
 * Get price plans with translations for client components
 *
 * NOTICE: This function should only be used in client components.
 * If you need to get the price plans in server components, use getAllPricePlans from lib/price-plan.ts instead.
 * Use this function when showing the pricing table or the billing card to the user.
 *
 * @returns The price plans with translated content
 */
export function getPricePlans(): Record<string, PricePlan> {
  const t = useTranslations('PricePlans');
  const priceConfig = websiteConfig.price;
  const plans: Record<string, PricePlan> = {};

  // Add translated content to free plan
  if (priceConfig.plans.free) {
    plans.free = {
      ...priceConfig.plans.free,
      name: t('free.name'),
      description: t('free.description'),
      features: [
        t('free.features.unlimitedPng'),
        t('free.features.basicFonts'),
        t('free.features.basicStyles'),
        t('free.features.lowResolution'),
      ],
      limits: [
        t('free.limits.withWatermark'),
        t('free.limits.noSvg'),
        t('free.limits.noCommercial'),
      ],
    };
  }

  // Add translated content to pro plan
  if (priceConfig.plans.pro) {
    plans.pro = {
      ...priceConfig.plans.pro,
      name: t('pro.name'),
      description: t('pro.description'),
      features: [
        t('pro.features.unlimitedDownloads'),
        t('pro.features.allFonts'),
        t('pro.features.allStyles'),
        t('pro.features.highResolution'),
        t('pro.features.noWatermark'),
        t('pro.features.svgExport'),
        t('pro.features.commercialLicense'),
      ],
    };
  }

  // Add translated content to ultra plan (if needed in future)
  if (priceConfig.plans.ultra && !priceConfig.plans.ultra.disabled) {
    plans.ultra = {
      ...priceConfig.plans.ultra,
      name: t('ultra.name'),
      description: t('ultra.description'),
      features: [
        t('ultra.features.allProFeatures'),
        t('ultra.features.apiAccess'),
        t('ultra.features.batchProcessing'),
        t('ultra.features.exclusiveFonts'),
        t('ultra.features.prioritySupport'),
      ],
    };
  }

  return plans;
}
