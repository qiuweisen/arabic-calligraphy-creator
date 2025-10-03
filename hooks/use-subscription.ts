'use client';

import { useState, useEffect } from 'react';
import { authClient } from '@/lib/auth-client';

export interface SubscriptionStatus {
  isPro: boolean;
  planId?: string;
  subscription?: {
    status: string;
    priceId: string;
    periodEnd?: Date | null;
    cancelAtPeriodEnd?: boolean | null;
  } | null;
}

/**
 * Custom hook to get user subscription status
 * Fetches from API endpoint /api/subscription/status
 */
export function useSubscriptionStatus() {
  const [status, setStatus] = useState<SubscriptionStatus>({
    isPro: false,
    planId: undefined,
    subscription: null,
  });
  const [loading, setLoading] = useState(true);
  
  const { data: session } = authClient.useSession();

  useEffect(() => {
    async function fetchStatus() {
      if (!session?.user) {
        setStatus({ isPro: false, planId: undefined, subscription: null });
        setLoading(false);
        return;
      }
      
      try {
        const res = await fetch('/api/subscription/status');
        if (res.ok) {
          const data = await res.json() as SubscriptionStatus;
          setStatus(data);
        }
      } catch (error) {
        console.error('Failed to fetch subscription status:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchStatus();
  }, [session]);

  return { ...status, loading };
}
