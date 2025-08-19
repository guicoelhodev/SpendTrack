<script lang="ts">
	import SolarSun2Bold from '~icons/solar/sun-2-bold';
	import SolarMoonBold from '~icons/solar/moon-bold';

	let isDark = $state(true);

	function toggleTheme(){
		if(isDark){
			document.documentElement.classList.remove('dark')
		} else {
			document.documentElement.classList.add('dark')
		}

		return isDark = !isDark
	};
</script>

<article class="flex items-center gap-2">

	<p>Change theme mode</p>
	<span class="flex-1 h-1 border-b-1 border-text-secondary border-dashed translate-y-1"></span>
	<button
		onclick={toggleTheme}
		class="bg-background-primary p-2 rounded-full grid place-content-center text-text-primary"
	>
		{#if isDark}
			<SolarMoonBold />
		{:else}
			<SolarSun2Bold />
		{/if}
	</button>
</article>
