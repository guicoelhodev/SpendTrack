<script lang="ts">
	import LoginUser from "./LoginUser/index.svelte";
	import ToggleTheme from "./ToggleTheme.svelte";
	import UserSetup from  "./UserSetup/index.svelte";

</script>
<section class="flex items-center justify-center h-20">
	<div
		class="border-2 border-background-secondary rounded-md flex justify-between items-center gap-2 p-2"
	>
		<LoginUser />

		<ToggleTheme />
		<UserSetup />
	</div>
</section>
