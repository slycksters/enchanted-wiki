import { TYPES } from '@data';
import { sortByRarity } from '@helpers';
import { DATA } from '@mappers';

const weapons = sortByRarity(DATA[TYPES.weapon.name], 'asc');
const specs = sortByRarity(DATA[TYPES.spec.name], 'asc');

export const CATEGORIES = [
  {
    id: 1,
    name: 'Specs',
    list: specs,
  },
  {
    id: 2,
    name: 'Weapons',
    list: weapons,
  },
];
