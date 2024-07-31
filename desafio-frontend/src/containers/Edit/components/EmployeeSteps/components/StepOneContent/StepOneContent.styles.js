import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  opacity: 1;
  margin-bottom: 4%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftComponent = styled.div`
  background: #FFF;
  width: 36%;
  height: 55vh;
  padding: 2%;
  border-radius: 30px;
  opacity: 1;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    margin-bottom: 2%;
  }
`;

export const RightComponent = styled.div`
  background: #FFF;
  width: 60%;
  height: 100%;
  padding: 0;
  border-radius: 30px;
  opacity: 1;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;
