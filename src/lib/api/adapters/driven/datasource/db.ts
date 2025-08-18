import type { ExpanseAmount } from '$lib/api/core/models/ExpanseAmount';
import type { TExpanseCategory } from '$lib/api/core/models/ExpanseCategory';
import type { TSession } from '$lib/api/core/models/Session';
import type { TUser } from '$lib/api/core/models/User';
import Dexie, { type EntityTable } from 'dexie';


const db = new Dexie('SpendTrack_DB') as Dexie & {
  users: EntityTable<
    TUser,
    'id'
  >;
	session: EntityTable<TSession, 'id'>
	expanseCategory: EntityTable<TExpanseCategory, 'id'>
	expanseAmount: EntityTable<ExpanseAmount, 'id'>
};

// Schema declaration:
db.version(1).stores({
  users: 'id, name, nickname',
	session: "++id, userId",
	expanseCategory: "++id, &name",
	expanseAmount: "++id, createdAt, mountIndex, categoryName"
});

db.on('populate', async (tx) => {
  await tx.table('expanseCategory').bulkAdd([
    { name: 'food', hexColor: '#e63946', isDefault: true  },
    { name: 'entertainment', hexColor: '#f1a208', isDefault: true  },
    { name: 'transport', hexColor: '#457b9d', isDefault: true  },
    { name: 'fix', hexColor: '#43aa8b', isDefault: true  },
  ]);

	await tx.table('users').add({ 
		id: crypto.randomUUID(), name: 'Guilherme Coelho', nickname: 'guicoelhodev' 
	})
});


export { db };
