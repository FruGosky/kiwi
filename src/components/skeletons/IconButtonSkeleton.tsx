import { Skeleton } from '../ui/skeleton';

export default function IconButtonSkeleton() {
	return (
		<div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent">
			<Skeleton className="h-[1.2rem] w-[1.2rem] rounded-full" />
			<span className="sr-only">Icon loading</span>
		</div>
	);
}
