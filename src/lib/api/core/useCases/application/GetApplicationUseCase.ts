import type { ApplicationRepository } from "../../ports/ApplicationRepository";

export class GetApplicationUseCase {
	constructor(private applicationRepository: ApplicationRepository){}

	async execute(){
		return await this.applicationRepository.getApplication()
	}
}
