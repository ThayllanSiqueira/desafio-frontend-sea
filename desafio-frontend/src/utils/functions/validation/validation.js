import moment from 'moment';
import * as Yup from 'yup';

import { roles } from '../../constants/mockComponents';

export const validateCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  let remainder;

  // Primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10), 10)) return false;

  sum = 0;
  // Segundo dígito verificador
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11), 10)) return false;

  return true;
};

export const validateRG = (rg) => {
  rg = rg.replace(/[^\w]+/g, '');
  return rg.length >= 7 && rg.length <= 9;
};

export const isAdult = (birthdate) => {
  const today = moment();
  const birthDateMoment = moment(birthdate);
  const age = today.diff(birthDateMoment, 'years');
  return age >= 18;
};

export const disableFutureDates = (current) => {
  return current && current > moment().endOf('day');
};

// Esquema de validação com Yup
export const validationSchemaYup = Yup.object().shape({
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
    is: false,
    then: (schema) => schema.of(
      Yup.object().shape({
        id: Yup.string().required('A atividade é obrigatória'),
        epis: Yup.array().of(
          Yup.object().shape({
            id: Yup.string().required('O EPI é obrigatório'),
            caNumber: Yup.string()
              .required('O número do CA é obrigatório')
              .matches(/^[0-9]+$/, 'Deve conter apenas números')
              .min(3, 'Deve ter pelo menos 3 dígito'),
          })
        ).required('Pelo menos um EPI é obrigatório').min(1, 'Pelo menos um EPI é obrigatório'),
      })
    ).required('Pelo menos uma atividade é obrigatória').min(1, 'Pelo menos uma atividade é obrigatória'),
    otherwise: (schema) => schema.notRequired(),
  }),
});
