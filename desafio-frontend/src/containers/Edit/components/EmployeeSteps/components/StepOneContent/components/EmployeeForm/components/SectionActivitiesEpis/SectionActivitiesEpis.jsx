import { useState, useEffect } from 'react';
import {
 Form,
 Select,
 Checkbox,
 List,
} from 'antd';

import {
  Section,
  Title,
  StyledInput,
  StyledSelect,
  InlineElements,
  StyledUpload,
  UploadList,
  FileContainer,
  FileName,
  FileIcon,
  CustomButton,
} from './SectionActivitiesEpis.styles';

import { useRequests } from '../../../../../../../../../../hooks/useRequests';
import { useActivitieReducer } from '../../../../../../../../../../store/reducers/activitieReducer/useActivitieReducer';
import { useEpiReducer } from '../../../../../../../../../../store/reducers/epiReducer/useEpiReducer';
import { URL_ACTIVITIES, URL_EPIS } from '../../../../../../../../../../utils/constants/urls';
import { MethodsEnum } from '../../../../../../../../../../utils/enums/methods.enum';

const { Option } = Select;

const SectionActivitiesEpis = () => {
 const [fileList, setFileList] = useState([]);
 const [isEPIVisible, setIsEPIVisible] = useState(true);
 const { request } = useRequests();
 const { activities, setActivities } = useActivitieReducer();
 const { epis, setEpis } = useEpiReducer();

 useEffect(() => {
  request(URL_ACTIVITIES, MethodsEnum.GET, setActivities)
  request(URL_EPIS, MethodsEnum.GET, setEpis)
}, []);

 const handleChange = (info) => {
  let newFileList = [...info.fileList];
  setFileList(newFileList);
 };

 const onChangeShowEPI = (e) => {
  setIsEPIVisible(!e.target.checked);
 };


 const handleAddActivity = add => {
  add({
   id: '',
   epis: [
     {
      id: '',
      caNumber: '',
     },
    ],
  });
 };

 return (
     <Section>
      <Title>Quais EPIs o trabalhador usa na atividade?</Title>
      <Form.Item name="noEpi" valuePropName="checked">
       <Checkbox onChange={onChangeShowEPI}>O trabalhador não usa EPI.</Checkbox>
      </Form.Item>
      {
       isEPIVisible && (
        <>
         <Form.List name="activitiesEpis">
          {(fields, { add, remove }) => (
           <div>
            {fields.map((field, index) => (
             <Section key={field.key}>
              <Form.Item
               label="Selecione a atividade"
               name={[field.name, 'id']}
               rules={[{ required: true, message: 'Por favor selecione a atividade!' }]}
              >
               <StyledSelect
                placeholder="Selecione a atividade"
                options={activities.map((activitie) => ({
                  value: `${activitie.id}`,
                  label: `${activitie.name}`,
                }))}
              />
              </Form.Item>


               <Form.List name={[field.name, 'epis']}>
                {(subFields, subOpt) => (
                 <div>
                  {subFields.map((subField, subIndex) => (
                  <InlineElements key={subField.key}>
                    <Form.Item
                     label="Selecione o EPI"
                     name={[subField.name, 'id']}
                     rules={[{ required: true, message: 'Por favor selecione o EPI!' }]}
                    >
                    <StyledSelect
                      placeholder="Selecione o EPI"
                      options={epis.map((epi) => ({
                        value: `${epi.id}`,
                        label: `${epi.name}`,
                    }))}
                    />

                    </Form.Item>
                    <Form.Item
                     label="Informe o número do CA"
                     name={[subField.name, 'caNumber']}
                     rules={[{ required: true, message: 'Por favor insira o número do CA!' }]}
                    >
                     <StyledInput placeholder="Número do CA" />
                    </Form.Item>

                    {subIndex === 0 ? (
                     <CustomButton onClick={() => subOpt.add()}>
                      Adicionar EPI
                     </CustomButton>
                    ) : (
                     <CustomButton onClick={() => subOpt.remove(subField.name)}>
                      Remover EPI
                     </CustomButton>
                    )}
                   </InlineElements>
                  ))}
                 </div>
                )}
               </Form.List>


              {index >= fields.length - 1 ? (
               <CustomButton onClick={() => handleAddActivity(add)} block>
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
             <CustomButton onClick={() => handleAddActivity(add)} block>
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
          <Form.Item name="annex">
           <StyledUpload
            fileList={fileList}
            onChange={handleChange}
            showUploadList={false}
            maxCount={1}
           >
            <CustomButton>Selecionar arquivo</CustomButton>
           </StyledUpload>
          </Form.Item>
         </Section>
        </>
       )
      }

     </Section>
 );
};

export default SectionActivitiesEpis;
