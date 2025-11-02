import { ISLANDS } from '@data';

// --- Main Data ---
const islandMap = new Map(Object.entries(ISLANDS));
// --- Related Data ---

// --- Link to related data ---
islandMap.forEach((item) => {
  // item.sources = item.sources.map((key) => npcMap.get(key)).filter(Boolean);
});

export const islandArray = Array.from(islandMap.values());
