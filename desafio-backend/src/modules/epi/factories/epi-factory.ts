import { EpiService } from '../services';
import { EpiPersistency } from '../persistency';

export const makeLoadEpi = (): EpiService => {
  const ep = new EpiPersistency();
  return new EpiService(ep);
};
