import { PASSIVE_MAGICS, ITEMS } from '@data';
import { generateUniqueKey } from '@helpers';

export const linkPassiveMagics = (allData) => {
  const { passiveMagics, items } = allData;

  const itemMap = new Map(items.map(i => [generateUniqueKey(i), i]).filter(e => e[0]));
  const stringKeyToUniqueKeyMap = new Map(
    Object.entries(ITEMS).map(([key, obj]) => [key, generateUniqueKey(obj)])
  );

  return passiveMagics.map(baseItem => {
    const originalItem = Object.values(PASSIVE_MAGICS).find(i => i.id === baseItem.id);
    if (!originalItem?.sources) return baseItem;

    const sources = originalItem.sources
      .map(key => itemMap.get(stringKeyToUniqueKeyMap.get(key)))
      .filter(Boolean);
      
    return { ...baseItem, sources };
  });
};