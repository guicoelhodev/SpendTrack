import type { ExpanseAmount } from "$lib/api/core/models/ExpanseAmount";
import { makeAddExpanseAmount, makeGetExpanseAmountByMonth, makeGetExpanseAmountList } from "../factories/expanseAmount";

type TAddExpanse = Omit<ExpanseAmount, 'monthIndex'>

export class ExpanseAmountService {

	async add(data: TAddExpanse){
		return await makeAddExpanseAmount().execute(data)
	}

	async getByMonth(indexMonth: string){
		return await makeGetExpanseAmountByMonth().execute(indexMonth)
	}

	async getAmountByMonthList(indexMonth: string){
		return await makeGetExpanseAmountList().execute(indexMonth)
	}
}
