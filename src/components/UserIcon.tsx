'use client';

import { useUser, UserButton, SignInButton } from '@clerk/nextjs';
import { Button } from './ui/button';

export default function UserIcon() {
	const { isSignedIn } = useUser();

	return isSignedIn ? (
		<UserButton />
	) : (
		<Button asChild>
			<SignInButton mode="modal" />
		</Button>
	);
}
