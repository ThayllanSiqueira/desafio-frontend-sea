import Notification from './notificationScreen';

export const NotificationRoutesEnum = {
  NOTIFICATION: '/notification',
};

export const notificationRoutes = [
 {
  path: NotificationRoutesEnum.NOTIFICATION,
  element: <Notification />,
 },
];
