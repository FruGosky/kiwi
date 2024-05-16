export const rolesAllowedToAdminRoutes = ['admin', 'moderator'] as const;

export type TAdminRoles = (typeof rolesAllowedToAdminRoutes)[number];

export type TAllRoles = TAdminRoles | undefined;
