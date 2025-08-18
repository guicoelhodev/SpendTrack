import type { TSession } from "$lib/api/core/models/Session";
import { makeUpdateSessionFactory } from "../factories/sessionFactory";

type TUpdateSession = Omit<TSession, 'id'> & { id: number }

export class SessionService {
	async updateSession({ id, ...session }: TUpdateSession){
		return await makeUpdateSessionFactory().execute(id, session)
	}
}
