import Link from 'next/link';

export default function GithubLink() {
	return (
		<Link
			href="https://github.com/FruGosky"
			target="_blank"
			className="font-medium underline"
			rel="noreferrer"
		>
			FruGosky
		</Link>
	);
}
