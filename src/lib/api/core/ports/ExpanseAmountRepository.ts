import type { ExpanseAmount } from "../models/ExpanseAmount";

export interface ExpanseAmountRepository {
	addExpanseAmount: (expanseAmount: ExpanseAmount) => Promise<void>
	getExpanseByMonth: (indexMonth: string, userId: string) => Promise<ExpanseAmount[]>
	getExpanseByYear: (year: number, userId: string) => Promise<ExpanseAmount[]>
	bulkDelete: (deleteList: number[]) => Promise<void>
}
