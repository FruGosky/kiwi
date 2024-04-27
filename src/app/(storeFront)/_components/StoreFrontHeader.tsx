import ThemeToggle from '@/components/ThemeToggle';
import Nav, { MainNav } from '@/components/Nav';
import Link from 'next/link';
import { SvgIcons } from '@/components/icons/SvgIcons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navPaths } from '@/config/availablePaths';
import Logo from '@/components/Logo';
import TooltipWrapper from '@/components/TooltipWrapper';
import UserIcon from '@/components/UserIcon';

export default function StoreFrontHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="mr-4 hidden md:flex">
					<Logo />
					<MainNav navPaths={navPaths.storeFront} />
				</div>
				<div className="flex flex-1 items-center justify-end gap-2">
					<NavigationToolbox />
				</div>
			</div>
		</header>
	);
}

function NavigationToolbox() {
	return (
		<Nav className="items-center gap-0">
			<GithubIcon />
			<ThemeToggle />
			<div className="ms-1 flex">
				<UserIcon />
			</div>
		</Nav>
	);
}

function GithubIcon() {
	return (
		<TooltipWrapper text="GitHub">
			<Link
				href="https://github.com/FruGosky"
				target="_blank"
				rel="noreferrer"
				className={cn(
					buttonVariants({ variant: 'ghost', size: 'icon' }),
				)}
			>
				<SvgIcons.github />
			</Link>
		</TooltipWrapper>
	);
}
