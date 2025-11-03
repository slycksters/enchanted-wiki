import { TYPES } from '@data';
import { extractValues } from '@helpers';
import {
  islandArray,
  itemArray,
  magicArray,
  npcArray,
  passiveMagicArray,
  passiveSkillArray,
  raceSkillArray,
  specArray,
  titleArray,
  traitArray,
  weaponArray,
} from './linkers';

export const DATA = {
  [TYPES.island.name]: extractValues(islandArray),
  [TYPES.item.name]: extractValues(itemArray),
  [TYPES.magic.name]: extractValues(magicArray),
  [TYPES.npc.name]: extractValues(npcArray),
  [TYPES.passiveMagic.name]: extractValues(passiveMagicArray),
  [TYPES.passiveSkill.name]: extractValues(passiveSkillArray),
  [TYPES.race.name]: extractValues(raceSkillArray),
  [TYPES.spec.name]: extractValues(specArray),
  [TYPES.title.name]: extractValues(titleArray),
  [TYPES.trait.name]: extractValues(traitArray),
  [TYPES.weapon.name]: extractValues(weaponArray),
};
