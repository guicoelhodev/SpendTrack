<script lang="ts">
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import BarChart from "$lib/components/ui/BarChart.svelte";
	import { liveQuery } from "dexie";

	const expanseAmountService = new ExpanseAmountService();

	const expanseAmountList= liveQuery(async() => {
		return await expanseAmountService.getByMonth('august_2025')
	});

	function getDayFormatted(date: Date){
		return new Intl.DateTimeFormat('en-US',{
			day: '2-digit',
			month: '2-digit'
		}).format(date);
	}

	function getFakeChart(){
		const date = new Date();

		const fakeChartData: Record<'date' | 'amount', string>[] = [];

		Array.from({ length: 10 }).forEach((_, index) => {
			const dateItem = new Date();
			dateItem.setDate(date.getDate() + index );

			const max = 100;
			const min = 20;

			let amountRandom = Math.random() * (max - min) + min;
			amountRandom = Number(amountRandom.toFixed(2));

			const currDay = getDayFormatted(dateItem);
      fakeChartData.push({ date: currDay, amount: amountRandom.toString() })
		})

		return fakeChartData
	}

</script>

<article class="h-full">
	{#if $expanseAmountList?.length}
		<BarChart
			data={$expanseAmountList}
			axisName={{ x: 'date', y: 'amount'}}
			height={'300px'}
		/>
	{:else}
		<div class="flex flex-col gap-2">
			<BarChart
				data={getFakeChart() ?? []}
				axisName={{ x: 'date', y: 'amount'}}
				height={'300px'}
				hexColor='#6e6e6e'
			/>
			<span class="text-red text-center">This is a fake chart. Add Expanse to get real data</span>
		</div>
	{/if}
</article>
