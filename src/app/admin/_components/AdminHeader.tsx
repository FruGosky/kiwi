import ThemeToggle from '@/components/ThemeToggle';
import Nav, { MainNav } from '@/components/Nav';
import { navPaths } from '@/config/availablePaths';
import Logo from '@/components/Logo';
import { UserButton } from '@clerk/nextjs';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SvgIcons } from '@/components/icons/SvgIcons';
import TooltipWrapper from '@/components/TooltipWrapper';

export default function AdminHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="mr-4 hidden md:flex">
					<Logo
						linkProps={{ href: '/admin' }}
						spanProps={{ className: 'text-destructive' }}
					>
						Kiwi Admin
					</Logo>
					<MainNav navPaths={navPaths.admin} />
				</div>
				<div className="flex flex-1 items-center justify-end gap-2">
					<NavigationToolbox />
					<div className="ms-1 flex">
						<UserButton />
					</div>
				</div>
			</div>
		</header>
	);
}

function NavigationToolbox() {
	return (
		<Nav className="gap-0">
			<StoreFrontIcon />
			<ThemeToggle />
		</Nav>
	);
}

function StoreFrontIcon() {
	return (
		<TooltipWrapper text="Back to Store Front">
			<Link
				href={navPaths.storeFront[0].href}
				rel="noreferrer"
				className={cn(
					buttonVariants({ variant: 'ghost', size: 'icon' }),
				)}
			>
				<SvgIcons.storeFront />
			</Link>
		</TooltipWrapper>
	);
}
