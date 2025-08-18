<script lang="ts">
	import { application } from "$lib/stores/application.svelte";

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
			class:bg-text-primary={application.currencyType === currency.code}
			onclick={() => {
				application.currencyType = currency.code
				application.currencyLocation = currency.location
			}}
		>
			{currency.code}
		</button>
	{/each}
</ul>
