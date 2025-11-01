import { NPCS, PASSIVE_SKILLS } from '@data';

// --- Main Data ---
const passiveSkillMap = new Map(Object.entries(PASSIVE_SKILLS));
// --- Related Data
const npcMap = new Map(Object.entries(NPCS));

// --- Link to related data ---
passiveSkillMap.forEach((item) => {
  item.sources = item.sources.map((key) => npcMap.get(key)).filter(Boolean);
});

export const passiveSkillArray = Array.from(passiveSkillMap.values());
