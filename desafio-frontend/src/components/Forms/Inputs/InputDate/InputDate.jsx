import { StyledDatePicker, Label, InputWrapper } from './InputDate.styles';

const InputDate = ({ label, format = "DD/MM/YYYY", ...props }) => {

  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledDatePicker
        name="birthdate"
        format="DD/MM/YYYY"
        placeholder="DD/MM/YYYY"
        {...props}
      />
    </InputWrapper>
);
};

export default InputDate;

