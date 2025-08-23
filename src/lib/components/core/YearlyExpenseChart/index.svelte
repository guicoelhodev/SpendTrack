<script lang="ts">
	import { ApplicationService } from "$lib/api/application/presentation/ApplicationService";
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import { SessionService } from "$lib/api/application/presentation/SessionService";
	import BarChart from "$lib/components/ui/BarChart.svelte";
	import { liveQuery } from "dexie";

	const expanseAmountService = new ExpanseAmountService();
	const sessionService = new SessionService();
	const applicationService = new ApplicationService();

	const expanses = liveQuery(async() => {
		const session = await sessionService.getSession();

		if(!session) return [];

		return await expanseAmountService.getAllExpanseAmountByYear(2025, session.userId)
	});

  const application = liveQuery(async() => 
		await applicationService.getApplication()
	);

</script>

{#if $expanses?.length}
	<BarChart
		height='400px'
		data={$expanses ?? []}
		axisName={{ x: 'monthKey', y: 'amount'}}
		hexColor={$application?.chartBarColor}
	/>
	<p class="text-center">Expanses by month</p>

	{:else if !!$expanses}
	<div class="h-full grid place-content-center">
		<p class="text-text-secondary text-lg">
			No expenses recorded for this year
		</p>
	</div>
{/if}







