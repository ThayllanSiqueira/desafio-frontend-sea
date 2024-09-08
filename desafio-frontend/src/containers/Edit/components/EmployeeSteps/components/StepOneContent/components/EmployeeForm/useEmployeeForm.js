import {useState, useEffect} from 'react';
import moment from 'moment';
import {
  Form,
 } from 'antd';
 import * as Yup from 'yup';

import { useEditContext } from '../../../../../../hooks/useEditEmployeeContext';
import { useAppGlobalContext } from '../../../../../../../../hooks/useAppContext';
import { createEmployeeDTO } from '../../../../../../../../utils/dtos/InsertEmployee.dto';
import { URL_EMPLOYEES_INSERT } from '../../../../../../../../utils/constants/urls';

import { connectionAPIPost } from '../../../../../../../../utils/functions/connection/connectionAPI';
import { useEmployeeReducer } from '../../../../../../../../store/reducers/employeeReducer/useEmployeeReducer';
import { useActivitieReducer } from '../../../../../../../../store/reducers/activitieReducer/useActivitieReducer';
import { useEpiReducer } from '../../../../../../../../store/reducers/epiReducer/useEpiReducer';

import { useRequests } from '../../../../../../../../hooks/useRequests';
import { URL_EMPLOYEES_ID } from '../../../../../../../../utils/constants/urls';
import { MethodsEnum } from '../../../../../../../../utils/enums/methods.enum';

import { isAdult, validateCPF, validateRG } from '../../../../../../../../utils/functions/validation/validation';
import { roles } from '../../../../../../../../utils/constants/mockComponents';
import { createGlobalStyle } from 'styled-components';

export const useEmployeeForm = () => {
  const [loading, setLoading] = useState(false);
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

   /* useEffect(() => {
    const fields = form.getFieldValue('activitiesEpis');
    if (employee) {
      const initialData = { ...employee.employee };
      initialData.birthdate = moment(initialData.birthdate, 'YYYY-MM-DD');
      addInitialFields(initialData);
    }else if(!fields || fields.length === 0){
      addInitialFields();
    }
  }, [employee]); */

   /* const addInitialFields = (initialFields) => {
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

   }; */

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

    // if (employeeId) {
    //   await request(URL_EMPLOYEES_ID.replace('{employeeId}', employeeId), MethodsEnum.PUT, setEmployee, employeeData);
    //   setNotification('Sucesso', 'success', 'Funcionário Editado');
    // } else {
    //   await request(URL_EMPLOYEES_INSERT, MethodsEnum.POST, undefined, employeeData);
    //   setNotification('Sucesso', 'success', 'Funcionário Inserido');
    // }

    // editData.setIsEmployeeFormVisible((prev) => !prev);

    /* ******************************************************* */

    /* await connectionAPIPost(URL_EMPLOYEES_INSERT, employeeData)
    .then(() => {
      setNotification('Sucesso', 'success', 'Funcionário Inserido');
      editData.setIsEmployeeFormVisible((prev) => !prev);
    })
    .catch((error) => {
      setNotification(error.message, 'error');
    }); */

  };

  const initialValuesFormik = {
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

  // Validação para cada EPI
/* const epiValidationSchema = Yup.object().shape({
  id: Yup.string()
  .oneOf(
    epis.map((epi) => String(epi.id)),
    'Atividade Inválida!'
  )
  .required('Selecione um EPI!'),
  caNumber: Yup.string()
    .required('Informe o número do CA!')
    .matches(/^[0-9]+$/, 'Deve conter apenas números')
    .min(3, 'Deve ter pelo menos 3 dígito'),
});


  // Validação para cada atividade
const activityValidationSchema = Yup.object().shape({
  id: Yup.string()
  .oneOf(
    activities.map((activitie) => String(activitie.id)),
    'Atividade Inválida!'
  )
  .required('Por favor Selecione a atividade!'),
  epis: Yup.array()
    .of(epiValidationSchema)
    .required('Adicione pelo menos um EPI!')
    .min(1, 'Adicione pelo menos um EPI!'),
});
 */


  // Esquema de validação com Yup
const validationSchema = Yup.object().shape({
  status: Yup.boolean().required('Status é obrigatório'),
  name: Yup.string()
    .min(3, 'Deve conter mais que 3 caracteres')
    .max(60, 'Deve conter menos que 60 caracteres')
    .required('Por favor insira o nome!'),
  cpf: Yup.string()
    .min(14, 'CPF deve conter 11 dígitos')
    .test('valid-cpf', 'CPF inválido', (value) => validateCPF(value))
    .required('Por favor insira o CPF!'),
  rg: Yup.string()
    .max(9, 'RG deve ser menor que 9 dígitos')
    .test('valid-rg', 'RG inválido, deve conter entre 7 e 9 dígitos', (value) => validateRG(value))
    .required('Por favor insira o RG!'),
  sex: Yup.string()
    .required('Por favor insira o Sexo!'),
  birthdate: Yup.date()
    .test('is-adult', 'Você deve ter pelo menos 18 anos', (value) => isAdult(value))
    .required('Por favor insira a data de nascimento!'),
  role: Yup.string()
    .oneOf(
      roles.map((role) => role.value),
      'Cargo Inválido!'
    )
    .required('Por favor selecione o cargo!'),
  noEpi: Yup.boolean(),
  activitiesEpis: Yup.array().when('noEpi', {
    is: false, // Valida `activitiesEpis` somente se `noEpi` for `false`
    then: (schema) => schema.of(
      Yup.object().shape({
        id: Yup.string().required('A atividade é obrigatória'),
        epis: Yup.array().of(
          Yup.object().shape({
            id: Yup.string().required('O EPI é obrigatório'),
            caNumber: Yup.string().required('O número do CA é obrigatório'),
          })
        ).required('Pelo menos um EPI é obrigatório').min(1, 'Pelo menos um EPI é obrigatório'),
      })
    ).required('Pelo menos uma atividade é obrigatória').min(1, 'Pelo menos uma atividade é obrigatória'),
    otherwise: (schema) => schema.notRequired(),
  }),
});

  return {
    loading,
    handleBackStatesOnPage,
    validationSchema,
    onFinish,
    initialValuesFormik,
  }
}
