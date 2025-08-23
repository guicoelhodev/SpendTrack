import type { ExpanseAmount } from "$lib/api/core/models/ExpanseAmount";
import type { ExpanseAmountRepository } from "$lib/api/core/ports/ExpanseAmountRepository";
import type { db } from "../datasource/db";

export class ExpanseAmountDexieRepository implements ExpanseAmountRepository {

	constructor(private database: typeof db){}

	async addExpanseAmount(expanseAmount: ExpanseAmount){
		await this.database.expanseAmount.add(expanseAmount)
	}

	async getExpanseByMonth(monthIndex: string, userId: string){
		return await this.database.expanseAmount
			.where('userId')
			.equals(userId)
			.and(r => r.monthIndex === monthIndex)
			.toArray()
	}

	async getExpanseByYear(year: number, userId: string){
		const start = new Date(year, 0, 1).toISOString();
		const end = new Date(year + 1, 0, 1).toISOString();

		return await this.database.expanseAmount
			.where('createdAt')
			.between([userId,start], [userId,end])
			.and(r => r.userId === userId)
			.toArray()
	}
}
