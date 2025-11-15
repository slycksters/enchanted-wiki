import { MAGICS, NPCS, WORLD_FEATURES } from '@data';
import { generateUniqueKey } from '@helpers';

export const linkMagics = (allData) => {
  const { magics, npcs, worldFeatures } = allData;

  // --- Step 1: Prepare all linkable entities ---
  const allLinkableData = [...npcs, ...worldFeatures];

  const unifiedMap = new Map(
    allLinkableData
      .map((item) => {
        const key = generateUniqueKey(item);
        return key ? [key, item] : null;
      })
      .filter(Boolean)
  );

  // --- Step 2: Build translation map (raw string key -> unique key) ---
  const stringKeyToUniqueKeyMap = new Map();
  const rawLinkableDataObjects = { ...NPCS, ...WORLD_FEATURES };

  Object.entries(rawLinkableDataObjects).forEach(([stringKey, rawData]) => {
    const key = generateUniqueKey(rawData);
    if (key) {
      stringKeyToUniqueKeyMap.set(stringKey, key);
    }
  });

  // --- Step 3: Link each Magic object ---
  return magics.map((baseMagic) => {
    const originalMagic = Object.values(MAGICS).find(
      (m) => m.id === baseMagic.id
    );

    if (!originalMagic) return baseMagic;

    const output = { ...baseMagic };

    // ----- SOURCES -----
    if (Array.isArray(originalMagic.sources)) {
      const sources = originalMagic.sources
        .map((srcKey) => {
          const uniqueKey = stringKeyToUniqueKeyMap.get(srcKey);
          return uniqueKey ? unifiedMap.get(uniqueKey) : null;
        })
        .filter(Boolean);

      if (sources.length > 0) {
        output.sources = sources;
      }
    }

    // ----- RELATED -----
    if (Array.isArray(originalMagic.related)) {
      const related = originalMagic.related
        .map((relKey) => {
          const uniqueKey = stringKeyToUniqueKeyMap.get(relKey);
          return uniqueKey ? unifiedMap.get(uniqueKey) : null;
        })
        .filter(Boolean);

      // Only include `related` if we found at least 1 valid match
      if (related.length > 0) {
        output.related = related;
      }
    }

    return output;
  });
};
