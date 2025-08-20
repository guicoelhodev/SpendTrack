type TApplication = {
	isDrawer: boolean
	currencyType: string
	currencyLocation: string
	chartBarColor: string
};


export const application = $state<TApplication>({
	isDrawer: false,
	currencyType: 'USD',
	currencyLocation: 'en-UI',
	chartBarColor: '#1DAAF0'
})
