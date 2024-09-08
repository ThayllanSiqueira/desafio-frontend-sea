import styled from 'styled-components';
import { Menu, Dropdown, Tag } from 'antd';

export const FilterButtons = styled.div`
  display: flex;
  gap: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const EmployeeCardList = styled.div`
  background: ${({ status }) => (status === 1 ? '#649FBF33' : '#F2F2F2')};
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
  color: #FFF;
  background: #649FBF;
  border-radius: 30px;
  padding: 3px 14px;
  font-size: 1.1em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const AlignedContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;
