import { CATEGORIES, MAGICS,
  PASSIVE_MAGICS,
  PASSIVE_SKILLS,
  RACES,
  TRAITS } from '../pages/abilities/constants';

export const DATA_MAP = {
  [CATEGORIES[0].label]: RACES,
  [CATEGORIES[1].label]: TRAITS,
  [CATEGORIES[2].label]: MAGICS,
  [CATEGORIES[3].label]: PASSIVE_MAGICS,
  [CATEGORIES[4].label]: PASSIVE_SKILLS,
  // [CATEGORIES[5].label]: TITLES,
};