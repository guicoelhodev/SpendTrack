import type { TExpanseCategory } from "$lib/api/core/models/ExpanseCategory";
import type { ExpanseCategoryRepository } from "$lib/api/core/ports/ExpanseCategoryRepository";

import type { db } from "../datasource/db";

type TEditExpanseCategory = Omit<TExpanseCategory, 'id'>;

export class ExpanseCategoryDexieRepository implements ExpanseCategoryRepository {
	constructor(private database: typeof db){}

	async deleteCategory(categoryIndex: number) {
		return await this.database.expanseCategory.delete(categoryIndex)
	}

	async addCategory(data: TExpanseCategory) {
		await this.database.expanseCategory.add(data)    
	}

	async editCategory(index:number, data: TEditExpanseCategory){
		await this.database.expanseCategory.update(index, data)
	}
}

