import { db } from "$lib/db";
import { liveQuery } from "dexie";

export let users = $state(liveQuery(() => db.users.toArray()))
