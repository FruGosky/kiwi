import { ReactNode } from 'react';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from './ui/card';

type TDashboardCardProps = {
	title: string;
	description: string;
	content: ReactNode;
	footer?: ReactNode;
};

export default function DashboardCard({
	title,
	description,
	content,
	footer,
}: TDashboardCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{content}</p>
			</CardContent>
			{footer ? (
				<CardFooter>
					<p>{footer}</p>
				</CardFooter>
			) : null}
		</Card>
	);
}
