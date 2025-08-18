import type { TUser } from "$lib/api/core/models/User";
import { makeAddUser, makeGetAllUsers } from "../factories/userFactory";

export class UserService {
	async getAllUsers(){
		return await makeGetAllUsers().execute()
	}

	async addUser(data: TUser){
		return await makeAddUser().execute(data)
	}
}
