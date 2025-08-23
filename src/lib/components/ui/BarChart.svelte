<script lang="ts">
	import { ApplicationService } from "$lib/api/application/presentation/ApplicationService";
	import { liveQuery } from "dexie";
	import { BarChart, type BarChartPropsObjProp } from "layerchart";

	const applicationService = new ApplicationService();

	type TProps = {
		data: Array<Record<string, any>>
    axisName: { x: string; y: string };
		height?: string;
		hexColor?: string
		props?: BarChartPropsObjProp<any>
	}
	const props: TProps = $props()
	const applicationDB = liveQuery(async() => await applicationService.getApplication())

</script>



<article
	style={`height: ${props.height ?? '300px'}`}
	class="p-4 rounded-sm overflow-auto">
		<BarChart
			data={props.data}
			x={props.axisName.x}
			y={props.axisName.y}

			cRange={[props.hexColor ?? $applicationDB?.chartBarColor ?? '#333']}
			props={props.props}
		/>
</article>
