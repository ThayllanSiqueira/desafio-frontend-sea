import { useNavigate } from 'react-router-dom';
import Icon from '@ant-design/icons';

import { ContainerMenu, StyledMenuAntd } from './Menu.styles';
import {
 SVGHome,
 SVGEdit,
 SVGDiagram,
 SVGNotification,
 SVGTimeLatest,
 SVGUser
} from '../Icons';

const HomeIcon = (props) => <Icon component={() => <SVGHome {...props} />} />;
const EditIcon = (props) => <Icon component={() => <SVGEdit {...props} />} />;
const DiagramIcon = (props) => <Icon component={() => <SVGDiagram {...props} />} />;
const NotificationIcon = (props) => <Icon component={() => <SVGNotification {...props} />} />;
const TimeLatestIcon = (props) => <Icon component={() => <SVGTimeLatest {...props} />} />;
const UserIcon = (props) => <Icon component={() => <SVGUser {...props} />} />;


const Menu = () => {
 const navigate = useNavigate();

 const items = [
  {
   key: '1',
   icon: <HomeIcon opacity={1} />,
   onClick: () => navigate('/'),
  },
  {
   key: '2',
   icon: <EditIcon opacity={1} />,
   onClick: () => navigate('/edit'),
  },
  {
   key: '3',
   icon: <DiagramIcon opacity={1} />,
   onClick: () => navigate('/diagram'),
  },
  {
   key: '4',
   icon: <NotificationIcon opacity={1} />,
   onClick: () => navigate('/notification'),
  },
  {
   key: '5',
   icon: <TimeLatestIcon opacity={1} />,
   onClick: () => navigate('/timelatest'),
  },
  {
   key: '6',
   icon: <UserIcon opacity={1} />,
   onClick: () => navigate('/user'),
  },
 ];

 return (
  <ContainerMenu>
   <StyledMenuAntd
    defaultSelectedKeys={['1']}
    mode="inline"
    inlineCollapsed={true}
    items={items}
   />
  </ContainerMenu>
 );
};

export default Menu;
