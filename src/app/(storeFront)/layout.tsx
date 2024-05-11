import Footer from '@/components/Footer';
import StoreFrontHeader from '@/app/(storeFront)/_components/StoreFrontHeader';
import { ReactNode } from 'react';
import Main from '@/components/Main';

type TStoreFrontLayoutProps = {
	children: ReactNode;
};

export default function StoreFrontLayout({ children }: TStoreFrontLayoutProps) {
	return (
		<>
			<StoreFrontHeader />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}
