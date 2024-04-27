import { ReactNode } from 'react';

type TMainProps = {
	children: ReactNode;
};

export default function Main({ children }: TMainProps) {
	return (
		<main className="relative flex-1 border-b py-6">
			<div className="container">{children}</div>
		</main>
	);
}
