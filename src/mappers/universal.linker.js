/**
 * Links an array of ware objects, handling requirements and custom items.
 * @param {object[]} wares - Array of ware objects.
 * @param {object} maps - The lookup maps.
 * @returns {object[]|null} The array of linked ware objects, or null if empty.
 */
const _linkWareArray = (wares, maps) => {
  if (!Array.isArray(wares) || wares.length === 0) return null;

  const linkedWares = wares
    .map(ware => {
      // Handle custom wares without a key (e.g., 'Max Quest')
      if (ware.name && !ware.key) {
        return { ...ware };
      }

      const wareObject = maps.unifiedMap.get(maps.stringKeyToUniqueKeyMap.get(ware.key));
      if (!wareObject) return null;

      const linkedWare = { ...wareObject };

      // Link nested requirements
      if (ware.requirements) {
        linkedWare.requirements = ware.requirements.map(req => {
          if (req.key) {
            const reqObject = maps.unifiedMap.get(maps.stringKeyToUniqueKeyMap.get(req.key));
            return reqObject ? { ...reqObject, quantity: req.quantity } : req;
          }
          return req; // Pass through non-keyed requirements
        });
      }
      
      linkedWare.chance = linkedWare.isGatcha ? linkedWare.rarity?.rate : null;
      return linkedWare;
    })
    .filter(Boolean);
    
  return linkedWares.length > 0 ? linkedWares : null;
};

/**
 * Links an array of location keys to their corresponding island objects.
 * @param {string[]} keys - Array of island string keys.
 * @param {object} maps - The lookup maps containing islandMap.
 * @returns {object[]|null} The array of linked island objects, or null if empty.
 */
const _linkLocationsArray = (keys, maps) => {
    if (!Array.isArray(keys) || keys.length === 0) return null;
    
    const linkedLocations = keys
      .map(key => maps.islandMap.get(maps.islandKeyToIdMap.get(key)))
      .filter(Boolean);

    return linkedLocations.length > 0 ? linkedLocations : null;
}

/**
 * A powerful, generalized linker for arrays. It intelligently handles two common formats:
 * 1. An array of simple strings (e.g., ['key1', 'key2']).
 * 2. An array of objects that include a `key` property (e.g., [{ key: 'key1', chance: 50 }]).
 *    In this case, it merges the original object's properties (like 'chance') onto the linked object.
 * This function covers 'sources', 'drops', 'related', 'inhabitants', etc.
 * @param {(string[]|object[])} items - The array of strings or objects to link.
 * @param {object} maps - The shared lookup maps.
 * @returns {object[]|null} The array of linked objects, or null if the result is empty.
 */
const _linkArray = (items, maps) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  const firstItem = items[0];
  let linkedItems;

  // Case 1: The array contains simple string keys.
  if (typeof firstItem === 'string') {
    linkedItems = items
      .map(key => maps.unifiedMap.get(maps.stringKeyToUniqueKeyMap.get(key)))
      .filter(Boolean);
  }
  // Case 2: The array contains objects with a `.key` property.
  else if (typeof firstItem === 'object' && firstItem !== null && firstItem.key) {
    linkedItems = items
      .map(item => {
        const linkedObject = maps.unifiedMap.get(maps.stringKeyToUniqueKeyMap.get(item.key));
        // Merge original properties (like `chance`) onto the linked object.
        return linkedObject ? { ...linkedObject, ...item } : null;
      })
      .filter(Boolean);
  }
  // If format is unknown or invalid, treat as empty.
  else {
    linkedItems = [];
  }

  return linkedItems.length > 0 ? linkedItems : null;
};


// A map of property names to their specialized linking function.
const LINKER_STRATEGY = {
  ware: _linkWareArray,
  locations: _linkLocationsArray,
  // The default strategy now handles drops, sources, related, etc.
  default: _linkArray,
};

/**
 * A universal linker that processes an array of data objects based on a configuration.
 * @param {object[]} data - The array of slug-ified data to process (e.g., rawData.npcs).
 * @param {object} rawDataSource - The original, unprocessed data source (e.g., NPCS).
 * @param {string[]} propertiesToLink - An array of property names to link (e.g., ['sources', 'drops', 'related']).
 * @param {object} maps - The shared lookup maps.
 * @returns {object[]} The fully linked data array.
 */
export const universalLinker = (data, rawDataSource, propertiesToLink, maps) => {
  const rawDataMap = new Map(Object.values(rawDataSource).map(item => [item.id, item]));

  return data
    .map(baseItem => {
      const originalItem = rawDataMap.get(baseItem.id);
      if (!originalItem) return null;

      const linkedItem = { ...baseItem };

      for (const prop of propertiesToLink) {
        if (originalItem[prop]) {
          const linkerFn = LINKER_STRATEGY[prop] || LINKER_STRATEGY.default;
          const linkedData = linkerFn(originalItem[prop], maps);
          
          // CRITICAL CHANGE: Only add the property if its linked data is not null.
          if (linkedData !== null) {
            linkedItem[prop] = linkedData;
          }
        }
      }
      return linkedItem;
    })
    .filter(Boolean);
};