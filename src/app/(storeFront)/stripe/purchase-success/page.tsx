import { Button } from '@/components/ui/button';
import db from '@/db/db';
import { formatCurrency } from '@/lib/formatters';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Stripe from 'stripe';

type TPurchaseSuccessPageProps = {
	searchParams: {
		payment_intent: string;
	};
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function PurchaseSuccessPage({
	searchParams,
}: TPurchaseSuccessPageProps) {
	const paymentIntent = await stripe.paymentIntents.retrieve(
		searchParams.payment_intent,
	);

	if (!paymentIntent.metadata.productId) return notFound();

	const product = await db.product.findUnique({
		where: { id: paymentIntent.metadata.productId },
	});

	if (!product) return notFound();

	const isSuccess = paymentIntent.status === 'succeeded';

	return (
		<div className="mx-auto w-full max-w-5xl space-y-8">
			<h1 className="text-4xl font-bold">
				{isSuccess ? 'Success!' : 'Error!'}
			</h1>
			<div className="flex flex-col items-center gap-4 sm:flex-row">
				<div className="relative aspect-video w-full flex-shrink-0 sm:w-1/3">
					<Image
						src={product.imagePath}
						alt={product.name}
						fill
						style={{ objectFit: 'scale-down' }}
					/>
				</div>
				<div>
					<div className="text-lg">
						{formatCurrency(product.priceInCents / 100)}
					</div>
					<h1 className="text-2xl font-bold">{product.name}</h1>
					<div className="line-clamp-5 text-muted-foreground sm:line-clamp-3">
						{product.description}
					</div>
					<Button className="mt-4" size="lg" asChild>
						{isSuccess ? (
							<Link href="/products">Go back to products</Link>
						) : (
							<Link href={`/products/${product.id}/purchase`}>
								Try again
							</Link>
						)}
					</Button>
				</div>
			</div>
		</div>
	);
}
