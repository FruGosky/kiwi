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
		<div className="flex flex-col items-center gap-4 sm:flex-row">
			<div className="relative aspect-video w-full flex-shrink-0 sm:w-1/3">
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
