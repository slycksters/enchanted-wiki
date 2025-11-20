import { ITEM_TYPES, TYPES } from '@data';
import { sortByRarity } from '@helpers';
import { DATA } from '@mappers';

const items = sortByRarity(DATA[TYPES.item.name], 'asc');
const accessories = items.filter(
  (item) => item.subType.name === ITEM_TYPES.accessories.name
);
const artifacts = items.filter(
  (item) => item.subType.name === ITEM_TYPES.artifacts.name
);
const materials = items.filter(
  (item) => item.subType.name === ITEM_TYPES.materials.name
);

export const CATEGORIES = [
  {
    id: 1,
    name: 'Accessories',
    list: accessories,
  },
  {
    id: 2,
    name: 'Artifacts',
    list: artifacts,
  },
  {
    id: 3,
    name: 'Materials',
    list: materials,
  },
];
