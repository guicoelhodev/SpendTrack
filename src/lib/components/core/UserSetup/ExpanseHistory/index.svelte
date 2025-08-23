<script module lang="ts">
	export type TActions = {
		action: 'delete' | 'idle',
		requestState: 'idle' | 'loading',
		deleteList: number[]
	}

	export type THandleActions = (partial: TActions) => void;
</script>

<script lang="ts">
	import { ExpanseAmountService } from '$lib/api/application/presentation/ExpanseAmountService';
	import { SessionService } from '$lib/api/application/presentation/SessionService';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { liveQuery } from 'dexie';
	import SolarHistoryBold from '~icons/solar/history-bold';
	import ExpanseDayCard from './ExpanseDayCard.svelte';
	import SolarTrashBin2Bold from '~icons/solar/trash-bin-2-bold';
	import MaterialSymbolsClose from '~icons/material-symbols/close';
	import MaterialSymbolsCheckRounded from '~icons/material-symbols/check-rounded';
	import LineMdLoadingLoop from '~icons/line-md/loading-loop';

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

	let actions: TActions = $state({
    action: 'idle',
		deleteList: [],
		requestState: 'idle'
	});

	async function bulkDelete(){
		actions.requestState = 'loading';
		await new Promise(resolve => setTimeout(resolve, 1000 ));

	  return actions = { 
			action: 'idle',
			deleteList: [],
			requestState: 'idle'
		}
	}
</script>

<button onclick={() => showModal = true } title="View history">
	<SolarHistoryBold />
</button>

{#if showModal}
	<Modal title="History expanse" onClose={() => showModal = false}>
		<section class="relative">
			<ul class="w-[calc(100svh-5rem)] max-w-[40rem] flex flex-col gap-4">
				{#each getExpanseKeys() as dayKey}
					<ExpanseDayCard
						expanseDay={dayKey}
						list={$expanseList[dayKey]}
						action={actions}
						handleActions={partial => {
							actions = Object.assign(actions, partial)
						}}
					/>
				{/each}
			</ul>

			<footer 
				class="sticky bottom-0 py-4 translate-y-4 bg-background-secondary flex justify-end"
			>
				{#if actions.action === 'idle'}
					<button 
						class="border p-2 transition-all rounded-full text-neutral-500 hover:text-neutral-300"
						onclick={() => actions.action = 'delete'}
					>
						<SolarTrashBin2Bold />
					</button>
					{:else if actions.action === 'delete'}
						<button 
							class="border p-2 rounded-full text-red"
							onclick={() => {
								actions = { ...actions, action: 'idle', deleteList: []}
							}}
							disabled={actions.requestState === 'loading'}
						>
							<MaterialSymbolsClose />
						</button>

						<button 
							class="ml-2 border p-2 rounded-full text-green-600"
							onclick={bulkDelete}
							disabled={actions.requestState === 'loading'}
						>

							{#if actions.requestState === 'loading'} 
								<LineMdLoadingLoop />
							{:else}
								<MaterialSymbolsCheckRounded />
							{/if}
						</button>
				{/if}
			</footer>
		</section>
	</Modal>
{/if}
