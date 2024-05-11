'use server';

import { z } from 'zod';
import fs from 'fs/promises';
import db from '@/db/db';
import { revalidatePath } from 'next/cache';
import { notFound, redirect } from 'next/navigation';

const fileSchema = z.instanceof(File, { message: 'File required' });
const imageSchema = fileSchema.refine(
	(file) => file.size === 0 || file.type.startsWith('image/'),
	{
		message: 'File is not a type of image.',
	},
);

const addProductSchema = z.object({
	name: z.string().min(1, {
		message: 'Name must be at least 1 character.',
	}),
	priceInCents: z.coerce.number().int().min(1, {
		message: 'Price must be at least 1 cent.',
	}),
	description: z.string(),
	image: imageSchema.refine((file) => file.size > 0, {
		message: 'Empty files are not allowed.',
	}),
});

export const addProduct = async (prevState: unknown, formData: FormData) => {
	const result = addProductSchema.safeParse(
		Object.fromEntries(formData.entries()),
	);

	if (!result.success) {
		return result.error.formErrors.fieldErrors;
	}

	const { data } = result;

	await fs.mkdir('public/products', { recursive: true });
	const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
	await fs.writeFile(
		`public${imagePath}`,
		Buffer.from(await data.image.arrayBuffer()),
	);

	await db.product.create({
		data: {
			name: data.name,
			description: data.description,
			priceInCents: data.priceInCents,
			imagePath,
			isAvailableForPurchase: false,
		},
	});

	revalidatePath('/');
	revalidatePath('/products');

	redirect('/admin/products');
};

const editProductSchema = addProductSchema.extend({
	image: imageSchema.optional(),
});

export const editProduct = async (
	id: string,
	prevState: unknown,
	formData: FormData,
) => {
	const result = editProductSchema.safeParse(
		Object.fromEntries(formData.entries()),
	);
	if (!result.success) {
		return result.error.formErrors.fieldErrors;
	}

	const { data } = result;
	const product = await db.product.findUnique({ where: { id } });

	if (!product) return notFound();

	let { imagePath } = product;
	if (data.image && data.image.size > 0) {
		await fs.unlink(`public${product.imagePath}`);
		imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
		await fs.writeFile(
			`public${imagePath}`,
			Buffer.from(await data.image.arrayBuffer()),
		);
	}

	await fs.mkdir('public/products', { recursive: true });

	await db.product.update({
		where: { id },
		data: {
			name: data.name,
			description: data.description,
			priceInCents: data.priceInCents,
			imagePath,
		},
	});

	revalidatePath('/');
	revalidatePath('/products');

	redirect('/admin/products');
};

export const toggleProductAvailability = async (
	id: string,
	isAvailableForPurchase: boolean,
) => {
	await db.product.update({
		where: { id },
		data: { isAvailableForPurchase },
	});

	revalidatePath('/');
	revalidatePath('/products');
};

export const deleteProduct = async (id: string) => {
	const product = await db.product.delete({ where: { id } });

	if (!product) return notFound();

	await fs.unlink(`public${product.imagePath}`);

	revalidatePath('/');
	revalidatePath('/products');
};
