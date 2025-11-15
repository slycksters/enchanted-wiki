import {
  ITEMS,
  MAGICS,
  NPCS,
  WORLD_FEATURES,
} from '@data';
import { generateUniqueKey } from '@helpers';

export const linkWorldFeatures = (allData) => {
  const { worldFeatures, items, magics, npcs } = allData;

  // --- Step 1: Create a single unified map with all linkable entities ---
  const allLinkableData = [
    ...items,
    ...magics,
    ...npcs,
    ...worldFeatures,
  ];

  const unifiedMap = new Map(
    allLinkableData
      .map((item) => {
        const uniqueKey = generateUniqueKey(item);
        return uniqueKey ? [uniqueKey, item] : null;
      })
      .filter(Boolean)
  );

  // --- Step 2: Create a translation map (raw string key -> unique key) ---
  const stringKeyToUniqueKeyMap = new Map();
  const rawLinkableDataObjects = {
    ...ITEMS,
    ...MAGICS,
    ...NPCS,
    ...WORLD_FEATURES,
  };

  Object.entries(rawLinkableDataObjects).forEach(([stringKey, rawObject]) => {
    const uniqueKey = generateUniqueKey(rawObject);
    if (uniqueKey) {
      stringKeyToUniqueKeyMap.set(stringKey, uniqueKey);
    }
  });

  // --- Step 3: Process each WorldFeature to link drops & related ---
  return worldFeatures
    .map((baseWF) => {
      // find original raw object by id to access string-key arrays
      const originalWF = Object.values(WORLD_FEATURES).find(
        (w) => w.id === baseWF.id
      );
      if (!originalWF) return null;

      const linked = { ...baseWF };

      // Link drops (items)
      if (Array.isArray(originalWF.drops)) {
        const drops = originalWF.drops
          .map((dropKey) => {
            const uniqueKey = stringKeyToUniqueKeyMap.get(dropKey);
            return uniqueKey ? unifiedMap.get(uniqueKey) : null;
          })
          .filter(Boolean);

        if (drops.length > 0) {
          linked.drops = drops;
        }
      }

      // Link related (could point to NPCS or other world features or items)
      if (Array.isArray(originalWF.related)) {
        const related = originalWF.related
          .map((relKey) => {
            const uniqueKey = stringKeyToUniqueKeyMap.get(relKey);
            return uniqueKey ? unifiedMap.get(uniqueKey) : null;
          })
          .filter(Boolean);

        if (related.length > 0) {
          linked.related = related;
        }
      }

      return linked;
    })
    .filter(Boolean);
};
