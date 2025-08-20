<script lang="ts">
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import BarChart from "$lib/components/ui/BarChart.svelte";
	import { liveQuery } from "dexie";

	const expanseAmountService = new ExpanseAmountService();
	const barData = [
		{
			"date": new Date('2025-08-06T03:00:00.000Z'),
			"value": 47,
			"baseline": 43
		},
		{
			"date": new Date('2025-08-07T03:00:00.000Z'),
			"value": 94,
			"baseline": 25
		},
		{
			"date": new Date('2025-08-08T03:00:00.000Z'),
			"value": 84,
			"baseline": 47
		},
		{
			"date": new Date('2025-08-09T03:00:00.000Z'),
			"value": 63,
			"baseline": 31
		},
		{
			"date": new Date('2025-08-10T03:00:00.000Z'),
			"value": 29,
			"baseline": 42
		},
		{
			"date": new Date('2025-08-11T03:00:00.000Z'),
			"value": 44,
			"baseline": 82
		},
		{
			"date": new Date('2025-08-12T03:00:00.000Z'),
			"value": 46,
			"baseline": 90
		},
		{
			"date": new Date('2025-08-13T03:00:00.000Z'),
			"value": 99,
			"baseline": 99
		},
		{
			"date": new Date('2025-08-14T03:00:00.000Z'),
			"value": 91,
			"baseline": 94
		},
		{
			"date": new Date('2025-08-15T03:00:00.000Z'),
			"value": 85,
			"baseline": 72
		}
	]

	const expanses = liveQuery(async() => {
		return await expanseAmountService.getAllExpanseAmountByYear(2025)
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







