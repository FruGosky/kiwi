import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Kiwi',
	description: 'Kiwi store',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
