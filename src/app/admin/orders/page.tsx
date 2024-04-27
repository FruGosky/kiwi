import { Metadata } from 'next';
import AdminPageName from '../_components/AdminPageName';

const pageName = 'Admin Orders';

export const metadata: Metadata = {
	title: `Kiwi - ${pageName}`,
};

export default function AdminOrdersPage() {
	return (
		<>
			<AdminPageName>{pageName}</AdminPageName>
			Admin Orders Page
		</>
	);
}
