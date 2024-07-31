import { Router, Request, Response, NextFunction } from 'express';
import { log } from '../../logger/presentation';
import { activitieManager } from '../../activitie/presentation';

export default (router: Router): void => {
  router.get('/activities', async (req: Request, res: Response, next: NextFunction) => {
    try {
      log.business.info('Requisição recebida em /activities');
      const activitiesDB = await activitieManager.findAll();
      const activities = activitiesDB.map((activitieDB) => {
        return activitieManager.mapActivitieToActivitieData(activitieDB);
      });

      return res.status(200).json({ status: 'success', data: { activities } });
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

  /*   router.post('/employee', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, cpf, role, status, rg, birthdate, sex } = req.body;
      const employee: Employee = {
        nameemployee: name,
        cpfemployee: cpf,
        roleemployee: role,
        statusemployee: status,
        rgemployee: rg,
        birthdateemployee: birthdate,
        sexemployee: sex,
      };
      const employeeCreated = await employeeManager.new(employee);
      if (typeof employeeCreated === 'string') {
        if (employeeCreated === '') {
          return res
            .status(400)
            .json({ status: 'error', data: { errors: [req.t('user.user_exists')] } });
        }
        return res.status(409).json({ status: 'error', data: { errors: [employeeCreated] } });
      }

      return res.status(201).json({ status: 'success', data: { employee: employeeCreated } });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        data: {
          errors: [req.t('error.server_error')],
        },
      });
      next(error);
    }
  }); */
};
