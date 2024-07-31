import {useState, useEffect} from 'react';
import {
 Form,
 Button,
 Switch,
} from 'antd';
import Icon from '@ant-design/icons';
import SVGArrowLeft from '../SVGArrowLeft';

import {
  EmployeeCard,
  FormContainer,
  SectionSwitch,
  Title,
  ButtonContainer,
  CustomButton,
} from './EmployeeForm.styles';


import SectionEmployee from './components/SectionEmployee';
import SectionActivitiesEpis from './components/SectionActivitiesEpis';

import { useInsertEmployee } from '../../../../../../hooks/useInsertEmployee';

const ArrowLeftIcon = (props) => <Icon component={SVGArrowLeft} {...props} />;

const EmployeeForm = () => {

  const {
    loading,
    form,
    handleBackStatesOnPage,
    onFinish,
  } = useInsertEmployee();

 return (
  <EmployeeCard
   title={
    <>
     <Button
      type="link"
      icon={<ArrowLeftIcon />}
      onClick={() => handleBackStatesOnPage()}
      style={{ marginRight: 8 }}
     />
     Adicionar Funcionário
    </>
   }
  >
    <FormContainer>
      <Form
        layout="vertical"
        form={form}
        name="dynamic_form_complex"
        autoComplete="off"
        onFinish={onFinish}
        /* initialValues={initialValues}
        key={JSON.stringify(initialValues)} */
      >
        <SectionSwitch>
          <Title>O trabalhador está ativo ou inativo?</Title>
          <Form.Item name="status" valuePropName="checked" initialValue={true} style={{ marginBottom: 0 }}>
          <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" />
          </Form.Item>

        </SectionSwitch>
        <SectionEmployee />
        <SectionActivitiesEpis />
        <ButtonContainer>
          <CustomButton block htmlType="submit">Salvar</CustomButton>
        </ButtonContainer>
      </Form>
    </FormContainer>
  </EmployeeCard >
 );
};

export default EmployeeForm;
