import { Router, Request, Response, NextFunction } from 'express';
import { log } from '../../logger/presentation';
import { employeeManager, Employee } from '../../employee/presentation';

export default (router: Router): void => {
  router.get('/employees', async (req: Request, res: Response, next: NextFunction) => {
    try {
      log.business.info('Requisição recebida em GET /employees');
      const employeesDB = await employeeManager.findAll();
      const employees = employeesDB.map((employeeDB) => {
        return employeeManager.mapEmployeeToEmployeeData(employeeDB);
      });

      return res.status(200).json({ status: 'success', data: { employees } });
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

  router.post('/employee', async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(JSON.stringify(req.body));
      log.business.info('Requisição recebida em POST /employee');
      const { name, cpf, role, status, rg, birthdate, sex, activitiesEpis } = req.body;
      const employee: Employee = {
        nameemployee: name,
        cpfemployee: cpf,
        roleemployee: role,
        statusemployee: status,
        rgemployee: rg,
        birthdateemployee: birthdate,
        sexemployee: sex,
      };
      const employeeCreated = await employeeManager.new(employee, activitiesEpis);
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
  });

  router.delete('/employee/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      log.business.info('Requisição recebida em DELETE /employee');
      const { id } = req.params;
      await employeeManager.remove(Number(id));

      return res
        .status(200)
        .json({ status: 'success', data: { message: 'Funcionário removidos com sucesso' } });
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

  router.get('/employee/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      log.business.info('Requisição recebida em GET /employee');
      const { id } = req.params;
      const employee = await employeeManager.findByIdWithActivity(Number(id));
      if (employee === undefined)
        return res
          .status(404)
          .json({ status: 'error', data: { errors: [req.t('user.user_not_found')] } });
      return res.status(200).json({ status: 'success', data: { employee } });
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

  router.put('/employee/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const employee = await employeeManager.findById(Number(id));
      if (employee === undefined)
        return res
          .status(404)
          .json({ status: 'error', data: { errors: [req.t('user.user_not_found')] } });

      const { name, cpf, role, status, rg, birthdate, sex, activitiesEpis } = req.body;

      employee.nameemployee = name;
      employee.cpfemployee = cpf;
      employee.roleemployee = role;
      employee.statusemployee = status;
      employee.rgemployee = rg;
      employee.birthdateemployee = birthdate;
      employee.sexemployee = sex;

      const userChanged = await employeeManager.update(employee, activitiesEpis);

      if (userChanged === undefined)
        return res
          .status(500)
          .json({ status: 'error', data: { errors: [req.t('user.user_update_error')] } });

      return res
        .status(200)
        .json({ status: 'success', data: { message: req.t('user.user_update_success') } });
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
