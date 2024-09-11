import styled from 'styled-components';

export const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-right: 4%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
`;
