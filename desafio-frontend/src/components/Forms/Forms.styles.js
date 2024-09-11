import styled from 'styled-components';
import {
  Button as AntdButton,
  Upload as AntdUpload,
  Select,
  Switch,
  Dropdown,
  Radio as RadioAntd,
  DatePicker,
  Checkbox as CheckboxAntd
} from 'antd';

const { Option } = Select;

export const FormItem = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18.75px;
  text-align: left;
  margin-bottom: 20px;

  .ant-form-item-label {
    padding-bottom: 8px;
    font-weight: 600;
    color:  #272F33;
    ;

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
  padding: 16px 45px 16px 45px;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.09px;
  text-align: left;
  border-radius: 10px;

  &:disabled {
    color: #959595;
    border-color: #959595;
    background: #FFFFFF;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FullHeightButton = styled(AntdButton)`
  height: 10vh;
  width: 10vw;
  border-radius: 0px 10px 10px 0px;
  box-sizing: border-box;
  color: #FFF;
  border-color: #649FBF;
  background-color: #649FBF;
  clip-path: inset(0 0 0 50%);

  &.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    color: #FFF;
    border-color: #649FBF;
    background-color: #649FBF;
  }

  &::before {
    content: '...';
    position: absolute;
    top: 40%;
    left: 75%;
    transform: translate(-50%, -50%);
    letter-spacing: -1px;
    font-size: 32px;
    color: #FFF;
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

export const StyledSwitch = styled(Switch)`

  &.ant-switch {
    background-color: #DBDBDB;

    &.ant-switch:hover {
      background-color: #DBDBDB;
    }

     .ant-switch-inner {
      span {
        color: #000 !important;
      }
    }
  }

  &.ant-switch-checked {
    background-color: #DBDBDB;
  }

  .ant-switch-handle::before {
    background-color: #649FBF;
  }

`;

const Radio = styled(RadioAntd)`
  border-color: #649FBF;

  &.ant-radio-inner {
    border-color: #649FBF;
    width: 18px;

    &:hover {
      border-color: #4a8bad;
    }
  }

`;

const Checkbox = styled(CheckboxAntd)`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  text-align: left;
  margin-left: 1%;
  margin-top: 1%;

  .ant-checkbox-inner {
    border-color: #649FBF;
    width: 18px;
    height: 18px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #649FBF;
    border-color: #649FBF;
  }




`;

export { Switch, Dropdown, Radio, Select, DatePicker, Checkbox, Option }
