import {useState, useEffect} from 'react';
import moment from 'moment';
import {
  Form,
 } from 'antd';

import { useEditContext } from './useEditEmployeeContext';
import { useAppGlobalContext } from '../../../hooks/useAppContext';
import { createEmployeeDTO } from '../../../utils/dtos/InsertEmployee.dto';
import { URL_EMPLOYEES_INSERT } from '../../../utils/constants/urls';

import { connectionAPIPost } from '../../../utils/functions/connection/connectionAPI';
import { useEmployeeReducer } from '../../../store/reducers/employeeReducer/useEmployeeReducer';
import { useRequests } from './../../../hooks/useRequests';
import { URL_EMPLOYEES_ID } from './../../../utils/constants/urls';
import { MethodsEnum } from './../../../utils/enums/methods.enum';

export const useInsertEmployee = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { editData } = useEditContext();
  const { setNotification } = useAppGlobalContext();
  const { employeeId, employee, setEmployee, setEmployeeId } = useEmployeeReducer();
  const {request} = useRequests();

  useEffect(() => {
      if(employeeId){
        request(URL_EMPLOYEES_ID.replace('{employeeId}', employeeId), MethodsEnum.GET, setEmployee);
      }
   }, [employeeId]);

   useEffect(() => {
    const fields = form.getFieldValue('activitiesEpis');
    if (employee) {
      const initialData = { ...employee.employee };
      initialData.birthdate = moment(initialData.birthdate, 'YYYY-MM-DD');
      addInitialFields(initialData);
    }else if(!fields || fields.length === 0){
      addInitialFields();
    }
  }, [employee]);

   const addInitialFields = (initialFields) => {
    if (initialFields) {
      form.setFieldsValue(initialFields);
    } else {
      form.setFieldsValue({
        sex: 'Feminino',
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
      });
    }

   };

  const handleBackStatesOnPage = (event) => {
    setEmployee(undefined);
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

    /* await connectionAPIPost(URL_EMPLOYEES_INSERT, employeeData)
    .then(() => {
      setNotification('Sucesso', 'success', 'Funcionário Inserido');
      editData.setIsEmployeeFormVisible((prev) => !prev);
    })
    .catch((error) => {
      setNotification(error.message, 'error');
    }); */

  };

  return {
    loading,
    form,
    handleBackStatesOnPage,
    onFinish
  }
}
