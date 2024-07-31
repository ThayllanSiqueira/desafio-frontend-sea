import React from 'react';
import { PatternFormat  } from 'react-number-format';
import { Input } from './InputNumber.styles';

const InputNumber = ({ mask, ...props }) => (
  <PatternFormat
    format={mask}
    mask=""
    {...props}
    customInput={Input}
  />
);

export default InputNumber;
