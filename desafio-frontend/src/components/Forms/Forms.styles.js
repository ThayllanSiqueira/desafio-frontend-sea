import styled from 'styled-components';
import {
  Button as AntdButton,
  Upload as AntdUpload,
  Select,
  Switch,
  Dropdown,
  Radio,
  DatePicker,
  Checkbox
} from 'antd';

const { Option } = Select;

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

export const CustomButton = styled(AntdButton)`
  color: #649FBF;
  border-color: #649FBF;
  width: 10vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/* export const CustomButton = styled(AntdButton)`
  color: #FFF;
  border-color: #649FBF;
  background: #649FBF;
  width: 15vw;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  &:disabled {
    color: #FFF;
    border-color: #959595;
    background: #959595;
  }
`;
 */

export const FullHeightButton = styled(AntdButton)`
  height: 10vh;
  width: 10vw;
  box-sizing: border-box;
  clip-path: inset(0 0 0 40%);

  &.ant-btn-icon-only {
    width: 10vw;
    background-color: #649FBF;
    color: #FFF;
  }

  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    color: #FFF;
    border-color: #4096ff;
    background-color: #649FBF;
  }

  &.ant-btn-icon-only .anticon {
    font-size: 28px;
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Button = AntdButton;

export const StyledUpload = styled(AntdUpload)`
  width: 100%;

  .ant-upload {
    width: 100%;
  }

  .ant-btn {
    width: 100%;
  }
`;

export { Switch, Dropdown, Radio, Select, DatePicker, Checkbox, Option }
