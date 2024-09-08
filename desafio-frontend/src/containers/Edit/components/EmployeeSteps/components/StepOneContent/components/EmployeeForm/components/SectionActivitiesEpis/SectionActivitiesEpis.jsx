import { useState, useEffect } from 'react';
import {
 Form,
 Select,
 Checkbox,
 List,
} from 'antd';
import { useFormikContext } from 'formik';

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
 const { values, setFieldValue, errors, touched, handleChange, setFieldTouched } = useFormikContext();

 useEffect(() => {
  request(URL_ACTIVITIES, MethodsEnum.GET, setActivities)
  request(URL_EPIS, MethodsEnum.GET, setEpis)
}, []);

 const handleChangeUpload = (info) => {
  let newFileList = [...info.fileList];
  setFileList(newFileList);
 };

 const onChangeShowEPI = (e) => {
    const isChecked = e.target.checked;
    setIsEPIVisible(!isChecked);
    setFieldValue('noEpi', isChecked);
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
      <Form.Item
        name="noEpi"
        valuePropName="checked"
      >
       <Checkbox
        name="noEpi"
        onChange={onChangeShowEPI}>O trabalhador não usa EPI.</Checkbox>
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
                validateStatus={touched.activitiesEpis?.[index]?.id && errors.activitiesEpis?.[index]?.id ? 'error' : ''}
                help={touched.activitiesEpis?.[index]?.id && errors.activitiesEpis?.[index]?.id}
                /* validateStatus={touched.activitiesEpis?.[index]?.id ? 'error' : ''}
                help={errors.activitiesEpis?.[index]?.id} */
              >
               <StyledSelect
                name={`activitiesEpis.${index}.id`}
                placeholder="Selecione a atividade"
                onChange={value => setFieldValue(`activitiesEpis.${index}.id`, value)}
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
                      validateStatus={touched.activitiesEpis?.[index]?.epis?.[subIndex]?.id && errors.activitiesEpis?.[index]?.epis?.[subIndex]?.id ? 'error' : ''}
                      help={touched.activitiesEpis?.[index]?.epis?.[subIndex]?.id && errors.activitiesEpis?.[index]?.epis?.[subIndex]?.id}
                      /* validateStatus={touched.activitiesEpis?.[index]?.epis?.[subIndex]?.id ? 'error' : ''}
                      help={errors.activitiesEpis?.[index]?.epis?.[subIndex]?.id} */
                    >
                    <StyledSelect
                      name={[subField.name, 'id']}
                      onChange={value => setFieldValue(`activitiesEpis.${index}.epis.${subIndex}.id`, value)}
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
                      validateStatus={touched.activitiesEpis?.[index]?.epis?.[subIndex]?.caNumber && errors.activitiesEpis?.[index]?.epis?.[subIndex]?.caNumber ? 'error' : ''}
                      help={touched.activitiesEpis?.[index]?.epis?.[subIndex]?.caNumber && errors.activitiesEpis?.[index]?.epis?.[subIndex]?.caNumber}
                      /* validateStatus={touched.activitiesEpis?.[index]?.epis?.[subIndex]?.caNumber ? 'error' : ''}
                      help={errors.activitiesEpis?.[index]?.epis?.[subIndex]?.caNumber} */
                    >
                      <StyledInput
                        name={[subField.name, 'caNumber']}
                        placeholder="Número do CA"
                        onChange={e => setFieldValue(`activitiesEpis.${index}.epis.${subIndex}.caNumber`, e.target.value)}
                      />
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
            onChange={handleChangeUpload}
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
