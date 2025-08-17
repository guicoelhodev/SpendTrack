<script lang="ts">
	import { application } from "$lib/stores/application.svelte";

	type TCurrency = {
		name: string;
		code: string;
	}

	const currencyItems: TCurrency[] = [
		{ name: "Euro", code: "EUR" },
		{ name: "Brazilian Real", code: "BRL" },
		{ name: "US Dollar", code: "USD" },
		{ name: "Japanese Yen", code: "JPY" }
	]
</script>

<h4 class="font-semibold">Currency type</h4>

<ul class="flex gap-2 flex-wrap text-text-secondary">
	{#each currencyItems as currency}
		<button 
			class="px-2 border rounded-md font-semibold"
			class:bg-text-primary={application.currencyType === currency.code}
			onclick={() => application.currencyType = currency.code}
		>
			{currency.code}
		</button>
	{/each}
</ul>
