<script lang="ts">
	import { PieChart } from "layerchart";

	type TProps = {
		data: Array<{ color: string } & Record<string, any>>
		key: string;
		value: string;
		colorsRange?: string[]
		height?: string
	};

	const props: TProps = $props();

</script>

 <div style={`height: ${props.height ?? '300px'}`}  class="p-4 rounded overflow-auto">
  <PieChart
    data={props.data}
		key={props.key}
		value={props.value}
		renderContext='canvas'
		c='color'
  >
  </PieChart>
</div>
