<script module lang="ts">
	import SolarLogout2Bold from '~icons/solar/logout-2-bold';
	import SolarUserBold from '~icons/solar/user-bold';


	export type TActions = {
		showDrawer: boolean
	};

</script>

<script lang="ts">
	import DrawerLogin from "./DrawerLogin/index.svelte";
	import { session } from '$lib/stores/session.svelte'
	import { application } from "$lib/stores/application.svelte";
	import { db } from '$lib/api/adapters/driven/datasource/db';
	import type { TUser } from '$lib/api/core/models/User';

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
	class="wrapper flex gap-4 items-center"
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
		<SolarLogout2Bold />
	{:else}
		<SolarUserBold />
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
