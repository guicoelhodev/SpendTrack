<script lang="ts">
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import { ExpanseCategoryService } from "$lib/api/application/presentation/ExpanseCategoryService";
	import PieChart from "$lib/components/ui/PieChart.svelte";
	import SolarClockCircleLineDuotone from '~icons/solar/clock-circle-line-duotone';
	import { liveQuery } from "dexie";

  const expanseAmountService = new ExpanseAmountService()
	const expanseCategory = new ExpanseCategoryService();

	const expanseAmountList = liveQuery(async() => {
		const list = await expanseAmountService.getAmountByCategory('august_2025')
		const categories = await expanseCategory.getList();

		const formattedList = list.map(i => {
			const category = categories.find(c => c.name === i.categoryName)
			return {
				...i,
				color: category ? category.hexColor : i.defaultHexColor
			}
		});

		return formattedList
	});

	const getTotal = $derived(() => {
		if(!$expanseAmountList?.length) return null

		return $expanseAmountList.reduce((acc, curr) => acc + curr.amount, 0)
	});

	function getPercentage(amount: number){
		return `- ${Math.round(amount * 100)}%`
	}

	const getFakePieChartData = $derived(async() => {

		const categories = await expanseCategory.getList();
    
		let data: { 
			amount: number; 
			categoryName: string
			color: string
		}[] = []

		categories.forEach(c => {
			const[min,max] = [50,100];
			const[minColor, maxColor] = [20, 90]

			const randomAmount = (Math.random() * (max - min) + min).toFixed(2)
			const randomOpacity= Math.round((Math.random() * (maxColor - minColor) + minColor))

      data.push({ 
				amount: Number(randomAmount),
				categoryName: c.name, color: '#6e6e6e' + randomOpacity
			})
		})
		
		return data
	})

</script>


{#if $expanseAmountList?.length}
	{@const total = getTotal()}
	<section class="flex flex-col gap-4">
			<PieChart
				data={$expanseAmountList} 
				value='amount'
				key='categoryName'
				height='300px'
			/>

		<ul class="mx-4 rounded-md border-2 border-background-secondary p-4 grid grid-cols-2 gap-4">
			{#each $expanseAmountList as expanseGroup}
				<li class="flex gap-4 justify-between items-center">
					<aside class="flex gap-2 items-center flex-wrap">
					<p class="text-text-secondary">{expanseGroup.categoryName}</p>
						{#if total}
							<span class="text-sm text-text-secondary">{getPercentage(expanseGroup.amount / total)}</span>
						{/if}
					</aside>
					<span 
						class="h-4 w-4 rounded-full"
						style:background={expanseGroup.color}
					></span>
				</li>
			{/each}
		</ul>
		<p class="text-text-primary text-center">Expanses by category</p>
	</section>
	{:else if !!$expanseAmountList}
	<section class="text-center">
		{#await getFakePieChartData()}
			<div class="grid place-content-center p-4">
				<SolarClockCircleLineDuotone width='2rem' height='2rem' />
			</div>
		{:then fakeData} 

			<PieChart
				data={fakeData} 
				value='amount'
				key='categoryName'
				height='300px'
			/>

			<span class="text-red">
					This is a fake chart. Add Expanse to get real data
			</span>
		{/await}
	</section>
{/if}
