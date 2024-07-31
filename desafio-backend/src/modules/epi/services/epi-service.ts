import { Epi, EpiData, epiToEpiDataMapping } from '../entities';
import { EpiPersistency } from '../persistency';
import { log } from '../../logger/presentation';
import { utils } from '../../utils/presentation';

export class EpiService {
  constructor(private readonly epiPersistency: EpiPersistency) {
    //
  }

  async findAll(): Promise<Epi[]> {
    try {
      return await this.epiPersistency.findAll();
    } catch (error) {
      log.errors.error(`${error}`);
      return [];
    }
  }

  /* async new(employee: Activitie): Promise<Activitie | string> {
    try {
      const employeeExists = await this.employeePersistency.findEmployeeByCpf(employee.cpfemployee);
      if (employeeExists) {
        return '';
      }

      employee.createdAt = utils.dateisobr();
      employee.updatedAt = utils.dateisobr();

      return await this.employeePersistency.save(employee);
    } catch (error) {
      log.errors.error(`${error}`);
      return '';
    }
  } */

  mapEpiToEpiData = (epi: Epi): EpiData => {
    return utils.mapObject(epi, epiToEpiDataMapping);
  };
}
