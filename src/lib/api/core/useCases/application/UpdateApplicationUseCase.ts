import type { Application } from "../../models/Application";
import type { ApplicationRepository } from "../../ports/ApplicationRepository";

export class UpdateApplicationUseCase {
	constructor(private applicationRepository: ApplicationRepository){}

	async execute(data: Partial<Application>){
		return await this.applicationRepository.updateApplication(data)
	}
}
