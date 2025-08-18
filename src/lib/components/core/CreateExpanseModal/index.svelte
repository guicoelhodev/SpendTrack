<script lang="ts">
	import { ExpanseCategoryService } from "$lib/api/application/presentation/ExpanseCategoryService";
	import Modal from "$lib/components/ui/Modal.svelte";
	import { liveQuery } from "dexie";
	
	type TProps = { onClose: VoidFunction }

	type TExpanseForm = {
		currentHexColor: string
	};

	const categories = liveQuery(() => categoryService.getList());
	const props: TProps = $props();

	const categoryService = new ExpanseCategoryService();

	let expanseForm = $state<TExpanseForm>({
		currentHexColor: ''
	});

</script>

<Modal title='Add new expanse' onClose={props.onClose}>

	<form class="flex flex-col gap-4 w-[30rem]">
		<article class="flex flex-col gap-2">
			<label class="text-text-primary" for='category-select'>
				Choose expanse category:
			</label>

			<ul class="flex gap-2">
				{#each $categories as category}
				<li
					class="p-2 border rounded-sm"
					class:border-text-secondary={expanseForm.currentHexColor === category.hexColor}
					class:border-transparent={expanseForm.currentHexColor !== category.hexColor}
				>
					<button 
						onclick={() => expanseForm.currentHexColor = category.hexColor}
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
	</form>
</Modal>
