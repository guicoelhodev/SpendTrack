<script lang="ts">
	import Modal from "$lib/components/ui/Modal.svelte";
	import SolarSettingsBold from '~icons/solar/settings-bold';
	import SolarLinkMinimalistic2Bold from '~icons/solar/link-minimalistic-2-bold';
	import SolarInfoCircleOutline from '~icons/solar/info-circle-outline';

	import { application } from "$lib/stores/application.svelte";

	type Menu = { icon: any, name: string }
	const menuOptions: Menu[] = [
		{ icon: SolarSettingsBold, name: 'General settings'},
		{ icon: SolarLinkMinimalistic2Bold, name: 'Appearence' },
		{ icon: SolarInfoCircleOutline, name: 'About project' }
	]

	let currentPane = $state<Menu>(menuOptions[0]);

</script>

<Modal title='Application preferences' onClose={() => application.isOpenSetup = false}>
	<div class="min-w-[600px] flex divide-x-1 divide-text-secondary">
		<ul class="pr-4 flex flex-col">
			{#each menuOptions as option}
				{@const Icon = option.icon}
				<button 
					class="transition-all flex gap-2 items-center p-2 text-text-secondary rounded-md"
					class:text-text-primary={currentPane.name === option.name}
					class:text-text-secondary={currentPane.name !== option.name}
					onclick={() => currentPane = option}
				>
					<Icon />
					{option.name}
				</button>
			{/each}
		</ul>

		<section class="flex-1 pl-4">
			{currentPane.name}
		</section>
	</div>
</Modal>
