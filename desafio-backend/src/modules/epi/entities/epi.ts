import { utils } from '../../utils/presentation';

export type Epi = {
  idepi?: number;
  nameepi: string;
};

export type EpiData = {
  id?: number;
  name: string;
};

export const epiToEpiDataMapping: utils.KeyMapping<Epi, EpiData> = {
  idepi: 'id',
  nameepi: 'name',
};
