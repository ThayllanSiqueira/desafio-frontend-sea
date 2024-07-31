import axios from 'axios';
import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from '../../constants/errosStatus';
import { MethodsEnum } from '../../enums/methods.enum';

export default class ConnectionAPI {
  static async call(url, method, body) {
    switch (method) {
      case (MethodsEnum.GET):
        return (await axios.get(url)).data;
      case (MethodsEnum.DELETE):
        return (await axios.delete(url)).data;
      case (MethodsEnum.POST):
        return (await axios.post(url, body)).data;
      case (MethodsEnum.PUT):
        return (await axios.put(url, body)).data;
      case (MethodsEnum.PATCH):
        return (await axios.patch(url, body)).data;
    }
  }

  static async connect(url, method, body){
    return ConnectionAPI.call(url, method, body).catch((error) => {
      if(error.response) {
        switch (error.response.status) {
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
            break;

          default:
            throw new Error(ERROR_CONNECTION);
            break;
        }
      }
    })
  }
}

export const connectionAPIGet = async (url) => {
  return ConnectionAPI.connect(url, MethodsEnum.GET)
}

export const connectionAPIDelete = async (url) => {
  return ConnectionAPI.connect(url, MethodsEnum.DELETE)
}

export const connectionAPIPost= async (url, body) => {
  return ConnectionAPI.connect(url, MethodsEnum.POST, body)
}

export const connectionAPIPut = async (url, body) => {
  return ConnectionAPI.connect(url, MethodsEnum.PUT, body)
}

export const connectionAPIPatch= async (url, body) => {
  return ConnectionAPI.connect(url, MethodsEnum.PATCH, body)
}


