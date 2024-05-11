import {
	clerkClient,
	clerkMiddleware,
	createRouteMatcher,
} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
	'/admin(.*)',
	'/products/(.*)/purchase',
]);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export const rolesAllowedToAdminRoutes = ['admin'];

const redirectNoPermissions = (url: string) => {
	const redirectUrl = new URL('/', url);
	redirectUrl.searchParams.append(
		'alertMessage',
		"You don't have permission to admin route!",
	);
	return NextResponse.redirect(redirectUrl);
};

export default clerkMiddleware(async (auth, req) => {
	if (!isProtectedRoute(req)) return NextResponse.next();

	if (!isAdminRoute(req)) {
		throw new Error(`Unhandled route for '${req.url}'`);
	}

	const { userId } = auth();

	if (!userId) {
		auth().protect();
		return NextResponse.next();
	}

	const userData = await clerkClient.users.getUser(userId);

	const userRole = userData.privateMetadata.role;
	if (typeof userRole !== 'string') {
		return redirectNoPermissions(req.url);
	}

	if (!rolesAllowedToAdminRoutes.includes(userRole)) {
		return redirectNoPermissions(req.url);
	}
});

export const config = {
	matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
