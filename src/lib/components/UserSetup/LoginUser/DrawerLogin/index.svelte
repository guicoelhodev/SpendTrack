<script lang="ts">
	import type { TActions } from "../index.svelte";

	type TProps = {
		actions: TActions
		onConnect: (user: string) => void
		onDisconnect: VoidFunction
	};

	type TDrawerActions = {
		selectedUser: string | null;
		createNewUser: boolean;
	}

	const { actions, ...props }: TProps = $props()

	let drawerActions: TDrawerActions = $state({
		createNewUser: false,
		selectedUser: actions.currentUser
	});

	const userList = [
		{ name: 'guicoelhodev', email: 'gs.coelho_dev@outlook.com' },
		{ name: 'jane_smith', email: 'jane_smith@gmail.com' },
		{ name: 'john_smith', email: 'john_smith@gmail.com' },
	];
</script>

<div class="drawer w-[360px] h-svh fixed top-0 right-0 bg-background-secondary p-4 flex flex-col justify-between">
	<section class="flex flex-col gap-4">
	<h2 class="self-center font-semibold text-lg">Select a user to sign</h2>
	<ul class="flex flex-col gap-2">
		{#each userList as user}
			<li class="w-full">
				<button 
						class="text-start transition-colors p-4 rounded-md w-full hover:bg-background-primary disabled:cursor-not-allowed"
						class:bg-background-primary={drawerActions.selectedUser === user.name}
						onclick={() => drawerActions.selectedUser = user.name}
					>
					{user.name}
				</button>
			</li>
		{/each}
	</ul>
	</section>

	<footer>
		{#if drawerActions.selectedUser && !actions.currentUser}
			<button onclick={() => props.onConnect(drawerActions.selectedUser!)} 
				class="bg-green-600 w-full p-2 rounded-md">
				Sign as {drawerActions.selectedUser}
			</button>
		{/if}

		{#if drawerActions.selectedUser === actions.currentUser && actions.currentUser}
			<button onclick={props.onDisconnect}
				class="bg-red w-full p-2 rounded-md">
				Disconnect
			</button>
		{/if}
	</footer>
</div>

<style>

	.drawer {
		animation: show 300ms ease-in
	}

	@keyframes show {
		from { transform: translateX(100%); }
		to { transform: translateX(0); }
	}
</style>

