type TApplication = {
	isDrawer: boolean
	isOpenSetup: boolean
	currencyType: string
};

export const application = $state<TApplication>({
	isDrawer: false,
	isOpenSetup: false,
	currencyType: 'BRL'
})
