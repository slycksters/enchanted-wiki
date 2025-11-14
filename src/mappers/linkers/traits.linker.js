import { TRAITS, NPCS } from '@data';
import { generateUniqueKey } from '@helpers';

export const linkTraits = (allData) => {
  const { traits, npcs } = allData;

  const npcMap = new Map(npcs.map(n => [generateUniqueKey(n), n]).filter(e => e[0]));
  const stringKeyToUniqueKeyMap = new Map(
    Object.entries(NPCS).map(([key, obj]) => [key, generateUniqueKey(obj)])
  );
  
  return traits.map(baseItem => {
    const originalItem = Object.values(TRAITS).find(i => i.id === baseItem.id);
    if (!originalItem?.sources) return baseItem;

    const sources = originalItem.sources
      .map(key => npcMap.get(stringKeyToUniqueKeyMap.get(key)))
      .filter(Boolean);
      
    return { ...baseItem, sources };
  });
};