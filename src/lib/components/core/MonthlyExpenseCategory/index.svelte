<script lang="ts">
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	import { ExpanseCategoryService } from "$lib/api/application/presentation/ExpanseCategoryService";
	import PieChart from "$lib/components/ui/PieChart.svelte";
	import { liveQuery } from "dexie";

  const expanseAmountService = new ExpanseAmountService()
	const expanseCategory = new ExpanseCategoryService();

	const expanseAmountList = liveQuery(async() => {
		const list = await expanseAmountService.getAmountByMonthList('august_2025')
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

</script>

{#if expanseAmountList}
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
					<p class="text-text-secondary">{expanseGroup.categoryName}</p>
					<span 
						class="h-4 w-4 rounded-full"
						style:background={expanseGroup.color}
					></span>
				</li>
			{/each}
		</ul>
	</section>
{/if}
