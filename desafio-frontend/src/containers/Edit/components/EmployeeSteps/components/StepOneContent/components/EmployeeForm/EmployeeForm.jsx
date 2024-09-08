import {useState, useEffect} from 'react';
import {
 Form,
 Button,
 Switch,
} from 'antd';
import Icon from '@ant-design/icons';
import { Formik, FieldArray, Form as FormikForm, Field } from 'formik';

import SVGArrowLeft from '../SVGArrowLeft';
import {
  EmployeeCard,
  FormContainer,
  SectionSwitch,
  Title,
  ButtonContainer,
  CustomButton,
  FormItem,
} from './EmployeeForm.styles';


import SectionEmployee from './components/SectionEmployee';
import SectionActivitiesEpis from './components/SectionActivitiesEpis';

import { useEmployeeForm } from './useEmployeeForm';

const ArrowLeftIcon = (props) => <Icon component={SVGArrowLeft} {...props} />;


const EmployeeForm = () => {

  const {
    loading,
    handleBackStatesOnPage,
    validationSchema,
    onFinish,
    initialValuesFormik,
  } = useEmployeeForm();

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
      <Formik
        initialValues={initialValuesFormik}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Formik values:', values);
          onFinish(values);
        }}
      >
        {({ handleSubmit, getFieldProps }) => (
          <FormikForm
          onSubmit={handleSubmit}
          >
            <SectionSwitch>
              <Title>O trabalhador está ativo ou inativo?</Title>

               <FormItem>
              <Switch
                name="status"
                checkedChildren="Ativo"
                unCheckedChildren="Inativo"
                {...getFieldProps('status')}
              />
              </FormItem>

            </SectionSwitch>
            <SectionEmployee />
            <SectionActivitiesEpis />
            <ButtonContainer>
              <CustomButton block htmlType="submit">Salvar</CustomButton>
            </ButtonContainer>
          </FormikForm>
        )}
      </Formik>
    </FormContainer>
  </EmployeeCard >
 );
};

export default EmployeeForm;
