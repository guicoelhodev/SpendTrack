<script lang="ts">
	import Modal from "$lib/components/ui/Modal.svelte";
	import SolarSettingsBold from '~icons/solar/settings-bold';
	import SolarLinkMinimalistic2Bold from '~icons/solar/link-minimalistic-2-bold';
	import SolarInfoCircleOutline from '~icons/solar/info-circle-outline';

	import { application } from "$lib/stores/application.svelte";
	import type { Component } from "svelte";
	import About from "./About.svelte";

	type TPaneKey = 'general' | 'appearence' | 'about'
	type TMenu = { icon: Component, name: string, key: TPaneKey }

	const menuOptions: TMenu[] = [
		{ icon: SolarSettingsBold, name: 'General settings', key: 'general' },
		{ icon: SolarLinkMinimalistic2Bold, name: 'Appearence', key: 'appearence' },
		{ icon: SolarInfoCircleOutline, name: 'About project', key: 'about' }
	]

	let currentPane = $state<TPaneKey>(menuOptions[0].key);

	const paneViews: Record<TPaneKey, Component | null> = {
		about: About,
		appearence: null,
		general: null
	}
</script>

<Modal title='Application preferences' onClose={() => application.isOpenSetup = false}>
	<div class="w-[600px] flex divide-x-1 divide-text-secondary">
		<ul class="pr-4 flex flex-col">
			{#each menuOptions as option}
				{@const Icon = option.icon}
				<button 
					class="transition-all flex gap-2 items-center p-2 text-text-secondary rounded-md text-nowrap"
					class:text-text-primary={currentPane === option.key}
					class:text-text-secondary={currentPane !== option.key}
					onclick={() => currentPane = option.key}
				>
					<Icon />
					{option.name}
				</button>
			{/each}
		</ul>

		<section class="w-full pl-4">
			{#if currentPane}
				{@const Component = paneViews[currentPane]}
				<Component />
			{/if}
		</section>
	</div>
</Modal>
