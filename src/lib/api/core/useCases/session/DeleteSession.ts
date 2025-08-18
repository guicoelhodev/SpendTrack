import type { SessionRepository } from "../../ports/SessionRepository";

export class DeleteSession  {

	constructor(private sessionRepository: SessionRepository){}

	async execute(sessionIndex:number){
		return this.sessionRepository.deleteSession(sessionIndex)
	}
}
