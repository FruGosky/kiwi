import { formatCurrency } from '@/lib/formatters';
import { Column, Img, Row, Section, Text } from '@react-email/components';

type TOrderInformationProps = {
	order: { id: string; createdAt: Date; priceInCents: number };
	product: { imagePath: string; name: string; description: string };
};

const dateFormatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium' });

export default function OrderInformation({
	order,
	product,
}: TOrderInformationProps) {
	return (
		<>
			<Section>
				<Row>
					<Column>
						<Text className="mb-0 mr-4 whitespace-nowrap text-nowrap text-gray-500">
							Order ID
						</Text>
						<Text className="mr-4 mt-0">{order.id}</Text>
					</Column>
					<Column>
						<Text className="mb-0 mr-4 whitespace-nowrap text-nowrap text-gray-500">
							Purchased On
						</Text>
						<Text className="mr-4 mt-0">
							{dateFormatter.format(order.createdAt)}
						</Text>
					</Column>
					<Column>
						<Text className="mb-0 mr-4 whitespace-nowrap text-nowrap text-gray-500">
							Price Paid
						</Text>
						<Text className="mr-4 mt-0">
							{formatCurrency(order.priceInCents / 100)}
						</Text>
					</Column>
				</Row>
			</Section>
			<Section className="my-4 rounded-lg border border-solid border-gray-500 p-4 md:p-6">
				<Img
					width="100%"
					alt={product.name}
					src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.imagePath}`}
				/>
				<Row className="mt-8">
					<Column>
						<Text className="m-0 mr-4 text-lg font-bold">
							{product.name}
						</Text>
						<Text className="mb-0 text-gray-500">
							{product.description}
						</Text>
					</Column>
				</Row>
			</Section>
		</>
	);
}
