import { useState, useEffect, useMemo } from 'react';

import { useEditContext } from '../../../../hooks/useEditEmployeeContext';

export const useStepOneContent = () => {
  const { editData, setEditData } = useEditContext();
  const [isEmployeeFormVisible, setIsEmployeeFormVisible] = useState(false);

  const handleChangeStatesOnPage = (event) => {
    editData.setIsEmployeeFormVisible((prev) => !prev);
    editData.enableIcons();
    editData.setIsButtonNextStepDisabled((prev) => !prev);
  };

  const contextValue = useMemo(() => ({
    setIsEmployeeFormVisible,
  }), [setIsEmployeeFormVisible]);

  useEffect(() => {
    setEditData(contextValue);
  }, [contextValue, setEditData]);

  return {
    handleChangeStatesOnPage,
    isEmployeeFormVisible,
  }
}
