'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';

type TClerkWrapperProps = {
	children: ReactNode;
};

export default function ClerkWrapper({ children }: TClerkWrapperProps) {
	const { theme } = useTheme();

	return (
		<ClerkProvider
			appearance={{
				baseTheme: theme === 'dark' ? dark : undefined,
			}}
		>
			{children}
		</ClerkProvider>
	);
}
