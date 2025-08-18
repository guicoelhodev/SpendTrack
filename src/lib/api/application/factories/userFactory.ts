import { db } from "$lib/api/adapters/driven/datasource/db";
import { UserDexieRepository } from "$lib/api/adapters/driven/repositories/UserDexieRepository";
import { GetAllUsers } from "$lib/api/core/useCases/user/GetAllUsers";

const userRepository = new UserDexieRepository(db);

export function makeGetAllUsers(){
	return new GetAllUsers(userRepository);
}
