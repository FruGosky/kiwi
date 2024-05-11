import { Metadata } from 'next';
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
import {
	dateFormatter,
	dateTimeFormatter,
	formatCurrency,
	formatNumber,
} from '@/lib/formatters';
import AvailabilityIcon from '@/components/icons/AvailabilityIcon';
import { Suspense } from 'react';
import { randomUUID } from 'crypto';
import AdminProductRowSkeleton from '@/components/skeletons/AdminProductRowSkeleton';
import AdminPageName from '../_components/AdminPageName';
import ProductDropdownActions from './_components/ProductDropdownActions';

const getProducts = async () => {
	const productsData = await db.product.findMany({
		select: {
			id: true,
			name: true,
			priceInCents: true,
			isAvailableForPurchase: true,
			createdAt: true,
			updatedAt: true,
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

export default function AdminProductsPage() {
	return (
		<>
			<AdminPageName>{pageName}</AdminPageName>
			<Toolbar>
				<Button asChild>
					<Link href="/admin/products/add">Add Product</Link>
				</Button>
			</Toolbar>
			<ProductsTable />
		</>
	);
}

function ProductsTable() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-0">
						<span className="sr-only">Available For Purchase</span>
					</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Price</TableHead>
					<TableHead>Total Orders</TableHead>
					<TableHead>Created At</TableHead>
					<TableHead>Updated At</TableHead>
					<TableHead className="w-0">
						<span className="sr-only">Actions</span>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<Suspense
					fallback={Array.from({ length: 10 }).map(() => (
						<AdminProductRowSkeleton key={randomUUID()} />
					))}
				>
					<TableBodyFeed />
				</Suspense>
			</TableBody>
			<TableCaption>A list of all products.</TableCaption>
		</Table>
	);
}

async function TableBodyFeed() {
	const products = await getProducts();

	return products.map((product) => (
		<TableRow key={product.id}>
			<TableCell>
				<AvailabilityIcon
					isAvailable={product.isAvailableForPurchase}
				/>
			</TableCell>
			<TableCell>{product.name}</TableCell>
			<TableCell>{formatCurrency(product.priceInCents / 100)}</TableCell>
			<TableCell>{formatNumber(product._count.orders)}</TableCell>
			<TableCell>{dateFormatter().format(product.createdAt)}</TableCell>
			<TableCell>
				{dateTimeFormatter().format(product.updatedAt)}
			</TableCell>
			<TableCell>
				<ProductDropdownActions
					id={product.id}
					isAvailableForPurchase={product.isAvailableForPurchase}
				/>
			</TableCell>
		</TableRow>
	));
}
