import { ITEMS, PASSIVE_MAGICS } from '@data';

// --- Main Data ---
const passiveMagicMap = new Map(Object.entries(PASSIVE_MAGICS));
// --- Related Data
const itemMap = new Map(Object.entries(ITEMS));

// --- Link to related data ---
passiveMagicMap.forEach((item) => {
  item.sources = item.sources.map((key) => itemMap.get(key)).filter(Boolean);
});

export const passiveMagicArray = Array.from(passiveMagicMap.values());
