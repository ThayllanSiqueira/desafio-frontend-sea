import styled from 'styled-components';

export const EmployeeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const DescriptionText = styled.div`
  font-family: 'Ubuntu', sans-serif;
  flex: 1;
  margin-bottom: 2%;
  color: #959595;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
