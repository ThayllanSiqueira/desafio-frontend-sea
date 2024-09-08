import { useState, useEffect } from 'react';
import {
  Form,
  Radio,
  Row,
  Col,
  } from 'antd';

import Icon, { CloseOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useFormikContext } from 'formik';

import {
  Section,
  RadioGroup,
  // StyledInput,
  StyledSelect,
  StyledDatePicker,
} from './SectionEmployee.styles';

import StyledInput from '../../../../../../../../../../components/Inputs/Input';
import InputNumber from '../../../../../../../../../../components/Inputs/InputNumber';
import InputDate from '../../../../../../../../../../components/Inputs/InputDate';
import { roles } from '../../../../../../../../../../utils/constants/mockComponents';
import { disableFutureDates } from '../../../../../../../../../../utils/functions/validation/validation';

const SectionEmployee = () => {
  const { values, handleChange, setFieldValue, errors, touched } = useFormikContext();

  return (
      <Section>
        <Row gutter={16}>
        <Col span={12}>
          <Form.Item
              label="Nome"
              name="name"
              validateStatus={touched.name && errors.name ? 'error' : ''}
              help={touched.name && errors.name ? errors.name : ''}
          >
            <StyledInput name="name" placeholder="Nome" onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="CPF"
            name="cpf"
            validateStatus={touched.cpf && errors.cpf ? 'error' : ''}
            help={touched.cpf && errors.cpf ? errors.cpf : ''}
          >
            <InputNumber name="cpf" mask={"###.###.###-##"}  placeholder="999.999.999-99" onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="RG"
            name="rg"
            validateStatus={touched.rg && errors.rg ? 'error' : ''}
            help={touched.rg && errors.rg ? errors.rg : ''}
          >
            <InputNumber name="rg"  mask={"#########"}  placeholder="RG" onChange={handleChange} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Sexo"
            name="sex"
            validateStatus={touched.sex && errors.sex ? 'error' : ''}
            help={touched.sex && errors.sex ? errors.sex : ''}
          >
            <Radio.Group
              name="sex"
              onChange={handleChange}
            >
              <Radio value="Feminino">Feminino</Radio>
              <Radio value="Masculino">Masculino</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Data de Nascimento"
            name="birthdate"
            validateStatus={touched.birthdate && errors.birthdate ? 'error' : ''}
            help={touched.birthdate && errors.birthdate ? errors.birthdate : ''}
          >
            <StyledDatePicker
              name="birthdate"
              format="DD/MM/YYYY"
              placeholder="DD/MM/YYYY"
              disabledDate={disableFutureDates}
              onChange={(date) => setFieldValue('birthdate', date)}
            />
          </Form.Item>

          <Form.Item
            label="Cargo"
            name="role"
            validateStatus={touched.role && errors.role ? 'error' : ''}
            help={touched.role && errors.role ? errors.role : ''}
          >
            <StyledSelect
              name="role"
              placeholder="Escolha Cargo"
              onChange={(value) => setFieldValue('role', value)}
              options={roles}
            />
          </Form.Item>
        </Col>
        </Row>
      </Section>
  );
};

export default SectionEmployee;
