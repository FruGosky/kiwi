import { Metadata } from 'next';
import AdminPageName from '../../_components/AdminPageName';
import { ProductForm } from '../_components/ProductForm';

const pageName = 'Add Product';

export const metadata: Metadata = {
	title: `Kiwi - Admin - ${pageName}`,
};

export default function AdminAddProductsPagePage() {
	return (
		<>
			<AdminPageName>{pageName}</AdminPageName>
			<ProductForm />
		</>
	);
}
