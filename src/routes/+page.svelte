<script lang="ts">
	import UserSetup from "$lib/components/core/UserSetup/index.svelte";

	import MonthlyExpenseChart from "$lib/components/core/MonthlyExpenseChart/index.svelte";
	import MonthlyExpenseCategory from "$lib/components/core/MonthlyExpenseCategory/index.svelte";
	import YearlyExpenseChart from "$lib/components/core/YearlyExpenseChart/index.svelte";
	import Modal from "$lib/components/ui/Modal.svelte";

	let showModal = $state(false);
</script>

<div class="relative transition-colors bg-background-primary text-text-primary h-svh w-svw">

	{#if showModal}
		<Modal title='Setup modal' onClose={() => showModal = false }>
			<section class="min-w-[600px]">
				AOBA
			</section>
		</Modal>
	
	{/if}

	<main class="w-full h-[calc(100%-5rem)] grid grid-cols-2 gap-4 p-4">

		<article class="col-span-2 flex flex-col justify-evenly border-2 border-background-secondary rounded-md">
			<div class="p-4">
				<p class="text-3xl font-semibold text-red">TOTAL: R$ 2350,00</p>

				<button onclick={() => showModal = true } class="p-2 bg-background-secondary">ABRIR MODAL</button>
			</div>


			<MonthlyExpenseChart />
		</article>

		<article class="flex flex-col justify-center border-2 border-background-secondary  rounded-md">
			<MonthlyExpenseCategory />
		</article>

		<article class="border-2 border-background-secondary rounded-md flex flex-col justify-center">
			<YearlyExpenseChart />
		</article>
	</main>

	<UserSetup />
</div>
