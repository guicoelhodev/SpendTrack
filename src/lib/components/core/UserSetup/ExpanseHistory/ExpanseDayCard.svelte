<script lang="ts">
	import { ApplicationService } from "$lib/api/application/presentation/ApplicationService";
	import { ExpanseCategoryService } from "$lib/api/application/presentation/ExpanseCategoryService";
	import type { ExpanseAmount } from "$lib/api/core/models/ExpanseAmount";
	import { formatCurrency } from "$lib/utils/formatCurrency";
	import { liveQuery } from "dexie";
	import type { TActions, THandleActions,  } from "./index.svelte";

  type TProps = { 
		action: TActions;
		handleActions: THandleActions
		expanseDay: string;
		list: ExpanseAmount[]
	}


	const props: TProps = $props()
	const applicationService = new ApplicationService();
	const expanseCategoryService = new ExpanseCategoryService();

	const applicationDB = liveQuery(async() => await applicationService.getApplication());

	const total = props.list.reduce((acc, curr) => acc + curr.amount, 0)

	const categories = liveQuery(async() => {
		return await expanseCategoryService.getList()
	});

	function getColorCategoryItem(expanse: ExpanseAmount){

		console.log(expanse)
		const findCategory = $categories?.find(i => i.name === expanse.categoryName);

		if(!findCategory || !findCategory.isDefault)
			return expanse.defaultHexColor;
		return findCategory.hexColor
	};
</script>

<li class="flex flex-col w-full">

	<header class="flex gap-2 items-end justify-between">
		<h3 class="text-lg font-semibold">
			{props.expanseDay}
		</h3>
		<p>
			{formatCurrency({
				total,
				currencyLocation: $applicationDB?.currencyLocation,
				currencyType:  $applicationDB?.currencyType
			})}
		</p>
	</header>

	<ul class="pl-4 pt-2">
    {#each props.list as amount}
    	<li class="flex gap-2 items-center">
				<span
					style:background-color={getColorCategoryItem(amount)}
					class="w-4 h-4 rounded-full"
				>
				</span>
				<p>{amount.categoryName}</p>

				<span
					class="translate-y-1 h-1 flex-1 border-dotted border-b">
				</span>

				<p class="text-sm text-text-secondary">
					{amount.amount}
				</p>
    	</li>
    {/each}
	</ul>
</li>

