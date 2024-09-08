import { SelectStyled, Label, InputWrapper } from './Select.styles';

const StyledSelect = ({label, ...props }) => (
  <InputWrapper>
    {label && <Label>{label}</Label>}
    <SelectStyled {...props} />
  </InputWrapper>
);

export default StyledSelect;
