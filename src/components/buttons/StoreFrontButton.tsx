import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SvgIcons } from '@/components/icons/SvgIcons';
import TooltipWrapper from '@/components/TooltipWrapper';
import { navPaths } from '@/config/availablePaths';

export default function StoreFrontButton() {
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
