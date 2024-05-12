import ProductDetailsCard from '@/components/ProductDetailsCard';
import ProductImageCard from '@/components/ProductImageCard';
import db from '@/db/db';
import { notFound } from 'next/navigation';

type TProductDetailsPageProps = {
	params: {
		id: string;
	};
};

const getProductById = (id: string) => {
	return db.product.findUnique({
		where: { id },
	});
};

export default async function ProductDetailsPage({
	params,
}: TProductDetailsPageProps) {
	const product = await getProductById(params.id);

	if (!product) return notFound();

	return (
		<div className="flex flex-col gap-4 md:flex-row">
			<section className="w-full md:w-2/3">
				<ProductImageCard {...product} />
			</section>
			<section className="min-h-full w-full md:w-1/3">
				<ProductDetailsCard {...product} />
			</section>
		</div>
	);
}
