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
}
