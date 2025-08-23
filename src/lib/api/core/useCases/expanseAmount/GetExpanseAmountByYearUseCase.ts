import type { ExpanseAmountRepository } from "../../ports/ExpanseAmountRepository";


type TExpanseAmountReturn = {
	monthKey: string;
	amount: number
}[]

export class GetExpanseAmountByYearUseCase {
	constructor(private expanseAmountRepository: ExpanseAmountRepository){};

	async execute(year: number, userId: string): Promise<TExpanseAmountReturn>{
		try {

			const amount = await this.expanseAmountRepository.getExpanseByYear(year, userId)
			const amountByMonthMap = new Map<string, TExpanseAmountReturn[number]>();

			amount.forEach(amount => {
				const monthKey = new Intl.DateTimeFormat('en-US', {
					month: 'short',
					year: '2-digit'
				}).format(new Date(amount.createdAt))

				const previousAmount = amountByMonthMap.get(monthKey);

				amountByMonthMap.set(monthKey, {
					amount: (previousAmount?.amount ?? 0) + amount.amount,
					monthKey: monthKey
				})
			});

			return Object.values(Array.from(amountByMonthMap.values()))
		} catch (error) {
				throw new Error(
				`[Error to get expanses - ${year}]: ${(error as Error).message}`
			)
		}
	}
}
