import styled from 'styled-components';
import {
  Select
} from 'antd';

export const SelectStyled = styled(Select)`
  width: 250px;
  margin-right: 20px;
  .ant-select-selector {
    border-color: #649FBF !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
`;

export const InputWrapper = styled.div`

`;
