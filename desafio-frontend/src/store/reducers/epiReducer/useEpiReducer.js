import { useDispatch, useSelector } from 'react-redux';
import { setEpisAction } from '.';

export const useEpiReducer = () => {
  const dispatch = useDispatch();
  const { epis } = useSelector((state) => state.epi);

  const setEpis = (currentEpis) => {
    const { epis } = currentEpis;
    dispatch(setEpisAction(epis));
   }

   return {
    epis,
    setEpis
   }
}

