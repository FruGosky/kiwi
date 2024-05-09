'use client';

import { isUserOrderExists } from '@/app/_actions/orders';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';
import { Product } from '@prisma/client';
import {
	Elements,
	LinkAuthenticationElement,
	PaymentElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FormEvent, useState } from 'react';

type TProductPaymentCardProps = {
	product: Product;
	clientSecret: string;
};

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string,
);

export default function ProductPaymentCard({
	clientSecret,
	product,
}: TProductPaymentCardProps) {
	return (
		<Elements
			options={{
				clientSecret,
				appearance: { theme: 'night' },
			}}
			stripe={stripePromise}
		>
			<Form priceInCents={product.priceInCents} productId={product.id} />
		</Elements>
	);
}

type TFormProps = {
	productId: string;
	priceInCents: number;
};

function Form({ productId, priceInCents }: TFormProps) {
	const stripe = useStripe();
	const elements = useElements();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string>();
	const [email, setEmail] = useState<string>();

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		if (!stripe || !elements || !email) return;

		setIsLoading(true);

		const isOrderExist = await isUserOrderExists(email, productId);

		if (isOrderExist) {
			setErrorMessage(
				'You have already purchased this product. Try downloading it from the My Orders page',
			);
			setIsLoading(false);
			return;
		}

		stripe
			.confirmPayment({
				elements,
				confirmParams: {
					return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-success`,
				},
			})
			.then(({ error }) => {
				if (
					error.type === 'card_error' ||
					error.type === 'validation_error'
				) {
					setErrorMessage(error.message);
					return;
				}
				setErrorMessage('An unknown error occurred');
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<form onSubmit={handleSubmit}>
			<Card>
				<CardHeader>
					<CardTitle>Checkout</CardTitle>
					{errorMessage ? (
						<CardDescription className="text-destructive">
							{errorMessage}
						</CardDescription>
					) : null}
				</CardHeader>
				<CardContent>
					<PaymentElement />
					<div className="mt-4">
						<LinkAuthenticationElement
							onChange={(event) => setEmail(event.value.email)}
						/>
					</div>
				</CardContent>
				<CardFooter>
					<Button
						className="w-full"
						size="lg"
						disabled={!stripe || !elements || isLoading}
					>
						{isLoading
							? 'Purchasing...'
							: `Purchase - ${formatCurrency(
									priceInCents / 100,
								)}`}
					</Button>
				</CardFooter>
			</Card>
		</form>
	);
}
