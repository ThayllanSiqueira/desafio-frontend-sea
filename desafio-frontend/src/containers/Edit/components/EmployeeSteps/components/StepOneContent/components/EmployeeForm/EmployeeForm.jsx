import { Formik, Form as FormikForm } from 'formik';

import {
  FormContainer,
  SectionSwitch,
  EmployeeButtonContainer,
} from './EmployeeForm.styles';

import SVGArrowLeft from '../../../../../../../../components/SVGs/SVGArrowLeft';
import { FormItem, CustomButton, Button, Switch } from '../../../../../../../../components/Forms/Forms.styles';
import { EmployeeCard } from '../../../../../../../../components/Containers/Cards.styles';
import { Title } from '../../../../../../../../components/Typography/Typography.styles';
import { Icon } from '../../../../../../../../components/Icons';
import SectionEmployee from './components/SectionEmployee';
import SectionActivitiesEpis from './components/SectionActivitiesEpis';
import { useEmployeeForm } from './useEmployeeForm';

const ArrowLeftIcon = (props) => <Icon component={SVGArrowLeft} {...props} />;

const EmployeeForm = () => {

  const {
    handleBackStatesOnPage,
    onFinish,
    initialValuesFormik,
    validationSchemaYup,
    employeeId,
  } = useEmployeeForm();

  const isLoading = Object.keys(initialValuesFormik).length === 0 || (employeeId !== 0 && initialValuesFormik.name === '');

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
        {employeeId !== 0 ? 'Alterar Funcionário' : 'Adicionar Funcionário'}
        </>
      }
    >
      <FormContainer>
        <Formik
          initialValues={initialValuesFormik}
          validationSchema={validationSchemaYup}
          onSubmit={(values) => {
            onFinish(values);
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <FormikForm
            onSubmit={handleSubmit}
            >
              <SectionSwitch>
                <Title>O trabalhador está ativo ou inativo?</Title>

                <FormItem>
                <Switch
                  checked={values.status}
                  checkedChildren="Ativo"
                  unCheckedChildren="Inativo"
                  onChange={(checked) =>
                    setFieldValue('status', checked)
                  }
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
