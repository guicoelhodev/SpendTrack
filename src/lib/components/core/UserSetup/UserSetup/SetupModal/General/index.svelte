<script lang='ts'>
	import { liveQuery } from "dexie";

	import SolarArrowRightLinear from '~icons/solar/arrow-right-linear';
	import SolarTrashBin2Bold from '~icons/solar/trash-bin-2-bold';
	import CurrencyType from "./CurrencyType.svelte";
	import { ExpanseCategoryService } from "$lib/api/application/presentation/ExpanseCategoryService";

	const categoryService = new ExpanseCategoryService();

	const categories = liveQuery(() => categoryService.getList())
	const newColor = $state({
		hexColor: '#F54927',
		name: ''
	});

	async function handleColor(id: number, hexColor: string){
		await categoryService.update(id, { hexColor })
	}

	async function createNewColor(){
		if(!newColor.name){
			return alert('You need to type a category first')
		}

		const alreadyExist = $categories.find(i => i.name === newColor.name);

		if(alreadyExist){
			return alert('You need to add a different name on category')
		};

		try {
			await categoryService.add({ 
				hexColor: newColor.hexColor,
				name: newColor.name,
				isDefault: false
			});

			return newColor.name = ''
		}catch (error){
			console.log((error as Error).message)
		}
	}

	async function deleteCategory(index: number){
		try {
			await categoryService.delete(index)
		}catch (error){
			console.error((error as Error).message)
		}
	};

</script>

<section class="flex-1 flex flex-col gap-4">
	<h4 class="font-semibold">Category colors</h4>
	<ul class="text-text-secondary flex flex-col gap-4">
		{#each $categories as category}
			<li class="flex items-center gap-4 justify-between">
				{category.name}
				<span class="h-1 flex-1 border-b border-dashed"></span>
				<input
					type="color"
					class="w-8 h-4"
					value={category.hexColor}
					onchange={async(e) => {
						const hexColor = (e as any).target.value;
						await handleColor(category.id!, hexColor)
					}}
				/>

				<div class="w-4">
					{#if !category.isDefault}
						<button 
							onclick={async() => await deleteCategory(category.id!)}
							class="text-red"
						>
							<SolarTrashBin2Bold />
						</button>
					{/if}
				</div>
			</li>
		{/each}
	</ul>

	<form 
		class="flex items-center gap-2"
		onsubmit={async(e) => {
			e.preventDefault();
			await createNewColor()
		}}
	>
		<input
			class="p-1 flex-1 pl-2 outline-0 rounded-sm outline-text-secondary focus:outline-1"
			placeholder="Add new category"
			bind:value={newColor.name}
		/>

		<input
			type="color"
			bind:value={newColor.hexColor}
			class="w-12 h-6"
		/>

		<button
			class="text-text-secondary border p-2 rounded-full"
			type="submit"
		>
			<SolarArrowRightLinear />
		</button>
	</form>

	<CurrencyType />
</section>
