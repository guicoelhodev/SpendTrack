import { db } from "$lib/api/adapters/driven/datasource/db";
import { liveQuery } from "dexie";

export let users = $state(liveQuery(() => db.users.toArray()))
