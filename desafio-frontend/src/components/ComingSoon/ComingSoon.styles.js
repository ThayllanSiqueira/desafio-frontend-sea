import styled from 'styled-components';

export const CommingSoonDiv = styled.div`
  color: #FFF;
  background: #4FA1C1;
  margin-top: 2%;
  padding: 1.2%;
  width: 95%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  font-size: 2em;
  margin-bottom: 40%;

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
