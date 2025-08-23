<script lang="ts">
	import { ExpanseAmountService } from '$lib/api/application/presentation/ExpanseAmountService';
	import { SessionService } from '$lib/api/application/presentation/SessionService';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { liveQuery } from 'dexie';
	import SolarHistoryBold from '~icons/solar/history-bold';
	import ExpanseDayCard from './ExpanseDayCard.svelte';

	let showModal = $state(true);
	const expanseAmountService = new ExpanseAmountService();
	const sessionService = new SessionService();


	const expanseList = liveQuery(async() => {
		const session = await sessionService.getSession();
		if(!session) return {}

		return expanseAmountService.getExpanseListByYear(2025, session.userId)
	})

	const getExpanseKeys = $derived(() => {
	  return Object.keys($expanseList ?? {})
	})

	$inspect(getExpanseKeys())
</script>

<button onclick={() => showModal = true } title="View history">
	<SolarHistoryBold />
</button>

{#if showModal}
	<Modal title="History expanse" onClose={() => showModal = false}>
		<ul class="w-[calc(100svh-5rem)] max-w-[40rem] flex flex-col gap-4">
			{#each getExpanseKeys() as dayKey}
				<ExpanseDayCard expanseDay={dayKey} list={$expanseList[dayKey]}/>
			{/each}
		</ul>
	</Modal>
{/if}
