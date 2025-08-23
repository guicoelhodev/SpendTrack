<script lang="ts">
	import UserSetup from "$lib/components/core/UserSetup/index.svelte";

	import MonthlyExpenseChart from "$lib/components/core/MonthlyExpenseChart/index.svelte";
	import MonthlyExpenseCategory from "$lib/components/core/MonthlyExpenseCategory/index.svelte";
	import YearlyExpenseChart from "$lib/components/core/YearlyExpenseChart/index.svelte";
	import HeaderSetup from '$lib/components/core/HeaderSetup/index.svelte'
	import { SessionService } from "$lib/api/application/presentation/SessionService";
	import { liveQuery } from "dexie";
	import { application } from "$lib/stores/application.svelte";

	const sessionService = new SessionService();

	const session = liveQuery(async() => await sessionService.getSession() ?? null);

	const isValid = $derived(() => {
		if(!$session) return false;
		return new Date().getTime() < new Date($session?.expiresAt).getTime()
	});

</script>

<div class="relative transition-colors bg-background-primary text-text-primary h-svh w-svw">
	<main class="w-full h-[calc(100%-5rem)] grid sm:grid-cols-2 gap-4 p-2 sm:p-4 relative overflow-auto">

		{#if !isValid()}
			<div
				class="absolute top-0 left-0 w-svw h-svh backdrop-blur-sm z-30"
			>
				<section class="size-full grid place-content-center">
					<article class="flex flex-col gap-4">
						<h3 class="text-2xl font-semibold">Sign to see all content</h3>
						<button
							class="text-white bg-green-800 p-2 rounded-md"
							onclick={() => application.showLoginModal = true}
						>
							Sign In
						</button>
					</article>
				</section>
			</div>
		{/if}

		<article class="sm:col-span-2 flex flex-col justify-evenly border-2 border-background-secondary rounded-md gap-4">
			<HeaderSetup />
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
