'use client';

import { ComponentProps, ReactNode, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { MoreVertical } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';

type TDropdownActionsProps = {
	children: ReactNode;
};

export default function DropdownActions({ children }: TDropdownActionsProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<MoreVertical />
				<span className="sr-only">Actions</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent>{children}</DropdownMenuContent>
		</DropdownMenu>
	);
}

type TDropdownItemProps = {
	asyncAction: () => Promise<void>;
} & Omit<ComponentProps<typeof DropdownMenuItem>, 'onClick'>;

export function DropdownActionsItem({
	asyncAction,
	disabled,
	children,
	...restProps
}: TDropdownItemProps) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<DropdownMenuItem
			disabled={disabled || isPending}
			onClick={() => {
				startTransition(async () => {
					await asyncAction();
					router.refresh();
				});
			}}
			{...restProps}
		>
			{children}
		</DropdownMenuItem>
	);
}
