import { PASSIVE_MAGICS, PASSIVE_SKILLS, ITEMS } from '@data';
import { generateUniqueKey } from '@helpers';

export const linkPassiveMagics = (allData) => {
  const { passiveMagics, passiveSkills, items } = allData;

  // --- Step 1: All linkable data (anything a passive magic can refer to) ---
  const allLinkableData = [
    ...items,
    ...passiveSkills,
    ...passiveMagics
  ];

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
  const rawLinkableDataObjects = {
    ...ITEMS,
    ...PASSIVE_SKILLS,
    ...PASSIVE_MAGICS
  };

  Object.entries(rawLinkableDataObjects).forEach(([stringKey, rawData]) => {
    const uniqueKey = generateUniqueKey(rawData);
    if (uniqueKey) {
      stringKeyToUniqueKeyMap.set(stringKey, uniqueKey);
    }
  });

  // --- Step 3: Link each Passive Magic ---
  return passiveMagics
    .map((baseMagic) => {
      const originalMagic = Object.values(PASSIVE_MAGICS).find(
        (m) => m.id === baseMagic.id
      );

      if (!originalMagic) return null;

      const linked = { ...baseMagic };

      // ---- Link Sources ----
      if (Array.isArray(originalMagic.sources)) {
        const sources = originalMagic.sources
          .map((key) => {
            const uniqueKey = stringKeyToUniqueKeyMap.get(key);
            return uniqueKey ? unifiedMap.get(uniqueKey) : null;
          })
          .filter(Boolean);

        if (sources.length > 0) {
          linked.sources = sources;
        }
      }

      // ---- Link Related ----
      if (Array.isArray(originalMagic.related)) {
        const related = originalMagic.related
          .map((key) => {
            const uniqueKey = stringKeyToUniqueKeyMap.get(key);
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
