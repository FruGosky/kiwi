import {
	ClerkLoading,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/nextjs';
import { Button } from '../ui/button';
import UserIconSkeleton from '../skeletons/UserIconSkeleton';

export default function UserIcon() {
	return (
		<div className="flex h-7 w-7 items-center">
			<ClerkLoading>
				<UserIconSkeleton />
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
