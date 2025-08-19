<script>
	import ToggleChartBarColor from "./ToggleChartBarColor.svelte";
	import ToggleTheme from "./ToggleTheme.svelte";

</script>

<section class="text-text-secondary flex flex-col">
	<h3 class="text-lg font-semibold text-text-primary">Look and feel</h3>

	<div class="flex flex-col gap-2">
		<ToggleTheme />
		<ToggleChartBarColor />
	</div>
</section>
