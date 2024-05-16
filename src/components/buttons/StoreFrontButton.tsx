import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SvgIcons } from '@/components/icons/SvgIcons';
import TooltipWrapper from '@/components/TooltipWrapper';
import { navPaths } from '@/config/availablePaths';

export default function StoreFrontButton() {
	return (
		<TooltipWrapper text="Store Front">
			<Button variant="ghost" size="icon" asChild>
				<Link href={navPaths.storeFront[0].href} rel="noreferrer">
					<SvgIcons.storeFront />
				</Link>
			</Button>
		</TooltipWrapper>
	);
}
