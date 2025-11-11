import { TYPES } from '@data';
import { addUniqueSlugs, extractValues } from '@helpers';
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
  worldFeatureArray,
} from './linkers';

export const DATA = {
  // Apply the slug generation to every data array
  [TYPES.island.name]: addUniqueSlugs(extractValues(islandArray)),
  [TYPES.item.name]: addUniqueSlugs(extractValues(itemArray)),
  [TYPES.magic.name]: addUniqueSlugs(extractValues(magicArray)),
  [TYPES.npc.name]: addUniqueSlugs(extractValues(npcArray)),
  [TYPES.passiveMagic.name]: addUniqueSlugs(extractValues(passiveMagicArray)),
  [TYPES.passiveSkill.name]: addUniqueSlugs(extractValues(passiveSkillArray)),
  [TYPES.race.name]: addUniqueSlugs(extractValues(raceSkillArray)),
  [TYPES.spec.name]: addUniqueSlugs(extractValues(specArray)),
  [TYPES.title.name]: addUniqueSlugs(extractValues(titleArray)),
  [TYPES.trait.name]: addUniqueSlugs(extractValues(traitArray)),
  [TYPES.weapon.name]: addUniqueSlugs(extractValues(weaponArray)),
  [TYPES.worldFeature.name]: addUniqueSlugs(extractValues(worldFeatureArray)),
};