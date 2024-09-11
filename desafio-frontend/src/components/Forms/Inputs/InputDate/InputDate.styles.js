import styled from 'styled-components';
import {
  DatePicker
} from 'antd';

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;

  &.ant-picker {
    border-color: #649FBF !important;
  }

  .ant-picker-focused {
    border-color: #649FBF !important;
    box-shadow: 0 0 0 2px rgba(100, 159, 191, 0.2);
  }

  .ant-picker-input > input {
    color: #000;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  margin-top: 15px;
  font-weight: bold;
`;

export const InputWrapper = styled.div`

`;

