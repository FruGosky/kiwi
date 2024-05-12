import { formatCurrency } from '@/lib/formatters';
import { Product } from '@prisma/client';
import Image from 'next/image';

type TProductPreviewProps = Pick<
	Product,
	'name' | 'imagePath' | 'description' | 'priceInCents'
>;

export default function ProductRowPreview({
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
			<div className="flex flex-col gap-1">
				<h2 className="text-2xl font-bold">{name}</h2>
				<div className="mb-2 text-lg">
					{formatCurrency(priceInCents / 100)}
				</div>
				<div className="line-clamp-3 text-muted-foreground">
					{description}
				</div>
			</div>
		</div>
	);
}
