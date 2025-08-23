type TFormatCurrency = {
	total: number,
	currencyLocation?: string,
	currencyType?: string
}

export function formatCurrency(args: TFormatCurrency){
	const location = args.currencyLocation;
	const currency = args.currencyType;
	return Intl.NumberFormat(location ?? 'en-US', { 
		style: 'currency',
		currency: currency ?? 'USD'
	}).format(args.total) 
}
