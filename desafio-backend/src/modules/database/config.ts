import appRoot from 'app-root-path';
import { resolve } from 'path';
import { existsSync, copyFileSync } from 'fs';

import { log } from '../logger/presentation';

let dbpath: string;

if (process.env.NODE_ENV?.trim() === 'development') {
  dbpath = `${appRoot}/infra/db/desafiodb.db`;
}

if (process.env.NODE_ENV?.trim() === 'production') {
  const dbFilePath = `${process.env.PORTABLE_EXECUTABLE_DIR}/db/s3db.db`;
  const cleanDbFilePath = `${process.env.PORTABLE_EXECUTABLE_DIR}/db/clean/s3db.db`;

  if (!existsSync(resolve(dbFilePath))) {
    copyFileSync(resolve(cleanDbFilePath), resolve(dbFilePath));
    log.business.info(`File s3db.db copied successfully.`);
  }

  dbpath = `${process.env.PORTABLE_EXECUTABLE_DIR}/db/s3db.db`;
}

export { dbpath };
