import { cn } from '@/lib/utils';

export function hoverUnderscoreAnimation(): string {
	const generalClassNames = 'relative';
	const afterClassNames =
		'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-lime-400 after:transition-all after:content-[""]';
	const hoverAfterClassNames = 'hover:after:w-full';

	return cn(generalClassNames, afterClassNames, hoverAfterClassNames);
}

export function hoverAndConditionAnimation(condition: boolean): string {
	const generalClassNames = 'transition-colors';
	const hoverClassNames = 'hover:text-foreground/80';
	const conditionClassNames = condition
		? 'text-foreground'
		: 'text-foreground/60';

	return cn(generalClassNames, hoverClassNames, conditionClassNames);
}
