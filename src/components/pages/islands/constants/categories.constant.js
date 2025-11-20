import { TYPES } from '../../../../data/index.js';
import { DATA } from '../../../../mappers/index.js';

const islands = DATA[TYPES.island.name];
const majorLocations = islands.filter((item) => item.level);
const subLocations = islands.filter((item) => !item.level);

export const CATEGORIES = [
  {
    id: 1,
    name: 'Major Locations',
    list: majorLocations,
  },
  {
    id: 2,
    name: 'Sub Locations',
    list: subLocations,
  },
];
