import type { ExpanseAmount } from "../../models/ExpanseAmount";
import type { ExpanseAmountRepository } from "../../ports/ExpanseAmountRepository";


type TExpanse = Omit<ExpanseAmount, 'monthIndex'>
export class AddExpanseAmountUseCase {

	constructor(private expanseAmountRepository: ExpanseAmountRepository){}

	async execute(expanse: TExpanse){
		const date = new Date(expanse.createdAt);
		const year = date.getFullYear()

		const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);

		await this.expanseAmountRepository.addExpanseAmount({
			...expanse,
			monthIndex: `${month.toLocaleLowerCase()}_${year}`
		})
	}
}
