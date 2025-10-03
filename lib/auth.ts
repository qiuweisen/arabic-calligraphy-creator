import { websiteConfig } from '@/config/website';
import { getDbSync } from '@/db/index';
import { locales, defaultLocale } from '@/i18n';
import { getBaseUrl, getUrlWithLocaleInCallbackUrl } from '@/lib/urls/urls';
import { type User, betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import type { Locale } from 'next-intl';

/**
 * Better Auth configuration
 *
 * docs:
 * https://www.better-auth.com/docs/reference/options
 */
export const auth = betterAuth({
  baseURL: getBaseUrl(),
  appName: 'Arabic Calligraphy Generator',
  database: drizzleAdapter(getDbSync(), {
    provider: 'pg',
  }),
  session: {
    // https://www.better-auth.com/docs/concepts/session-management#cookie-cache
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60, // Cache duration in seconds
    },
    // https://www.better-auth.com/docs/concepts/session-management#session-expiration
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 24 hours
    // https://www.better-auth.com/docs/concepts/session-management#session-freshness
    freshAge: 0,
  },
  emailAndPassword: {
    enabled: websiteConfig.auth.enableCredentialLogin,
    // https://www.better-auth.com/docs/concepts/email#2-require-email-verification
    requireEmailVerification: true,
    // https://www.better-auth.com/docs/authentication/email-password#forget-password
    sendResetPassword: async ({ user, url }, request) => {
      // TODO: Implement email sending
      // For now, just log the reset URL
      console.log('Password reset URL:', url);
      console.log('For user:', user.email);
      // In production, use sendEmail() from mail module
    },
  },
  // OAuth providers (optional)
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      enabled: websiteConfig.auth.enableGoogleLogin && !!process.env.GOOGLE_CLIENT_ID,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      enabled: websiteConfig.auth.enableGithubLogin && !!process.env.GITHUB_CLIENT_ID,
    },
  },
  user: {
    // https://www.better-auth.com/docs/concepts/users-accounts#additional-user-fields
    additionalFields: {
      locale: {
        type: 'string',
        defaultValue: defaultLocale,
        required: false,
        input: false,
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session.session & {
  user: User & {
    locale?: Locale;
  };
};
