<script lang="ts">
	import { ExpanseAmountService } from '$lib/api/application/presentation/ExpanseAmountService';
	import { SessionService } from '$lib/api/application/presentation/SessionService';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { liveQuery } from 'dexie';
	import SolarHistoryBold from '~icons/solar/history-bold';

	let showModal = $state(true);
	const expanseAmountService = new ExpanseAmountService();
	const sessionService = new SessionService();


	const expanseList = liveQuery(async() => {
		const session = await sessionService.getSession();
		if(!session) return []

		return expanseAmountService.getExpanseListByYear(2025, session.userId)
	})

	$inspect($expanseList)
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
