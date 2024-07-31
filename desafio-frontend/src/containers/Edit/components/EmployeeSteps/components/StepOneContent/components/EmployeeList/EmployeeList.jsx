import { useState, useEffect, useMemo } from 'react';

import {
 Button,
 Flex,
 Typography,
 List,
 Switch,
} from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import {
 EmployeeCard,
 CustomButton,
 FilterButtons,
 FilterContainer,
 EmployeeCardList,
 EmployeeInfo,
 ResponsiveContainer,
 EmployeeActions,
 FullHeightButton,
 StyledDropdown,
 StyledMenu,
 StyledTag,
 StyledTitle,
 AlignedContainer
} from './EmployeeList.styles';

import { useEditContext } from '../../../../../../hooks/useEditEmployeeContext';
import { useRequests } from '../../../../../../../../hooks/useRequests';
import { MethodsEnum } from '../../../../../../../../utils/enums/methods.enum';
import { URL_EMPLOYEES, URL_EMPLOYEES_ID } from '../../../../../../../../utils/constants/urls';
import { useEmployeeReducer } from '../../../../../../../../store/reducers/employeeReducer/useEmployeeReducer';
import { roles } from '../../../../../../../../utils/constants/mockComponents';

const { Title, Text } = Typography;

const EmployeeList = ({ onAddEmployee }) => {
  const { editData } = useEditContext();
  const [showActiveOnly, setShowActiveOnly] = useState(false);
  const [isButtonClearFilterDisabled, setIsButtonClearFilterDisabled] = useState(true);
  const { request } = useRequests();
  const { employees, setEmployees, setEmployeeId } = useEmployeeReducer();

  useEffect(() => {
    request(URL_EMPLOYEES, MethodsEnum.GET, setEmployees)
  }, []);

  const handleDeleteEmployee = async (employeeId) => {
    await request(URL_EMPLOYEES_ID.replace('{employeeId}', employeeId), MethodsEnum.DELETE)
    await request(URL_EMPLOYEES, MethodsEnum.GET, setEmployees)
  };

  const handleEditEmployee = async (employeeId) => {
    setEmployeeId(employeeId);
    editData.setIsEmployeeFormVisible((prev) => !prev);
    editData.enableIcons();
    editData.setIsButtonNextStepDisabled((prev) => !prev);
  };

  const getMenuItems = (employeeId) => [
    {
      label: <a onClick={() => handleEditEmployee(employeeId)}>Alterar</a>,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <a onClick={() => handleDeleteEmployee(employeeId)}>Excluir</a>,
      key: '1',
    },
  ];

  function getLabelByValue(value) {
    const role = roles.find(role => role.value === value);
    return role ? role.label : null;
  }



 const isConcluded = (checked) => {
  if (checked) {
   editData.stepConcluded();
  } else {
   editData.setItems(editData.steps);
   editData.setCurrent(0);
  }

  editData.setIsButtonNextStepDisabled((prev) => !prev);
 };

 const showFilter = (isFilter) => {
  setShowActiveOnly(isFilter)
  setIsButtonClearFilterDisabled((prev) => !prev);
 }

 if (!employees) {
  return <div>Loading...</div>;
 }

 const filteredEmployees = showActiveOnly
 ? (employees || []).filter(employee => employee.status === 1)
 : (employees || []);

 return (
  <EmployeeCard
   title="Funcionário(s)"
  >
   <Flex
    vertical
    gap="small"
    style={{
     width: '100%',
     marginBottom: '2%',
    }}
   >
    <CustomButton
     block
     style={{
      padding: '4%',
     }}
     onClick={onAddEmployee}
    >
     + Adicionar Funcionário
    </CustomButton>
   </Flex>
   <FilterContainer>
    <FilterButtons>
     <CustomButton onClick={() => showFilter(true)} >Ver apenas ativos</CustomButton>
     <CustomButton onClick={() => showFilter(false)} disabled={isButtonClearFilterDisabled}>Limpar filtros</CustomButton>
    </FilterButtons>
    <Text>Ativos {filteredEmployees.filter(employees => employees.status === 1).length}/{(employees || []).length}</Text>
   </FilterContainer>

   <List
    dataSource={filteredEmployees}
    renderItem={item => (
     <List.Item>
      <EmployeeCardList $status={item.status}>
       <EmployeeInfo>
        <StyledTitle level={3}>{item.name}</StyledTitle>
        <ResponsiveContainer>
         <StyledTag>{item.cpf}</StyledTag>
         <StyledTag>{item.status === 1 ? 'Ativo' : 'Inativo'}</StyledTag>
         <StyledTag>{getLabelByValue(item.role)}</StyledTag>
        </ResponsiveContainer>
       </EmployeeInfo>
       <EmployeeActions>
        <StyledDropdown
         overlay={<StyledMenu items={getMenuItems(item.id)} />}
         trigger={['click']}
         overlayStyle={{ position: 'absolute', zIndex: 1050 }}>
         <FullHeightButton icon={<EllipsisOutlined />} />
        </StyledDropdown>
       </EmployeeActions>
      </EmployeeCardList>
     </List.Item>
    )}
   />

   <AlignedContainer>
      <Text>A etapa está concluída? </Text>
      <Switch checkedChildren="Sim" unCheckedChildren="Não" onChange={isConcluded} />
    </AlignedContainer>
  </EmployeeCard >
 );
};

export default EmployeeList;
