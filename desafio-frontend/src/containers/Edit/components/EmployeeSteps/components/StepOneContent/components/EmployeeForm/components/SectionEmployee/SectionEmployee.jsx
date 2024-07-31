import { useState, useEffect } from 'react';
import {
  Form,
  Radio,
  Row,
  Col,
  } from 'antd';

import Icon, { CloseOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import {
  Section,
  RadioGroup,
  // StyledInput,
  StyledSelect,
  StyledDatePicker,
} from './SectionEmployee.styles';

import StyledInput from '../../../../../../../../../../components/Inputs/Input';
import InputNumber from '../../../../../../../../../../components/Inputs/InputNumber';
import { validateCPF } from '../../../../../../../../../../utils/functions/validation/validation';
import { roles } from '../../../../../../../../../../utils/constants/mockComponents';

const SectionEmployee = () => {

 return (
     <Section>
      <Row gutter={16}>
       <Col span={12}>
        <Form.Item label="Nome" name="name" rules={[{ required: true, message: 'Por favor insira o nome!' }]}>
         <StyledInput placeholder="Nome" />
        </Form.Item>
        <Form.Item label="CPF" name="cpf" rules={[{ required: true, message: 'Por favor insira o CPF!' }, {
            validator: (_, value) => validateCPF(value) // Use a função de validação
          }]}>
         <InputNumber mask={"###.###.###-##"}  placeholder="CPF" />
        </Form.Item>
        <Form.Item label="RG" name="rg" rules={[{ required: true, message: 'Por favor insira o RG!' }]}>
         <InputNumber mask={"###########"}  placeholder="RG" />
        </Form.Item>
       </Col>
       <Col span={12}>
        <Form.Item label="Sexo" name="sex" rules={[{ required: true, message: 'Por favor selecione o sexo!' }]}>
         {/* <RadioGroup> */}
          <Radio.Group>
            <Radio value="Feminino">Feminino</Radio>
            <Radio value="Masculino">Masculino</Radio>
          </Radio.Group>
         {/* </RadioGroup> */}
        </Form.Item>
        <Form.Item label="Data de Nascimento" name="birthdate" rules={[{ required: true, message: 'Por favor insira a data de nascimento!' }]}>
          <StyledDatePicker />
        </Form.Item>
        <Form.Item label="Cargo" name="role" rules={[{ required: true, message: 'Por favor selecione o cargo!' }]}>
         <StyledSelect
          placeholder="Cargo"
          options={roles}
         />
        </Form.Item>
       </Col>
      </Row>
     </Section>
 );
};

export default SectionEmployee;
