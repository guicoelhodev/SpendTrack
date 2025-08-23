import type { ApplicationRepository } from "$lib/api/core/ports/ApplicationRepository";
import type { db } from "../datasource/db";

export class ApplicationDexieRepository implements ApplicationRepository {
	constructor(private database: typeof db){}

  async getApplication(){
		return await this.database.application.orderBy('id').first() ?? null
	}
}
