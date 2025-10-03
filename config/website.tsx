import { PaymentTypes, PlanIntervals } from '@/payment/types';

/**
 * Website configuration without translations
 * This file contains all app-wide settings including payment, auth, features, etc.
 */
export const websiteConfig = {
  ui: {
    theme: {
      defaultTheme: 'default',
      enableSwitch: true,
    },
    mode: {
      defaultMode: 'light',
      enableSwitch: true,
    },
  },
  metadata: {
    images: {
      ogImage: '/og.png',
      logoLight: '/logo.png',
      logoDark: '/logo-dark.png',
    },
    social: {
      github: 'https://github.com/yourusername',
      twitter: 'https://twitter.com/yourusername',
      facebook: 'https://facebook.com/yourpage',
    },
  },
  features: {
    enableUpgradeCard: true,
    enableUpdateAvatar: true,
    enableAffonsoAffiliate: false,
    enablePromotekitAffiliate: false,
    enableDatafastRevenueTrack: false,
    enableCrispChat: false,
    enableTurnstileCaptcha: false,
  },
  routes: {
    defaultLoginRedirect: '/dashboard',
  },
  analytics: {
    enableVercelAnalytics: false,
    enableSpeedInsights: false,
  },
  auth: {
    enableGoogleLogin: false, // OAuth optional
    enableGithubLogin: false, // OAuth optional
    enableCredentialLogin: true, // Email/Password enabled
  },
  i18n: {
    defaultLocale: 'en',
    locales: {
      en: {
        flag: '🇺🇸',
        name: 'English',
      },
      ar: {
        flag: '🇸🇦',
        name: 'العربية',
      },
      ur: {
        flag: '🇵🇰',
        name: 'اردو',
      },
      bn: {
        flag: '🇧🇩',
        name: 'বাংলা',
      },
      ms: {
        flag: '🇲🇾',
        name: 'Bahasa Melayu',
      },
      id: {
        flag: '🇮🇩',
        name: 'Bahasa Indonesia',
      },
      de: {
        flag: '🇩🇪',
        name: 'Deutsch',
      },
      hi: {
        flag: '🇮🇳',
        name: 'हिन्दी',
      },
      fr: {
        flag: '🇫🇷',
        name: 'Français',
      },
      tr: {
        flag: '🇹🇷',
        name: 'Türkçe',
      },
    },
  },
  blog: {
    enable: false,
    paginationSize: 6,
    relatedPostsSize: 3,
  },
  docs: {
    enable: false,
  },
  mail: {
    provider: 'resend',
    fromEmail: 'Arabic Calligraphy <noreply@example.com>',
    supportEmail: 'Arabic Calligraphy <support@example.com>',
  },
  newsletter: {
    enable: false,
    provider: 'resend',
    autoSubscribeAfterSignUp: false,
  },
  storage: {
    enable: false,
    provider: 's3',
  },
  payment: {
    provider: 'stripe',
  },
  price: {
    plans: {
      // Free plan - for basic usage
      free: {
        id: 'free',
        prices: [], // Free plan has no prices
        isFree: true,
        isLifetime: false,
        credits: {
          enable: false, // No credits for now
          amount: 0,
          expireDays: 30,
        },
      },
      // Pro plan - yearly subscription
      pro: {
        id: 'pro',
        prices: [
          {
            type: PaymentTypes.SUBSCRIPTION,
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY || '',
            amount: 2999, // $29.99 = 2999 cents
            currency: 'USD',
            interval: PlanIntervals.YEAR,
          },
        ],
        isFree: false,
        isLifetime: false,
        popular: true, // Mark as recommended
        credits: {
          enable: false, // No credits for now
          amount: 0,
          expireDays: 30,
        },
      },
      // Ultra plan (reserved for future)
      ultra: {
        id: 'ultra',
        prices: [
          {
            type: PaymentTypes.SUBSCRIPTION,
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ULTRA_YEARLY || '',
            amount: 4999, // $49.99
            currency: 'USD',
            interval: PlanIntervals.YEAR,
          },
        ],
        isFree: false,
        isLifetime: false,
        disabled: true, // Not active yet
        credits: {
          enable: false,
          amount: 0,
          expireDays: 30,
        },
      },
    },
  },
};

export type WebsiteConfig = typeof websiteConfig;
