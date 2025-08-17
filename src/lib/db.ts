import Dexie, { type EntityTable } from 'dexie';

import type { TUser } from '$lib/types/User';
import type { TSession } from './types/Session';
import type { TExpanseCategory } from './types/ExpanseCategory';

const db = new Dexie('SpendTrack_DB') as Dexie & {
  users: EntityTable<
    TUser,
    'id'
  >;
	session: EntityTable<TSession, 'id'>
	expanseCategory: EntityTable<TExpanseCategory, 'id'>
};

// Schema declaration:
db.version(1).stores({
  users: 'id, name, nickname',
	session: "++id, userId",
	expanseCategory: "++id, name"
});

db.on('populate', async (tx) => {
  await tx.table('expanseCategory').bulkAdd([
    { name: 'food', hexColor: '#e63946' },
    { name: 'entertainment', hexColor: '#f1a208' },
    { name: 'transport', hexColor: '#457b9d' },
    { name: 'fix', hexColor: '#43aa8b' },
  ]);
});

db.open().catch((e) => {
  console.error('Failed to open db', e);
});

export { db };
