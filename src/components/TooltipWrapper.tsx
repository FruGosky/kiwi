import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip';
import { ReactNode } from 'react';

type TTooltipWrapperProps = {
	children: ReactNode;
	text: string;
};

export default function TooltipWrapper({
	text,
	children,
}: TTooltipWrapperProps) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent>
					<p>{text}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
