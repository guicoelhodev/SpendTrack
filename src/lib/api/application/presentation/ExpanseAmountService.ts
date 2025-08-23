import type { ExpanseAmount } from "$lib/api/core/models/ExpanseAmount";
import { makeAddExpanseAmount, makeGetExpanseAmountByCategory, makeGetExpanseAmountByMonth, makeGetExpansesAmountByYear } from "../factories/expanseAmount";

type TAddExpanse = Omit<ExpanseAmount, 'monthIndex'>

export class ExpanseAmountService {

	async add(data: TAddExpanse){
		return await makeAddExpanseAmount().execute(data)
	}

	async getByMonth(indexMonth: string, userId: string){
		return await makeGetExpanseAmountByMonth().execute(indexMonth, userId)
	}

	async getAmountByCategory(indexMonth: string, userId: string){
		return await makeGetExpanseAmountByCategory().execute(indexMonth, userId)
	}

	async getAllExpanseAmountByYear(year: number, userId: string){
		return await makeGetExpansesAmountByYear().execute(year, userId)
	}
}
