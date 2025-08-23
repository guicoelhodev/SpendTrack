import { db } from "$lib/api/adapters/driven/datasource/db";
import { ApplicationDexieRepository } from "$lib/api/adapters/driven/repositories/ApplicationDexieRepository";
import { GetApplicationUseCase } from "$lib/api/core/useCases/application/GetApplicationUseCase";
import { UpdateApplicationUseCase } from "$lib/api/core/useCases/application/UpdateApplicationUseCase";

const applicationRepository = new ApplicationDexieRepository(db);

export function makeApplicationFactory(){
	return new GetApplicationUseCase(applicationRepository)
}

export function makeApplicationUpdateFactory(){
	return new UpdateApplicationUseCase(applicationRepository)
}
