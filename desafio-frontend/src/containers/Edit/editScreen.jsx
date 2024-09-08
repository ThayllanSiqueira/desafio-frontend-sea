import { useState, useContext, useEffect, useMemo } from 'react';

import EmployeeSteps from './components/EmployeeSteps';
import StepOneContent from './components/EmployeeSteps/components/StepOneContent';
import ComingSoon from '../../components/ComingSoon';
import { useEditContext } from './hooks/useEditEmployeeContext';

import { CustomButton } from '../../components/Forms/Forms.styles';
import { Content, Layout } from '../../components/Containers/Layout.styles';
import {
 StepsHeader,
 ButtonContainer,
 ContentWrapper,
} from './edit.styles';

const Edit = () => {
 const { editData, setEditData } = useEditContext();
 const [isButtonNextStepDisabled, setIsButtonNextStepDisabled] = useState(true);
 const [haspreviousbutton, setHaspreviousButton] = useState('false');

 useEffect(() => {
  if(editData && editData.steps && editData.current > 0){
    setHaspreviousButton('true');
  }
 }, [editData]);

 const nextStep = () => {
  editData.next();
 }

 const previousStep = () => {
  editData.prev();
 }

 const showComponent = () => {
  return editData && editData.steps && editData.steps.length > 0 ? (
   editData.steps[editData.current].content
  ) : (
   <></>
  );
 };

 const showButtonNext = () => {
  return editData && editData.steps && editData.current < editData.steps.length - 1 ? (
   <CustomButton onClick={nextStep} disabled={isButtonNextStepDisabled}>Próximo Passo</CustomButton>
  ) : (
   <></>
  );
 };

 const showButtonPrevious = () => {
  return editData && editData.steps && editData.current > 0 ? (
   <CustomButton onClick={previousStep} >Passo Anterior</CustomButton>
  ) : (
   <></>
  );
 };

 const contextValue = useMemo(() => ({
  setIsButtonNextStepDisabled,
 }), [setIsButtonNextStepDisabled]);

 useEffect(() => {
  setEditData(contextValue);
 }, [contextValue, setEditData]);

 if (!editData) {
  return <div>Loading...</div>;
 }

 return (
  <Layout>
    <StepsHeader>
      <EmployeeSteps />
    </StepsHeader>
    <Content>
      <ContentWrapper>
        {showComponent()}
        <ButtonContainer $haspreviousbutton={haspreviousbutton}>
          {showButtonPrevious()}
          {showButtonNext()}
        </ButtonContainer>
      </ContentWrapper>
    </Content>
  </Layout>
);
};

export default Edit;
