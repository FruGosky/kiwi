import { ReactNode } from 'react';

type TAdminPageNameProps = {
	children: ReactNode;
};

export default function AdminPageName({ children }: TAdminPageNameProps) {
	return (
		<div className="flex w-full justify-center">
			<h1 className="mb-6 text-3xl">{children}</h1>
		</div>
	);
}
