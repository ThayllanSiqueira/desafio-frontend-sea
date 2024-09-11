import { useFormikContext, ErrorMessage  } from 'formik';
import moment from 'moment';

import {
  Label
} from './SectionEmployee.styles';
import { FormItem, ErrorText, Radio } from '../../../../../../../../../../components/Forms/Forms.styles';
import { Section, Row, Col } from '../../../../../../../../../../components/Containers/Divs.styles';

import StyledInput from '../../../../../../../../../../components/Forms/Inputs/Input';
import InputNumber from '../../../../../../../../../../components/Forms/Inputs/InputNumber';
import InputDate from '../../../../../../../../../../components/Forms/Inputs/InputDate';
import StyledSelect from '../../../../../../../../../../components/Forms/Inputs/Select';
import { roles } from '../../../../../../../../../../utils/constants/mockComponents';
import { disableFutureDates } from '../../../../../../../../../../utils/functions/validation/validation';

const SectionEmployee = () => {
  const { getFieldProps, setFieldValue, values } = useFormikContext();

  return (
    <Section>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem>
            <StyledInput label="Nome"  name="name" placeholder="Nome" {...getFieldProps('name')} />
            <ErrorMessage name="name" component={ErrorText} />
          </FormItem>

          <FormItem>
            <InputNumber label="CPF" name="cpf" mask={"###.###.###-##"}  placeholder="999.999.999-99" {...getFieldProps('cpf')} />
            <ErrorMessage name="cpf" component={ErrorText} />
          </FormItem>

          <FormItem>
            <InputNumber label="RG" name="rg"  mask={"#########"}  placeholder="RG" {...getFieldProps('rg')} />
            <ErrorMessage name="rg" component={ErrorText} />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem>
            <Label> Sexo </Label>
            <Radio.Group
              name="sex"
              {...getFieldProps('sex')}
            >
              <Radio value="Feminino">Feminino</Radio>
              <Radio value="Masculino">Masculino</Radio>
            </Radio.Group>
            <ErrorMessage name="sex" component={ErrorText} />
          </FormItem>

          <FormItem>
            <InputDate
              label="Data de Nascimento"
              format="DD/MM/YYYY"
              name="birthdate"
              placeholder="DD/MM/YYYY"
              disabledDate={disableFutureDates}
              value={values.birthdate ? moment(values.birthdate) : null}
              onChange={(date) => setFieldValue('birthdate', date)}
            />
            <ErrorMessage name="birthdate" component={ErrorText} />
          </FormItem>

          <FormItem>
            <StyledSelect
              label="Cargo"
              name="role"
              value={values.role || undefined}
              placeholder="Escolha Cargo"
              onChange={(value) => setFieldValue('role', value)}
              options={roles}
            />
            <ErrorMessage name="role" component={ErrorText} />
          </FormItem>
        </Col>
      </Row>
    </Section>
  );
};

export default SectionEmployee;
