import type { TSession } from "$lib/api/core/models/Session";
import { makeDeleteSessionFactory, makeGetSessionFactory, makeUpdateSessionFactory } from "../factories/sessionFactory";

type TUpdateSession = Omit<TSession, 'id'> & { id: number }

export class SessionService {
	async updateSession({ id, ...session }: TUpdateSession){
		return await makeUpdateSessionFactory().execute(id, session)
	}

	async deleteSession(sessionIndex: number){
		return await makeDeleteSessionFactory().execute(sessionIndex)
	}

	async getSession(sessionIndex: number){
		return await makeGetSessionFactory().execute(sessionIndex)
	}
}
