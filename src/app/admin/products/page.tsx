import { Metadata } from 'next';
import AdminPageName from '../_components/AdminPageName';
import { Button } from '@/components/ui/button';
import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from '@/components/ui/table';
import Toolbar from '@/components/Toolbar';
import Link from 'next/link';
import db from '@/db/db';
import { dateFormatter, formatCurrency, formatNumber } from '@/lib/formatters';
import AvailabilityIcon from '@/components/icons/AvailabilityIcon';

const getProducts = async () => {
	const productsData = await db.product.findMany({
		select: {
			id: true,
			name: true,
			priceInCents: true,
			isAvailableForPurchase: true,
			createdAt: true,
			_count: { select: { orders: true } },
		},
		orderBy: {
			name: 'asc',
		},
	});

	return productsData;
};

const pageName = 'Products';

export const metadata: Metadata = {
	title: `Kiwi - Admin - ${pageName}`,
};

export default async function AdminProductsPage() {
	const products = await getProducts();

	return (
		<>
			<AdminPageName>{pageName}</AdminPageName>
			<Toolbar>
				<Button asChild>
					<Link href="/admin/products/add">Add Product</Link>
				</Button>
			</Toolbar>
			<Table>
				<TableCaption>A list of all products.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-0">
							<span className="sr-only">
								Available For Purchase
							</span>
						</TableHead>
						<TableHead className="w-0">ID</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>Created At</TableHead>
						<TableHead>Total Orders</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{products.map((product) => (
						<TableRow key={product.id}>
							<TableCell>
								<AvailabilityIcon
									isAvailable={product.isAvailableForPurchase}
								/>
							</TableCell>
							<TableCell>{product.id}</TableCell>
							<TableCell>{product.name}</TableCell>
							<TableCell>
								{formatCurrency(product.priceInCents / 100)}
							</TableCell>
							<TableCell>
								{dateFormatter().format(product.createdAt)}
							</TableCell>
							<TableCell>
								{formatNumber(product._count.orders)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
