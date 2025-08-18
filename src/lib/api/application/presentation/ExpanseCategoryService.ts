import type { TExpanseCategory } from "$lib/api/core/models/ExpanseCategory";
import { makeExpanseCategoryAdd, makeExpanseCategoryDelete } from "../factories/expanseCategory";

export class ExpanseCategoryService{

	async delete(index: number){
		return await makeExpanseCategoryDelete().execute(index)
	}

	async add(data: TExpanseCategory) {
		return await makeExpanseCategoryAdd().execute(data)
	}
}
