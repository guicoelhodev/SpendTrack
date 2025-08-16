<script lang="ts">
	import type { Snippet } from "svelte";

	type TProps = {
		title: string
		onClose: VoidFunction
		children: Snippet
	}
	const props: TProps = $props()
</script>

<div class="fixed top-0 left-0 w-svw h-svh backdrop-blur-md z-30 grid place-content-center">

	<section class="wrapper max-h-[calc(100svh-5rem)] max-w-[calc(100svw-5rem)] h-auto overflow-auto bg-background-secondary p-4 rounded-md flex flex-col gap-4">
		
		<header class="flex justify-between gap-4 items-center">
			<h3 class="text-lg font-semibold">{props.title}</h3>
			<button aria-labelledby="close-modal" onclick={props.onClose}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
			</button>
		</header>

		{@render props.children()}
	</section>
</div>

<style>
	.wrapper {
		animation: open 300ms ease
	}

	@keyframes open {
		0% { scale: 0.5 }
		100% { scale: 1.00 }
	}
</style>
