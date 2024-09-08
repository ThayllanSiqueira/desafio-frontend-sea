import styled from 'styled-components';
import {
  Select as AntdSelect,
  Upload as AntdUpload,
  DatePicker as AntdDatePicker
} from 'antd';

export const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-right: 4%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

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

export const StyledSelect = styled(AntdSelect)`
  .ant-select-selector {
    border-color: #649FBF !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
