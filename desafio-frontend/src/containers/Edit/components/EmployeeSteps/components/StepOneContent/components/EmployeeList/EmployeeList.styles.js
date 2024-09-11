import styled from 'styled-components';
import { Menu } from '../../../../../../../../components/Containers/Layout.styles';
import { Tag } from '../../../../../../../../components/Containers/Divs.styles';
import { Dropdown } from '../../../../../../../../components/Forms/Forms.styles';
import { Text, StyledTitle } from '../../../../../../../../components/Typography/Typography.styles';
import { CustomButton } from '../../../../../../../../components/Forms/Forms.styles';

export const FilterButtons = styled.div`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  gap: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const FilterContainer = styled.div`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const EmployeeCardList = styled.div`
  font-family: 'Ubuntu', sans-serif;
  background: ${({ $status }) => ($status === 1 ? '#649FBF33' : '#F2F2F2')};
  border-radius: 10px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 10vh;
  padding-left: 3%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const EmployeeInfo = styled.div`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EmployeeActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 5vw;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledMenu = styled(Menu)`
  font-family: 'Ubuntu', sans-serif;
  z-index: 1050;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(-100%);

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

export const StyledDropdown = styled(Dropdown)`
  .ant-dropdown-menu {
    margin-top: -10px;

    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
`;

export const StyledTag = styled(Tag)`
  font-family: 'Ubuntu', sans-serif;
  color: #FFF;
  background: #649FBF;
  border-radius: 20px;
  padding: 4px 16px 4px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.09px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const AlignedContainer = styled.div`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

export const StyledTextActivies = styled(Text)`
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.09px;
  text-align: left;
`;

export const CustomButtonAddEmployee = styled(CustomButton)`

  font-family: Ubuntu;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.38px;
  text-align: left;

  padding: 5%;
  border-radius: 10px;

`;

export const StyledTitleNameEmployee = styled(StyledTitle)`
  font-family: 'Ubuntu', sans-serif !important;
  font-size: 24px !important;
  font-weight: 400 !important;
  line-height: 27.58px !important;
  text-align: left !important;
  color: #707070 !important;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
