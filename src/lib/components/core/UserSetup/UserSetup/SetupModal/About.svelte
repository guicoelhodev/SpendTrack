<script lang="ts">
  import preview from '$lib/assets/images/chart_view.png';

</script>
<section class="flex flex-col gap-2 text-text-secondary">
	<h3 class="text-lg font-semibold text-text-primary">
		Spend Track
	</h3>

	<img 
		src={preview}
		class="max-h-48 object-cover rounded-md"
		alt="preview chart info"
	/>

	<p>
		This project runs entirely in your browser. We use <b>IndexedDB</b> to store all your actions locally. 
	</p>

	<p>We do not collect or access any of your financial information.</p>

	<p>If you want to see the codebase, please take a look at GitHub.</p>

	<aside>
		<a
			href='https://github.com/guicoelhodev/SpendTrack'
			class="underline text-text-primary flex items-center gap-2"
			target="_blank"
		>
			codebase project
		</a>
	</aside>
</section>
