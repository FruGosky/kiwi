import ThemeToggle from '@/components/buttons/ThemeToggle';
import Nav, { MainNav } from '@/components/Nav';
import { navPaths } from '@/config/availablePaths';
import Logo from '@/components/buttons/Logo';
import UserIcon from '@/components/buttons/UserIcon';
import GithubButton from '@/components/buttons/GithubButton';
import AdminDashboardButton from '@/components/buttons/AdminDashboardButton';

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
			<GithubButton />
			<AdminDashboardButton />
			<ThemeToggle />
			<div className="ms-2">
				<UserIcon />
			</div>
		</Nav>
	);
}
