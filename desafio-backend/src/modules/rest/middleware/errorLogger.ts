import { log } from '../../logger/presentation';

import { NextFunction, Request, Response } from 'express';

const errorLogger = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  log.errors.error(err);
};

export { errorLogger };
