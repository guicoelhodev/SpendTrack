import { db } from "$lib/api/adapters/driven/datasource/db";
import { liveQuery } from "dexie";

export const session = $state(liveQuery(() => {
	return db.session.where('id').equals(1).first()
}))
