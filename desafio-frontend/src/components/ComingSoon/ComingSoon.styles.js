import styled from 'styled-components';

export const CommingSoonDiv = styled.div`
  max-width: 1254px;
  max-height: 55px;
  color: #FFF;
  background: #4FA1C1;
  margin-top: 2%;
  padding: 0.8%;
  width: 96.5%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40%;
  font-size: 28px;
  line-height: 32px;

  @media (max-width: 768px) {
    font-size: 1.5em;
    padding: 1%;
    width: 90%;
    margin-bottom: 20%;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
    padding: 0.8%;
    width: 85%;
    margin-bottom: 10%;
  }
`;
