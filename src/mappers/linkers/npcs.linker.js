import {
  ISLANDS,
  ITEMS,
  MAGICS,
  NPCS,
  PASSIVE_SKILLS,
  SPECS,
  TRAITS,
  WEAPONS,
} from '@data';

// --- Main Data ---
const npcMap = new Map(Object.entries(NPCS));
// --- Related Data
const islandsMap = new Map(Object.entries(ISLANDS));
const itemMap = new Map(Object.entries(ITEMS));
const magicMap = new Map(Object.entries(MAGICS));
const passiveSkillMap = new Map(Object.entries(PASSIVE_SKILLS));
const specMap = new Map(Object.entries(SPECS));
const traitMap = new Map(Object.entries(TRAITS));
const weaponMap = new Map(Object.entries(WEAPONS));

// --- Combine All Related Data ---
const unifiedMap = new Map([
  ...itemMap,
  ...magicMap,
  ...npcMap,
  ...passiveSkillMap,
  ...specMap,
  ...traitMap,
  ...weaponMap,
]);

// --- Link to related data ---
npcMap.forEach((item) => {
  item.drops = item.drops
    ?.map((drop) => {
      if (typeof drop === 'string') {
        const object = unifiedMap.get(drop);
        return object ? { ...object, chance: null } : null;
      }

      const object = unifiedMap.get(drop.key);
      return object ? { ...object, chance: drop.chance } : null;
    })
    .filter(Boolean);

  item.ware = item.ware
    ?.map((w) => {
      // Find the ware object itself
      let object = unifiedMap.get(typeof w === 'string' ? w : w.key);
      if (w.name) object = w;
      else if (!object) return null;

      // Map requirements if they exist
      const requirements = w.requirements?.map((req) => {
        if (req.key) {
          const reqObject = unifiedMap.get(req.key);
          return reqObject
            ? { ...reqObject, quantity: req.quantity }
            : { key: req.key, quantity: req.quantity }; // fallback if not found
        }
        // For things like { name: 'Yen', quantity: 550000 }
        return req;
      });

      return {
        ...object,
        chance: object.isGatcha ? object.rarity?.rate : null,
        requirements,
      };
    })
    .filter(Boolean);

  item.locations = item.locations
    ?.map((key) => islandsMap.get(key))
    .filter(Boolean);
});

console.log(npcMap);

export const npcArray = Array.from(npcMap.values());
