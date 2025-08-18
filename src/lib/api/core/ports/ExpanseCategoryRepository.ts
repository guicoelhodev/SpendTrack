import type { TExpanseCategory } from "../models/ExpanseCategory"

export type TUpdateCategory =  Partial<Omit<TExpanseCategory, 'id'>>

export interface ExpanseCategoryRepository {
	deleteCategory(categoryIndex: number): Promise<void>
	addCategory(data: TExpanseCategory): Promise<void>
	editCategory(categoryIndex: number, data: TUpdateCategory): Promise<void>
}
