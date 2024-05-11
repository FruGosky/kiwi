import { cn } from '@/lib/utils';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { NavLink } from './buttons/NavLink';

export type TNavPath = { title: string; href: string };

type TMainNavProps = {
	navPaths: TNavPath[];
};

export function MainNav({ navPaths }: TMainNavProps) {
	return (
		<Nav>
			{navPaths.map((navPath) => (
				<NavLink key={navPath.href} href={navPath.href}>
					{navPath.title}
				</NavLink>
			))}
		</Nav>
	);
}

type TNavProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export default function Nav({ className, children, ...props }: TNavProps) {
	return (
		<nav
			{...props}
			className={cn('flex items-center gap-4 text-sm', className)}
		>
			{children}
		</nav>
	);
}
