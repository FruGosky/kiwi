import Link from 'next/link';
import { Button } from './ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import Image from 'next/image';
import { formatCurrency } from '@/lib/formatters';

type TProductCardProps = {
	id: string;
	name: string;
	priceInCents: number;
	description: string;
	imagePath: string;
};

export default function ProductCard(props: TProductCardProps) {
	return (
		<Card className="flex flex-col overflow-hidden">
			<div className="relative aspect-video h-auto w-full bg-secondary">
				<Image
					src={props.imagePath}
					alt={props.name}
					layout={'fill'}
					objectFit={'contain'}
				/>
			</div>
			<CardHeader>
				<CardTitle>{props.name}</CardTitle>
				<CardDescription>
					{formatCurrency(props.priceInCents / 100)}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-grow text-muted-foreground">
				<p className="line-clamp-4">{props.description}</p>
			</CardContent>
			<CardFooter>
				<Button asChild size="lg" className="w-full">
					<Link href={`/products/${props.id}/purchase`}>
						Purchase
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}

export function ProductCardSkeleton() {
	return (
		<Card className="flex animate-pulse flex-col overflow-hidden">
			<div className="aspect-video w-full bg-gray-300" />
			<CardHeader>
				<CardTitle>
					<div className="h-6 w-3/4 rounded-full bg-gray-300" />
				</CardTitle>
				<CardDescription>
					<div className="h-4 w-1/4 rounded-full bg-gray-300" />
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2">
				<div className="h-4 w-full rounded-full bg-gray-300" />
				<div className="h-4 w-full rounded-full bg-gray-300" />
				<div className="h-4 w-3/4 rounded-full bg-gray-300" />
			</CardContent>
			<CardFooter>
				<Button size="lg" className="w-full" disabled />
			</CardFooter>
		</Card>
	);
}
