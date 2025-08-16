import type { TUser } from '$lib/types/User';
import Dexie, { type EntityTable } from 'dexie';

const db = new Dexie('SpendTrack_DB') as Dexie & {
  users: EntityTable<
    TUser,
    'id'
  >;
};

// Schema declaration:
db.version(1).stores({
  users: '++id, name, nickname'
});

export { db };
