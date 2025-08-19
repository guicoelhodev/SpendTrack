import type { ExpanseAmount } from "$lib/api/core/models/ExpanseAmount";
import { makeAddExpanseAmount } from "../factories/expanseAmount";

type TAddExpanse = Omit<ExpanseAmount, 'monthIndex'>

export class ExpanseAmountService {

	async add(data: TAddExpanse){
		return await makeAddExpanseAmount().execute(data)
	}
}
