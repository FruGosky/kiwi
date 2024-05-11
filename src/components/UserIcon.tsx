import {
	ClerkLoading,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/nextjs';
import { Skeleton } from './ui/skeleton';
import { Button } from './ui/button';

export default function UserIcon() {
	return (
		<div className="flex h-7 w-7 items-center">
			<ClerkLoading>
				<Skeleton className="h-7 w-7 rounded-full" />
			</ClerkLoading>
			<SignedIn>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<Button asChild>
					<SignInButton mode="modal" />
				</Button>
			</SignedOut>
		</div>
	);
}
