import type { ExpanseCategoryRepository } from "../../ports/ExpanseCategoryRepository";

export class ExpanseCategoryDelete {

	constructor(private categoryRepository: ExpanseCategoryRepository){}

	async execute(index: number){
		try {
			return await this.categoryRepository.deleteCategory(index)
		} catch (error){
			throw new Error(`[Error to delete category]: ${(error as Error).message}`)
		}
	}
}
