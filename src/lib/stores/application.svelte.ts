type TApplication = {
	isDrawer: boolean
};

export const application = $state<TApplication>({
	isDrawer: false
})
