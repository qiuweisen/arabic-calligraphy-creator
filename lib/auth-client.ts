import { createAuthClient } from 'better-auth/react';
import { getBaseUrl } from './urls/urls';

/**
 * Better Auth client instance
 * https://www.better-auth.com/docs/installation#create-client-instance
 */
export const authClient = createAuthClient({
  baseURL: getBaseUrl(),
});

// Export commonly used hooks for convenience
export const {
  useSession,
  signIn,
  signOut,
  signUp,
} = authClient;
