import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type TErrorAlertProps = {
	message: string;
};

export default function ErrorAlert({ message }: TErrorAlertProps) {
	return (
		<Alert variant="destructive" className="mb-4">
			<Terminal className="h-4 w-4" />
			<AlertTitle>Error</AlertTitle>
			<AlertDescription>{message}</AlertDescription>
		</Alert>
	);
}
