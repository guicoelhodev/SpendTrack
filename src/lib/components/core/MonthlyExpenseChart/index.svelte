<script lang="ts">
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import BarChart from "$lib/components/ui/BarChart.svelte";
	import { liveQuery } from "dexie";

	const expanseAmountService = new ExpanseAmountService();

	const expanseAmountList= liveQuery(async() => {
		return await expanseAmountService.getByMonth('august_2025')
	});
</script>

{#if expanseAmountList}
	<BarChart
		data={$expanseAmountList}
		axisName={{ x: 'date', y: 'amount'}}
		height={'300px'}
	/>
{/if}
