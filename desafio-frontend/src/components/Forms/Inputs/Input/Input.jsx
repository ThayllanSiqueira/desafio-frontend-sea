import { Input, Label, InputWrapper } from './Input.styles';

const StyledInput = ({label, style, ...props }) => {
  const { inputStyle, labelStyle, ...restProps } = props;
  return (
    <InputWrapper>
      {label && <Label style={labelStyle}>{label}</Label>}
      <Input style={inputStyle} {...restProps} />
    </InputWrapper>
  );
}
export default StyledInput;
