<script lang="ts">
	import LoginUser from "./LoginUser/index.svelte";
	import UserSetup from  "./UserSetup/index.svelte";
</script>
<section class="flex items-center justify-center h-20">
	<div
		class="border-2 border-background-secondary rounded-md flex justify-between items-center gap-2 size-full p-2 sm:h-auto sm:w-auto"
	>
		<LoginUser />
		<UserSetup />
	</div>
</section>
