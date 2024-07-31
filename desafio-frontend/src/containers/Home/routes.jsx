import Home from './homeScreen';

export const HomeRoutesEnum = {
  HOME: '/',
};

export const homeRoutes = [
 {
  path: HomeRoutesEnum.HOME,
  element: <Home />,
 },
];
