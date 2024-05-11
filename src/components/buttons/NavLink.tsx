'use client';

import { cn } from '@/lib/utils';
import {
	hoverAndConditionAnimation,
	hoverUnderscoreAnimation,
} from '@/styles/animations';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

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
