import { NPCS, TRAITS } from '@data';

// --- Main Data ---
const traitMap = new Map(Object.entries(TRAITS));
// --- Related Data ---
const npcMap = new Map(Object.entries(NPCS));

// --- Link to related data ---
traitMap.forEach((item) => {
  item.sources = item.sources.map((key) => npcMap.get(key)).filter(Boolean);
});

export const traitArray = Array.from(traitMap.values());
