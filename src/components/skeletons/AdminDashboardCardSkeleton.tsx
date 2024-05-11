import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';

export default function AdminDashboardCardSkeleton() {
	return (
		<Card className="flex animate-pulse flex-col overflow-hidden">
			<CardHeader>
				<CardTitle className="h-6 w-1/2 rounded-full bg-gray-300" />
				<CardDescription className="h-5 w-1/3 rounded-full bg-gray-300" />
			</CardHeader>
			<CardContent className="space-y-2">
				<div className="h-5 w-1/4 rounded-full bg-gray-300" />
			</CardContent>
			<span className="sr-only">Dashboard card loading</span>
		</Card>
	);
}
