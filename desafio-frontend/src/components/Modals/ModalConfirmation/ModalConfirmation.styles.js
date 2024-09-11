import { Modal, Button } from 'antd';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  width: 594px !important;
  .ant-modal-content {
    background-color: #DBDBDB;
    border-radius: 15px;
    box-shadow: 0 4px 6px #00000059;
    backdrop-filter: blur(5px);
    min-height: 154px;
  }

  .ant-modal-header {
    background-color: #DBDBDB;
    border-bottom: none;
    .ant-modal-title {
      font-size: 20px;
      font-weight: bold;
      margin-top: 16px;
      margin-left: 16px;
    }
  }

  .ant-modal-footer {
    display: flex;
    justify-content: center;
    border-top: none;
  }

  .ant-modal-close {
    color: #649FBF;
    font-size: 24px;

    &:hover {
      color: #649FBF; /* Manter a mesma cor ao passar o mouse */
      background: none; /* Garantir que o fundo continue transparente */
    }
  }

  .ant-modal-close-icon {
    color: #649FBF;
    font-size: 24px;
  }

  .ant-modal-close:hover {
    color: #649FBF;
  }
`;

export const StyledButtonModal = styled(Button)`
  background: none;
  border: none;

  color: #649FBF;

  font-size: 18px;
  font-weight: bold;

   &:hover,
  &:focus {
    color: #649FBF;
    background: none;
    border-color: transparent;
  }

  &:disabled {
    color: #649FBF;
    background: none;
    border-color: transparent;
  }
`;
