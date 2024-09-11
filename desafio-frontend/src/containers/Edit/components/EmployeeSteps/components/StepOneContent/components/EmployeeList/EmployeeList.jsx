import { CustomButton, FullHeightButton, StyledSwitch } from '../../../../../../../../components/Forms/Forms.styles';
import { EmployeeCard } from '../../../../../../../../components/Containers/Cards.styles';
import { Flex, List } from '../../../../../../../../components/Containers/Divs.styles';
import { Text, StyledTitle } from '../../../../../../../../components/Typography/Typography.styles';
import { EllipsisOutlined } from '../../../../../../../../components/Icons/Icons.styles';

import {
  FilterButtons,
  FilterContainer,
  EmployeeCardList,
  EmployeeInfo,
  ResponsiveContainer,
  EmployeeActions,
  StyledDropdown,
  StyledMenu,
  StyledTag,
  AlignedContainer,
  StyledTextActivies,
  CustomButtonAddEmployee,
  StyledTitleNameEmployee,
} from './EmployeeList.styles';

import ModalConfirmation from '../../../../../../../../components/Modals/ModalConfirmation/ModalConfirmation';
import { useEmployeeList } from './useEmployeeList';

const EmployeeList = ({ onAddEmployee }) => {
  const {
    getMenuItems,
    getLabelByValue,
    showFilter,
    isConcluded,
    closeModal,
    employees,
    showActiveOnly,
    isButtonClearFilterDisabled,
    isModalOpen,
  } = useEmployeeList();

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
      <ModalConfirmation
        isOpen={isModalOpen}
        handleClose={closeModal}
        title="Usuário excluído com sucesso!"
      />
      <Flex
        vertical
        gap="small"
        style={{
        width: '100%',
        marginBottom: '2%',
        }}
      >
        <CustomButtonAddEmployee
        block
        onClick={onAddEmployee}
        >
        + Adicionar Funcionário
        </CustomButtonAddEmployee>
      </Flex>
      <FilterContainer>
        <FilterButtons>
        <CustomButton onClick={() => showFilter(true)} >Ver apenas ativos</CustomButton>
        <CustomButton onClick={() => showFilter(false)} disabled={isButtonClearFilterDisabled}>Limpar filtros</CustomButton>
        </FilterButtons>
        <StyledTextActivies>Ativos {filteredEmployees.filter(employees => employees.status === 1).length}/{(employees || []).length}</StyledTextActivies>
      </FilterContainer>

      <List
        dataSource={filteredEmployees}
        renderItem={item => (
        <List.Item>
          <EmployeeCardList $status={item.status}>
          <EmployeeInfo>
            <StyledTitleNameEmployee level={3}>{item.name}</StyledTitleNameEmployee>
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
             <FullHeightButton />
            </StyledDropdown>
          </EmployeeActions>
          </EmployeeCardList>
        </List.Item>
        )}
      />

      <AlignedContainer>
        <Text>A etapa está concluída? </Text>
        <StyledSwitch checkedChildren="Sim" unCheckedChildren="Não" onChange={isConcluded} />
      </AlignedContainer>
    </EmployeeCard >
  );
};

export default EmployeeList;
