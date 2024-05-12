'use client';

import { Product } from '@prisma/client';
import { formatCurrency } from '@/lib/formatters';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';

type TProductDetailsCardProps = Product;

export default function ProductDetailsCard({
	id,
	name,
	priceInCents,
	description,
}: TProductDetailsCardProps) {
	return (
		<Card className="flex h-full flex-col">
			<CardHeader className="pb-1">
				<h2 className="text-2xl font-bold">{name}</h2>
			</CardHeader>
			<CardContent className="flex-grow">
				<div className="mb-3 text-lg">
					{formatCurrency(priceInCents / 100)}
				</div>
				<div className="text-muted-foreground">{description}</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full" asChild>
					<Link href={`/products/${id}/purchase`}>Buy now</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
