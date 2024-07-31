import { version } from '../../../version.json';
import { Router, Request, Response, NextFunction } from 'express';

export default (router: Router): void => {
  router.get('/version', async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json({ status: 'success', data: { version } });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        data: {
          errors: [req.t('error.server_error')],
        },
      });
      next(error);
    }
  });
};
