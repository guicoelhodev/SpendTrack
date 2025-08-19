import type { ExpanseAmountRepository } from "../../ports/ExpanseAmountRepository";

type GetList = { amount: number; date: string }

export class GetExpanseAmountByMonthUseCase {
	constructor(private expanseAmountRepository: ExpanseAmountRepository){};

	async execute(indexMonth: string): Promise<GetList[]>{

		const amountMap = new Map<string, number>([]);

		const listByMonth = await this.expanseAmountRepository.getExpanseByMonth(indexMonth)

		listByMonth.forEach(i => {
			const isoDate = new Intl.DateTimeFormat('en-US', {
					day: '2-digit',
					month: '2-digit'
				}).format(new Date(i.createdAt))

			const total = (amountMap.get(isoDate) ?? 0) + i.amount
			amountMap.set(isoDate, total)
		});

    

		const data: GetList[] = [];

		amountMap.keys().forEach(key => {
			data.push({
				date: key,
				amount: amountMap.get(key)!
			})
		});

		return data
	}
}
