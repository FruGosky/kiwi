import Link from 'next/link';
import { cn } from '@/lib/utils';
import TooltipWrapper from '../TooltipWrapper';
import { buttonVariants } from '../ui/button';
import { SvgIcons } from '../icons/SvgIcons';

export default function GithubButton() {
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
