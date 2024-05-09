import ProductPaymentCard from '@/components/ProductPaymentCard';
import ProductPreview from '@/components/ProductPreview';
import { Product } from '@prisma/client';

type TCheckoutFormProps = {
	product: Product;
	clientSecret: string;
};

export default function CheckoutForm(props: TCheckoutFormProps) {
	return (
		<div className="mx-auto w-full max-w-5xl space-y-8">
			<ProductPreview {...props.product} />
			<ProductPaymentCard {...props} />
		</div>
	);
}
