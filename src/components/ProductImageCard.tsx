import { Product } from '@prisma/client';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from './ui/card';

type TProductImageCardProps = Pick<Product, 'name' | 'imagePath'>;

export default function ProductImageCard({
	name,
	imagePath,
}: TProductImageCardProps) {
	return (
		<Card>
			<CardHeader>
				<h2 className="text-center text-2xl font-bold">{name}</h2>
			</CardHeader>
			<CardContent className="relative aspect-video w-full">
				<Image
					src={imagePath}
					alt={name}
					fill
					style={{ objectFit: 'scale-down' }}
				/>
			</CardContent>
		</Card>
	);
}
