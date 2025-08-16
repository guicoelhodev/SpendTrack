<script lang="ts">
	import PieChart from "$lib/components/ui/PieChart.svelte";

	const data = [
		{
			"fruit": "apples",
			"total": 3840,
			"color": "#e63946"
		},
		{
			"fruit": "bananas",
			"total": 1920,
			"color": "#f1a208"
		},
		{
			"fruit": "cherries",
			"total": 960,
			"color": "#457b9d"
		},
		{
			"year": 2019,
			"fruit": "grapes",
			"total": 400,
			"color": "#43aa8b"
		}
	]
</script>


<PieChart
	data={data} 
	value='total'
	key='fruit'
	height='300px'
/>
