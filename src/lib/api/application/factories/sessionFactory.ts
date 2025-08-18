import { db } from "$lib/api/adapters/driven/datasource/db";
import { SessionDexieRepository } from "$lib/api/adapters/driven/repositories/SessionDexieRepository";
import { UpdateSession } from "$lib/api/core/useCases/session/UpdateSession";

const sessionDexieRepository = new SessionDexieRepository(db)

export function makeUpdateSessionFactory(){
	return new UpdateSession(sessionDexieRepository);
} 
