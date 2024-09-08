import styled from 'styled-components';
import { Card } from 'antd';

export const EmployeeCard = styled(Card)`
  height: 100%;

  .ant-card-head {
    background-color: #649FBF;
    color: #FFF;
  }

  .ant-card-head-title {
    font-size: 28px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
