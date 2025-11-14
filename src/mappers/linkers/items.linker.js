import { ITEMS, NPCS, WORLD_FEATURES } from '@data';
import { generateUniqueKey } from '@helpers';

export const linkItems = (allData) => {
  const { items, npcs, worldFeatures } = allData;
  
  // Create a single unified map with all possible sources/drops, using the unique key
  const unifiedMap = new Map();
  [...items, ...npcs, ...worldFeatures].forEach(item => {
    const uniqueKey = generateUniqueKey(item);
    if (uniqueKey) unifiedMap.set(uniqueKey, item);
  });

  // Create a translation map from the original string key to the new unique key
  const stringKeyToUniqueKeyMap = new Map();
  const rawDataSource = { ...ITEMS, ...NPCS, ...WORLD_FEATURES };
  Object.entries(rawDataSource).forEach(([stringKey, rawObject]) => {
    stringKeyToUniqueKeyMap.set(stringKey, generateUniqueKey(rawObject));
  });

  return items.map(baseItem => {
    const originalItem = Object.values(ITEMS).find(i => i.id === baseItem.id);
    if (!originalItem) return null;

    const linkedItem = { ...baseItem };

    // Link sources if they exist
    if (originalItem.sources) {
      linkedItem.sources = originalItem.sources
        .map(stringKey => unifiedMap.get(stringKeyToUniqueKeyMap.get(stringKey)))
        .filter(Boolean);
    }
    
    // Link drops if they exist
    if (originalItem.drops) {
      linkedItem.drops = originalItem.drops
        .map(stringKey => unifiedMap.get(stringKeyToUniqueKeyMap.get(stringKey)))
        .filter(Boolean);
    }
    
    return linkedItem;
  }).filter(Boolean);
};