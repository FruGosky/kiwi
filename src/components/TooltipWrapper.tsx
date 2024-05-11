import { ReactNode } from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip';

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
