import { db } from "$lib/api/adapters/driven/datasource/db";
import { ApplicationDexieRepository } from "$lib/api/adapters/driven/repositories/ApplicationDexieRepository";
import { GetApplicationUseCase } from "$lib/api/core/useCases/application/GetApplicationUseCase";

const applicationRepository = new ApplicationDexieRepository(db);

export function makeApplicationFactory(){
	return new GetApplicationUseCase(applicationRepository).execute()
}
