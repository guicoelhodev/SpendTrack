<script lang="ts">
	import { ApplicationService } from "$lib/api/application/presentation/ApplicationService";
	import { liveQuery } from "dexie";

	const applicationService = new ApplicationService();
	const applicationDB = liveQuery(async() => await applicationService.getApplication());

	type TCurrency = {
		location: string;
		code: string;
	}

	const currencyItems: TCurrency[] = [
		{ location: "de-DE", code: "EUR" },
		{ location: "pt-BR", code: "BRL" },
		{ location: "en-US", code: "USD" },
		{ location: "ja-JP", code: "JPY" }
	]
</script>

<h4 class="font-semibold">Currency type</h4>

<ul class="flex gap-2 flex-wrap text-text-secondary">
	{#each currencyItems as currency}
		<button 
			class="px-2 border rounded-md font-semibold"
			class:bg-text-primary={$applicationDB?.currencyType === currency.code}
			onclick={async() => {
				await applicationService.updateApplication({
					currencyLocation: currency.location,
					currencyType: currency.code
				})
			}}
		>
			{currency.code}
		</button>
	{/each}
</ul>
