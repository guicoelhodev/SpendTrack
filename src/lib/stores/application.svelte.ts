type TApplication = {
	currencyType: string
	currencyLocation: string
	chartBarColor: string
};


export const application = $state<TApplication>({
	currencyType: 'USD',
	currencyLocation: 'en-UI',
	chartBarColor: '#1DAAF0'
})
