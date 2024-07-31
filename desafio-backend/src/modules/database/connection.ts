import knex from 'knex';
import { dbpath } from './config';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: `${dbpath}`,
    flags: ['OPEN_URI', 'OPEN_SHAREDCACHE'],
  },
  useNullAsDefault: true,
});

export { db };
