import { MAGICS, PASSIVE_MAGICS, PASSIVE_SKILLS, RACES, TRAITS } from '../data';
import { CATEGORIES } from '../components/pages/abilities/constants';

export const DATA_MAP = {
  [CATEGORIES[0].name]: Object.values(RACES),
  [CATEGORIES[1].name]: Object.values(TRAITS),
  [CATEGORIES[2].name]: Object.values(MAGICS),
  [CATEGORIES[3].name]: Object.values(PASSIVE_MAGICS),
  [CATEGORIES[4].name]: Object.values(PASSIVE_SKILLS),
  // [CATEGORIES[5].name]: Object.values(TITLES),
};
