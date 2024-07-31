import { Router, Request, Response, NextFunction } from 'express';
import { log } from '../../logger/presentation';
import { epiManager } from '../../epi/presentation';

export default (router: Router): void => {
  router.get('/epis', async (req: Request, res: Response, next: NextFunction) => {
    try {
      log.business.info('Requisição recebida em /epis');
      const episDB = await epiManager.findAll();
      const epis = episDB.map((epiDB) => {
        return epiManager.mapEpiToEpiData(epiDB);
      });

      return res.status(200).json({ status: 'success', data: { epis } });
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
