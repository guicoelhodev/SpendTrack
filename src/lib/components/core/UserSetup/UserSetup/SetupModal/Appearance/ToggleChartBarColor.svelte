<script lang="ts">
	import { ApplicationService } from "$lib/api/application/presentation/ApplicationService";
	import { liveQuery } from "dexie";

	const applicationService = new ApplicationService();
	const applicationDB = liveQuery(async() => await applicationService.getApplication());

	async function handleBarColor(e: Event & { target: HTMLInputElement }){
		await applicationService.updateApplication({
      chartBarColor: e.target.value
		})
	}
</script>

<article class="flex items-center gap-2">

	<p>Change bar color</p>
	<span class="flex-1 h-1 border-b-1 border-text-secondary border-dashed translate-y-1"></span>

	<input 
		type="color"
		class="h-6 w-12"
		value={$applicationDB?.chartBarColor}
		onchange={async (e) => await handleBarColor(e as any)}
	/>
</article>
