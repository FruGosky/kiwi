'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import TooltipWrapper from './TooltipWrapper';
import { Skeleton } from './ui/skeleton';

// Dynamic import's to prevent hydration
const Sun = dynamic(() => import('lucide-react').then((module) => module.Sun), {
	loading: () => <Skeleton className="h-[1.2rem] w-[1.2rem] rounded-full" />,
	ssr: false,
});
const Moon = dynamic(
	() => import('lucide-react').then((module) => module.Moon),
	{
		loading: () => (
			<Skeleton className="h-[1.2rem] w-[1.2rem] rounded-full" />
		),
		ssr: false,
	},
);

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<TooltipWrapper text="Toggle theme">
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setTheme(theme !== 'dark' ? 'dark' : 'light')}
			>
				{theme !== 'dark' ? (
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-primary transition-all dark:-rotate-90 dark:scale-0" />
				) : (
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-primary transition-all dark:rotate-0 dark:scale-100" />
				)}
				<span className="sr-only">Toggle theme</span>
			</Button>
		</TooltipWrapper>
	);
}
