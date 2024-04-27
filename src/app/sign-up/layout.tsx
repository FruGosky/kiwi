import { ReactNode } from 'react';

type TSignUpLayoutProps = {
	children: ReactNode;
};

export default function SignUpLayout({ children }: TSignUpLayoutProps) {
	return (
		<div className="flex flex-1 items-center justify-center">
			{children}
		</div>
	);
}
