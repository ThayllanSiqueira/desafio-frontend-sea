import {useState, useEffect} from 'react';
import {
 Form,
 Button,
 Switch,
} from 'antd';
import Icon from '@ant-design/icons';
import { Formik } from 'formik';

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

import { useEmployeeForm } from './useEmployeeForm';

const ArrowLeftIcon = (props) => <Icon component={SVGArrowLeft} {...props} />;


const EmployeeForm = () => {

  const {
    loading,
    form,
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
          onFinish(values); // Mantemos o onFinish para enviar os dados ao sistema
        }}
      >
        {({ handleSubmit, handleChange, touched, errors }) => (
          <Form
            layout="vertical"
            form={form}
            name="dynamic_form_complex"
            autoComplete="off"
            onFinish={handleSubmit}
            // onFinish={onFinish}
          >
            <SectionSwitch>
              <Title>O trabalhador está ativo ou inativo?</Title>
              <Form.Item
                name="status"
                valuePropName="checked"
                initialValue={true} style={{ marginBottom: 0 }}
                validateStatus={touched.status && errors.status ? 'error' : ''}
                help={touched.status && errors.status ? errors.status : ''}
               >
              <Switch
                checkedChildren="Ativo"
                unCheckedChildren="Inativo"
                onChange={(checked) =>
                  handleChange({ target: { name: 'status', value: checked } })
                }
              />
              </Form.Item>

            </SectionSwitch>
            <SectionEmployee />
            <SectionActivitiesEpis />
            <ButtonContainer>
              <CustomButton block htmlType="submit">Salvar</CustomButton>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </FormContainer>
  </EmployeeCard >
 );
};

export default EmployeeForm;
