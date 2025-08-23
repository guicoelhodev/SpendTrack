import { makeApplicationFactory } from "../factories/applicationFactory";

export class ApplicationService {

	async getApplication(){
		return makeApplicationFactory()
	}
}
