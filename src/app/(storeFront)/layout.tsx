import Footer from '@/components/Footer';
import StoreFrontHeader from '@/app/(storeFront)/_components/StoreFrontHeader';
import { ReactNode } from 'react';
import Main from '@/components/Main';

type TStoreFrontLayoutProps = {
	children: ReactNode;
};

export default function StoreFrontLayout(props: TStoreFrontLayoutProps) {
	return (
		<>
			<StoreFrontHeader />
			<Main>{props.children}</Main>
			<Footer />
		</>
	);
}
