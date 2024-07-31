import { EmployeeService } from '../services';
import { EmployeePersistency } from '../persistency';

export const makeLoadEmployee = (): EmployeeService => {
  const ep = new EmployeePersistency();
  return new EmployeeService(ep);
};
