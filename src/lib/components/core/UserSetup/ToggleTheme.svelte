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

<button
	onclick={toggleTheme}
	class="bg-background-primary p-2 rounded-full grid place-content-center"
>
	{#if isDark}
		<SolarMoonBold />
	{:else}
		<SolarSun2Bold />
	{/if}
</button>
