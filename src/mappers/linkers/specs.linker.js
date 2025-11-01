import { NPCS, SPECS } from '@data';

// --- Main Data ---
const specMap = new Map(Object.entries(SPECS));
// --- Related Data ---
const npcMap = new Map(Object.entries(NPCS));

// --- Link to related data ---
specMap.forEach((item) => {
  item.sources = item.sources.map((key) => npcMap.get(key)).filter(Boolean);
});

export const specArray = Array.from(specMap.values());
