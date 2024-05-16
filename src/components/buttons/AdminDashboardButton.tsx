import Link from 'next/link';
import { SvgIcons } from '@/components/icons/SvgIcons';
import TooltipWrapper from '@/components/TooltipWrapper';
import { navPaths } from '@/config/availablePaths';
import { getUserStatus } from '@/lib/getUserStatus';
import { Button } from '../ui/button';

export default function AdminDashboardButton() {
	const { isLoggedIn } = getUserStatus();

	if (!isLoggedIn) return;

	return (
		<TooltipWrapper text="Admin Dashboard">
			<Button variant="ghost" size="icon" asChild>
				<Link href={navPaths.admin[0].href} rel="noreferrer">
					<SvgIcons.adminDashboard />
				</Link>
			</Button>
		</TooltipWrapper>
	);
}
