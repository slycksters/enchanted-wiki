import { ITEMS, RACES } from '@data';

// --- Main Data ---
const raceSkillMap = new Map(Object.entries(RACES));
// --- Related Data
const itemMap = new Map(Object.entries(ITEMS));

// --- Link to related data ---
raceSkillMap.forEach((item) => {
  item.sources = item.sources.map((key) => itemMap.get(key)).filter(Boolean);
});

export const raceSkillArray = Array.from(raceSkillMap.values());
