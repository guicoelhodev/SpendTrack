type TApplication = {
	isDrawer: boolean
	isOpenSetup: boolean
	currencyType: string
	currencyLocation: string
};

export const application = $state<TApplication>({
	isDrawer: false,
	isOpenSetup: false,
	currencyType: 'USD',
	currencyLocation: 'en-UI'
})
