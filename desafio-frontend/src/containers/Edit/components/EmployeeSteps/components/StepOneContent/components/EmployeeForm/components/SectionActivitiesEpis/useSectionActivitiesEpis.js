import { useState, useEffect } from 'react';

import { useRequests } from '../../../../../../../../../../hooks/useRequests';
import { URL_ACTIVITIES, URL_EPIS } from '../../../../../../../../../../utils/constants/urls';
import { MethodsEnum } from '../../../../../../../../../../utils/enums/methods.enum';
import { useActivitieReducer } from '../../../../../../../../../../store/reducers/activitieReducer/useActivitieReducer';
import { useEpiReducer } from '../../../../../../../../../../store/reducers/epiReducer/useEpiReducer';


export const useSectionActivitiesEpis = () =>{
  const [fileList, setFileList] = useState([]);
  const [isEPIVisible, setIsEPIVisible] = useState(true);
  const { activities, setActivities } = useActivitieReducer();
  const { epis, setEpis } = useEpiReducer();
  const { request } = useRequests();

  const handleChangeUpload = (info) => {
    let newFileList = [...info.fileList];
    setFileList(newFileList);
  };

  const onChangeShowEPI = (e) => {
    const isChecked = e.target.checked;
    setIsEPIVisible(!isChecked);
    setFieldValue('noEpi', isChecked);
  };

  useEffect(() => {
    request(URL_ACTIVITIES, MethodsEnum.GET, setActivities)
    request(URL_EPIS, MethodsEnum.GET, setEpis)
  }, []);

  return {
    handleChangeUpload,
    onChangeShowEPI,
    fileList,
    isEPIVisible,
    activities,
    epis,
  }
}
