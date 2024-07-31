import { ActivitieService } from '../services';
import { ActivitiePersistency } from '../persistency';

export const makeLoadActivitie = (): ActivitieService => {
  const ap = new ActivitiePersistency();
  return new ActivitieService(ap);
};
