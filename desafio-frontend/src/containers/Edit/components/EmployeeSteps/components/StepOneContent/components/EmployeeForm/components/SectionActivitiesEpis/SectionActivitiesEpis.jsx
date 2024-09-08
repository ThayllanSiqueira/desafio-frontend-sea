import { useState, useEffect } from 'react';
import {
 Form,
 Select,
 Checkbox,
 List,
} from 'antd';
import { useFormikContext, FieldArray, ErrorMessage } from 'formik';

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
  FormItem,
  ErrorText,
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

 const { getFieldProps, setFieldValue,  values, errors, touched } = useFormikContext();

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

      <FormItem>
       <Checkbox
        name="noEpi"
        onChange={onChangeShowEPI}>O trabalhador não usa EPI.</Checkbox>
        </FormItem>

      {
       isEPIVisible && (
        <>
         <FieldArray name="activitiesEpis">
          {({ push, remove }) => (
           <div>
            {values.activitiesEpis.map((activity, index) => (
             <Section key={index}>

              <FormItem>
                <StyledSelect
                  name={`activitiesEpis[${index}].id`}
                  placeholder="Selecione a atividade"
                  {...getFieldProps(`activitiesEpis[${index}].id`)}
                  options={activities.map(activity => ({
                    value: activity.id,
                    label: activity.name,
                  }))}
                />
                <ErrorMessage name={`activitiesEpis[${index}].id`} component={ErrorText} />
                </FormItem>


               <FieldArray name={`activitiesEpis[${index}].epis`}>
               {({ push: pushEpi, remove: removeEpi }) => (
                 <div>
                  {activity.epis.map((epi, epiIndex) => (
                  <InlineElements key={epiIndex}>

                    <FormItem>
                    <StyledSelect
                      name={`activitiesEpis[${index}].epis[${epiIndex}].id`}
                      placeholder="Selecione o EPI"
                      {...getFieldProps(`activitiesEpis[${index}].epis[${epiIndex}].id`)}
                      options={epis.map(epi => ({
                        value: epi.id,
                        label: epi.name,
                      }))}
                    />
                    <ErrorMessage name={`activitiesEpis[${index}].epis[${epiIndex}].id`} component={ErrorText} />
                    </FormItem>

                    <FormItem>
                      <StyledInput
                        name={`activitiesEpis[${index}].epis[${epiIndex}].caNumber`}
                        placeholder="Número do CA"
                        {...getFieldProps(`activitiesEpis[${index}].epis[${epiIndex}].caNumber`)}
                      />
                      <ErrorMessage name={`activitiesEpis[${index}].epis[${epiIndex}].caNumber`} component={ErrorText} />
                      </FormItem>


                    {epiIndex === 0 ? (
                     <CustomButton onClick={() => pushEpi({ id: '', caNumber: '' })}>
                      Adicionar EPI
                     </CustomButton>
                    ) : (
                     <CustomButton onClick={() => removeEpi(epiIndex)}>
                      Remover EPI
                     </CustomButton>
                    )}
                   </InlineElements>
                  ))}
                 </div>
                )}
               </FieldArray>

                {values.activitiesEpis.length > 1 && (
                  <CustomButton onClick={() => remove(index)}>Excluir atividade</CustomButton>
                )}
                {index === values.activitiesEpis.length - 1 && (
                  <CustomButton onClick={() => push({ id: '', epis: [{ id: '', caNumber: '' }] })}>Adicionar outra atividade</CustomButton>
                )}
             </Section>
            ))}

              {values.activitiesEpis.length === 0 && (
                  <CustomButton onClick={() => push({ id: '', epis: [{ id: '', caNumber: '' }] })}>Adicionar outra atividade</CustomButton>
                )}

           </div>
          )}
         </FieldArray>

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

          <FormItem>
           <StyledUpload
            fileList={fileList}
            onChange={handleChangeUpload}
            showUploadList={false}
            maxCount={1}
           >
            <CustomButton>Selecionar arquivo</CustomButton>
           </StyledUpload>
           </FormItem>
         </Section>
        </>
       )
      }

     </Section>
 );
};

export default SectionActivitiesEpis;
