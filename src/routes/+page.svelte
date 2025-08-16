<script lang="ts">
	import BarChart from "$lib/components/UI/BarChart.svelte";
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

<div class="relative transition-colors bg-background-primary text-text-primary h-svh w-svw">

	<main class="w-full h-[calc(100%-5rem)] grid grid-cols-2 gap-4 p-4">

		<article class="col-span-2 flex flex-col border-2 border-background-secondary rounded-md">
			<div class="p-4">
				<p class="text-3xl font-semibold text-red">TOTAL: R$ 2350,00</p>
			</div>
			<ChartLine 
				data={dateSeriesData}
				axisName={{ x: 'date', y: 'va'}}
				height={'300px'}
			/>
		</article>

		<article class="flex flex-col justify-center border-2 border-background-secondary  rounded-md">
			<PieChart
				data={data} 
				value='total'
				key='fruit'
				height='300px'
			/>
		</article>

		<article class="border-2 border-background-secondary rounded-md flex flex-col justify-center">
			<BarChart height='400px' data={barData} axisName={{ x: 'date', y: 'value'}}/>
		</article>
	</main>

	<UserSetup />
</div>
