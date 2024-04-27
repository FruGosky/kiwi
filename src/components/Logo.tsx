import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, DetailedHTMLProps, HTMLAttributes } from 'react';

type TLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'children'>;

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
};

export default function Logo({
	linkProps: { className: linkClassName, ...restLinkProps } = {},
	imageProps,
	spanProps: { className: spanClassName, ...restSpanProps } = {},
}: TLogoProps) {
	return (
		<Link
			href="/"
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
				Kiwi
			</span>
		</Link>
	);
}
