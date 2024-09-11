import styled from 'styled-components';
import { Steps } from '../../../../components/Containers/Layout.styles';

export const StyledSteps = styled(Steps)`
  font-family: 'Ubuntu', sans-serif;
  display: block;

  .ant-steps-item.ant-steps-item-active {
    .ant-steps-item-container {
      .ant-steps-item-content {
        .ant-steps-item-title {
          color: #649FBF;
        }
      }
    }
  }

  .ant-steps-item {
    margin-left: 4px;
    margin-right: 1px;
    .ant-steps-item-container {
      flex-direction: column;
      z-index: 1;

      .ant-steps-item-tail {
        &::after {
          display: none;
        }
      }

      .ant-steps-item-content {
        margin-top: 0;
        .ant-steps-item-title {
          font-size: 14px;
          line-height: 10px;
          text-align: center;
          margin-left: 35px;
          margin-bottom: 10px;
          color: #649FBF;
        }
        .ant-steps-item-description {
          font-size: 14px;
          line-height: 10px;
          text-align: center;
          margin-left: 35px;
          color: #000000;
          font-weight: 500;
        }
      }
    }
  }

`;
