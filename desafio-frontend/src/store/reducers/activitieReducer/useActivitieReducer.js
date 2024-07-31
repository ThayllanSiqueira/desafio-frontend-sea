import { useDispatch, useSelector } from 'react-redux';
import { setActivitiesAction } from '.';

export const useActivitieReducer = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state.activitie);

  const setActivities = (currentActivities) => {
    const { activities } = currentActivities;
    dispatch(setActivitiesAction(activities));
   }

   return {
    activities,
    setActivities
   }
}

