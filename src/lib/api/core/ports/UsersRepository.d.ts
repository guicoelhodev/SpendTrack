import type { TUser } from "../models/User";

export interface UserRepository {
	getAllUsers(): Promise<TUser[]>
	addUser(data:TUser): Promise<void>
}
