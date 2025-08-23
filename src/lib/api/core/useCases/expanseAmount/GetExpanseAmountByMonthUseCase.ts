import type { ExpanseAmountRepository } from "../../ports/ExpanseAmountRepository";

type GetList = { amount: number; date: string }

export class GetExpanseAmountByMonthUseCase {
	constructor(private expanseAmountRepository: ExpanseAmountRepository){};

	async execute(indexMonth: string, userId: string): Promise<GetList[]>{

		const amountMap = new Map<string, number>([]);

		const listByMonth = await this.expanseAmountRepository
			.getExpanseByMonth(indexMonth, userId)

		listByMonth.forEach(i => {
			const isoDate = new Date(i.createdAt).toISOString()

			const total = (amountMap.get(isoDate) ?? 0) + i.amount
			amountMap.set(isoDate, total)
		});

		let data: GetList[] = [];

		amountMap.keys().forEach(key => {
			data.push({
				date: key,
				amount: amountMap.get(key)!
			})
		});

		data = data.sort((a,b) => {
			return new Date(a.date).getTime() - new Date(b.date).getTime()
		})

		return data
	}
}
