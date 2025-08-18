import type { SessionRepository } from "../../ports/SessionRepository";

export class DeleteSession  {

	constructor(private sessionRepository: SessionRepository){}

	async execute(sessionIndex:number){
		try {
			return await this.sessionRepository.deleteSession(sessionIndex)
		}catch (error){
			throw new Error(`[Error to delete session]: ${(error as Error).message}`)
		}
	}
}
