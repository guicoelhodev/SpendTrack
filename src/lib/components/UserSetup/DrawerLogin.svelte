<script lang="ts">
	import type { TActions } from "./LoginUser.svelte";

	type TProps = {
		actions: TActions
		onConnect: (user: string) => void
		onDisconnect: VoidFunction
	};

	const props: TProps = $props()

	let selectedUser = $state<string | null>(props.actions.currentUser)

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
						class:bg-background-primary={selectedUser === user.name}
						onclick={() => selectedUser = user.name}
					>
					{user.name}
				</button>
			</li>
		{/each}
	</ul>
	</section>

	<footer>
		{#if selectedUser && !props.actions.currentUser}
			<button onclick={() => props.onConnect(selectedUser!)} 
				class="bg-green-600 w-full p-2 rounded-md">
				Sign as {selectedUser}
			</button>
		{/if}

		{#if selectedUser === props.actions.currentUser && props.actions.currentUser}
			<button onclick={props.onDisconnect}
				class="bg-red w-full p-2 rounded-md">
				Disconnect
			</button>
		{/if}
	</footer>
</div>

<style>

	.drawer {
		animation: show 400ms linear
	}

	@keyframes show {
		from { transform: translateX(100%); }
		to { transform: translateX(0); }
	}
</style>

