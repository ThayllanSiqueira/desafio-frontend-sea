import styled, { createGlobalStyle } from 'styled-components';

import '@fontsource/ubuntu';


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    background: #000;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #000;
  height: 100%;
`;

export const AppWrapper = styled.div`
  max-width: 1366px;
  min-height: 768px;
  width: 100%;
  background: #F2F2F2;
  margin: 0;
  padding: 0;
`;

export const MainContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 0;
  margin: 0;
`;

