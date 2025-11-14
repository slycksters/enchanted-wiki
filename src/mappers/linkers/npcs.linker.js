import { ISLANDS, ITEMS, MAGICS, NPCS, PASSIVE_SKILLS, SPECS, TRAITS, WEAPONS } from '@data';
import { generateUniqueKey } from '@helpers';

export const linkNpcs = (allData) => {
  const { npcs, islands, items, magics, passiveSkills, specs, traits, weapons } = allData;

  // --- Step 1: Create a single unified map with all linkable entities ---
  // This map uses our new unique key.
  const allLinkableData = [
    ...items, ...magics, ...passiveSkills, ...specs, ...traits, ...weapons
  ];
  const unifiedMap = new Map(
    allLinkableData.map(item => {
      const uniqueKey = generateUniqueKey(item);
      return uniqueKey ? [uniqueKey, item] : null;
    }).filter(Boolean)
  );

  // --- Step 2: Create a translation map ---
  // This maps the original string key (e.g., 'banditLeader') to its new unique key.
  const stringKeyToUniqueKeyMap = new Map();
  const rawLinkableDataObjects = {
    ...ITEMS, ...MAGICS, ...PASSIVE_SKILLS, ...SPECS, ...TRAITS, ...WEAPONS
  };
  Object.entries(rawLinkableDataObjects).forEach(([stringKey, rawObject]) => {
    const uniqueKey = generateUniqueKey(rawObject);
    if (uniqueKey) {
      stringKeyToUniqueKeyMap.set(stringKey, uniqueKey);
    }
  });

  // --- Step 3: Set up location linking (this part is simpler) ---
  const islandKeyToIdMap = new Map(Object.entries(ISLANDS).map(([k, v]) => [k, v.id]));
  const islandMap = new Map(islands.map(i => [i.id, i]));

  // --- Step 4: Process each NPC to link its data ---
  return npcs.map(baseNpc => {
    // Find the original raw NPC object to get its arrays of string keys
    const originalNpc = Object.values(NPCS).find(n => n.id === baseNpc.id);
    if (!originalNpc) return null;

    // Start with a fresh copy of the slug-ified NPC to avoid mutation
    const linkedNpc = { ...baseNpc };

    // Link Drops
    if (originalNpc.drops) {
      linkedNpc.drops = originalNpc.drops.map(drop => {
        const uniqueKey = stringKeyToUniqueKeyMap.get(drop.key);
        const object = unifiedMap.get(uniqueKey);
        // Return a *new* object with the chance property added
        return object ? { ...object, chance: drop.chance } : null;
      }).filter(Boolean);
    }
    
    // Link Wares (the most complex part)
    if (originalNpc.ware) {
      linkedNpc.ware = originalNpc.ware.map(w => {
        // Handle custom wares like 'Max Quest' that don't have a key
        if (w.name && !w.key) {
          // This is a custom object, just copy it and its requirements
          return { ...w };
        }

        const uniqueKey = stringKeyToUniqueKeyMap.get(w.key);
        const wareObject = unifiedMap.get(uniqueKey);
        if (!wareObject) return null;

        // Create a copy to add requirements to
        const linkedWare = { ...wareObject };
        
        // Link the requirements *inside* the ware object
        if (w.requirements) {
          linkedWare.requirements = w.requirements.map(req => {
            if (req.key) {
              const reqUniqueKey = stringKeyToUniqueKeyMap.get(req.key);
              const reqObject = unifiedMap.get(reqUniqueKey);
              return reqObject ? { ...reqObject, quantity: req.quantity } : req;
            }
            return req; // Pass through non-keyed requirements (e.g., Yen, Crystal)
          });
        }
        
        linkedWare.chance = linkedWare.isGatcha ? linkedWare.rarity?.rate : null;
        return linkedWare;
      }).filter(Boolean);
    }

    // Link Locations
    if (originalNpc.locations) {
      linkedNpc.locations = originalNpc.locations.map(key => {
        const id = islandKeyToIdMap.get(key);
        return islandMap.get(id);
      }).filter(Boolean);
    }
    
    return linkedNpc;
  }).filter(Boolean);
};