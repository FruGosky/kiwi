import { TNavPath } from '@/components/Nav';

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
