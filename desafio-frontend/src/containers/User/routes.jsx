import User from './userScreen';

export const UserRoutesEnum = {
  USER: '/user',
};

export const userRoutes = [
 {
  path: UserRoutesEnum.USER,
  element: <User />,
 },
];
