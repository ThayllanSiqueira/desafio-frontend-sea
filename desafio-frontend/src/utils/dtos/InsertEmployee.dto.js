export const createEmployeeDTO = ({ id = null, name = '', cpf = '', role = '', status = 0, rg = '', birthdate = '', sex = '', activitiesEpis = [] }) => {
  return {
    id,
    name,
    cpf,
    role,
    status,
    rg,
    birthdate,
    sex,
    activitiesEpis,
  };
};
