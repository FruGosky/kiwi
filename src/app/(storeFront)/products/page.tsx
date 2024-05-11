import ProductCard, { ProductCardSkeleton } from '@/components/ProductCard';
import db from '@/db/db';
import { randomUUID } from 'crypto';
import { Suspense } from 'react';

export default function ProductsPage() {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<Suspense
				fallback={Array.from({ length: 8 }).map(() => (
					<ProductCardSkeleton key={randomUUID()} />
				))}
			>
				<Products />
			</Suspense>
		</div>
	);
}

const getProducts = () => {
	return db.product.findMany({
		where: { isAvailableForPurchase: true },
		orderBy: { name: 'asc' },
	});
};

async function Products() {
	const products = await getProducts();

	return products.map((product) => (
		<ProductCard key={product.id} {...product} />
	));
}
