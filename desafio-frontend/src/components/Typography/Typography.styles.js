import styled from 'styled-components';
import {
  Flex,
  Typography as TypographyAntd,
  List,
  Switch,
 } from 'antd';

 export const { Text: TextAntd, Title: TitleAntd } = TypographyAntd;

export const Text = styled(TextAntd)`
  font-family: 'Ubuntu', sans-serif;
`;

export const Title = styled.h3`
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  color: #555;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledTitle = styled(TitleAntd)`
  font-family: 'Ubuntu', sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

