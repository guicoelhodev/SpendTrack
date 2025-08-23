<script lang="ts">
	import Modal from '$lib/components/ui/Modal.svelte';
	import SolarHistoryBold from '~icons/solar/history-bold';

	let showModal = $state(true);
</script>

<button onclick={() => showModal = true } title="View history">
	<SolarHistoryBold />
</button>

{#if showModal}
	<Modal title="History expanse" onClose={() => showModal = false}>
		<div class="w-[calc(100svh-2rem)] max-w-[40rem]">

		</div>
	</Modal>
{/if}
