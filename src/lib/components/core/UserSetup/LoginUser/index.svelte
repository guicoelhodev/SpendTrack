<script module lang="ts">
	import { db } from "$lib/db";
	import type { TUser } from "$lib/types/User";

	export type TActions = {
		showDrawer: boolean
	};

</script>

<script lang="ts">
	import DrawerLogin from "./DrawerLogin/index.svelte";
	import { session } from '$lib/stores/session.svelte'
	import { application } from "$lib/stores/application.svelte";

	async function onConnect(user: TUser){
		try {
			const expiresAt = new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString();

			await db.session.put({
				id: 1,
				userId: user.id,
				expiresAt: expiresAt,
				nickname: user.nickname
			});

			application.isDrawer = false
		}catch (error) {
			console.error(`Error to connect:`, error)
		}
	};

	async function onDisconnect(){
		await db.session.delete(1)
		application.isDrawer = false
	}


	let isLogged = $derived(() => {
		if(!$session?.expiresAt) return false
		return new Date($session?.expiresAt) > new Date(Date.now())
	})
</script>


<article 
	class="wrapper flex gap-4 items-start"
	data-open={isLogged()}
>

	{#if application.isDrawer}
		<DrawerLogin 
			isLogged={isLogged()}
			onDisconnect={onDisconnect}
			onConnect={onConnect}
			onCancel={() => application.isDrawer = false}
		/>
	{/if}

	{#if isLogged()}
		<div class="w-64 flex flex-col">
			<p class="text-sm text-nowrap">Signed as <b>{$session?.nickname}</b></p>
			<span class="text-xs text-green-500">Online</span>
		</div>
	{:else}
		<div class="pl-2">
			<p class="text-sm">Not Signed</p>
			<span class="text-xs text-red">Offline</span>
		</div>
	{/if}

	<button
		onclick={() => application.isDrawer = !application.isDrawer}
		class="bg-background-primary p-2 rounded-full grid place-content-center"
		aria-labelledby='logout-btn'
	>
	{#if application.isDrawer}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"/></svg>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
	{/if}
	</button>

</article>

<style>
	.wrapper {
		overflow: hidden;
		transition: max-width 0s;
	}

	.wrapper[data-open="true"] {
		animation: expand 400ms cubic-bezier(.17,.67,.76,-0.23)
	}

	@keyframes expand {
		from { max-width: 16rem; }
		to   { max-width: 999px; }
	}
</style>
