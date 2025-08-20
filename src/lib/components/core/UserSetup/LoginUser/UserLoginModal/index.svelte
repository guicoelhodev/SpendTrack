<script module lang="ts">
	export type TDrawerActions = {
		createNewUser: boolean;
		user: TUser | null
	}
</script>

<script lang="ts">
	import CreateUser from "./CreateUser.svelte";
	import type { TUser } from '$lib/api/core/models/User';
	import { UserService } from '$lib/api/application/presentation/UserService';
	import { liveQuery } from 'dexie';
	import { SessionService } from '$lib/api/application/presentation/SessionService';
	import Modal from '$lib/components/ui/Modal.svelte';

	const userService = new UserService()
	const sessionService = new SessionService()

	const session = liveQuery(async() => await sessionService.getSession(1));

	type TProps = {
		isLogged: boolean
		onConnect: (user: TUser) => Promise<void>
		onDisconnect: () => Promise<void>
		onCancel: VoidFunction
	};

	const props: TProps = $props()

	let loginActions: TDrawerActions = $state({
		createNewUser: false,
		user: null
	});

	function handleDrawerActions(partial: Partial<TDrawerActions>){
		return loginActions = Object.assign(loginActions, partial)
	}

	async function onCreateUser(user: TUser){
		try {
			await userService.addUser({
				name: user.name,
				nickname: user.nickname,
				id: user.id
			});

			handleDrawerActions({ createNewUser: false })
		}catch (err){
			console.error(err)
		}
	}

	function getFocusUser(user: TUser){
		if(!loginActions.user) return $session?.userId === user.id;
		return loginActions.user.id === user.id
	}

	const users = liveQuery(async() => await userService.getAllUsers())
</script>

<Modal  title='Select a user to sign in' onClose={props.onCancel}>
	<div class="min-w-[400px]">
		{#if !loginActions.createNewUser}
			<section class="flex flex-col gap-4">

			<ul class="flex flex-col gap-2">
				{#if users}
					{#each $users as user}
						<li class="w-full">
							<button 
									class="text-start transition-colors p-4 rounded-md w-full hover:bg-background-primary disabled:cursor-not-allowed"
									class:bg-background-primary={getFocusUser(user)}
									onclick={() => handleDrawerActions({ user })}
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

			<footer class="pt-4">
				{#if !props.isLogged && loginActions.user?.id}
					<button onclick={() => props.onConnect(loginActions.user!)} 
						class="bg-green-600 w-full p-2 rounded-md">
						Sign as {loginActions.user?.nickname}
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

</Modal>
