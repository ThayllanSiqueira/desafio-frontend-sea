import { createContext, useState, useContext } from 'react';

const AppContext = createContext({});

export const AppGlobalProvider = ({ children }) => {
  const [appGlobalData, setAppGlobalData] = useState({
    notification: {
      message: '',
      type: '',
      description: '',
    }
  });

  return (
    <AppContext.Provider value={{ appGlobalData, setAppGlobalData }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppGlobalContext = () => {
  const { appGlobalData, setAppGlobalData } = useContext(AppContext);

  const setNotification = (message, type, description) => {
    setAppGlobalData((prevState) => ({
      ...prevState,
      notification: {
        message,
        type,
        description,
      }
    }));
  }

  return {
    notification: appGlobalData.notification,
    setNotification,
  };
}
