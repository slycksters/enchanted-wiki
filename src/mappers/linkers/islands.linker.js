import { ISLANDS, NPCS } from '@data';
import { generateUniqueKey } from '@helpers';

export const linkIslands = (allData) => {
  const { islands, npcs } = allData;
  
  // Create a map of NPCs using the unique key for lookup
  const npcMap = new Map(
    npcs.map(npc => [generateUniqueKey(npc), npc]).filter(entry => entry[0])
  );

  // Create a translation map from the original string key (e.g., 'banditLeader') to the unique key
  const stringKeyToUniqueKeyMap = new Map();
  Object.entries(NPCS).forEach(([stringKey, rawObject]) => {
    stringKeyToUniqueKeyMap.set(stringKey, generateUniqueKey(rawObject));
  });

  return islands.map(baseIsland => {
    const originalIsland = Object.values(ISLANDS).find(i => i.id === baseIsland.id);
    if (!originalIsland?.inhabitants) {
      return baseIsland; // Return as-is if there are no inhabitants to link
    }
    
    // Link inhabitants by translating the string key to the unique key and looking it up
    const inhabitants = originalIsland.inhabitants
      .map(stringKey => {
        const uniqueKey = stringKeyToUniqueKeyMap.get(stringKey);
        return npcMap.get(uniqueKey);
      })
      .filter(Boolean);

    return { ...baseIsland, inhabitants };
  });
};