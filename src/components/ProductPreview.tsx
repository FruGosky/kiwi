import { formatCurrency } from '@/lib/formatters';
import { Product } from '@prisma/client';
import Image from 'next/image';

type TProductPreviewProps = Product;

export default function ProductPreview({
	name,
	priceInCents,
	imagePath,
	description,
}: TProductPreviewProps) {
	return (
		<div className="flex items-center gap-4">
			<div className="relative aspect-video w-1/3 flex-shrink-0">
				<Image
					src={imagePath}
					alt={name}
					fill
					style={{ objectFit: 'scale-down' }}
				/>
			</div>
			<div>
				<div className="text-lg">
					{formatCurrency(priceInCents / 100)}
				</div>
				<h1 className="text-2xl font-bold">{name}</h1>
				<div className="line-clamp-3 text-muted-foreground">
					{description}
				</div>
			</div>
		</div>
	);
}
