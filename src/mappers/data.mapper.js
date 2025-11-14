import {
  TYPES,
  ISLANDS,
  ITEMS,
  MAGICS,
  NPCS,
  PASSIVE_MAGICS,
  PASSIVE_SKILLS,
  RACES,
  SPECS,
  TITLES,
  TRAITS,
  WEAPONS,
  WORLD_FEATURES,
} from '@data';
import { addUniqueSlugs, extractValues } from '@helpers';
import {
  linkIslands,
  linkItems,
  linkMagics,
  linkNpcs,
  linkPassiveMagics,
  linkPassiveSkills,
  linkRaces,
  linkSpecs,
  linkTitles,
  linkTraits,
  linkWeapons,
  linkWorldFeatures,
} from './linkers';

// Step 1: Extract and add unique slugs to all raw data objects.
const rawData = {
  islands: addUniqueSlugs(extractValues(ISLANDS)),
  items: addUniqueSlugs(extractValues(ITEMS)),
  magics: addUniqueSlugs(extractValues(MAGICS)),
  npcs: addUniqueSlugs(extractValues(NPCS)),
  passiveMagics: addUniqueSlugs(extractValues(PASSIVE_MAGICS)),
  passiveSkills: addUniqueSlugs(extractValues(PASSIVE_SKILLS)),
  races: addUniqueSlugs(extractValues(RACES)),
  specs: addUniqueSlugs(extractValues(SPECS)),
  titles: addUniqueSlugs(extractValues(TITLES)),
  traits: addUniqueSlugs(extractValues(TRAITS)),
  weapons: addUniqueSlugs(extractValues(WEAPONS)),
  worldFeatures: addUniqueSlugs(extractValues(WORLD_FEATURES)),
};

// Step 2: Pass the slug-ified data to the linkers to create the final, linked data.
export const DATA = {
  [TYPES.island.name]: linkIslands(rawData),
  [TYPES.item.name]: linkItems(rawData),
  [TYPES.magic.name]: linkMagics(rawData),
  [TYPES.npc.name]: linkNpcs(rawData),
  [TYPES.passiveMagic.name]: linkPassiveMagics(rawData),
  [TYPES.passiveSkill.name]: linkPassiveSkills(rawData),
  [TYPES.race.name]: linkRaces(rawData),
  [TYPES.spec.name]: linkSpecs(rawData),
  [TYPES.title.name]: linkTitles(rawData),
  [TYPES.trait.name]: linkTraits(rawData),
  [TYPES.weapon.name]: linkWeapons(rawData),
  [TYPES.worldFeature.name]: linkWorldFeatures(rawData),
};