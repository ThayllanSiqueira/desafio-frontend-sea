import { useFormikContext, ErrorMessage  } from 'formik';

import {
  StyledSelect,
  StyledDatePicker,
} from './SectionEmployee.styles';
import { FormItem, ErrorText, Radio } from '../../../../../../../../../../components/Forms/Forms.styles';
import { Section, Row, Col } from '../../../../../../../../../../components/Containers/Divs.styles';

import StyledInput from '../../../../../../../../../../components/Forms/Inputs/Input';
import InputNumber from '../../../../../../../../../../components/Forms/Inputs/InputNumber';
import { roles } from '../../../../../../../../../../utils/constants/mockComponents';
import { disableFutureDates } from '../../../../../../../../../../utils/functions/validation/validation';

const SectionEmployee = () => {
  const { getFieldProps, setFieldValue } = useFormikContext();

  return (
    <Section>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem>
            <StyledInput name="name" placeholder="Nome" {...getFieldProps('name')} />
            <ErrorMessage name="name" component={ErrorText} />
          </FormItem>

          <FormItem>
            <InputNumber name="cpf" mask={"###.###.###-##"}  placeholder="999.999.999-99" {...getFieldProps('cpf')} />
            <ErrorMessage name="cpf" component={ErrorText} />
          </FormItem>

          <FormItem>
            <InputNumber name="rg"  mask={"#########"}  placeholder="RG" {...getFieldProps('rg')} />
            <ErrorMessage name="rg" component={ErrorText} />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem>
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
            <StyledDatePicker
              name="birthdate"
              format="DD/MM/YYYY"
              placeholder="DD/MM/YYYY"
              disabledDate={disableFutureDates}
              onChange={(date) => setFieldValue('birthdate', date)}
            />
            <ErrorMessage name="birthdate" component={ErrorText} />
          </FormItem>

          <FormItem>
            <StyledSelect
              name="role"
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
