<script lang="ts">
	import { BarChart } from "layerchart";

	type TProps = {
		data: Array<Record<string, any>>
    axisName: { x: string; y: string };
		height?: string;
	}
	const props: TProps = $props()
</script>


<div style={`height: ${props.height ?? '300px'}`} class="p-4 rounded-sm">
  <BarChart data={props.data} x={props.axisName.x} y={props.axisName.y}/>
</div>
