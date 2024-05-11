'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button, ButtonProps } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import TooltipWrapper from '../TooltipWrapper';
import IconButtonSkeleton from '../skeletons/IconButtonSkeleton';

// Dynamic import's to prevent hydration & combined together to force preload second one
const DynamicThemeButton = dynamic(
	() =>
		import('lucide-react').then((module) => {
			return ({
				isLightMode,
				...buttonProps
			}: ButtonProps & { isLightMode: boolean }) => (
				<TooltipWrapper text="Toggle theme">
					<Button {...buttonProps}>
						{isLightMode ? (
							<module.Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-primary transition-all dark:-rotate-90 dark:scale-0" />
						) : (
							<module.Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-primary transition-all dark:rotate-0 dark:scale-100" />
						)}
						<span className="sr-only">Toggle theme</span>
					</Button>
				</TooltipWrapper>
			);
		}),
	{
		loading: () => <IconButtonSkeleton />,
		ssr: false,
	},
);

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<DynamicThemeButton
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme !== 'dark' ? 'dark' : 'light')}
			isLightMode={theme !== 'dark'}
		/>
	);
}
