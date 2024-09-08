import { Input, Label, InputWrapper } from './Input.styles';

const StyledInput = ({label, ...props }) => (
  <InputWrapper>
    {label && <Label>{label}</Label>}
    <Input {...props} />
  </InputWrapper>
);

export default StyledInput;
