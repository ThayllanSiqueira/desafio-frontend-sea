import styled from 'styled-components';

import { TextAntd } from '../../../../../../../../components/Typography/Typography.styles';

export const EmployeeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const DescriptionText = styled(TextAntd)`
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  width: 412px;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 122.2%;

  color: #959595;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
