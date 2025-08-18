import type { TExpanseCategory } from "$lib/api/core/models/ExpanseCategory";

import { makeExpanseCategoryAdd, makeExpanseCategoryDelete, makeExpanseCategoryUpdate } from "../factories/expanseCategory";

export class ExpanseCategoryService{

	async delete(index: number){
		return await makeExpanseCategoryDelete().execute(index)
	}

	async add(data: TExpanseCategory) {
		return await makeExpanseCategoryAdd().execute(data)
	}
	async update(index: number, data: Partial<TExpanseCategory>){
		return await makeExpanseCategoryUpdate().execute(index, data)
	}
}
