import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReactNode } from 'react';

type TStoreFrontLayoutProps = {
	children: ReactNode;
};

export default function StoreFrontLayout(props: TStoreFrontLayoutProps) {
	return (
		<>
			<Header />
			<Main>{props.children}</Main>
			<Footer />
		</>
	);
}

type TMainProps = {
	children: ReactNode;
};

function Main({ children }: TMainProps) {
	return (
		<main className="relative flex-1 border-b py-6">
			<div className="container">{children}</div>
		</main>
	);
}
