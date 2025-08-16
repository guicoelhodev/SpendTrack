<script module lang="ts">
	import type { TUser } from "$lib/types/User";
	import { db } from "$lib/db";

	export type TDrawerActions = {
		createNewUser: boolean;
		user: TUser | null
	}
</script>

<script lang="ts">
	import CreateUser from "./CreateUser.svelte";
	import { session } from "$lib/stores/session.svelte";
	import { users } from "$lib/stores/users.svelte";

	type TProps = {
		isLogged: boolean
		onConnect: (user: TUser) => Promise<void>
		onDisconnect: () => Promise<void>
	};

	const props: TProps = $props()

	let drawerActions: TDrawerActions = $state({
		createNewUser: false,
		user: null
	});

	function handleDrawerActions(partial: Partial<TDrawerActions>){
		return drawerActions = Object.assign(drawerActions, partial)
	}

	async function onCreateUser(user: TUser){
		try {
			await db.users.add({
				name: user.name,
				nickname: user.nickname,
				id: user.id
			});

			handleDrawerActions({ createNewUser: false })
		}catch (err){
			console.error(`Error to add user:`, err)
		}
	}

	function getFocusUser(user: TUser){
		if(!drawerActions.user) return $session?.userId === user.id;
		return drawerActions.user.id === user.id
	}
</script>

<div class="drawer w-[360px] h-svh fixed top-0 right-0 bg-background-secondary p-4 flex flex-col justify-between">
	{#if !drawerActions.createNewUser}
		<section class="flex flex-col gap-4">
		<h2 class="self-center font-semibold text-lg">Select a user to sign</h2>
		<ul class="flex flex-col gap-2">
			{#if users}
				{#each $users as user}
					<li class="w-full">
						<button 
								class="text-start transition-colors p-4 rounded-md w-full hover:bg-background-primary disabled:cursor-not-allowed"
								class:bg-background-primary={getFocusUser(user)}
								onclick={() => handleDrawerActions({ user })}
								disabled={!!$session?.userId}
							>
							{user.name}
						</button>
					</li>
				{/each}
			{/if}
		</ul>

		<button
			onclick={() => handleDrawerActions({ createNewUser: true, user: null })}
			class="transition-colors text-text-secondary hover:underline hover:text-text-primary"
		>
				create new one
		</button>
		</section>

		<footer>
			{#if !props.isLogged && drawerActions.user?.id}
				<button onclick={() => props.onConnect(drawerActions.user!)} 
					class="bg-green-600 w-full p-2 rounded-md">
					Sign as {drawerActions.user?.nickname}
				</button>
			{/if}

			{#if props.isLogged && $session?.userId}
				<button onclick={props.onDisconnect}
					class="bg-red w-full p-2 rounded-md">
					Disconnect
				</button>
			{/if}

		</footer>
	{:else}
		<CreateUser onCreateUser={onCreateUser} />
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
