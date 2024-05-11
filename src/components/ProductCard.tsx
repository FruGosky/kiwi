import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/lib/formatters';
import { Button } from './ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';

type TProductCardProps = {
	id: string;
	name: string;
	priceInCents: number;
	description: string;
	imagePath: string;
};

export default function ProductCard({
	id,
	name,
	priceInCents,
	description,
	imagePath,
}: TProductCardProps) {
	return (
		<Card className="flex flex-col overflow-hidden">
			<div className="relative aspect-video h-auto w-full bg-secondary">
				<Image
					src={imagePath}
					alt={name}
					fill
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				<CardDescription>
					{formatCurrency(priceInCents / 100)}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-grow text-muted-foreground">
				<p className="line-clamp-4">{description}</p>
			</CardContent>
			<CardFooter>
				<Button asChild size="lg" className="w-full">
					<Link href={`/products/${id}/purchase`}>Purchase</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
