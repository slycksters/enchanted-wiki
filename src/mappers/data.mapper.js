import {
  MAGICS,
  PASSIVE_MAGICS,
  PASSIVE_SKILLS,
  RACES,
  SPECS,
  TRAITS,
  TYPES,
} from '../data';

export const DATA = {
  [TYPES.race.name]: Object.values(RACES),
  [TYPES.trait.name]: Object.values(TRAITS),
  [TYPES.magic.name]: Object.values(MAGICS),
  [TYPES.passiveMagic.name]: Object.values(PASSIVE_MAGICS),
  [TYPES.passiveSkill.name]: Object.values(PASSIVE_SKILLS),
  [TYPES.spec.name]: Object.values(SPECS),
  // [CATEGORIES[5].name]: Object.values(TITLES),
};
