import type { ExpanseAmount } from "$lib/api/core/models/ExpanseAmount";
import { makeAddExpanseAmount, makeGetExpanseAmountByCategory, makeGetExpanseAmountByMonth, makeGetExpansesAmountByYear } from "../factories/expanseAmount";

type TAddExpanse = Omit<ExpanseAmount, 'monthIndex'>

export class ExpanseAmountService {

	async add(data: TAddExpanse){
		return await makeAddExpanseAmount().execute(data)
	}

	async getByMonth(indexMonth: string){
		return await makeGetExpanseAmountByMonth().execute(indexMonth)
	}

	async getAmountByCategory(indexMonth: string){
		return await makeGetExpanseAmountByCategory().execute(indexMonth)
	}

	async getAllExpanseAmountByYear(year: number){
		return await makeGetExpansesAmountByYear().execute(year)
	}
}
