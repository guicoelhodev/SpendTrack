<script module>
	import type { TUser } from "$lib/types/User";

	export type TDrawerActions = {
		user: TUser | null;
		createNewUser: boolean;
	}
</script>

<script lang="ts">
	import type { TActions } from "../index.svelte";
	import CreateUser from "./CreateUser.svelte";

	type TProps = {
		actions: TActions
		onConnect: (user: TUser) => void
		onDisconnect: VoidFunction
	};


	const { actions, ...props }: TProps = $props()

	let drawerActions: TDrawerActions = $state({
		createNewUser: false,
		user: actions.currentUser
	});

	function handleDrawerActions(partial: Partial<TDrawerActions>){
		return drawerActions = Object.assign(drawerActions, partial)
	}

	const userList: TUser[] = $state([
		{ nickname: 'guicoelhodev', name: 'Guilherme Coelho' },
		{ nickname: 'jane_smith', name: 'Jane Smith' },
		{ nickname: 'john_smith', name: 'John Smith' },
	]);
</script>

<div class="drawer w-[360px] h-svh fixed top-0 right-0 bg-background-secondary p-4 flex flex-col justify-between">

	{#if !drawerActions.createNewUser}
		<section class="flex flex-col gap-4">
		<h2 class="self-center font-semibold text-lg">Select a user to sign</h2>
		<ul class="flex flex-col gap-2">
			{#each userList as user}
				<li class="w-full">
					<button 
							class="text-start transition-colors p-4 rounded-md w-full hover:bg-background-primary disabled:cursor-not-allowed"
							class:bg-background-primary={drawerActions.user?.name === user.name}
							onclick={() => handleDrawerActions({ user })}
						>
						{user.name}
					</button>
				</li>
			{/each}
		</ul>

			<button
				onclick={() => handleDrawerActions({ createNewUser: true, user: null })}
				class="transition-colors text-text-secondary hover:underline hover:text-text-primary"
			>create new one</button>
		</section>

		<footer>
			{#if drawerActions.user && !actions.currentUser}
				<button onclick={() => props.onConnect(drawerActions.user!)} 
					class="bg-green-600 w-full p-2 rounded-md">
					Sign as {drawerActions.user.nickname}
				</button>
			{/if}

			{#if drawerActions.user === actions.currentUser && actions.currentUser}
				<button onclick={props.onDisconnect}
					class="bg-red w-full p-2 rounded-md">
					Disconnect
				</button>
			{/if}
		</footer>
	{:else}
		<CreateUser
			onCreateUser={user => {
				userList.push(user)
			  handleDrawerActions({ createNewUser: false })
			}}
		/>
	{/if}
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

