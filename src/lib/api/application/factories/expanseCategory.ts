import { db } from "$lib/api/adapters/driven/datasource/db";
import { ExpanseCategoryDexieRepository } from "$lib/api/adapters/driven/repositories/ExpanseCategoryDexieRepository";
import { AddCategoryUseCase } from "$lib/api/core/useCases/expanseCategory/AddCategory";
import { ExpanseCategoryDelete } from "$lib/api/core/useCases/expanseCategory/DeleteCategory";

const expanseCategoryRepository = new ExpanseCategoryDexieRepository(db)

export function makeExpanseCategoryDelete(){
	return new ExpanseCategoryDelete(expanseCategoryRepository)
}

export function makeExpanseCategoryAdd(){
	return new AddCategoryUseCase(expanseCategoryRepository)
}
