type TApplication = {
	isDrawer: boolean
	isOpenSetup: boolean
};

export const application = $state<TApplication>({
	isDrawer: false,
	isOpenSetup: false
})
