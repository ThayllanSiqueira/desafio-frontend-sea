import { useState } from 'react';
import { useAppGlobalContext } from './useAppContext';
import ConnectionAPI, { connectionAPIGet, connectionAPIPost } from '../utils/functions/connection/connectionAPI';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useAppGlobalContext();

  const request = async (url, method, saveGlobal, body) => {
    setLoading(true);
    const returnData = await ConnectionAPI.connect(url, method, body)
    .then((result) => {
      if(saveGlobal){
        saveGlobal(result.data);
      }
      return result.data;
    })
    .catch((error) => {
      setNotification(error.message,'error');
      console.log(error);
    });
    setLoading(false);
    return returnData;
  }

  return {
    loading,
    request
  }
}
