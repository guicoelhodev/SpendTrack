import type { ExpanseAmount } from "../../models/ExpanseAmount";
import type { ExpanseAmountRepository } from "../../ports/ExpanseAmountRepository";

type ExpanseListUseReturn = Record<string, ExpanseAmount[]>

export class GetExpanseListByYearUseCase {
	constructor(private expanseAmountRepository: ExpanseAmountRepository){};

	async execute(year: number, userId: string): Promise<ExpanseListUseReturn>{
		const list = await this.expanseAmountRepository.getExpanseByYear(year, userId)

		const mapperList = new Map<string, ExpanseAmount[]>

		list.forEach(list => {
			const dateKey = new Intl.DateTimeFormat('en-US', {
				day: '2-digit',
				month: '2-digit',
				year: '2-digit'
			}).format(new Date(list.createdAt));

			const getDayAmount = mapperList.get(dateKey);

			if(!getDayAmount?.length){
				return mapperList.set(dateKey, [list])
			} else {
        return mapperList.set(dateKey, [...getDayAmount, list])
			}
		});

		return Object.fromEntries(Array.from(mapperList))
	}
}
