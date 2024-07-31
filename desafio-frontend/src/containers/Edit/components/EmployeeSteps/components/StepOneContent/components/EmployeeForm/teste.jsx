import { useState, useEffect } from 'react';
import {
 Form,
 Button,
 Radio,
 Switch,
 Row,
 Select,
 Col,
 Checkbox,
 List,
 Space,
 Card,
 Input,
} from 'antd';
import Icon, { CloseOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import { useEditContext } from '../../../../../../hooks/useEditEmployeeContext';

import SVGArrowLeft from '../SVGArrowLeft';
import {
 EmployeeCard,
 FormContainer,
 SectionSwitch,
 Section,
 Title,
 RadioGroup,
 ButtonContainer,
 StyledInput,
 StyledSelect,
 InlineElements,
 StyledUpload,
 UploadList,
 FileContainer,
 FileName,
 FileIcon,
 CustomButton,
} from './EmployeeForm.styles';

const ArrowLeftIcon = (props) => <Icon component={SVGArrowLeft} {...props} />;

const { Option } = Select;

const EmployeeForm = () => {
 const [form] = Form.useForm();
 const { editData } = useEditContext();
 const [fileList, setFileList] = useState([]);
 const [isEPIVisible, setIsEPIVisible] = useState(true);

 const handleChange = (info) => {
  let newFileList = [...info.fileList];
  setFileList(newFileList);
 };

 const onChangeShowEPI = (e) => {
  setIsEPIVisible(!e.target.checked);
 };

 const handleBackStatesOnPage = (event) => {
  editData.setItems(editData.steps);
  editData.setCurrent(0);
  editData.setIsEmployeeFormVisible((prev) => !prev);
  editData.setIsButtonNextStepDisabled((prev) => !prev);
 };

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
    <Form
     layout="vertical"
     form={form}
     name="dynamic_form_complex"
     autoComplete="off"
     initialValues={{
      items: [{}],
     }}
    >
     <SectionSwitch>
      <Title>O trabalhador está ativo ou inativo?</Title>
      <Form.Item name="active" valuePropName="checked" initialValue={true} style={{ marginBottom: 0 }}>
       <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" />
      </Form.Item>
     </SectionSwitch>

     <Section>
      <Row gutter={16}>
       <Col span={12}>
        <Form.Item label="Nome" name="name" rules={[{ required: true, message: 'Por favor insira o nome!' }]}>
         <StyledInput placeholder="Nome" />
        </Form.Item>
        <Form.Item label="CPF" name="cpf" rules={[{ required: true, message: 'Por favor insira o CPF!' }]}>
         <StyledInput placeholder="CPF" />
        </Form.Item>
        <Form.Item label="RG" name="rg" rules={[{ required: true, message: 'Por favor insira o RG!' }]}>
         <StyledInput placeholder="RG" />
        </Form.Item>
       </Col>
       <Col span={12}>
        <Form.Item label="Sexo" name="sex" rules={[{ required: true, message: 'Por favor selecione o sexo!' }]}>
         <RadioGroup>
          <Radio value="feminino">Feminino</Radio>
          <Radio value="masculino">Masculino</Radio>
         </RadioGroup>
        </Form.Item>
        <Form.Item label="Data de Nascimento" name="dob" rules={[{ required: true, message: 'Por favor insira a data de nascimento!' }]}>
         <StyledInput placeholder="Data de Nascimento" />
        </Form.Item>
        <Form.Item label="Cargo" name="position" rules={[{ required: true, message: 'Por favor selecione o cargo!' }]}>
         <StyledSelect placeholder="Cargo">
          <Option value="cargo1">Cargo 1</Option>
          <Option value="cargo2">Cargo 2</Option>
         </StyledSelect>
        </Form.Item>
       </Col>
      </Row>
     </Section>

     <Section>
      <Title>Quais EPIs o trabalhador usa na atividade?</Title>
      <Form.Item name="noEpi" valuePropName="checked">
       <Checkbox onChange={onChangeShowEPI}>O trabalhador não usa EPI.</Checkbox>
      </Form.Item>
      {isEPIVisible && (
       <>
        <Form.List name="items">
         {(fields, { add, remove }) => (
          <div>
           {fields.map((field, index) => (
            <Section key={field.key}>
             <Form.Item
              label="Selecione a atividade"
              name={[field.name, 'activity']}
              fieldKey={[field.fieldKey, 'activity']}
              rules={[{ required: true, message: 'Por favor selecione a atividade!' }]}
             >
              <StyledSelect placeholder="Selecione a atividade">
               <Option value="atividade1">Atividade 1</Option>
               <Option value="atividade2">Atividade 2</Option>
              </StyledSelect>
             </Form.Item>

             <Form.Item name={[field.name, 'episItem']}>
              <Form.List name={[field.name, 'list']}>
               {(subFields, subOpt) => (
                <div>
                 {subFields.map((subField, subIndex) => (
                  <InlineElements key={subField.key}>
                   <Form.Item
                    label="Selecione o EPI"
                    name={[subField.name, 'epi']}
                    fieldKey={[subField.fieldKey, 'epi']}
                    rules={[{ required: true, message: 'Por favor selecione o EPI!' }]}
                   >
                    <StyledSelect placeholder="Selecione o EPI">
                     <Option value="calçado">Calçado de segurança</Option>
                     <Option value="capacete">Capacete</Option>
                    </StyledSelect>
                   </Form.Item>
                   <Form.Item
                    label="Informe o número do CA"
                    name={[subField.name, 'caNumber']}
                    fieldKey={[subField.fieldKey, 'caNumber']}
                    rules={[{ required: true, message: 'Por favor insira o número do CA!' }]}
                   >
                    <StyledInput placeholder="Número do CA" />
                   </Form.Item>
                   <CustomButton onClick={() => subOpt.remove(subField.name)} >
                    Remover EPI
                   </CustomButton>
                  </InlineElements>
                 ))}
                 <CustomButton onClick={() => subOpt.add()} >
                  Adicionar EPI
                 </CustomButton>
                </div>
               )}
              </Form.List>
             </Form.Item>

             {index >= fields.length - 1 ? (
              <CustomButton onClick={() => add()} block>
               Adicionar outra atividade
              </CustomButton>
             ) : (
              <CustomButton onClick={() => remove(field.name)} block>
               Excluir atividade
              </CustomButton>
             )}
            </Section>
           ))}
           {fields.length === 0 && (
            <CustomButton onClick={() => add()} block>
             Adicionar outra atividade
            </CustomButton>
           )}
          </div>
         )}
        </Form.List>

        <Section>
         <Title>Adicione Atestado de Saúde (opcional):</Title>
         {fileList.length > 0 && (
          <UploadList>
           <List
            dataSource={fileList}
            renderItem={(file) => (
             <List.Item>
              <FileContainer>
               <FileName>{file.name}</FileName>
               <FileIcon />
              </FileContainer>
             </List.Item>
            )}
            bordered
           />
          </UploadList>
         )}
         <Form.Item name="healthCertificate">
          <StyledUpload
           fileList={fileList}
           onChange={handleChange}
           showUploadList={false}
          >
           <CustomButton>Selecionar arquivo</CustomButton>
          </StyledUpload>
         </Form.Item>
        </Section>
       </>
      )}
     </Section>

     <ButtonContainer>
      <CustomButton block htmlType="submit">Salvar</CustomButton>
     </ButtonContainer>

    </Form>
   </FormContainer>
  </EmployeeCard>
 );
};

export default EmployeeForm;
