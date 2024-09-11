import { useState, useEffect, useMemo } from 'react';

import { useEditContext } from './hooks/useEditEmployeeContext';

export const useEditScreen = () => {
  const { editData, setEditData } = useEditContext();
  const [isButtonNextStepDisabled, setIsButtonNextStepDisabled] = useState(true);
  const [haspreviousbutton, setHaspreviousButton] = useState(false);

  const nextStep = () => {
    editData.next();
  }

  const previousStep = () => {
    editData.prev();
  }

  const contextValue = useMemo(() => ({
    setIsButtonNextStepDisabled,
  }), [setIsButtonNextStepDisabled]);

  useEffect(() => {
    if(editData && editData.current == 0) {
      setHaspreviousButton(false)
    }
    if( editData && editData.current > 0) {
      setHaspreviousButton(true)
    }
  }, [editData]);

  useEffect(() => {
    setEditData(contextValue);
  }, [contextValue, setEditData]);

  return {
    editData,
    haspreviousbutton,
    nextStep,
    previousStep,
    isButtonNextStepDisabled
  }
}
