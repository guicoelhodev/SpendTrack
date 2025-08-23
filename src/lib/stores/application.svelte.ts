type TApplication = {
	showLoginModal: boolean;
};

export const application = $state<TApplication>({
	showLoginModal: false
})
