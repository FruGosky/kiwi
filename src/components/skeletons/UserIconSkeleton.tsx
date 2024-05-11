import { Skeleton } from '../ui/skeleton';

export default function UserIconSkeleton() {
	return (
		<Skeleton className="h-7 w-7 rounded-full">
			<span className="sr-only">User icon loading</span>
		</Skeleton>
	);
}
