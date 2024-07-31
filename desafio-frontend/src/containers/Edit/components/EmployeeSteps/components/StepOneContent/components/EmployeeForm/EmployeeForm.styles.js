import styled from 'styled-components';
import {
  Card,
  Input as AntdInput,
  Select as AntdSelect,
  Upload as AntdUpload,
  Button as AntdButton,
} from 'antd';

import { PaperClipOutlined } from '@ant-design/icons';

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

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SectionSwitch = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #649FBF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  color: #555;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 10px;
  }
`;

export const CustomButton = styled(AntdButton)`
  color: #649FBF;
  border-color: #649FBF;
  width: 10vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
