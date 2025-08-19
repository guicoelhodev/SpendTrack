<script>
	import { application } from "$lib/stores/application.svelte";

</script>

<article class="flex items-center gap-2">

	<p>Change bar color</p>
	<span class="flex-1 h-1 border-b-1 border-text-secondary border-dashed translate-y-1"></span>

	<input type="color" class="h-6 w-12" bind:value={application.chartBarColor}/>
</article>
