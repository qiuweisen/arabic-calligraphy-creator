import { NextRequest, NextResponse } from 'next/server';
import { createCheckout } from '@/payment';
import { auth } from '@/lib/auth';
import { findPlanByPriceId } from '@/lib/price-plan';

/**
 * POST /api/payment/checkout
 * Create a Stripe checkout session for subscription
 */
export async function POST(req: NextRequest) {
  try {
    // Verify user is logged in
    const session = await auth.api.getSession({ 
      headers: req.headers 
    });
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    interface CheckoutRequest {
      priceId: string;
    }
    
    const { priceId } = await req.json() as CheckoutRequest;
    
    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      );
    }
    
    // Find plan by price ID (required by Stripe provider)
    const plan = findPlanByPriceId(priceId);
    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid price ID' },
        { status: 400 }
      );
    }

    // Get current locale from header or default to 'en'
    const locale = req.headers.get('x-locale') || 'en';

    // Create checkout session with all required parameters
    const result = await createCheckout({
      planId: plan.id,                      // Required by Stripe provider
      priceId,
      customerEmail: session.user.email,     // Required to find/create Stripe customer
      locale,                                // For Stripe UI language
      successUrl: `${req.nextUrl.origin}/${locale}/checkout/success`,
      cancelUrl: `${req.nextUrl.origin}/${locale}/pricing`,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
