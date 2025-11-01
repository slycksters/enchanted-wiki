import { TYPES } from '@data';
import { extractValues } from '@helpers';
import {
  itemArray,
  magicArray,
  npcArray,
  passiveMagicArray,
  passiveSkillArray,
  raceSkillArray,
  specArray,
  traitArray,
} from './linkers';

export const DATA = {
  [TYPES.item.name]: extractValues(itemArray),
  [TYPES.magic.name]: extractValues(magicArray),
  [TYPES.npc.name]: extractValues(npcArray),
  [TYPES.passiveMagic.name]: extractValues(passiveMagicArray),
  [TYPES.passiveSkill.name]: extractValues(passiveSkillArray),
  [TYPES.race.name]: extractValues(raceSkillArray),
  [TYPES.spec.name]: extractValues(specArray),
  [TYPES.trait.name]: extractValues(traitArray),
};
