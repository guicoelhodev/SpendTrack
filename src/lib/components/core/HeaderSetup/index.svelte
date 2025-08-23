<script lang="ts">
	import CreateExpanseModal from "$lib/components/core/CreateExpanseModal/index.svelte"
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import { liveQuery } from "dexie";
	import { SessionService } from "$lib/api/application/presentation/SessionService";
	import { ApplicationService } from "$lib/api/application/presentation/ApplicationService";

	const expanseAmountService = new ExpanseAmountService();
	const sessionService = new SessionService();
	const applicationService = new ApplicationService();

	let showModal = $state(false);

	const applicationDB = liveQuery(async() => await applicationService.getApplication());

	const amountList = liveQuery(async() => {
		const session = await sessionService.getSession();

		if(!session) return [];
		return await expanseAmountService.getByMonth('august_2025', session.userId )
	})

	function formatCurrency(total: number){
		const location = $applicationDB?.currencyLocation ?? 'en-US';
		const currency = $applicationDB?.currencyType ?? 'USD';
    return Intl.NumberFormat(location, { 
			style: 'currency',
			currency: currency
		}).format(total) 
	}

</script>

<header class="flex gap-4 items-center justify-between p-4">
	{#if amountList}
		{@const total = $amountList?.reduce((acc, curr) => acc + curr.amount,0)}
		<p class="text-3xl font-semibold text-text-primary">TOTAL: {formatCurrency(total)}</p>
	{/if}
	<button 
		onclick={() => showModal = true}
		class='border border-green-300 text-green-300 p-2 rounded-md'
		>
			Add Expanse
	</button>
</header>

{#if showModal}
	<CreateExpanseModal	 onClose={() => showModal = false }/>
{/if}
