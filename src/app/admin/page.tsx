import DashboardCard from '@/components/DashboardCard';
import db from '@/db/db';
import { formatCurrency, formatNumber } from '@/lib/formatters';
import { Metadata } from 'next';
import AdminPageName from './_components/AdminPageName';

const getSales = async () => {
	const orderData = await db.order.aggregate({
		_sum: { priceInCents: true },
		_count: true,
	});

	return {
		totalOrders: orderData._count,
		totalEarnings: (orderData._sum.priceInCents || 0) / 100,
	};
};

const getCustomers = async () => {
	const [customerCount, productData] = await Promise.all([
		db.user.count(),
		db.product.aggregate({ _sum: { priceInCents: true } }),
	]);

	const allProductPriceSum = productData._sum.priceInCents;

	return {
		customerCount,
		valuePerUser:
			customerCount !== 0
				? (allProductPriceSum || 0) / customerCount / 100
				: 0,
	};
};

const getProducts = async () => {
	const [activeProducts, inactiveProducts] = await Promise.all([
		db.product.count({
			where: { isAvailableForPurchase: true },
		}),
		db.product.count({
			where: { isAvailableForPurchase: false },
		}),
	]);

	return { activeProducts, inactiveProducts };
};

const pageName = 'Dashboard';

export const metadata: Metadata = {
	title: `Kiwi - Admin - ${pageName}`,
};

export default async function AdminHomePage() {
	const [
		{ totalEarnings, totalOrders },
		{ customerCount, valuePerUser },
		{ activeProducts, inactiveProducts },
	] = await Promise.all([getSales(), getCustomers(), getProducts()]);

	return (
		<>
			<AdminPageName>{pageName}</AdminPageName>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<DashboardCard
					title="Sales"
					description={`Total Orders: ${formatNumber(totalOrders)}`}
					content={formatCurrency(totalEarnings)}
				/>
				<DashboardCard
					title="Customers"
					description={`Average value per user: ${formatCurrency(valuePerUser)}`}
					content={formatNumber(customerCount)}
				/>
				<DashboardCard
					title="Active Products"
					description={`Inactive products: ${formatNumber(inactiveProducts)}`}
					content={formatNumber(activeProducts)}
				/>
			</div>
		</>
	);
}
