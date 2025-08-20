<script lang="ts">
	import SolarSettingsBold from '~icons/solar/settings-bold';
	import SetupModal from './SetupModal/index.svelte';

	let showModal = $state(false);
</script>

<button
	onclick={() => showModal = true }
	class="bg-background-primary p-2 rounded-full grid place-content-center"
	aria-labelledby="setup-user">
		<SolarSettingsBold />
</button>

{#if showModal}
	<SetupModal onClose={() => showModal = false} />
{/if}
