import styled from 'styled-components';
import { Header, Content} from '../../components/Containers/Layout.styles'

export const StepsHeader = styled(Header)`
  max-width: 1254px;
  max-height: 156px;
  font-family: 'Ubuntu', sans-serif;
  display: flex;

  background: #FFF;
  width: 100%;
  height: 100%;
  margin: 2% 0 2% 0;
  border-radius: 20px;
  text-align: center;
  padding: 2% 0 2% 0;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    height: auto;
    padding: 1%;
    border-radius: 15px;
  }
`;

export const SVGContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 20px;
  overflow: hidden;
  left: 114px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 1%;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  width: 98%;
  margin-top: auto;
  margin-bottom: 4%;
  justify-content: ${({ $haspreviousbutton }) => ($haspreviousbutton ? 'space-between' : 'flex-end')};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 2%;
  }
`;
