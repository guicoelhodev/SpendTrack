<script lang="ts">
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
<div class="bg-background-primary w-svw h-svh text-white p-4">
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

	<div class="bg-background-secondary w-36 h-36">

	</div>

	<button onclick={toggleTheme}>
		mudar
	</button>
</div>
