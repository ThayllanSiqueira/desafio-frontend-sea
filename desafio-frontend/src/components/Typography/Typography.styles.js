import styled from 'styled-components';
import {
  Flex,
  Typography as TypographyAntd,
  List,
  Switch,
 } from 'antd';

 export const { Text, Title: TitleAntd } = TypographyAntd;

export const Title = styled.h3`
  margin: 0;
  color: #555;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledTitle = styled(TitleAntd)`
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

