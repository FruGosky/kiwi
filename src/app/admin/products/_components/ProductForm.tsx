'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { formatCurrency } from '@/lib/formatters';
import { useState } from 'react';
import { addProduct, editProduct } from '../../_actions/products';
import { Product } from '@prisma/client';
import Image from 'next/image';
import SubmitButton from '@/components/SubmitButton';
import { useFormState } from 'react-dom';

type TProductFormProps = {
	product?: Product;
};

export function ProductForm({ product }: TProductFormProps) {
	const [error, action] = useFormState(
		!product ? addProduct : editProduct.bind(null, product.id),
		{},
	);
	const [priceInCents, setPriceInCents] = useState<number | undefined>(
		product?.priceInCents,
	);

	return (
		<form action={action} className="space-y-8">
			<div className="space-y-2">
				<Label htmlFor="name">Name</Label>
				<Input
					type="text"
					id="name"
					name="name"
					required
					defaultValue={product?.name || ''}
					minLength={3}
				/>
				{error.name ? (
					<div className="text-destructive">{error.name}</div>
				) : null}
			</div>
			<div className="space-y-2">
				<Label htmlFor="priceInCents">Price In Cents</Label>
				<Input
					type="number"
					id="priceInCents"
					name="priceInCents"
					required
					value={priceInCents}
					onChange={(e) => setPriceInCents(Number(e.target.value))}
				/>
				<div className="test-muted-foreground">
					{formatCurrency((priceInCents || 0) / 100)}
				</div>
				{error.priceInCents ? (
					<div className="text-destructive">{error.priceInCents}</div>
				) : null}
			</div>
			<div className="space-y-2">
				<Label htmlFor="description">Description</Label>
				<Textarea
					id="description"
					name="description"
					required
					defaultValue={product?.description || ''}
				/>
				{error.description ? (
					<div className="text-destructive">{error.description}</div>
				) : null}
			</div>
			<div className="space-y-2">
				<Label htmlFor="image">Image</Label>
				<Input
					type="file"
					id="image"
					name="image"
					required={product == null}
				/>
				{product != null ? (
					<Image
						src={product.imagePath}
						alt="Product image"
						height="400"
						width="400"
					/>
				) : null}
				{error.image ? (
					<div className="text-destructive">{error.image}</div>
				) : null}
			</div>
			<SubmitButton />
		</form>
	);
}
