import { utils } from '../../utils/presentation';

export type Activitie = {
  idactivitie?: number;
  nameactivitie: string;
};

export type ActivitieData = {
  id?: number;
  name: string;
};

export const activitieToActivitieDataMapping: utils.KeyMapping<Activitie, ActivitieData> = {
  idactivitie: 'id',
  nameactivitie: 'name',
};
