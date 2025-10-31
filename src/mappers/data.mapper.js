import {
  ITEMS,
  MAGICS,
  NPCS,
  PASSIVE_MAGICS,
  PASSIVE_SKILLS,
  RACES,
  SPECS,
  TRAITS,
  TYPES,
} from '@data';
import { extractValues } from '@helpers';

export const DATA = {
  [TYPES.item.name]: extractValues(ITEMS),
  [TYPES.magic.name]: extractValues(MAGICS),
  [TYPES.npc.name]: extractValues(NPCS),
  [TYPES.passiveMagic.name]: extractValues(PASSIVE_MAGICS),
  [TYPES.passiveSkill.name]: extractValues(PASSIVE_SKILLS),
  [TYPES.race.name]: extractValues(RACES),
  [TYPES.spec.name]: extractValues(SPECS),
  [TYPES.trait.name]: extractValues(TRAITS),
};
