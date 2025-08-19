import type { ExpanseAmount } from "../../models/ExpanseAmount";
import type { ExpanseAmountRepository } from "../../ports/ExpanseAmountRepository";

export class GetExpanseAmountByMonthUseCase {
	constructor(private expanseAmountRepository: ExpanseAmountRepository){};

	async execute(indexMonth: string): Promise<ExpanseAmount[]>{
		return await this.expanseAmountRepository.getExpanseByMonth(indexMonth)
	}
}
