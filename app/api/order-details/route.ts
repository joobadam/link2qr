import { NextResponse } from 'next/server';
import { stripe } from '../../../lib/stripe';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    return NextResponse.json({
      plan: lineItems.data[0]?.description || 'Pro előfizetés',
      amount: `$${session.amount_total ? session.amount_total / 100 : 12}/${session.mode === 'subscription' ? 'hónap' : 'egyszeri'}`,
      orderId: session.payment_intent as string,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}