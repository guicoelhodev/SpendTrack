import type { ExpanseAmount } from "../models/ExpanseAmount";

export interface ExpanseAmountRepository {
	addExpanseAmount: (expanseAmount: ExpanseAmount) => Promise<void>
}
