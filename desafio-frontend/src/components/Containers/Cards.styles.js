import styled from 'styled-components';
import { Card } from 'antd';

export const EmployeeCard = styled(Card)`


  height: 100%;
  border-radius: 30px;

  .ant-card-head {
    border-radius: 20px 20px 0 0;
    background-color: #649FBF;
    color: #FFF;
  }

  .ant-card-head-title {
    font-family: Ubuntu;
    font-size: 28px;
    font-weight: 400;
    line-height: 32.17px;
    text-align: left;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
