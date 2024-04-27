import ThemeToggle from '@/components/ThemeToggle';
import Nav, { NavLink } from '@/components/Nav';
import Link from 'next/link';
import { SvgIcons } from './SvgIcons';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { navPaths } from '@/config/availablePaths';
import Logo from './Logo';

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="mr-4 hidden md:flex">
					<Logo />
					<MainNav />
				</div>
				<div className="flex flex-1 items-center justify-end gap-2">
					<NavigationToolbox />
				</div>
			</div>
		</header>
	);
}

function MainNav() {
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

function NavigationToolbox() {
	return (
		<Nav className="gap-0">
			<GithubIcon />
			<ThemeToggle />
		</Nav>
	);
}

function GithubIcon() {
	return (
		<Link
			href="https://github.com/FruGosky"
			target="_blank"
			rel="noreferrer"
			className={cn(buttonVariants({ variant: 'ghost' }), 'w-10 p-0')}
		>
			<SvgIcons.github />
		</Link>
	);
}
