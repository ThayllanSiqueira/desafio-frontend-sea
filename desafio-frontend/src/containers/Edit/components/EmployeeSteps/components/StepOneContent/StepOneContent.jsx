import EmployeeDescription from './components/EmployeeDescription';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

import {
 MainContainer,
 LeftComponent,
 RightComponent,
} from './StepOneContent.styles';

import { useStepOneContent } from './useStepOneContent';

const StepOneContent = () => {
  const {
    handleChangeStatesOnPage,
    isEmployeeFormVisible,
  } = useStepOneContent();

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
