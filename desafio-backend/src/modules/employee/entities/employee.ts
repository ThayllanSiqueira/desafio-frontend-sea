import { utils } from '../../utils/presentation';

export type Employee = {
  idemployee?: number;
  nameemployee: string;
  cpfemployee: string;
  roleemployee?: string;
  statusemployee: number;
  rgemployee?: string;
  birthdateemployee?: string;
  sexemployee: string;
  createdAt?: string;
  updatedAt?: string;
};

export type EmployeeData = {
  id?: number;
  name: string;
  cpf: string;
  role?: string;
  status: number;
  rg?: string;
  birthdate?: string;
  sex: string;
  createdAt?: string;
  updatedAt?: string;
};

export type EmployeeWithActivitie = {
  idemployeewithactivitie?: number;
  idemployee: number;
  idactivitie: number;
  idepi: number;
  numbercaepi: string;
  createdAt?: string;
  updatedAt?: string;
};

type EpiList = {
  id: number;
  caNumber: string;
};

export type AcitvityEpis = {
  id: string;
  epis: EpiList[];
};

export type TransformedEmployeeData = {
  name: string;
  cpf: string;
  role: string;
  status: boolean;
  rg: string;
  birthdate: string;
  sex: string;
  activitiesEpis: AcitvityEpis[];
};

export const employeeToEmployeeDataMapping: utils.KeyMapping<Employee, EmployeeData> = {
  idemployee: 'id',
  nameemployee: 'name',
  cpfemployee: 'cpf',
  roleemployee: 'role',
  statusemployee: 'status',
  rgemployee: 'rg',
  birthdateemployee: 'birthdate',
  sexemployee: 'sex',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
};

export enum EmployeeStatusEnum {
  inactived = 0,
  activated = 1,
}
