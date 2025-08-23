import type { Application } from "$lib/api/core/models/Application";
import type { ApplicationRepository } from "$lib/api/core/ports/ApplicationRepository";
import type { db } from "../datasource/db";

export class ApplicationDexieRepository implements ApplicationRepository {
	constructor(private database: typeof db){}

  async getApplication(){
		return await this.database.application.orderBy('id').first() ?? null
	}

	async updateApplication(data: Partial<Application>){
	  await this.database.application.update(1, data)
	}
}
