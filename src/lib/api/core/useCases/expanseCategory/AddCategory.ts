import type { TExpanseCategory } from "../../models/ExpanseCategory";
import type { ExpanseCategoryRepository } from "../../ports/ExpanseCategoryRepository";

export class AddCategoryUseCase {

	constructor(private categoryRepository: ExpanseCategoryRepository){}

	async execute(data: TExpanseCategory){
		try {
			data.name = data.name.toLowerCase()
			return await this.categoryRepository.addCategory(data)
		} catch (error){
			throw new Error(`[Error to add new category]: ${(error as Error).message}`)
		}
	}
}
