import { NextFunction, Request, Response } from 'express';
import { userManager } from '../../admin/presentation';

export function can(permissionsRoutes: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (req.userEmail === process.env.SUPERUSEREMAIL) {
      return next();
    }

    const userId = req.userId;

    const permissions = await userManager.findPermissionsByUser(userId);

    const permissionExists = permissions
      .map((permission) => permission)
      .some((permission) => permissionsRoutes.includes(permission));

    if (!permissionExists) {
      return res.status(401).json({
        status: 'error',
        data: { errors: [req.t('user.user_not_privilege')] },
      });
    }

    return next();
  };
}

export function is(rolesRoutes: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (req.userEmail === process.env.SUPERUSEREMAIL) {
      return next();
    }
    const userId = req.userId;

    const roles = await userManager.findRolesByUser(userId);

    const roleExists = roles.map((role) => role).some((role) => rolesRoutes.includes(role));

    if (!roleExists) {
      return res.status(403).json({
        status: 'error',
        data: { errors: [req.t('user.user_not_privilege')] },
      });
    }

    return next();
  };
}
