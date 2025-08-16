<script lang="ts">
	let isLogged = $state(false)

	function toggleLogIn(){
		return isLogged = !isLogged
	};

</script>


<article 
	class="wrapper flex gap-4 items-start"
	data-open={isLogged}
>
	{#if isLogged}
		<div class="w-64 flex flex-col">
			<p class="text-sm text-nowrap">Signed as <b>guicoelhodev</b></p>
			<span class="text-xs text-green-500">Online</span>
		</div>
	{:else}
		<div class="pl-2">
			<p class="text-sm">Not Signed</p>
			<span class="text-xs text-red">Offline</span>
		</div>
	{/if}
	<button
		onclick={toggleLogIn}
		class="bg-background-primary p-2 rounded-full grid place-content-center"
		aria-labelledby='logout-btn'
	>
	{#if isLogged}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"/></svg>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
	{/if}
	</button>

</article>

<style>
	.wrapper {
		overflow: hidden;
		transition: max-width 0s;
	}

	.wrapper[data-open="true"] {
		animation: expand 400ms cubic-bezier(.17,.67,.76,-0.23)
	}

	@keyframes expand {
		from { max-width: 16rem; }
		to   { max-width: 999px; }
	}
</style>
