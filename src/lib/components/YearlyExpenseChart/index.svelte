<script lang="ts">
	import BarChart from "../UI/BarChart.svelte";

	const barData = [
		{
			"date": new Date('2025-08-06T03:00:00.000Z'),
			"value": 47,
			"baseline": 43
		},
		{
			"date": new Date('2025-08-07T03:00:00.000Z'),
			"value": 94,
			"baseline": 25
		},
		{
			"date": new Date('2025-08-08T03:00:00.000Z'),
			"value": 84,
			"baseline": 47
		},
		{
			"date": new Date('2025-08-09T03:00:00.000Z'),
			"value": 63,
			"baseline": 31
		},
		{
			"date": new Date('2025-08-10T03:00:00.000Z'),
			"value": 29,
			"baseline": 42
		},
		{
			"date": new Date('2025-08-11T03:00:00.000Z'),
			"value": 44,
			"baseline": 82
		},
		{
			"date": new Date('2025-08-12T03:00:00.000Z'),
			"value": 46,
			"baseline": 90
		},
		{
			"date": new Date('2025-08-13T03:00:00.000Z'),
			"value": 99,
			"baseline": 99
		},
		{
			"date": new Date('2025-08-14T03:00:00.000Z'),
			"value": 91,
			"baseline": 94
		},
		{
			"date": new Date('2025-08-15T03:00:00.000Z'),
			"value": 85,
			"baseline": 72
		}
	]
</script>

<BarChart height='400px' data={barData} axisName={{ x: 'date', y: 'value'}}/>
