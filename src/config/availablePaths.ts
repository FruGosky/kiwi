import { TNavPath } from '@/components/Nav';
import { createRouteMatcher } from '@clerk/nextjs/server';

type TAvailableSites = 'storeFront' | 'admin';

export const navPaths: Record<TAvailableSites, TNavPath[]> = {
	storeFront: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'Products',
			href: '/products',
		},
		{
			title: 'Orders',
			href: '/orders',
		},
	],
	admin: [
		{
			title: 'Home',
			href: '/admin',
		},
		{
			title: 'Products',
			href: '/admin/products',
		},
		{
			title: 'Orders',
			href: '/admin/orders',
		},
	],
};

export const isProtectedRoute = createRouteMatcher([
	'/admin(.*)',
	'/products/(.*)/purchase',
]);

export const isAdminRoute = createRouteMatcher(['/admin(.*)']);
