import {useState, useEffect} from 'react';
import {
 Switch,
} from 'antd';

import { Formik, FieldArray, Form as FormikForm, Field } from 'formik';

import SVGArrowLeft from '../SVGArrowLeft';
import { FormItem, CustomButton, Button } from '../../../../../../../../components/Forms/Forms.styles';
import { EmployeeCard } from '../../../../../../../../components/Containers/Cards.styles';
import { Title } from '../../../../../../../../components/Typography/Typography.styles';
import { Icon } from '../../../../../../../../components/Icons';
import {
  FormContainer,
  SectionSwitch,
  EmployeeButtonContainer,
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
            <EmployeeButtonContainer>
              <CustomButton block htmlType="submit">Salvar</CustomButton>
            </EmployeeButtonContainer>
          </FormikForm>
        )}
      </Formik>
    </FormContainer>
  </EmployeeCard >
 );
};

export default EmployeeForm;
