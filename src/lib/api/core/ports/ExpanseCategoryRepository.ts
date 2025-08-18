export interface ExpanseCategoryRepository {
	deleteCategory(categoryIndex: number): Promise<void>
}
