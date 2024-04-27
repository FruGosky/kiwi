'use client';

import { cn } from '@/lib/utils';
import {
	hoverAndConditionAnimation,
	hoverUnderscoreAnimation,
} from '@/styles/animations';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, DetailedHTMLProps, HTMLAttributes } from 'react';

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

type TNavLinkProps = ComponentProps<typeof Link>;

export function NavLink({ className, children, ...props }: TNavLinkProps) {
	const pathname = usePathname();

	return (
		<Link
			{...props}
			className={cn(
				hoverAndConditionAnimation(pathname === props.href),
				hoverUnderscoreAnimation(),
				className,
			)}
		>
			{children}
		</Link>
	);
}
