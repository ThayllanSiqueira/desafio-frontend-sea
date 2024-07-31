import { db } from '../../database';
import { Employee, EmployeeWithActivitie } from '../entities';
import { log } from '../../logger/presentation';
// import { utils } from '../../utils/presentation';

export class EmployeePersistency {
  async findAll(): Promise<Employee[]> {
    try {
      return await db.select('*').from<Employee>('employee').orderBy('nameemployee');
    } catch (error) {
      log.errors.error(`Erro ao buscar employess : ${error}`);
      return [];
    }
  }

  async findEmployeeByCpf(cpf: string): Promise<Employee | undefined> {
    try {
      return await db.first('*').from<Employee>('employee').where({ cpfemployee: cpf });
    } catch (error) {
      log.errors.error(`Erro ao buscar employee por cpf : ${error}`);
      return undefined;
    }
  }

  async findById(idemployee: number): Promise<Employee | undefined> {
    try {
      return await db.first('*').from<Employee>('employee').where({ idemployee });
    } catch (error) {
      log.errors.error(`Erro ao buscar funcionário por id : ${error}`);
      return undefined;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async findByIdWithActivity(idemployee: number): Promise<any> {
    try {
      // return await db.first('*').from<Employee>('employee').where({ idemployee });

      const res = db
        .select('*')
        .from('employee as e')
        .leftJoin('employeewithactivitie as ea', 'e.idemployee', 'ea.idemployee')
        .where('e.idemployee', idemployee);
      return res;
    } catch (error) {
      log.errors.error(`Erro ao buscar funcionário por id : ${error}`);
      return undefined;
    }
  }

  async save(employee: Employee): Promise<Employee | string> {
    try {
      const res = await db<Employee>('employee')
        .insert(employee)
        .returning('*')
        .onConflict('idemployee')
        .merge();
      const employeeCreated = await this.findById(Number(res[0].idemployee));
      if (employeeCreated === undefined) return '';
      return employeeCreated;
    } catch (error) {
      log.errors.error(`Erro ao salvar employee : ${error}`);
      return '';
    }
  }

  async saveEmployeeWithActivity(employeeWithActivity: EmployeeWithActivitie): Promise<void> {
    try {
      await db('employeewithactivitie').insert(employeeWithActivity);
    } catch (error) {
      log.errors.error(`Erro ao salvar employeewithactivitie : ${error}`);
    }
  }

  async delete(idemployee: number): Promise<void> {
    try {
      await db('employeewithactivitie').where({ idemployee }).del();
      await db('employee').where({ idemployee }).del();
    } catch (error) {
      log.errors.error(`Erro ao remover funcionário e suas atividade e epis : ${error}`);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async update(employee: Employee): Promise<any> {
    try {
      const res = await db<Employee>('employee')
        .update(employee)
        .returning('*')
        .where({ idemployee: employee.idemployee });
      return await this.findByIdWithActivity(Number(res[0].idemployee));
    } catch (error) {
      log.errors.error(`Erro ao alterar usuário: ${error}`);
      return undefined;
    }
  }

  async deleteEmployeeWithActivity(idemployee: number): Promise<void> {
    try {
      await db('employeewithactivitie').delete().where({ idemployee });
    } catch (error) {
      log.errors.error(`Erro ao salvar employeewithactivitie : ${error}`);
    }
  }
}
