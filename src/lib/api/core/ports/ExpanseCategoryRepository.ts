import type { TExpanseCategory } from "../models/ExpanseCategory"

export interface ExpanseCategoryRepository {
	deleteCategory(categoryIndex: number): Promise<void>
	addCategory(data: TExpanseCategory): Promise<void>
}
