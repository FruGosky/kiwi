import { ReactNode } from 'react';

type TSignInLayoutProps = {
	children: ReactNode;
};

export default function SignInLayout({ children }: TSignInLayoutProps) {
	return (
		<div className="flex flex-1 items-center justify-center">
			{children}
		</div>
	);
}
