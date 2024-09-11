import { useFormikContext, FieldArray, ErrorMessage } from 'formik';

import {
  InlineElements,
  UploadList,
  FileContainer,
  FileName,
} from './SectionActivitiesEpis.styles';
import { FormItem, ErrorText, CustomButton, StyledUpload } from '../../../../../../../../../../components/Forms/Forms.styles';
import StyledInput  from '../../../../../../../../../../components/Forms/Inputs/Input';
import StyledSelect  from '../../../../../../../../../../components/Forms/Inputs/Select';
import { Checkbox, Option }  from '../../../../../../../../../../components/Forms/Forms.styles';
import { Title } from '../../../../../../../../../../components/Typography/Typography.styles';
import { Section, List } from '../../../../../../../../../../components/Containers/Divs.styles';
import { FileIcon } from '../../../../../../../../../../components/Icons';

import { useSectionActivitiesEpis } from './useSectionActivitiesEpis';

const SectionActivitiesEpis = () => {
  const {
    handleChangeUpload,
    onChangeShowEPI,
    fileList,
    isEPIVisible,
    activities,
    epis,
  } = useSectionActivitiesEpis();

  const { getFieldProps, setFieldValue,  values, errors, touched } = useFormikContext();

  const isLoading = activities.length === 0 || epis.length === 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Section>
        <Title>Quais EPIs o trabalhador usa na atividade?</Title>

        <FormItem>
          <Checkbox
            name="noEpi"
            onChange={onChangeShowEPI}>O trabalhador não usa EPI.</Checkbox>
        </FormItem>

        {isEPIVisible && (
          <>
            <FieldArray name="activitiesEpis">
              {({ push, remove }) => (
                <div>
                  {values?.activitiesEpis?.map((activity, index) => (
                    <>
                      <Section key={index}>
                        <FormItem>
                          <StyledSelect
                            style={{ width: 640 }}
                            label="Selecione a atividade: "
                            name={`activitiesEpis[${index}].id`}
                            placeholder="Selecione a atividade"
                            value={Number(values.activitiesEpis[index].id) || undefined}
                            onChange={(value) => setFieldValue(`activitiesEpis[${index}].id`, value)}
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
                                      style={{ width: 210 }}
                                      label="Selecione o EPI:"
                                      name={`activitiesEpis[${index}].epis[${epiIndex}].id`}
                                      placeholder="Selecione o EPI"
                                      value={Number(values.activitiesEpis[index].epis[epiIndex].id) || undefined}
                                      onChange={(value) => setFieldValue(`activitiesEpis[${index}].epis[${epiIndex}].id`, value)}
                                      options={epis.map(epi => ({
                                        value: epi.id,
                                        label: epi.name,
                                      }))}
                                    />
                                    <ErrorMessage name={`activitiesEpis[${index}].epis[${epiIndex}].id`} component={ErrorText} />
                                  </FormItem>

                                  <FormItem>
                                    <StyledInput
                                      label="Informe o número do CA:"
                                      name={`activitiesEpis[${index}].epis[${epiIndex}].caNumber`}
                                      placeholder="Número do CA"
                                      {...getFieldProps(`activitiesEpis[${index}].epis[${epiIndex}].caNumber`)}
                                    />
                                    <ErrorMessage name={`activitiesEpis[${index}].epis[${epiIndex}].caNumber`} component={ErrorText} />
                                  </FormItem>
                                    {epiIndex === 0 ? (
                                      <CustomButton style={{ top: 4 }} onClick={() => pushEpi({ id: '', caNumber: '' })}>
                                        Adicionar EPI
                                      </CustomButton>
                                    ) : (
                                      <CustomButton style={{ top: 4 }}  onClick={() => removeEpi(epiIndex)}>
                                        Remover EPI
                                      </CustomButton>
                                    )}
                                </InlineElements>
                              ))}
                            </div>
                          )}
                        </FieldArray>
                        <div  style={{ marginTop: '10px', marginBottom: '10px' }}>
                        {
                          index !== values.activitiesEpis.length - 1 && (
                            <CustomButton  onClick={() => remove(index)} block>Excluir atividade</CustomButton>
                          )
                        }
                      </div>
                      </Section>
                      <div  style={{ marginTop: '10px', marginBottom: '10px' }}>
                        {
                          index === values.activitiesEpis.length - 1 && (
                            <CustomButton onClick={() => push({ id: '', epis: [{ id: '', caNumber: '' }] })} block>Adicionar outra atividade</CustomButton>
                          )
                        }
                      </div>
                    </>
                  )
                  )}

                  {values?.activitiesEpis?.length === 0 && (
                    <CustomButton onClick={() => push({ id: '', epis: [{ id: '', caNumber: '' }] })}>Adicionar outra atividade</CustomButton>
                  )}
                </div>
              )}
            </FieldArray>


          </>
        )}
      </Section>
      {isEPIVisible && (
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
      )}
    </>
  );
};

export default SectionActivitiesEpis;
