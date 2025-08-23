<script lang="ts">
	import { ApplicationService } from "$lib/api/application/presentation/ApplicationService";
	import type { ExpanseAmount } from "$lib/api/core/models/ExpanseAmount";
	import { formatCurrency } from "$lib/utils/formatCurrency";
	import { liveQuery } from "dexie";

  type TProps = { 
		expanseDay: string;
		list: ExpanseAmount[]
	}


	const props: TProps = $props()
	const applicationService = new ApplicationService();

	const applicationDB = liveQuery(async() => await applicationService.getApplication());

	const total = props.list.reduce((acc, curr) => acc + curr.amount, 0)
</script>

<li class="flex flex-col w-full">

	<header class="flex gap-2 items-end justify-between">
		<h3 class="text-lg font-semibold">
			{props.expanseDay}
		</h3>
    <span class="-translate-y-2 h-1 flex-1 border-dotted border-b"></span>
		<p>{formatCurrency({
			total,
			currencyLocation: $applicationDB?.currencyLocation,
			currencyType:  $applicationDB?.currencyType
		})}</p>
	</header>

	<ul class="p-4">
    {#each props.list as amount}
    	<li>
				{amount.categoryName}
    	</li>
    {/each}
	</ul>
</li>

