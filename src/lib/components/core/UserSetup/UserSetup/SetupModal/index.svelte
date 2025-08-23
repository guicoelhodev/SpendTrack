<script lang="ts">
	import type { Component } from "svelte";

	import Modal from "$lib/components/ui/Modal.svelte";
	import SolarSettingsBold from '~icons/solar/settings-bold';
	import SolarLinkMinimalistic2Bold from '~icons/solar/link-minimalistic-2-bold';
	import SolarInfoCircleOutline from '~icons/solar/info-circle-outline';

	import About from "./About.svelte";
	import General from "./General/index.svelte";
	import Appearance from "./Appearance/index.svelte";

	type TProps = { onClose: VoidFunction }
	type TPaneKey = 'general' | 'appearance' | 'about'
	type TMenu = { icon: Component, name: string, key: TPaneKey }

	const props: TProps = $props()
	const menuOptions: TMenu[] = [
		{ icon: SolarSettingsBold, name: 'General settings', key: 'general' },
		{ icon: SolarLinkMinimalistic2Bold, name: 'Appearance', key: 'appearance' },
		{ icon: SolarInfoCircleOutline, name: 'About project', key: 'about' }
	]

	let currentPane = $state<TPaneKey>(menuOptions[0].key);

	const paneViews: Record<TPaneKey, Component | null> = {
		about: About,
		appearance: Appearance,
		general: General
	}
</script>

<Modal title='Application preferences' onClose={props.onClose}>
	<div class="flex flex-col items-stretch sm:flex-row sm:divide-x-1 sm:divide-text-secondary w-full">
		<ul class="flex pr-4 justify-center sm:justify-start sm:flex-col">
			{#each menuOptions as option}
				{@const Icon = option.icon}
				<button 
					title={option.name}
					class="transition-all flex gap-2 items-center p-4 sm:p-2 text-text-secondary rounded-md text-nowrap"
					class:text-text-primary={currentPane === option.key}
					class:text-text-secondary={currentPane !== option.key}
					onclick={() => currentPane = option.key}
				>
					<Icon />
					<span class="hidden sm:block">{option.name}</span>
				</button>
			{/each}
		</ul>

		<section class="sm:pl-4 flex-1 sm:w-[400px]">
			{#if currentPane}
				{@const Component = paneViews[currentPane]}
				<Component />
			{/if}
		</section>
	</div>
</Modal>
