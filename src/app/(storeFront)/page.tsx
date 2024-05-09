import ErrorAlert from '@/components/ErrorAlert';

type THomeProps = {
	searchParams?: {
		alertMessage?: string;
	};
};

export default function Home({ searchParams }: THomeProps) {
	return (
		<>
			{searchParams?.alertMessage ? (
				<ErrorAlert message={searchParams.alertMessage} />
			) : null}
			<h1>Home Page!</h1>
		</>
	);
}
