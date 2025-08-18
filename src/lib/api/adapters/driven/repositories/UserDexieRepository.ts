import type { TUser } from "$lib/api/core/models/User";
import type { UserRepository } from "$lib/api/core/ports/UsersRepository";
import type { db } from '$lib/api/adapters/driven/datasource/db'

export class UserDexieRepository implements UserRepository {
	constructor(private database: typeof db){}

  async getAllUsers(): Promise<TUser[]>{
		return await this.database.users.toArray()
	}

	async addUser(data: TUser): Promise<void>{
		await this.database.users.add(data)
	}
}
