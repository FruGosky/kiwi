import db from '@/db/db';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import PurchaseReceipt from '@/email/PurchaseReceipt';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(request: NextRequest) {
	const event = await stripe.webhooks.constructEvent(
		await request.text(),
		request.headers.get('stripe-signature') as string,
		process.env.STRIPE_WEBHOOK_SECRET_KEY as string,
	);

	if (event.type !== 'charge.succeeded') {
		return new NextResponse('Bad request', { status: 400 });
	}

	const charge = event.data.object;
	const { productId } = charge.metadata;
	const { email } = charge.billing_details;
	const priceInCents = charge.amount;

	const product = await db.product.findUnique({
		where: { id: productId },
	});

	if (!product || !email) {
		return new NextResponse('Bad request', { status: 400 });
	}

	const userFields = {
		email,
		orders: {
			create: {
				productId,
				priceInCents,
			},
		},
	};

	const {
		orders: [order],
	} = await db.user.upsert({
		where: { email },
		create: userFields,
		update: userFields,
		select: { orders: { orderBy: { createdAt: 'desc' }, take: 1 } },
	});

	await resend.emails.send({
		from: `Support <${process.env.SENDER_EMAIL}>`,
		to: email,
		subject: 'Order confirmation',
		react: <PurchaseReceipt product={product} order={order} />,
	});

	return new NextResponse();
}
