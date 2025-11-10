import { WORLD_FEATURES, ITEMS } from '@data';

// --- Main Data ---
const worldFeatureMap = new Map(Object.entries(WORLD_FEATURES));
// --- Related Data ---
const itemMap = new Map(Object.entries(ITEMS));

// --- Link to related data ---
worldFeatureMap.forEach((item) => {
  item.drops = item.drops?.map((key) => itemMap.get(key)).filter(Boolean);
});

export const worldFeatureArray = Array.from(worldFeatureMap.values());
