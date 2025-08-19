import type { ExpanseAmountRepository } from "../../ports/ExpanseAmountRepository";

type GetList = { amount: number; dateISO: string }

export class GetExpanseAmountByMonthUseCase {
	constructor(private expanseAmountRepository: ExpanseAmountRepository){};

	async execute(indexMonth: string): Promise<GetList[]>{

		const amountMap = new Map<string, number>([]);

		const listByMonth = await this.expanseAmountRepository.getExpanseByMonth(indexMonth)

		listByMonth.forEach(i => {
			const isoDate = new Date(i.createdAt).toISOString().split('T')[0]
			const total = (amountMap.get(isoDate) ?? 0) + i.amount
			amountMap.set(isoDate, total)
		});

		const data: GetList[] = [];

		amountMap.keys().forEach(key => {
			data.push({
				dateISO: key,
				amount: amountMap.get(key)!
			})
		});

		return data
	}
}
