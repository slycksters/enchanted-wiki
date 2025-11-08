import { NPC_TYPES, TYPES } from '@data';
import { sortArray } from '@helpers';
import { DATA } from '@mappers';

const items = DATA[TYPES.npc.name];
const specialists = items.filter(
  (item) => item.subType.name === NPC_TYPES.specialist.name
);
const worldBosses = items.filter(
  (item) => item.subType.name === NPC_TYPES.worldBoss.name
);
const miniBosses = items.filter(
  (item) => item.subType.name === NPC_TYPES.miniBoss.name
);

export const CATEGORIES = [
  {
    id: 1,
    name: 'Specialists',
    list: sortArray(specialists, 'name', 'asc'),
  },
  {
    id: 2,
    name: 'World Bosses',
    list: sortArray(worldBosses, 'name', 'asc'),
  },
  {
    id: 3,
    name: 'Mini Bosses',
    list: sortArray(miniBosses, 'name', 'asc'),
  },
];
