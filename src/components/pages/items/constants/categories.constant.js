import { ITEM_TYPES, TYPES } from '@data';
import { DATA } from '@mappers';

const items = DATA[TYPES.item.name];
const accessories = items.filter(
  (item) => item.itemType.name === ITEM_TYPES.accessories.name
);
const materials = items.filter(
  (item) => item.itemType.name === ITEM_TYPES.materials.name
);

export const CATEGORIES = [
  {
    id: 1,
    name: 'Accessories',
    list: accessories,
  },
  {
    id: 2,
    name: 'Materials',
    list: materials,
  },
];
