<script lang="ts">
	import CreateExpanseModal from "$lib/components/core/CreateExpanseModal/index.svelte"
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import { liveQuery } from "dexie";
	import { SessionService } from "$lib/api/application/presentation/SessionService";
	import { ApplicationService } from "$lib/api/application/presentation/ApplicationService";
	import { formatCurrency } from "$lib/utils/formatCurrency";
	import { getMonthList } from "$lib/utils/getMonthList";

	const expanseAmountService = new ExpanseAmountService();
	const sessionService = new SessionService();
	const applicationService = new ApplicationService();

	let showModal = $state(false);

	const applicationDB = liveQuery(async() => await applicationService.getApplication());

	const amountList = liveQuery(async() => {
		const session = await sessionService.getSession();

		if(!session) return [];
		return await expanseAmountService.getByMonth($applicationDB?.monthIndex ?? '', session.userId )
	})

	const monthList = $derived(() => 
		getMonthList('en-US')
	)

	const currentMonth = $derived(() => {
		const month = $applicationDB?.monthIndex?.split('_')[0]
		return month;
	})
</script>

<header class="flex gap-4 items-center justify-between p-4">
	{#if amountList}
		{@const total = $amountList?.reduce((acc, curr) => acc + curr.amount,0)}

		<aside class="flex flex-col sm:flex-row gap-2">
			<p class="text-lg sm:text-3xl font-semibold text-text-primary">TOTAL</p>
			<p class="text-lg sm:text-3xl font-semibold text-text-primary">
				{formatCurrency({
					total: total,
					currencyLocation: $applicationDB?.currencyLocation,
					currencyType: $applicationDB?.currencyType,
				})}
			</p>

		</aside>
	{/if}
	<button 
		onclick={() => showModal = true}
		class='border border-green-300 text-green-300 p-2 rounded-md text-sm sm:text-base'
		>
			Add Expanse
	</button>
</header>

{#if showModal}
	<CreateExpanseModal	 onClose={() => showModal = false }/>
{/if}

<section class="sm:pl-4 flex gap-4">
	<article class="flex flex-col gap-2 text-text-secondary">
		<label for="month-select">Month view:</label>
		<select 
			id="month-select" 
			class="border p-2 rounded-md"
			value={currentMonth()} 
			onchange={async(e:any) => {
				const month = e.target.value.toLowerCase()
				await applicationService.updateApplication({ monthIndex: `${month}_${new Date().getFullYear()}`})
			}}
		>
			{#each monthList() as month}
				<option>{month}</option>
			{/each}
		</select>
	</article>
</section>
