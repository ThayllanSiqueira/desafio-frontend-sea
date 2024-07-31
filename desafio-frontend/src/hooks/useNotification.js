import { useEffect } from 'react';
import {notification as notificationAntd} from 'antd';
import { useAppGlobalContext } from './useAppContext';

export const useNotification = () => {
  const [api, contextHolder] = notificationAntd.useNotification();
  const {notification} = useAppGlobalContext();


  useEffect(() => {
    if(notification?.message && notification.type){
      api[notification.type]({
        message: notification.message,
        description: notification.description,
        placement: 'bottomRight',
      });
    }
  }, [notification]);

  return {
    api,
    contextHolder,
  };
}
