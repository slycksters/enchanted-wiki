import { TITLES } from '@data';

// --- Main Data ---
const titleMap = new Map(Object.entries(TITLES));
// --- Related Data ---

export const titleArray = Array.from(titleMap.values());
