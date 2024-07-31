import { db } from '../../database';
import { Activitie } from '../entities';
import { log } from '../../logger/presentation';
import { utils } from '../../utils/presentation';

export class ActivitiePersistency {
  async findAll(): Promise<Activitie[]> {
    try {
      return await db.select('*').from<Activitie>('activitie').orderBy('nameactivitie');
    } catch (error) {
      log.errors.error(`Erro ao buscar activities : ${error}`);
      return [];
    }
  }

  /* async findById(idemployee: number): Promise<Employee | undefined> {
    try {
      return await db.first('*').from<Employee>('employee').where({ idemployee });
    } catch (error) {
      log.errors.error(`Erro ao buscar usuário por id : ${error}`);
      return undefined;
    }
  }

  async save(employee: Activitie): Promise<Activitie | string> {
    try {
      const res = await db<Activitie>('employee')
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
  } */
}
