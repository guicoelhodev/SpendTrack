import { db } from "$lib/api/adapters/driven/datasource/db";
import { ExpanseCategoryDexieRepository } from "$lib/api/adapters/driven/repositories/ExpanseCategoryDexieRepository";
import { ExpanseCategoryDelete } from "$lib/api/core/useCases/expanseCategory/DeleteCategory";

const expanseCategoryRepository = new ExpanseCategoryDexieRepository(db)

export function makeExpanseCategoryDelete(){
	return new ExpanseCategoryDelete(expanseCategoryRepository)
}
