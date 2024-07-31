export const validateCPF = (value) => {
  const cleanedValue = value.replace(/\D/g, '');
  if (cleanedValue.length !== 11) {
    return Promise.reject(new Error('O CPF deve ter 11 dígitos.'));
  }
  return Promise.resolve();
};
