import { navPaths } from '@/config/availablePaths';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import {
	ComponentProps,
	DetailedHTMLProps,
	HTMLAttributes,
	ReactNode,
} from 'react';

type TLinkProps = Omit<Partial<ComponentProps<typeof Link>>, 'children'>;

type TImageProps = Omit<
	ComponentProps<typeof Image>,
	'src' | 'alt' | 'children'
>;

type TSpanProps = Omit<
	DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
	'children'
>;

type TLogoProps = {
	linkProps?: TLinkProps;
	imageProps?: TImageProps;
	spanProps?: TSpanProps;
	children?: ReactNode;
};

export default function Logo({
	linkProps: { className: linkClassName, href, ...restLinkProps } = {},
	imageProps,
	spanProps: { className: spanClassName, ...restSpanProps } = {},
	children,
}: TLogoProps) {
	return (
		<Link
			href={href ?? navPaths.storeFront[0].href}
			className={cn('me-6 flex items-center gap-2', linkClassName)}
			{...restLinkProps}
		>
			<Image
				src="/kiwi-logo.png"
				alt="Kiwi logo"
				width={20}
				height={20}
				{...imageProps}
			/>
			<span
				className={cn('font-bold text-primary', spanClassName)}
				{...restSpanProps}
			>
				{children ?? 'Kiwi'}
			</span>
			<span className="sr-only">Logo</span>
		</Link>
	);
}
