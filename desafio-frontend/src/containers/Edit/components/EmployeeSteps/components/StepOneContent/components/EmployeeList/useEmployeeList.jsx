import { useState, useEffect, useMemo } from 'react';
import { useEditContext } from '../../../../../../hooks/useEditEmployeeContext';
import { useEmployeeReducer } from '../../../../../../../../store/reducers/employeeReducer/useEmployeeReducer';
import { useRequests } from '../../../../../../../../hooks/useRequests';
import { MethodsEnum } from '../../../../../../../../utils/enums/methods.enum';
import { URL_EMPLOYEES, URL_EMPLOYEES_ID } from '../../../../../../../../utils/constants/urls';
import { roles } from '../../../../../../../../utils/constants/mockComponents';

export const useEmployeeList = () => {
  const { editData } = useEditContext();
  const { request } = useRequests();
  const { employees, setEmployees, setEmployeeId } = useEmployeeReducer();
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [isButtonClearFilterDisabled, setIsButtonClearFilterDisabled] = useState(true);

  const handleEditEmployee = async (employeeId) => {
    setEmployeeId(employeeId);
    editData.setIsEmployeeFormVisible((prev) => !prev);
    editData.enableIcons();
    editData.setIsButtonNextStepDisabled((prev) => !prev);
  };

  const handleDeleteEmployee = async (employeeId) => {
    await request(URL_EMPLOYEES_ID.replace('{employeeId}', employeeId), MethodsEnum.DELETE)
    await request(URL_EMPLOYEES, MethodsEnum.GET, setEmployees)
  };

  function getLabelByValue(value) {
    const role = roles.find(role => role.value === value);
    return role ? role.label : null;
  }

  const showFilter = (isFilter) => {
    setShowActiveOnly(isFilter)
    setIsButtonClearFilterDisabled((prev) => !prev);
  }

  const isConcluded = (checked) => {
    if (checked) {
     editData.stepConcluded();
    } else {
     editData.setItems(editData.steps);
     editData.setCurrent(0);
    }

    editData.setIsButtonNextStepDisabled((prev) => !prev);
   };

  const getMenuItems = (employeeId) => [
    {
      label: <a onClick={() => handleEditEmployee(employeeId)}>Alterar</a>,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <a onClick={() => handleDeleteEmployee(employeeId)}>Excluir</a>,
      key: '1',
    },
  ];

  useEffect(() => {
    request(URL_EMPLOYEES, MethodsEnum.GET, setEmployees)
  }, []);

  return {
    getMenuItems,
    getLabelByValue,
    showFilter,
    isConcluded,
    employees,
    showActiveOnly,
    isButtonClearFilterDisabled,
  }
}
