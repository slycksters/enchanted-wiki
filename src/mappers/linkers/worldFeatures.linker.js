import { WORLD_FEATURES } from '@data';

// --- Main Data ---
const worldFeatureMap = new Map(Object.entries(WORLD_FEATURES));
// --- Related Data ---

// --- Link to related data ---

export const worldFeatureArray = Array.from(worldFeatureMap.values());
