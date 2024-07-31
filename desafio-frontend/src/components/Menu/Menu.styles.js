import styled from 'styled-components';
import { Menu } from 'antd';

export const ContainerMenu = styled.div`
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  padding: 0.5%;
  background-color: #4FA1C1;
  width: 6%;
  border-radius: 30px;
  transform: translateX(-40%);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 98vh;
  justify-content: center;
  margin: 0;
  clip-path: inset(0 0 0 40%);
`;

export const RectangleMenu = styled.div`
  position: fixed;
  left: 0;
  top: 7%;
  padding: 27%;
  background-color: #FFF;
  width: 46%;
`;

export const StyledMenuAntd = styled(Menu)`
 background: transparent; 
 display: flex;
 border: none;
 flex-direction: column;
 justify-content: center;

 .ant-menu-light>.ant-menu.ant-menu-root.ant-menu-vertical {
  border-inline-end: 0 !important;
 }

 .ant-menu-item {
    margin-bottom: 2vh;
    margin-left: 1vw;
  }

  .ant-menu-light.ant-menu-root.ant-menu-vertical, {
    border-inline-end: none !important;
  }

  .ant-menu-item-selected {
    border-inline-end: none !important;
    background: linear-gradient(to right, white 0%, white 15px, transparent 5px, transparent 100%) !important;
  }

  .ant-menu-item:hover {
    background: linear-gradient(to right, white 0%, white 15px, transparent 5px, transparent 100%) !important;
  }

  .ant-menu-item-active .anticon,
  .ant-menu-item:hover .anticon {
    color: initial;
  }
`;