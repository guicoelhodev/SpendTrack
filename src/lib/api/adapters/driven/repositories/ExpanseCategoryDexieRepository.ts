import type { ExpanseCategoryRepository } from "$lib/api/core/ports/ExpanseCategoryRepository";
import type { db } from "../datasource/db";

export class ExpanseCategoryDexieRepository implements ExpanseCategoryRepository {
	constructor(private database: typeof db){}

	async deleteCategory(categoryIndex: number) {
		return await this.database.expanseCategory.delete(categoryIndex)
	}
}

