import { PASSIVE_SKILLS, PASSIVE_MAGICS, NPCS } from '@data';
import { generateUniqueKey } from '@helpers';

export const linkPassiveSkills = (allData) => {
  const { passiveSkills, passiveMagics, npcs } = allData;

  // --- Step 1: Build unified map (anything a passive skill can link to) ---
  const allLinkableData = [
    ...npcs,
    ...passiveMagics,
    ...passiveSkills,
  ];

  const unifiedMap = new Map(
    allLinkableData
      .map((item) => {
        const key = generateUniqueKey(item);
        return key ? [key, item] : null;
      })
      .filter(Boolean)
  );

  // --- Step 2: Build translation map from raw string key -> unique key ---
  const stringKeyToUniqueKeyMap = new Map();
  const rawLinkableDataObjects = {
    ...NPCS,
    ...PASSIVE_MAGICS,
    ...PASSIVE_SKILLS,
  };

  Object.entries(rawLinkableDataObjects).forEach(([stringKey, rawData]) => {
    const uniqueKey = generateUniqueKey(rawData);
    if (uniqueKey) {
      stringKeyToUniqueKeyMap.set(stringKey, uniqueKey);
    }
  });

  // --- Step 3: Link each passive skill ---
  return passiveSkills
    .map((baseSkill) => {
      const originalSkill = Object.values(PASSIVE_SKILLS).find(
        (s) => s.id === baseSkill.id
      );

      if (!originalSkill) return null;

      const linked = { ...baseSkill };

      // --- Link sources ---
      if (Array.isArray(originalSkill.sources)) {
        const sources = originalSkill.sources
          .map((key) => {
            const uniqueKey = stringKeyToUniqueKeyMap.get(key);
            return uniqueKey ? unifiedMap.get(uniqueKey) : null;
          })
          .filter(Boolean);

        if (sources.length > 0) {
          linked.sources = sources;
        }
      }

      // --- Link related ---
      if (Array.isArray(originalSkill.related)) {
        const related = originalSkill.related
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
