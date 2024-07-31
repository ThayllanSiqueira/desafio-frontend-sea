import { Activitie, ActivitieData, activitieToActivitieDataMapping } from '../entities';
import { ActivitiePersistency } from '../persistency';
import { log } from '../../logger/presentation';
import { utils } from '../../utils/presentation';

export class ActivitieService {
  constructor(private readonly activitiePersistency: ActivitiePersistency) {
    //
  }

  async findAll(): Promise<Activitie[]> {
    try {
      return await this.activitiePersistency.findAll();
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

  mapActivitieToActivitieData = (activitie: Activitie): ActivitieData => {
    return utils.mapObject(activitie, activitieToActivitieDataMapping);
  };
}
