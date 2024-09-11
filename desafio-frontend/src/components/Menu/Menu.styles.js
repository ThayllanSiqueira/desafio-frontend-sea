import styled from 'styled-components';
import { Menu } from 'antd';

export const ContainerMenu = styled.div`
  max-height: 768px;
  max-width: 112px;
  position: relative;
  background-color: #4FA1C1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 98vh;
  justify-content: center;
  clip-path: inset(0 0 0 30%);
  transform: translateX(-30%);
  margin: 0;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 6.5%;
    left: 0;
    right: 0;
    height: 41px;
    background-color: white;
  }
`;

export const StyledMenuAntd = styled(Menu)`
  background: transparent;
  display: flex;
  border: none;
  flex-direction: column;
  justify-content: center;

  .ant-menu-light > .ant-menu.ant-menu-root.ant-menu-vertical {
    border-inline-end: 0 !important;
  }

  .ant-menu-item {
    margin-bottom: 11%;
    margin-top: 11%;
    margin-left: 10%;
    height: 35px;
    line-height: 35px;
    transition: background 0.3s ease;

    .anticon {
      opacity: 0.8;
      transition: opacity 0.1s ease;
    }
  }

  .ant-menu-light.ant-menu-root.ant-menu-vertical {
    border-inline-end: none !important;
  }

  .ant-menu-item-selected,
  .ant-menu-item:hover {
    border-inline-end: none !important;
    background: linear-gradient(to right, white 0%, white 20px, transparent 2px, transparent 100%) !important;
    height: 35px;
    line-height: 35px;

    .anticon {
      opacity: 1 !important;
    }
  }

  .ant-menu-item-active .anticon,
  .ant-menu-item:hover .anticon {
    color: initial;
  }
`;
