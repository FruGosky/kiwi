import { ReactNode } from 'react';

type TToolbarProps = {
	children: ReactNode;
};

export default function Toolbar({ children }: TToolbarProps) {
	return <div className="mb-3 flex w-full justify-end">{children}</div>;
}
