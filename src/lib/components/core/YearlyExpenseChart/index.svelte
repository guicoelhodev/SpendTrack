<script lang="ts">
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import { SessionService } from "$lib/api/application/presentation/SessionService";
	import BarChart from "$lib/components/ui/BarChart.svelte";
	import { liveQuery } from "dexie";

	const expanseAmountService = new ExpanseAmountService();
	const sessionService = new SessionService();

	const expanses = liveQuery(async() => {
		const session = await sessionService.getSession(1);

		if(!session) return [];

		return await expanseAmountService.getAllExpanseAmountByYear(2025, session.userId)
	})

</script>

{#if $expanses?.length}
	<BarChart
		height='400px'
		data={$expanses ?? []}
		axisName={{ x: 'monthKey', y: 'amount'}}
	/>
	<p class="text-center">Expanses by month</p>
	{:else if !!$expanses}
	<div class="h-full grid place-content-center">
		<p class="text-text-secondary text-lg">
			No expenses recorded for this year
		</p>
	</div>
{/if}







