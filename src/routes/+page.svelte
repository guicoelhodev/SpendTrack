<script lang="ts">
	import ChartLine from "$lib/components/UI/ChartLine.svelte";
	import PieChart from "$lib/components/UI/PieChart.svelte";
	import UserSetup from "$lib/components/UserSetup/index.svelte";

	const dateSeriesData = [
		{
			"date": new Date('2025-07-17T03:00:00.000Z'),
			"va": 60
		},
		{
			"date": new Date('2025-07-18T03:00:00.000Z'),
			"va": 58
		},
		{
			"date": new Date('2025-07-19T03:00:00.000Z'),
			"va": 82
		},
		{
			"date": new Date('2025-07-20T03:00:00.000Z'),
			"va": 50
		},
		{
			"date": new Date('2025-07-21T03:00:00.000Z'),
			"va": 76
		},
		{
			"date": new Date('2025-07-22T03:00:00.000Z'),
			"va": 61
		},
		{
			"date": new Date('2025-07-23T03:00:00.000Z'),
			"va": 89
		},
		{
			"date": new Date('2025-07-24T03:00:00.000Z'),
			"va": 56
		},
		{
			"date": new Date('2025-07-25T03:00:00.000Z'),
			"va": 83
		},
		{
			"date": new Date('2025-07-26T03:00:00.000Z'),
			"va": 67
		},
		{
			"date": new Date('2025-07-27T03:00:00.000Z'),
			"va": 83
		},
		{
			"date": new Date('2025-07-28T03:00:00.000Z'),
			"va": 65
		},
		{
			"date": new Date('2025-07-29T03:00:00.000Z'),
			"va": 63
		},
		{
			"date": new Date('2025-07-30T03:00:00.000Z'),
			"va": 86
		},
		{
			"date": new Date('2025-07-31T03:00:00.000Z'),
			"va": 58
		},
		{
			"date": new Date('2025-08-01T03:00:00.000Z'),
			"va": 99
		},
		{
			"date": new Date('2025-08-02T03:00:00.000Z'),
			"va": 81
		},
		{
			"date": new Date('2025-08-03T03:00:00.000Z'),
			"va": 90
		},
		{
			"date": new Date('2025-08-04T03:00:00.000Z'),
			"va": 50
		},
		{
			"date": new Date('2025-08-05T03:00:00.000Z'),
			"va": 72
		},
		{
			"date": new Date('2025-08-06T03:00:00.000Z'),
			"va": 94
		},
		{
			"date": new Date('2025-08-07T03:00:00.000Z'),
			"va": 88
		},
		{
			"date": new Date('2025-08-08T03:00:00.000Z'),
			"va": 91
		},
		{
			"date": new Date('2025-08-09T03:00:00.000Z'),
			"va": 60
		},
		{
			"date": new Date('2025-08-10T03:00:00.000Z'),
			"va": 52
		},
		{
			"date": new Date('2025-08-11T03:00:00.000Z'),
			"va": 51
		},
		{
			"date": new Date('2025-08-12T03:00:00.000Z'),
			"va": 59
		},
		{
			"date": new Date('2025-08-13T03:00:00.000Z'),
			"va": 80
		},
		{
			"date": new Date('2025-08-14T03:00:00.000Z'),
			"va": 63
		},
		{
			"date": new Date('2025-08-15T03:00:00.000Z'),
			"va": 60
		}
	]


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

<div class="relative transition-colors bg-background-primary text-text-primary h-svh w-svw">

	<main class="w-full h-[calc(100%-5rem)] grid grid-cols-2 gap-4">

		<div class="col-span-2 border flex flex-col">
			<ChartLine 
				data={dateSeriesData}
				axisName={{ x: 'date', y: 'va'}}
				height={'500px'}
			/>
		</div>

		<article class="border flex flex-col justify-center">
				<PieChart
					data={data} 
					value='total'
					key='fruit'
					height='300px'
				/>
		</article>
	</main>

	<UserSetup />
</div>
