import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Tailwind,
} from '@react-email/components';
import OrderInformation from './components/OrderInformation';

type TPurchaseReceiptProps = {
	product: {
		name: string;
		imagePath: string;
		description: string;
	};
	order: {
		id: string;
		createdAt: Date;
		priceInCents: number;
	};
};

PurchaseReceipt.PreviewProps = {
	product: {
		name: 'Product name',
		description: 'Some description',
		imagePath:
			'/products/8e18147f-3878-4c34-8566-00aa5ea964fd-mbp14-m3-max-pro-spaceblack-select-202310.jpeg',
	},
	order: {
		id: crypto.randomUUID(),
		createdAt: new Date(),
		priceInCents: 10000,
	},
} satisfies TPurchaseReceiptProps;

export default function PurchaseReceipt(props: TPurchaseReceiptProps) {
	return (
		<Html>
			<Preview>
				You have successfully bought {props.product.name} view receipt
			</Preview>
			<Tailwind>
				<Head />
				<Body className="bg-white font-sans">
					<Container className="max-w-xl">
						<Heading>Purchase Receipt</Heading>
						<OrderInformation
							order={props.order}
							product={props.product}
						/>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
