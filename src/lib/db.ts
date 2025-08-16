import Dexie, { type EntityTable } from 'dexie';

import type { TUser } from '$lib/types/User';
import type { TSession } from './types/Session';

const db = new Dexie('SpendTrack_DB') as Dexie & {
  users: EntityTable<
    TUser,
    'id'
  >;
	session: EntityTable<TSession, 'id'>
};

// Schema declaration:
db.version(1).stores({
  users: 'id, name, nickname',
	session: "++id, userId"
});

export { db };
