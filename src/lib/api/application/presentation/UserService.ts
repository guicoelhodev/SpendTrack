import { makeGetAllUsers } from "../factories/userFactory";

export class UserService {
	async getAllUsers(){
		return await makeGetAllUsers().execute()
	}
}
