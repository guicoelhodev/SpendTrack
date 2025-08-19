type TApplication = {
	isDrawer: boolean
	isOpenSetup: boolean
	currencyType: string
	currencyLocation: string
};

export const application = $state<TApplication>({
	isDrawer: false,
	isOpenSetup: true,
	currencyType: 'USD',
	currencyLocation: 'en-UI'
})
