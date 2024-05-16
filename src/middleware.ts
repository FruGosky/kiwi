import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { getUserStatus } from '@/lib/getUserStatus';
import { isProtectedRoute, isAdminRoute } from './config/availablePaths';

const redirectNoPermissions = (url: string) => {
	const redirectUrl = new URL('/', url);
	redirectUrl.searchParams.append(
		'alertMessage',
		"You don't have permissions to this route!",
	);
	return NextResponse.redirect(redirectUrl);
};

export default clerkMiddleware(async (auth, req) => {
	if (!isProtectedRoute(req)) return NextResponse.next();

	const { isLoggedIn, isAdmin } = getUserStatus();

	if (!isLoggedIn) {
		auth().protect();
		return NextResponse.next();
	}

	if (!isAdminRoute(req)) return;

	if (!isAdmin) {
		return redirectNoPermissions(req.url);
	}
});

export const config = {
	matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
