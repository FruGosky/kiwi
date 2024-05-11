import ThemeToggle from '@/components/buttons/ThemeToggle';
import Nav, { MainNav } from '@/components/Nav';
import { navPaths } from '@/config/availablePaths';
import Logo from '@/components/buttons/Logo';
import StoreFrontButton from '@/components/buttons/StoreFrontButton';
import UserIcon from '@/components/buttons/UserIcon';

export default function AdminHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="mr-4 hidden md:flex">
					<AdminLogo />
					<MainNav navPaths={navPaths.admin} />
				</div>
				<div className="flex flex-1 items-center justify-end gap-2">
					<NavigationToolbox />
				</div>
			</div>
		</header>
	);
}

function AdminLogo() {
	return (
		<Logo
			linkProps={{ href: '/admin' }}
			spanProps={{ className: 'text-destructive' }}
		>
			Kiwi Admin
		</Logo>
	);
}

function NavigationToolbox() {
	return (
		<Nav className="items-center gap-0">
			<StoreFrontButton />
			<ThemeToggle />
			<div className="ms-2">
				<UserIcon />
			</div>
		</Nav>
	);
}
