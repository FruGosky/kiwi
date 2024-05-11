import Footer from '@/components/Footer';
import AdminHeader from '@/app/admin/_components/AdminHeader';
import { ReactNode } from 'react';
import Main from '@/components/Main';

type TAdminLayoutProps = {
	children: ReactNode;
};

export default function AdminLayout({ children }: TAdminLayoutProps) {
	return (
		<>
			<AdminHeader />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}
