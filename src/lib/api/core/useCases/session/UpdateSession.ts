import type { SessionRepository, TUpdateSession } from "../../ports/SessionRepository";

export class UpdateSession {
	constructor(private sessionRepository: SessionRepository){}

	async execute(sessionIndex: number, data: TUpdateSession){
		try {
			return await this.sessionRepository.updateSession(sessionIndex, data)
		}catch (error){
			throw new Error(`[Error to updateSession]: ${(error as Error).message}`)
		}
	}
}
