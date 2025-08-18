import type { ExpanseCategoryRepository } from "../../ports/ExpanseCategoryRepository";

export class GetCategoriesUseCase {

	constructor(private categoryRepository: ExpanseCategoryRepository){}

	async execute(){
		try {
			return this.categoryRepository.getCategories()
		} catch (error){
			throw new Error(`[Error get category list]: ${(error as Error).message}`)
		}
	}
}
