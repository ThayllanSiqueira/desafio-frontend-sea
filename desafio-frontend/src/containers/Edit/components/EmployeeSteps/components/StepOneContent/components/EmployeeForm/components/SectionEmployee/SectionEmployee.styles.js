import styled from 'styled-components';
import {
  Card,
  Select as AntdSelect,
  Upload as AntdUpload,
  Button as AntdButton,
  DatePicker as AntdDatePicker
} from 'antd';

import { PaperClipOutlined } from '@ant-design/icons';

export const Section = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #649FBF;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

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

export const FormItem = styled.div`
  margin-bottom: 24px;

  .ant-form-item-label {
    padding-bottom: 8px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
  }

  .ant-form-item-control {
    margin-top: 8px;
  }

  .ant-form-item-explain {
    color: rgba(255, 0, 0, 0.85);
    font-size: 12px;
    margin-top: 4px;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
`;
