import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SvgIcons } from '@/components/icons/SvgIcons';
import TooltipWrapper from '@/components/TooltipWrapper';
import { navPaths } from '@/config/availablePaths';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { rolesAllowedToAdminRoutes } from '@/middleware';

export default async function AdminDashboardButton() {
	const { userId } = auth();

	if (!userId) return;

	const userData = await clerkClient.users.getUser(userId);

	const userRole = userData.privateMetadata.role;
	if (typeof userRole !== 'string') return;

	if (!rolesAllowedToAdminRoutes.includes(userRole)) return;

	return (
		<TooltipWrapper text="Admin Dashboard">
			<Link
				href={navPaths.admin[0].href}
				rel="noreferrer"
				className={cn(
					buttonVariants({ variant: 'ghost', size: 'icon' }),
				)}
			>
				<SvgIcons.adminDashboard />
			</Link>
		</TooltipWrapper>
	);
}
