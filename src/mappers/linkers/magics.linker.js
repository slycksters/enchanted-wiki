import { MAGICS, NPCS } from '@data';
import { generateUniqueKey } from '@helpers';

export const linkMagics = (allData) => {
  const { magics, npcs } = allData;
  
  const npcMap = new Map(npcs.map(n => [generateUniqueKey(n), n]).filter(e => e[0]));
  const stringKeyToUniqueKeyMap = new Map(
    Object.entries(NPCS).map(([key, obj]) => [key, generateUniqueKey(obj)])
  );

  return magics.map(baseMagic => {
    const originalMagic = Object.values(MAGICS).find(m => m.id === baseMagic.id);
    if (!originalMagic?.sources) return baseMagic;

    const sources = originalMagic.sources
      .map(key => npcMap.get(stringKeyToUniqueKeyMap.get(key)))
      .filter(Boolean);
      
    return { ...baseMagic, sources };
  });
};