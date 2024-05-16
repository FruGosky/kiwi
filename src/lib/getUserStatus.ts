import { rolesAllowedToAdminRoutes } from '@/config/roles';
import { auth, ClerkMiddlewareAuth } from '@clerk/nextjs/server';

type TUserStatus = {
	isLoggedIn: boolean;
	isAdmin: boolean;
};

export const getUserStatus = (
	middlewareAuth?: ClerkMiddlewareAuth,
): TUserStatus => {
	const { sessionClaims } = (middlewareAuth ?? auth)();

	const userStatus = {
		isLoggedIn: false,
		isAdmin: false,
	};

	if (sessionClaims) userStatus.isLoggedIn = true;

	const userRole = sessionClaims?.publicMetadata.role;

	if (rolesAllowedToAdminRoutes.some((role) => role === userRole)) {
		userStatus.isAdmin = true;
	}

	return userStatus;
};
