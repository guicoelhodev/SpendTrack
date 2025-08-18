import type { TUser } from "../../models/User";
import type { UserRepository } from "../../ports/UsersRepository";

export class AddUserUseCase {

	constructor(private userRepository: UserRepository){}

	async execute(data: TUser){
		return this.userRepository.addUser(data)
	}
}
