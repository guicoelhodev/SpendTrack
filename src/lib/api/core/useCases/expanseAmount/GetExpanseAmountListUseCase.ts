import type { ExpanseAmount } from "../../models/ExpanseAmount";
import type { ExpanseAmountRepository } from "../../ports/ExpanseAmountRepository";

type TExpanseItem = Omit<ExpanseAmount, 'id'>

export class GetExpanseAmountListUseCase {
	constructor(private expanseAmountRepository: ExpanseAmountRepository){};

	async execute(indexMonth: string){
		const list = await this.expanseAmountRepository.getExpanseByMonth(indexMonth)

		const amountCategory = new Map<string, TExpanseItem>([]);
		
		list.forEach(i => {
			const attrs = amountCategory.get(i.categoryName)
			const total = (attrs?.amount ?? 0) + i.amount

			if(!attrs){
				return amountCategory.set(
					i.categoryName, { ...i, amount: total }
			)}

			return amountCategory.set(i.categoryName, { ...attrs, amount: total })
		})

		return Array.from(amountCategory.values())
	}
}
