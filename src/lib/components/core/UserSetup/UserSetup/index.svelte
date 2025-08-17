<script lang="ts">
	import SolarSettingsBold from '~icons/solar/settings-bold';
	import { application } from "$lib/stores/application.svelte";

	import SetupModal from './SetupModal/index.svelte';
</script>

<button
	onclick={() => application.isOpenSetup = true }
	class="bg-background-primary p-2 rounded-full grid place-content-center"
	aria-labelledby="setup-user">
		<SolarSettingsBold />
</button>

{#if application.isOpenSetup}
	<SetupModal />
{/if}
