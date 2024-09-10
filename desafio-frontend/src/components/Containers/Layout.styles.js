import styled from 'styled-components';
import { Layout as LayoutAntd, Steps, Menu } from 'antd';

const { Header, Content } = LayoutAntd;

export const Layout = styled(LayoutAntd)`
  margin-left: 15px;
`;

export { Header, Content, Steps, Menu }
