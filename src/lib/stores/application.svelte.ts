type TApplication = {
	isDrawer: boolean
	openModal:  'idle' | 'addExpanse' | 'openSetup'
	currencyType: string
	currencyLocation: string
};


export const application = $state<TApplication>({
	isDrawer: false,
	currencyType: 'USD',
	currencyLocation: 'en-UI',
	openModal: 'idle'
})
