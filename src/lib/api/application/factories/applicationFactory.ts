import { db } from "$lib/api/adapters/driven/datasource/db";
import { ApplicationDexieRepository } from "$lib/api/adapters/driven/repositories/ApplicationDexieRepository";
import type { Application } from "$lib/api/core/models/Application";
import { GetApplicationUseCase } from "$lib/api/core/useCases/application/GetApplicationUseCase";
import { UpdateApplicationUseCase } from "$lib/api/core/useCases/application/UpdateApplicationUseCase";

const applicationRepository = new ApplicationDexieRepository(db);

export function makeApplicationFactory(){
	return new GetApplicationUseCase(applicationRepository).execute()
}

export function makeApplicationUpdateFactory(data: Partial<Application>){
	return new UpdateApplicationUseCase(applicationRepository).execute(data)
}
