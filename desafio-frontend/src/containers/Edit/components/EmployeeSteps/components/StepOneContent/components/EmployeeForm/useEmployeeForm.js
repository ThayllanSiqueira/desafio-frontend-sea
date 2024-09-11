import { useEffect, useState } from 'react';
import moment from 'moment';

import { useEditContext } from '../../../../../../hooks/useEditEmployeeContext';
import { useAppGlobalContext } from '../../../../../../../../hooks/useAppContext';
import { createEmployeeDTO } from '../../../../../../../../utils/dtos/InsertEmployee.dto';
import { URL_EMPLOYEES_INSERT, URL_EMPLOYEES_ID } from '../../../../../../../../utils/constants/urls';
import { useEmployeeReducer } from '../../../../../../../../store/reducers/employeeReducer/useEmployeeReducer';
import { useActivitieReducer } from '../../../../../../../../store/reducers/activitieReducer/useActivitieReducer';
import { useEpiReducer } from '../../../../../../../../store/reducers/epiReducer/useEpiReducer';
import { useRequests } from '../../../../../../../../hooks/useRequests';
import { MethodsEnum } from '../../../../../../../../utils/enums/methods.enum';
import { validationSchemaYup } from '../../../../../../../../utils/functions/validation/validation';

export const useEmployeeForm = () => {
  const [initialValuesFormik, setInitialValuesFormik] = useState({});
  const { editData } = useEditContext();
  const { setNotification } = useAppGlobalContext();
  const { employeeId, employee, setEmployee, setEmployeeId } = useEmployeeReducer();
  const { activities } = useActivitieReducer();
  const { epis } = useEpiReducer();
  const {request} = useRequests();

  useEffect(() => {
    if(employeeId){
      request(URL_EMPLOYEES_ID.replace('{employeeId}', employeeId), MethodsEnum.GET, setEmployee);
    }
  }, [employeeId]);

  useEffect(() => {
    if (employee) {
      const initialDataEmployee = { ...employee.employee };
      initialDataEmployee.birthdate = moment(initialDataEmployee.birthdate, 'YYYY-MM-DD');
      setInitialValuesFormik(initialDataEmployee);
    } else {
      const initialValues = {
        status: true,
        name: '',
        cpf: '',
        rg: '',
        sex: 'Feminino',
        birthdate: '',
        role: '',
        noEpi: false,
        activitiesEpis: [
          {
            id: '',
            epis: [
              {
                id: '',
                caNumber: '',
              },
            ],
          },
        ],
      }
      setInitialValuesFormik(initialValues);
    }
  }, [employee]);


  const handleBackStatesOnPage = (event) => {
    setEmployee(null);
    setEmployeeId(0)
    editData.setItems(editData.steps);
    editData.setCurrent(0);
    editData.setIsEmployeeFormVisible((prev) => !prev);
    editData.setIsButtonNextStepDisabled((prev) => !prev);
  };

  const onFinish = async (values) => {
    const employeeData = createEmployeeDTO(values);

    if (employeeId) {
      await request(URL_EMPLOYEES_ID.replace('{employeeId}', employeeId), MethodsEnum.PUT, setEmployee, employeeData);
      setNotification('Sucesso', 'success', 'Funcionário Editado');
    } else {
      await request(URL_EMPLOYEES_INSERT, MethodsEnum.POST, undefined, employeeData);
      setNotification('Sucesso', 'success', 'Funcionário Inserido');
    }

    editData.setIsEmployeeFormVisible((prev) => !prev);
  };

  return {
    handleBackStatesOnPage,
    onFinish,
    initialValuesFormik,
    validationSchemaYup,
    employeeId,
  }
}
