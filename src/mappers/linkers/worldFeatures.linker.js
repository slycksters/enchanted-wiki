import { WORLD_FEATURES, ITEMS } from '@data';
import { generateUniqueKey } from '@helpers';

export const linkWorldFeatures = (allData) => {
  const { worldFeatures, items } = allData;

  const itemMap = new Map(items.map(i => [generateUniqueKey(i), i]).filter(e => e[0]));
  const stringKeyToUniqueKeyMap = new Map(
    Object.entries(ITEMS).map(([key, obj]) => [key, generateUniqueKey(obj)])
  );

  return worldFeatures.map(baseItem => {
    const originalItem = Object.values(WORLD_FEATURES).find(i => i.id === baseItem.id);
    if (!originalItem?.drops) return baseItem;

    const drops = originalItem.drops
      .map(key => itemMap.get(stringKeyToUniqueKeyMap.get(key)))
      .filter(Boolean);
      
    return { ...baseItem, drops };
  });
};