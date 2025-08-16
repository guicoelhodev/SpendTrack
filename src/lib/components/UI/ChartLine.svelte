<script lang="ts">
	import { LineChart } from "layerchart";

  type TProps<T extends Record<string, any>> = {
    data: T[];
    axisName: { x: string; y: string };
    renderContent?: "svg" | "canvas";
  };
	const props: TProps<any> = $props();

</script>

 <div class="h-[300px] p-4 border rounded-sm">
  <LineChart
		data={props.data}
		x={props.axisName.x as string}
		y={props.axisName.y as string}
		renderContext={props.renderContent ?? 'canvas'}
    series={[{ key: props.axisName.y as string, color: "var(--color-red)" }]}
	/>

</div>
