import { useState, useEffect, useMemo } from 'react';

import EmployeeDescription from './components/EmployeeDescription';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

import { useEditContext } from '../../../../hooks/useEditEmployeeContext';

import {
 MainContainer,
 LeftComponent,
 RightComponent,
} from './StepOneContent.styles';

const StepOneContent = () => {
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

 return (
  <MainContainer>
   <LeftComponent>
    <EmployeeDescription />
   </LeftComponent>
   <RightComponent>
    {isEmployeeFormVisible ? (
     <EmployeeForm />
    ) : (
     <EmployeeList
      onAddEmployee={handleChangeStatesOnPage}
     />
    )}
   </RightComponent>
  </MainContainer>
 )
}

export default StepOneContent;
