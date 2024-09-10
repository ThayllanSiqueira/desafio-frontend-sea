import { CustomButton } from '../../components/Forms/Forms.styles';
import { Content, Layout } from '../../components/Containers/Layout.styles';
import {
 StepsHeader,
 ButtonContainer,
 ContentWrapper,
 SVGContainer,
} from './edit.styles';
import { Icon } from '../../components/Icons/Icons.styles';
import SVGLineDashed from '../../components/SVGs/SVGLineDashed';

import EmployeeSteps from './components/EmployeeSteps';
import { useEditScreen } from './useEditScreen';
import { styled } from 'styled-components';

const SVGLineDashedIcon = (props) => <Icon component={SVGLineDashed} {...props} />;

const Edit = () => {
  const {
    editData,
    haspreviousbutton,
    nextStep,
    previousStep,
    isButtonNextStepDisabled
  } = useEditScreen();

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

  if (!editData) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <StepsHeader>
        <SVGContainer>
          <SVGLineDashedIcon />
        </SVGContainer>
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
