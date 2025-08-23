import type { Application } from "$lib/api/core/models/Application";
import { makeApplicationFactory, makeApplicationUpdateFactory } from "../factories/applicationFactory";

export class ApplicationService {

	async getApplication(){
		return makeApplicationFactory().execute()
	}

	async updateApplication(data: Partial<Application>){
		return makeApplicationUpdateFactory().execute(data)
	}
}
