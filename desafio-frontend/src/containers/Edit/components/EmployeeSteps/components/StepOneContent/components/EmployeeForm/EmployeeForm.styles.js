import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SectionSwitch = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #649FBF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
  }
`;

export const EmployeeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 10px;
  }
`;
