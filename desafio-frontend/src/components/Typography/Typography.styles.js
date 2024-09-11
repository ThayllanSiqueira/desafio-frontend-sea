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
  margin: 5px;
  color: #272F33;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 18.75px;
  text-align: left;
  font-weight: bold;
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

