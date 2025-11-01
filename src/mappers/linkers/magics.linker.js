import { MAGICS, NPCS } from '@data';

// --- Main Data ---
const magicMap = new Map(Object.entries(MAGICS));
// --- Related Data ---
const npcMap = new Map(Object.entries(NPCS));

// --- Link to related data ---
magicMap.forEach((item) => {
  item.sources = item.sources.map((key) => npcMap.get(key)).filter(Boolean);
});

export const magicArray = Array.from(magicMap.values());
