<script lang="ts">
	import { LineChart } from "layerchart";

  type TProps<T extends Record<string, any>> = {
    data: T[];
    axisName: { x: string; y: string };
    renderContent?: "svg" | "canvas";
		height?: string
  };
	const props: TProps<any> = $props();

</script>

 <div style={`height: ${props.height ?? '300px'}`} class="p-4 border rounded-sm">
  <LineChart
		data={props.data}
		x={props.axisName.x as string}
		y={props.axisName.y as string}
		renderContext={props.renderContent ?? 'canvas'}
    series={[{ key: props.axisName.y as string, color: "var(--color-red)" }]}
	/>

</div>
