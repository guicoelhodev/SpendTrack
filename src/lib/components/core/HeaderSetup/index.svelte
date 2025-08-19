<script>
	import { application } from "$lib/stores/application.svelte";
	import CreateExpanseModal from "$lib/components/core/CreateExpanseModal/index.svelte"
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import { liveQuery } from "dexie";

	const expanseAmountService = new ExpanseAmountService();

	const amountList = liveQuery(async() => await expanseAmountService.getByMonth('august_2025'))

</script>


<header class="flex gap-4 items-center justify-between p-4">
	{#if amountList}
		{@const total = $amountList?.reduce((acc, curr) => acc + curr.amount,0)}
		<p class="text-3xl font-semibold text-text-primary">TOTAL: {total}</p>
	{/if}
	<button 
		onclick={() => application.openModal = 'addExpanse'}
		class='border border-green-300 text-green-300 p-2 rounded-md'
		>
			Add Expanse
	</button>
</header>

{#if application.openModal === 'addExpanse'}
	<CreateExpanseModal	 onClose={() => application.openModal = 'idle' }/>
{/if}
