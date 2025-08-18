import type { ExpanseCategoryRepository, TUpdateCategory } from "../../ports/ExpanseCategoryRepository";

export class UpdateCategoryUseCase{

	constructor(private categoryRepository: ExpanseCategoryRepository){}

	async execute(index: number, data: TUpdateCategory){

		try {
			return await this.categoryRepository.editCategory(index, data)
		}catch (error) {
			throw new Error(`[Error to edit category]: ${(error as Error).message}`)
		}
	}
}
