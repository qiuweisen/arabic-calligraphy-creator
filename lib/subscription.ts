'use server';

import { getDb } from '@/db';
import { payment } from '@/db/schema';
import { findPlanByPriceId } from '@/lib/price-plan';
import { and, eq } from 'drizzle-orm';

/**
 * Check if user has Pro subscription
 * @server-only - Can only be called on the server side
 */
export async function hasProSubscription(userId: string): Promise<boolean> {
  const db = await getDb();
  
  const subscription = await db
    .select()
    .from(payment)
    .where(
      and(
        eq(payment.userId, userId),
        eq(payment.type, 'subscription'),
        eq(payment.status, 'active')
      )
    )
    .limit(1);
    
  return subscription.length > 0;
}

/**
 * Get user subscription information
 * @server-only - Can only be called on the server side
 */
export async function getUserSubscription(userId: string) {
  const db = await getDb();
  
  const subscriptions = await db
    .select()
    .from(payment)
    .where(
      and(
        eq(payment.userId, userId),
        eq(payment.type, 'subscription'),
        eq(payment.status, 'active')
      )
    )
    .limit(1);
    
  return subscriptions[0] || null;
}

/**
 * Get user subscription status (for API endpoint)
 * Returns subscription status with plan information
 */
export async function getSubscriptionStatus(userId: string) {
  const subscription = await getUserSubscription(userId);
  
  if (!subscription) {
    return {
      isPro: false,
      planId: undefined,
      subscription: null,
    };
  }
  
  // Find plan by price ID
  const plan = findPlanByPriceId(subscription.priceId);
  
  return {
    isPro: true,
    planId: plan?.id,
    subscription: {
      status: subscription.status,
      priceId: subscription.priceId,
      periodEnd: subscription.periodEnd,
      cancelAtPeriodEnd: subscription.cancelAtPeriodEnd,
    },
  };
}
