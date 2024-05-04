const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
	currency: 'USD',
	style: 'currency',
	minimumFractionDigits: 0,
});

export const formatCurrency = (amount: number) => {
	return CURRENCY_FORMATTER.format(amount);
};

const NUMBER_FORMATTER = new Intl.NumberFormat('en-US');

export const formatNumber = (amount: number) => {
	return NUMBER_FORMATTER.format(amount);
};

export const dateFormatter = () => {
	return new Intl.DateTimeFormat('en', {
		dateStyle: 'long',
	});
};

export const dateTimeFormatter = () => {
	return new Intl.DateTimeFormat('en', {
		dateStyle: 'long',
		timeStyle: 'medium',
	});
};
