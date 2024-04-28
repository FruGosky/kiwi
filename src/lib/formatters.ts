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

export const dateFormatter = (
	locales?: Intl.LocalesArgument,
	options?: Intl.DateTimeFormatOptions,
) => {
	return new Intl.DateTimeFormat(
		locales ?? 'en',
		options ?? {
			dateStyle: 'long',
		},
	);
};
