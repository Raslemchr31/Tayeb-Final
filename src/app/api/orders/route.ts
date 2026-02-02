import { NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://raslem-n8n.duckdns.org/webhook/6569787d-7c6d-4dc2-a651-cd63c9c6b902';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Webhook submission failed');
    }

    return NextResponse.json({ success: true, message: 'Order submitted successfully' });
  } catch (error) {
    console.error('Order submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit order' },
      { status: 500 }
    );
  }
}
