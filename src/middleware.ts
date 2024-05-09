import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
	'/admin(.*)',
	'/products/(.*)/purchase',
]);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
	if (!isProtectedRoute(req)) return;

	const { userId } = auth();

	if (isAdminRoute(req)) {
		if (!userId) {
			auth().protect();
			return;
		}

		// TODO Add roles in future
		// if (!has({ role: 'admin' })) {
		// 	auth().protect();
		// 	return;
		// }
	}

	auth().protect();
});

export const config = {
	matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
