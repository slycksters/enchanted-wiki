import {
  ITEMS,
  MAGICS,
  NPCS,
  PASSIVE_SKILLS,
  SPECS,
  TRAITS,
  WEAPONS,
} from '@data';

// --- Main Data ---
const npcMap = new Map(Object.entries(NPCS));
// --- Related Data
const itemMap = new Map(Object.entries(ITEMS));
const magicMap = new Map(Object.entries(MAGICS));
const passiveSkillMap = new Map(Object.entries(PASSIVE_SKILLS));
const specMap = new Map(Object.entries(SPECS));
const traitMap = new Map(Object.entries(TRAITS));
const weaponMap = new Map(Object.entries(WEAPONS));

// --- Combine All Related Data ---
const unifiedMap = new Map([
  ...itemMap,
  ...magicMap,
  ...npcMap,
  ...passiveSkillMap,
  ...specMap,
  ...traitMap,
  ...weaponMap,
]);

// --- Link to related data ---
npcMap.forEach((item) => {
  item.drops = item.drops?.map((key) => unifiedMap.get(key)).filter(Boolean);
});

export const npcArray = Array.from(npcMap.values());
