import { db } from "$lib/api/adapters/driven/datasource/db"
import { ExpanseAmountDexieRepository } from "$lib/api/adapters/driven/repositories/ExpanseAmountDexieRepository"
import { AddExpanseAmountUseCase } from "$lib/api/core/useCases/expanseAmount/AddExpanseAmountUseCase";
import { GetExpanseAmountByCategory } from "$lib/api/core/useCases/expanseAmount/GetExpanseAmountByCategory";
import { GetExpanseAmountByMonthUseCase } from "$lib/api/core/useCases/expanseAmount/GetExpanseAmountByMonthUseCase";

const expanseAmountRepository = new ExpanseAmountDexieRepository(db);

export function makeAddExpanseAmount(){
	return new AddExpanseAmountUseCase(expanseAmountRepository)
}

export function makeGetExpanseAmountByMonth(){
	return new GetExpanseAmountByMonthUseCase(expanseAmountRepository)
}

export function makeGetExpanseAmountByCategory(){
	return new GetExpanseAmountByCategory(expanseAmountRepository)
}
