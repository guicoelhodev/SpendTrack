import { makeExpanseCategoryDelete } from "../factories/expanseCategory";

export class ExpanseCategoryService{

	async delete(index: number){
		return await makeExpanseCategoryDelete().execute(index)
	}
}
