<script lang="ts">
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import BarChart from "$lib/components/ui/BarChart.svelte";
	import SolarClockCircleLineDuotone from '~icons/solar/clock-circle-line-duotone';
	import { liveQuery } from "dexie";
	import { SessionService } from "$lib/api/application/presentation/SessionService";

	const expanseAmountService = new ExpanseAmountService();
	const sessionService = new SessionService();

	const expanseAmountList= liveQuery(async() => {
		const session = await sessionService.getSession(1);

		if(!session) return [];
		return await expanseAmountService.getByMonth('august_2025', session.userId)
	});

	function getDayFormatted(date: Date){
		return new Intl.DateTimeFormat('en-US',{
			day: '2-digit',
			month: '2-digit'
		}).format(date);
	}

	async function getFakeChart(){
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

<article class="h-full text-center">
	{#if $expanseAmountList?.length}
		<BarChart
			data={$expanseAmountList}
			axisName={{ x: 'date', y: 'amount'}}
			height={'300px'}
		/>
		<span>Expanses by day</span>
	{:else if !!$expanseAmountList}
		<div class="flex flex-col gap-2 h-full">
			{#await getFakeChart()}
				<div class="flex-1 grid place-content-center p-4">
					<SolarClockCircleLineDuotone width='2rem' height='2rem' />
				</div>
			{:then fakeChart} 
				<BarChart
					data={fakeChart}
					axisName={{ x: 'date', y: 'amount'}}
					height={'300px'}
					hexColor='#6e6e6e'
				/>
				<span class="text-red text-center">
						This is a fake chart. Add Expanse to get real data
				</span>
			{/await}
		</div>
	{/if}
</article>
