<script>
	import CreateExpanseModal from "$lib/components/core/CreateExpanseModal/index.svelte"
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import { liveQuery } from "dexie";
	import { SessionService } from "$lib/api/application/presentation/SessionService";

	const expanseAmountService = new ExpanseAmountService();
	const sessionService = new SessionService();

	let showModal = $state(false);

	const amountList = liveQuery(async() => {
		const session = await sessionService.getSession();

		if(!session) return [];
		await expanseAmountService.getByMonth('august_2025', session.userId)
	})

</script>

<header class="flex gap-4 items-center justify-between p-4">
	{#if $amountList?.length}
		{@const total = $amountList?.reduce((acc, curr) => acc + curr.amount,0)}
		<p class="text-3xl font-semibold text-text-primary">TOTAL: {total}</p>
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
