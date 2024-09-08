import styled from 'styled-components';
import {
  DatePicker as AntdDatePicker
} from 'antd';

export const StyledDatePicker = styled(AntdDatePicker)`
  .ant-input {
    border-color: #649FBF !important;
  }

  .ant-input-outlined {
    border-color: #649FBF !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
