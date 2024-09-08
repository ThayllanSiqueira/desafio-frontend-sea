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
    validationSchemaYup,
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
          validationSchema={validationSchemaYup}
          onSubmit={(values) => {
            console.log('Formik values:', values);
            onFinish(values);
          }}
        >
          {({ handleSubmit, handleChange }) => (
            <FormikForm
            onSubmit={handleSubmit}
            >
              <SectionSwitch>
                <Title>O trabalhador está ativo ou inativo?</Title>

                <FormItem>
                <Switch
                  checkedChildren="Ativo"
                  unCheckedChildren="Inativo"
                  onChange={(checked) =>
                    handleChange({ target: { name: 'status', value: checked } })
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
