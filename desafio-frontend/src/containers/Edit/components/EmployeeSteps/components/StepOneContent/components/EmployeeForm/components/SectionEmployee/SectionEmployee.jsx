import { useState, useEffect } from 'react';
import {
  Form,
  Radio,
  Row,
  Col,
  } from 'antd';

import Icon, { CloseOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useFormikContext, ErrorMessage  } from 'formik';

import {
  Section,
  RadioGroup,
  // StyledInput,
  StyledSelect,
  StyledDatePicker,
  FormItem,
  ErrorText,
} from './SectionEmployee.styles';

import StyledInput from '../../../../../../../../../../components/Inputs/Input';
import InputNumber from '../../../../../../../../../../components/Inputs/InputNumber';
import InputDate from '../../../../../../../../../../components/Inputs/InputDate';
import { roles } from '../../../../../../../../../../utils/constants/mockComponents';
import { disableFutureDates } from '../../../../../../../../../../utils/functions/validation/validation';

const SectionEmployee = () => {
  const { getFieldProps } = useFormikContext();

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
              {...getFieldProps('birthdate')}
            />
            <ErrorMessage name="birthdate" component={ErrorText} />
            </FormItem>

          <FormItem>
            <StyledSelect
              name="role"
              placeholder="Escolha Cargo"
              options={roles}
              {...getFieldProps('birthdate')}
            />
            <ErrorMessage name="role" component={ErrorText} />
            </FormItem>

        </Col>
        </Row>
      </Section>
  );
};

export default SectionEmployee;
