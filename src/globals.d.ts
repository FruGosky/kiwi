import { TAllRoles } from './config/roles';

declare global {
	interface CustomJwtSessionClaims {
		publicMetadata: {
			role?: TAllRoles;
		};
	}
}
