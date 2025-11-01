import { NPCS, ITEMS } from '@data';

// --- Main Data ---
const npcMap = new Map(Object.entries(NPCS));
// --- Related Data

export const npcArray = Array.from(npcMap.values());
