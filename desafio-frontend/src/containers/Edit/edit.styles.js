import styled from 'styled-components';
import { Layout } from 'antd';

const { Header, Content: AntdContent } = Layout;

export const StepsHeader = styled(Header)`
  display: flex;
  justify-content: center;
  background: #FFF;
  width: 98%;
  height: 22vh;
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 30px;
  text-align: center;
  padding: 2%;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    height: auto;
    padding: 1%;
    border-radius: 15px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${({ haspreviousbutton }) => (haspreviousbutton ? 'space-between' : 'flex-end')};
  width: 100%;
  margin-top: auto;
  margin-bottom: 4%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 2%;
  }
`;

export const Content = styled(AntdContent)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
