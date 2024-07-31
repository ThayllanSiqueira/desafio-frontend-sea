import styled from 'styled-components';
import { Steps as AntdSteps } from 'antd';

export const StyledSteps = styled(AntdSteps)`
  .ant-steps {
    text-align: initial;
  }

  .ant-steps-item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    .ant-steps-item-tail {
    }

    .ant-steps-item-icon {
    }

    .ant-steps-item-content {
      .ant-steps-item-title {
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
    .ant-steps-item-container {
      flex-direction: row;
      align-items: flex-start;
      .ant-steps-item-content {
        .ant-steps-item-title {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
