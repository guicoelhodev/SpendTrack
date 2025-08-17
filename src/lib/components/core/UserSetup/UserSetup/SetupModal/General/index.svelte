<script lang='ts'>
	import { db } from "$lib/db";
	import { liveQuery } from "dexie";

	const categories = liveQuery(() => db.expanseCategory.toArray())

	async function handleColor(id: number, hexColor: string){
		await db.expanseCategory.update(id, { hexColor })
	}
</script>

<section class="flex-1 flex flex-col gap-4">
	<h4 class="font-semibold pb-1 border-b-1">Category colors</h4>
	<ul class="text-text-secondary flex flex-col gap-4">
		{#each $categories as category}
			<li class="flex items-center gap-4 justify-between">
				{category.name}
				<span class="h-1 flex-1 border-b border-dashed"></span>
				<input
					type="color"
					class="w-8 h-4"
					value={category.hexColor}
					onchange={async(e) => {
						const hexColor = (e as any).target.value;
						await handleColor(category.id!, hexColor)
					}}
				/>
			</li>
		{/each}
	</ul>
</section>
