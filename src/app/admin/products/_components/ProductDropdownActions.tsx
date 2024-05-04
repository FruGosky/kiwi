'use client';

import DropdownActions, {
	DropdownActionsItem,
} from '@/components/DropdownActions';
import {
	deleteProduct,
	toggleProductAvailability,
} from '../../_actions/products';
import { Product } from '@prisma/client';
import {
	DropdownMenuItem,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

type TProductDropdownActionsProps = Pick<
	Product,
	'id' | 'isAvailableForPurchase'
>;

export default function ProductDropdownActions({
	id,
	isAvailableForPurchase,
}: TProductDropdownActionsProps) {
	return (
		<DropdownActions>
			<DropdownMenuItem asChild>
				<Link href={`/admin/products/${id}/edit`}>Edit</Link>
			</DropdownMenuItem>
			<DropdownActionsItem
				asyncAction={() =>
					toggleProductAvailability(id, !isAvailableForPurchase)
				}
			>
				{isAvailableForPurchase ? 'Deactivate' : 'Activate'}
			</DropdownActionsItem>
			<DropdownMenuSeparator />
			<DropdownActionsItem
				variant="destructive"
				asyncAction={() => deleteProduct(id)}
			>
				Delete
			</DropdownActionsItem>
		</DropdownActions>
	);
}
