import { makeApplicationFactory, makeApplicationUpdateFactory } from "../factories/applicationFactory";

export class ApplicationService {

	async getApplication(){
		return makeApplicationFactory()
	}

	async updateApplication(){
		return makeApplicationUpdateFactory()
	}
}
