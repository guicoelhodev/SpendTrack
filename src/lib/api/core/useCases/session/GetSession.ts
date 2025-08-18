import type { SessionRepository } from "../../ports/SessionRepository";

export class GetSession {

	constructor(private sessionRepository: SessionRepository){}

	async execute(sessionIndex:number){
		try {
			return await this.sessionRepository.getSession(sessionIndex)
		}catch (error){
			throw new Error(`[Error to GET session]: ${(error as Error).message}`)
		}
	}
}
