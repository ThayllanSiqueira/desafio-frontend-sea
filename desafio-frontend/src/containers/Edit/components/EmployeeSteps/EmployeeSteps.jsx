import { StyledSteps } from './Steps.styles';

import { useEmployeeSteps } from './useEmployeeSteps';

const EmployeeSteps = () => {

  const {
    onChange,
    current,
    items,
  } = useEmployeeSteps();

  return (
    <StyledSteps
    labelPlacement="vertical"
    onChange={onChange}
    current={current}
    items={items}
    />
  );
};

export default EmployeeSteps;
