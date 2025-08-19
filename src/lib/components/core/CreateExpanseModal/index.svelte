<script lang="ts">
	import { ExpanseCategoryService } from "$lib/api/application/presentation/ExpanseCategoryService";
	import Modal from "$lib/components/ui/Modal.svelte";
	import CurrencyInput from "@canutin/svelte-currency-input";
	import { liveQuery } from "dexie";
	import { application } from "$lib/stores/application.svelte";
	import z from 'zod';
	import { ExpanseAmountService } from "$lib/api/application/presentation/ExpanseAmountService";
	
	type TProps = { onClose: VoidFunction }
	type TExpanseForm = z.infer<typeof formSchema>;

	const formSchema = z.object({
		date: z.string().nonempty({ message: 'Date is required field'}),
		categoryName: z.string().nonempty(
			{ message: 'Choose category name'}
		),
		total: z.number().min(1, { message: 'Total value must be bigger than 1,00' })
	});

	const categories = liveQuery(() => categoryService.getList());
	const props: TProps = $props();


	const categoryService = new ExpanseCategoryService();
	const expanseAmountService = new ExpanseAmountService();

	let expanseForm = $state<TExpanseForm>({
		date: new Intl.DateTimeFormat('en-CA').format(new Date()),
		categoryName: 'food',
		total: 0
	});

	const defaultError = { categoryName: '', date: '', total: '' }

	let formErrors: Record<keyof TExpanseForm, string> = $state(defaultError);

	async function onSubmitForm(formData: TExpanseForm){
		await expanseAmountService.add({
			amount: formData.total,
			categoryName: formData.categoryName,
			defaultHexColor: $categories.find(i => i.name === formData.categoryName)!.hexColor,
			createdAt: new Date(formData.date).toISOString(),
		})

		return props.onClose()
	}
</script>

<Modal title='Add new expanse' onClose={props.onClose}>

	<form
		onsubmit={async(e) => {
		e.preventDefault();
		const validation = await formSchema.safeParseAsync(expanseForm);

		if(validation.success) {
			formErrors = defaultError
			return await onSubmitForm(expanseForm)
		}

		Object.keys(expanseForm).forEach(inputKey => {
				const key = inputKey as keyof TExpanseForm
				const error = validation.error.issues.find(i => i.path[0] === inputKey)

				if(error?.message) return formErrors[key] = error.message
				return formErrors[key] = ''
			})
		}}
		class="flex flex-col gap-4 w-[30rem]"
	>
		<article class="flex flex-col gap-2">
			<label class="text-text-primary" for='category-select'>
				Expanse date:
			</label>

			<input 
				type="date"
				class="border border-text-secondary p-2 outline-1 outline-transparent rounded-md focus:outline-text-secondary"
				bind:value={expanseForm.date}
			/>

			{#if formErrors.date}
				<span class="text-sm text-red">{formErrors.date}</span>
			{/if}
		</article>

		<article class="flex flex-col gap-2">
			<label class="text-text-primary" for='category-select'>
				Choose expanse category:
			</label>

			<ul class="flex gap-2 flex-wrap">
				{#each $categories as category}
				<li
					class="p-2 border rounded-sm"
					class:border-text-secondary={expanseForm.categoryName === category.name}
					class:border-transparent={expanseForm.categoryName !== category.name}
				>
					<button 
						onclick={() => {
							const isEqual = expanseForm.categoryName === category.name
							expanseForm.categoryName = isEqual ? '' : category.name
						}}
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

			{#if formErrors.categoryName.length}
				<span class="text-sm text-red">{formErrors.categoryName}</span>
			{/if}
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

			{#if formErrors.total.length}
				<span class="text-sm text-red">{formErrors.total}</span>
			{/if}
		</article>


		<footer class="flex gap-4 items-center justify-between">
			<button
				onclick={props.onClose}
				class="p-2 rounded-md bg-background-secondary text-text-secondary hover:underline"
			>
				Close
			</button>

			<button
				type="submit"
				class="p-2 text-red rounded-md hover:underline"
			>
				Add expanse
			</button>
		</footer>
	</form>
</Modal>
