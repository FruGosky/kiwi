import AdminPageName from '@/app/admin/_components/AdminPageName';
import { ProductForm } from '../../_components/ProductForm';
import db from '@/db/db';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type TAdminEditProductPageProps = {
	params: {
		id: string;
	};
};

const pageName = 'Edit Product';

export const metadata: Metadata = {
	title: `Kiwi - Admin - ${pageName}`,
};

export default function AdminEditProductPage({
	params: { id },
}: TAdminEditProductPageProps) {
	return (
		<>
			<AdminPageName>{pageName}</AdminPageName>
			<EditProductForm id={id} />
		</>
	);
}

type TEditProductFormProps = {
	id: string;
};

async function EditProductForm({ id }: TEditProductFormProps) {
	const product = await db.product.findUnique({ where: { id } });

	if (!product) notFound();

	return <ProductForm product={product} />;
}
