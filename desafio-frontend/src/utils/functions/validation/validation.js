import moment from 'moment';

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
