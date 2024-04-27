import { CheckCircle2, XCircle } from 'lucide-react';

type TAvailabilityIconProps = {
	isAvailable: boolean;
};

export default function AvailabilityIcon({
	isAvailable,
}: TAvailabilityIconProps) {
	return isAvailable ? <AvailableIcon /> : <UnavailableIcon />;
}

export function AvailableIcon() {
	return (
		<>
			<CheckCircle2 className="text-lime-600" />
			<span className="sr-only">Available</span>
		</>
	);
}

export function UnavailableIcon() {
	return (
		<>
			<XCircle className="stroke-destructive" />
			<span className="sr-only">Unavailable</span>
		</>
	);
}
