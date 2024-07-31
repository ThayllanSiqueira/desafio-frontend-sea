import {
  AcitvityEpis,
  Employee,
  EmployeeData,
  employeeToEmployeeDataMapping,
  EmployeeWithActivitie,
  TransformedEmployeeData,
} from '../entities';
import { EmployeePersistency } from '../persistency';
import { log } from '../../logger/presentation';
import { utils } from '../../utils/presentation';

export class EmployeeService {
  constructor(private readonly employeePersistency: EmployeePersistency) {
    //
  }

  async findAll(): Promise<Employee[]> {
    try {
      return await this.employeePersistency.findAll();
    } catch (error) {
      log.errors.error(`${error}`);
      return [];
    }
  }

  async new(employee: Employee, activitiesEpis: AcitvityEpis[]): Promise<Employee | string> {
    try {
      const employeeExists = await this.employeePersistency.findEmployeeByCpf(employee.cpfemployee);
      if (employeeExists) {
        return '';
      }
      if (employee.birthdateemployee)
        employee.birthdateemployee = utils.onlydate(employee.birthdateemployee);
      employee.createdAt = utils.dateisobr();
      employee.updatedAt = utils.dateisobr();

      const employeeCreated = await this.employeePersistency.save(employee);

      if (activitiesEpis && activitiesEpis.length > 0 && typeof employeeCreated !== 'string') {
        activitiesEpis.forEach(async (activity) => {
          for await (const epi of activity.epis) {
            const employeeWithActivity: EmployeeWithActivitie = {
              idemployee: Number(employeeCreated.idemployee),
              idactivitie: Number(activity.id),
              idepi: Number(epi.id),
              numbercaepi: epi.caNumber,
            };
            employeeWithActivity.createdAt = utils.dateisobr();
            employeeWithActivity.updatedAt = utils.dateisobr();
            await this.employeePersistency.saveEmployeeWithActivity(employeeWithActivity);
          }
        });
      }

      return employeeCreated;
    } catch (error) {
      log.errors.error(`${error}`);
      return '';
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.employeePersistency.delete(id);
    } catch (error) {
      log.errors.error(`${error}`);
    }
  }

  async findById(id: number): Promise<Employee | undefined> {
    try {
      return await this.employeePersistency.findById(id);
    } catch (error) {
      log.errors.error(`${error}`);
      return undefined;
    }
  }

  async findByIdWithActivity(id: number): Promise<TransformedEmployeeData | undefined> {
    try {
      const employeeWithActivityJoin = await this.employeePersistency.findByIdWithActivity(id);
      return this.transformEmployeeDataReturn(employeeWithActivityJoin);
    } catch (error) {
      log.errors.error(`${error}`);
      return undefined;
    }
  }

  async update(
    employee: Employee,
    activitiesEpis: AcitvityEpis[],
  ): Promise<TransformedEmployeeData | undefined> {
    if (activitiesEpis && activitiesEpis.length > 0) {
      // Primeiro, remove todos os dados associados ao idemployee
      await this.employeePersistency.deleteEmployeeWithActivity(Number(employee.idemployee));

      // Agora salva os novos dados
      for (const activity of activitiesEpis) {
        for (const epi of activity.epis) {
          const employeeWithActivity = {
            idemployee: Number(employee.idemployee),
            idactivitie: Number(activity.id),
            idepi: Number(epi.id),
            numbercaepi: epi.caNumber,
            updatedAt: utils.dateisobr(),
          };
          console.log(employeeWithActivity);
          await this.employeePersistency.saveEmployeeWithActivity(employeeWithActivity);
        }
      }
    }

    return this.employeePersistency.update(employee);
  }

  mapEmployeeToEmployeeData = (employee: Employee): EmployeeData => {
    return utils.mapObject(employee, employeeToEmployeeDataMapping);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformEmployeeDataReturn = (employeeWithDataJoin: any): TransformedEmployeeData => {
    const activitiesMap: { [key: string]: AcitvityEpis } = {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    employeeWithDataJoin.forEach((item: any) => {
      if (item.idactivitie) {
        const activityId = item.idactivitie.toString();
        const epi = {
          id: item.idepi.toString(),
          caNumber: item.numbercaepi,
        };

        if (!activitiesMap[activityId]) {
          activitiesMap[activityId] = {
            id: activityId,
            epis: [],
          };
        }
        activitiesMap[activityId].epis.push(epi);
      }
    });

    const activitiesEpis = Object.values(activitiesMap);

    const transformedEmployee: TransformedEmployeeData = {
      name: employeeWithDataJoin[0].nameemployee,
      cpf: employeeWithDataJoin[0].cpfemployee,
      role: employeeWithDataJoin[0].roleemployee,
      status: employeeWithDataJoin[0].statusemployee === 1,
      rg: employeeWithDataJoin[0].rgemployee,
      birthdate: employeeWithDataJoin[0].birthdateemployee,
      sex: employeeWithDataJoin[0].sexemployee,
      activitiesEpis,
    };
    return transformedEmployee;
  };
}
