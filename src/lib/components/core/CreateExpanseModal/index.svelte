<script lang="ts">
	import { ExpanseCategoryService } from "$lib/api/application/presentation/ExpanseCategoryService";
	import Modal from "$lib/components/ui/Modal.svelte";
	import CurrencyInput from "@canutin/svelte-currency-input";
	import { liveQuery } from "dexie";
	import { application } from "$lib/stores/application.svelte";
	
	type TProps = { onClose: VoidFunction }

	type TExpanseForm = {
		date: string
		currentCategoryName: string
		total:number;
	};

	const categories = liveQuery(() => categoryService.getList());
	const props: TProps = $props();

	const categoryService = new ExpanseCategoryService();

	let expanseForm = $state<TExpanseForm>({
		date: new Intl.DateTimeFormat('en-CA').format(new Date()),
		currentCategoryName: 'food',
		total: 0
	});

	$inspect(expanseForm)

</script>

<Modal title='Add new expanse' onClose={props.onClose}>

	<form class="flex flex-col gap-4 w-[30rem]">
		<article class="flex flex-col gap-2">
			<label class="text-text-primary" for='category-select'>
				Expanse date:
			</label>

			<input 
				type="date"
				class="border border-text-secondary p-2 outline-1 outline-transparent rounded-md focus:outline-text-secondary"
				bind:value={expanseForm.date}
			/>
		</article>

		<article class="flex flex-col gap-2">
			<label class="text-text-primary" for='category-select'>
				Choose expanse category:
			</label>

			<ul class="flex gap-2 flex-wrap">
				{#each $categories as category}
				<li
					class="p-2 border rounded-sm"
					class:border-text-secondary={expanseForm.currentCategoryName === category.name}
					class:border-transparent={expanseForm.currentCategoryName !== category.name}
				>
					<button 
						onclick={() => expanseForm.currentCategoryName = category.name}
						class='flex gap-2 items-center'
						type='button'
					>
						{category.name}

						<span 
							class="w-4 h-4 rounded-full"
							style:background={category.hexColor}
							>
						</span>
					</button>
				</li>
				{/each}
			</ul>
		</article>

		<article class="flex flex-col gap-2">
			<label for="currency-input">Expanse amount:</label>
			<CurrencyInput 
				id='currency-input'
				name="total"
				bind:value={expanseForm.total}
				isNegativeAllowed={false}
				locale={application.currencyLocation}
				currency={application.currencyType}
				inputClasses={{
					formatted: 'rounded-md p-2 border outline-0 focus:outline-1 text-white placeholder:text-text-secondary w-full'
				}}
			/>
		</article>
	</form>
</Modal>
