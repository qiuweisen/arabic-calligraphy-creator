import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { getSubscriptionStatus } from '@/lib/subscription';

/**
 * GET /api/subscription/status
 * Get current user's subscription status
 */
export async function GET(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ 
      headers: req.headers 
    });
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const status = await getSubscriptionStatus(session.user.id);
    return NextResponse.json(status);
  } catch (error) {
    console.error('Get subscription status error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
