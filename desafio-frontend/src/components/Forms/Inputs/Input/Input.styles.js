import styled from 'styled-components';
import {
  Input as AntdInput,
} from 'antd';

export const Input = styled(AntdInput)`
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
