<script lang="ts">
	import { PieChart } from "layerchart";

	type TProps = {
		data: any[]
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
		cRange={props.colorsRange ?? ['#e63946', '#f1a208', '#457b9d', '#43aa8b']}
  >
  </PieChart>
</div>
