import type { UserRepository } from "../../ports/UsersRepository";

export class GetAllUsers {
	constructor(private userRepository: UserRepository){}

	async execute(){
		try {
			return await this.userRepository.getAllUsers()
		}catch (error){
			throw new Error(`[Error to getAll Users]: ${(error as Error).message}`)
		}
	}
}
