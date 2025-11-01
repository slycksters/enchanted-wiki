import { ITEMS, NPCS } from '@data';

// --- Main Data ---
const itemMap = new Map(Object.entries(ITEMS));
// --- Related Data ---
const npcMap = new Map(Object.entries(NPCS));

// --- Link to related data ---
itemMap.forEach((item) => {
  if (item.sources?.length > 0) {
    item.sources = item.sources
      .map((key) => npcMap.get(key))
      .filter(Boolean);
  }
});

export const itemArray = Array.from(itemMap.values());
