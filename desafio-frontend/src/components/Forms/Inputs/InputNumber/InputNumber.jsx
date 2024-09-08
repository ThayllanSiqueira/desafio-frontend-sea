import React from 'react';
import { PatternFormat  } from 'react-number-format';
import { Input, Label, InputWrapper } from './InputNumber.styles';

const InputNumber = ({ label, mask, ...props }) => (
  <InputWrapper>
    {label && <Label>{label}</Label>}
    <PatternFormat
      format={mask}
      mask=""
      {...props}
      customInput={Input}
    />
  </InputWrapper>
);

export default InputNumber;
