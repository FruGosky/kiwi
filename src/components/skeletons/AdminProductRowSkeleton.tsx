import { Skeleton } from '../ui/skeleton';
import { TableCell, TableRow } from '../ui/table';

export default function AdminProductRowSkeleton() {
	return (
		<TableRow>
			<TableCell>
				<Skeleton className="h-6 w-6 rounded-full" />
			</TableCell>
			<TableCell>
				<Skeleton className="my-[6px] h-4 w-32" />
			</TableCell>
			<TableCell>
				<Skeleton className="my-[6px] h-4 w-16" />
			</TableCell>
			<TableCell>
				<Skeleton className="my-[6px] h-4 w-10" />
			</TableCell>
			<TableCell>
				<Skeleton className="my-[6px] h-4 w-20" />
			</TableCell>
			<TableCell>
				<Skeleton className="my-[6px] h-4 w-44" />
			</TableCell>
			<TableCell>
				<Skeleton className="h-6 w-6" />
			</TableCell>
		</TableRow>
	);
}
