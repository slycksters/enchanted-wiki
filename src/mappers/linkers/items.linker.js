import { ITEMS, NPCS } from '@data';

// --- Main Data ---
const itemMap = new Map(Object.entries(ITEMS));
// --- Related Data ---
const npcMap = new Map(Object.entries(NPCS));

// --- Combine All Related Data ---
const unifiedMap = new Map([...itemMap, ...npcMap]);

// --- Link to related data ---
itemMap.forEach((item) => {
  item.sources = item.sources?.map((key) => unifiedMap.get(key)).filter(Boolean);
  item.drops = item.drops?.map((key) => unifiedMap.get(key)).filter(Boolean);
});

export const itemArray = Array.from(itemMap.values());
