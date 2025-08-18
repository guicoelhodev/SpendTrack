import type { SessionRepository } from "../../ports/SessionRepository";

export class GetSession {

	constructor(private sessionRepository: SessionRepository){}

	async execute(sessionIndex:number){
		return this.sessionRepository.getSession(sessionIndex)
	}
}
