import { universalLinker } from './universal.linker.js';
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
} from '../data/index.js';
import { addUniqueSlugs, extractValues, generateUniqueKey } from '../helpers/index.js';

// --- Step 1: Centralize all raw data sources ---
// This makes adding new data types much easier in the future.
const ALL_RAW_DATA = {
  islands: ISLANDS,
  items: ITEMS,
  magics: MAGICS,
  npcs: NPCS,
  passiveMagics: PASSIVE_MAGICS,
  passiveSkills: PASSIVE_SKILLS,
  races: RACES,
  specs: SPECS,
  titles: TITLES,
  traits: TRAITS,
  weapons: WEAPONS,
  worldFeatures: WORLD_FEATURES,
};

// --- Step 2: Extract values and add unique slugs ---
const slugifiedData = {};
for (const key in ALL_RAW_DATA) {
  slugifiedData[key] = addUniqueSlugs(extractValues(ALL_RAW_DATA[key]));
}

// --- Step 3: Create Universal Lookup Maps (ONCE!) ---
const allLinkableEntities = Object.values(slugifiedData).flat();
const allRawLinkableObjects = Object.values(ALL_RAW_DATA)
  .map(obj => Object.entries(obj))
  .flat();

const unifiedMap = new Map(
  allLinkableEntities
    .map(item => {
      const key = generateUniqueKey(item);
      return key ? [key, item] : null;
    })
    .filter(Boolean)
);

const stringKeyToUniqueKeyMap = new Map(
  allRawLinkableObjects.map(([stringKey, rawObject]) => {
    return [stringKey, generateUniqueKey(rawObject)];
  })
);

const islandKeyToIdMap = new Map(
  Object.entries(ISLANDS).map(([k, v]) => [k, v.id])
);
const islandMap = new Map(slugifiedData.islands.map((i) => [i.id, i]));

const MAPS = { unifiedMap, stringKeyToUniqueKeyMap, islandKeyToIdMap, islandMap };

// --- Step 4: Define linking configurations for each data type ---
// Here we declare which properties on each data type should be linked.
const LINKING_CONFIG = {
  islands: ['inhabitants'],
  items: ['sources', 'drops', 'related'],
  magics: ['sources', 'related'],
  npcs: ['drops', 'related', 'ware', 'locations'],
  passiveMagics: ['sources', 'related'],
  passiveSkills: ['sources', 'related'],
  races: ['sources'],
  specs: ['sources'],
  titles: ['sources'],
  traits: ['sources'],
  weapons: ['sources'],
  worldFeatures: ['drops', 'related'],
};

// --- Step 5: Execute the universal linker for each data type ---
export const DATA = {
  [TYPES.island.name]: universalLinker(slugifiedData.islands, ISLANDS, LINKING_CONFIG.islands, MAPS),
  [TYPES.item.name]: universalLinker(slugifiedData.items, ITEMS, LINKING_CONFIG.items, MAPS),
  [TYPES.magic.name]: universalLinker(slugifiedData.magics, MAGICS, LINKING_CONFIG.magics, MAPS),
  [TYPES.npc.name]: universalLinker(slugifiedData.npcs, NPCS, LINKING_CONFIG.npcs, MAPS),
  [TYPES.passiveMagic.name]: universalLinker(slugifiedData.passiveMagics, PASSIVE_MAGICS, LINKING_CONFIG.passiveMagics, MAPS),
  [TYPES.passiveSkill.name]: universalLinker(slugifiedData.passiveSkills, PASSIVE_SKILLS, LINKING_CONFIG.passiveSkills, MAPS),
  [TYPES.race.name]: universalLinker(slugifiedData.races, RACES, LINKING_CONFIG.races, MAPS),
  [TYPES.spec.name]: universalLinker(slugifiedData.specs, SPECS, LINKING_CONFIG.specs, MAPS),
  [TYPES.title.name]: universalLinker(slugifiedData.titles, TITLES, LINKING_CONFIG.titles, MAPS),
  [TYPES.trait.name]: universalLinker(slugifiedData.traits, TRAITS, LINKING_CONFIG.traits, MAPS),
  [TYPES.weapon.name]: universalLinker(slugifiedData.weapons, WEAPONS, LINKING_CONFIG.weapons, MAPS),
  [TYPES.worldFeature.name]: universalLinker(slugifiedData.worldFeatures, WORLD_FEATURES, LINKING_CONFIG.worldFeatures, MAPS),
};