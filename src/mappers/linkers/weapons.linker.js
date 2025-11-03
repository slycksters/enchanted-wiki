import { NPCS, WEAPONS } from '@data';

// --- Main Data ---
const weaponMap = new Map(Object.entries(WEAPONS));
// --- Related Data ---
const npcMap = new Map(Object.entries(NPCS));

// --- Link to related data ---
weaponMap.forEach((item) => {
  item.sources = item.sources?.map((key) => npcMap.get(key)).filter(Boolean);
});

export const weaponArray = Array.from(weaponMap.values());
