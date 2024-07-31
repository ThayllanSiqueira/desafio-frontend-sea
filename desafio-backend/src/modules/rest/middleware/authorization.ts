/* eslint-disable no-var */
import { userManager } from '../../admin/presentation';
import { log } from '../../logger/presentation';

import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

declare global {
  var userId: number;
  var userName: string;

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      userId: number;
      userEmail: string;
      userName: string;
    }
  }
}

export default async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
  const { authorization } = req.headers;
  const secret = String(process.env.SECRET);

  if (!authorization) {
    return res.status(401).json({ status: 'error', errors: [req.t('login.login_required')] });
  }

  const [, token] = authorization.split(' ');

  try {
    const result = await verify(token, secret);
    const data = result as JwtPayload;
    const { id, email, name } = data;

    const user = await userManager.findByEmail(email);

    if (!user) {
      return res.status(401).json({ status: 'error', errors: [req.t('user.user_invalid')] });
    }

    req.userId = id;
    req.userEmail = email;
    req.userName = name;

    // global.user = data;

    global.userId = id;
    global.userName = name;

    return next();
  } catch (e) {
    log.errors.error(e);
    return res.status(401).json({ status: 'error', errors: [req.t('login.token_invalid')] });
  }
};
