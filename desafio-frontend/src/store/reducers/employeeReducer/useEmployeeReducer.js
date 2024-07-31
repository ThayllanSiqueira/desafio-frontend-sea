import { useDispatch, useSelector } from 'react-redux';
import { setEmployeesAction, setEmployeeIdAction, setEmployeeAction } from '.';

export const useEmployeeReducer = () => {
  const dispatch = useDispatch();
  const { employees, employeeId, employee } = useSelector((state) => state.employee);

  const setEmployees = (currentEmployees) => {
    const { employees } = currentEmployees;
      dispatch(setEmployeesAction(employees));
    }

    const setEmployeeId = (employeeId) => {
      dispatch(setEmployeeIdAction(employeeId));
    }

    const setEmployee = (employee) => {
      dispatch(setEmployeeAction(employee));
    }

   return {
    employees,
    employeeId,
    employee,
    setEmployees,
    setEmployeeId,
    setEmployee,
   }
}
