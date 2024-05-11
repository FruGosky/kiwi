import GithubLink from './buttons/GithubLink';

export default function Footer() {
	return (
		<footer className="py-6 md:py-0">
			<div className="container flex flex-col justify-center md:min-h-24">
				<CreationInfo />
			</div>
		</footer>
	);
}

function CreationInfo() {
	return (
		<p className="text-balance text-center text-sm text-muted-foreground md:text-left">
			Page created by <GithubLink />.
		</p>
	);
}
