import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import { GlobalStyle, PageContainer, AppWrapper, MainContainer, ContentContainer } from './main.styles';

import SVGPlus from './components/SVGPlus';
import Menu from './components/Menu';
import Home from "./containers/Home";
import Edit from './containers/Edit';
import Diagram from './containers/Diagram';
import Notification from './containers/Notification';
import TimeLatest from './containers/TimeLatest';
import User from './containers/User';
import { useNotification } from './hooks/useNotification';
import { EditEmployeeProvider } from './containers/Edit/hooks/useEditEmployeeContext';
import { homeRoutes } from './containers/Home/routes';
import { editRoutes } from './containers/Edit/routes';
import { diagramRoutes } from './containers/Diagram/routes';
import { notificationRoutes } from './containers/Notification/routes';
import { timeLatestRoutes } from './containers/TimeLatest/routes';
import { userRoutes } from './containers/User/routes';

// Configurando todas as rotas
const routes = [
  ...homeRoutes,
  ...editRoutes,
  ...diagramRoutes,
  ...notificationRoutes,
  ...timeLatestRoutes,
  ...userRoutes,
];

function App() {
  const {contextHolder} = useNotification();
  return (
    <BrowserRouter>
      <PageContainer>
        <AppWrapper>
          {contextHolder}
          <MainContainer>
            <SVGPlus />
            <Menu />
              <EditEmployeeProvider>
                <ContentContainer>
                  <Routes>
                    {routes.map((route, index) => (
                      <Route key={index} path={route.path} element={route.element} />
                    ))}
                  </Routes>
                  <GlobalStyle />
                </ContentContainer>
            </EditEmployeeProvider>
          </MainContainer>
        </AppWrapper>
      </PageContainer>
  </BrowserRouter>
  )
}

export default App;
