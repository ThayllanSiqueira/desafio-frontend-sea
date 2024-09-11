import styled from 'styled-components';
import {
  Input as AntdInput,
} from 'antd';

export const Input = styled(AntdInput)`
  margin-right: 20px;
 .ant-input {
    border-color: #649FBF !important;
  }

  .ant-input-outlined, {
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
