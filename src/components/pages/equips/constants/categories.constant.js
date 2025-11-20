import { TYPES } from '../../../../data/index.js';
import { sortByRarity } from '../../../../helpers/index.js';
import { DATA } from '../../../../mappers/index.js';

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
