import type { ExpanseAmountRepository } from "../../ports/ExpanseAmountRepository";

export class BulkDeleteListUseCase {
	constructor(private expanseAmountRepository: ExpanseAmountRepository){};

	async execute(deleteListId: number[]){
		return this.expanseAmountRepository.bulkDelete(deleteListId)
	}
}
