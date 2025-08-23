import type { SessionRepository, TUpdateSession } from "$lib/api/core/ports/SessionRepository";
import type { db } from "../datasource/db";

export class SessionDexieRepository implements SessionRepository {

	constructor(private database: typeof db){}

	async updateSession(sessionIndex: number, data: TUpdateSession){

		await this.database.session.put({
			id: sessionIndex,
			...data
		})
	}

	async deleteSession(sessionIndex: number){
		await this.database.session.delete(sessionIndex)
	}

	async getSession(){
		const session = await this.database.session.orderBy('id').first()
		return session ?? null
	}
}
