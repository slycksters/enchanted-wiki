import { NPC_TYPES, TYPES } from '../../../../data/index.js';
import { sortArray } from '../../../../helpers/index.js';
import { DATA } from '../../../../mappers/index.js';

const items = DATA[TYPES.npc.name];
const miniBosses = items.filter(
  (item) => item.subType.name === NPC_TYPES.miniBoss.name
);
const mobs = items.filter(
  (item) => item.subType.name === NPC_TYPES.mob.name
);
const questGivers = items.filter(
  (item) => item.subType.name === NPC_TYPES.questGiver.name
);
const specialists = items.filter(
  (item) => item.subType.name === NPC_TYPES.specialist.name
);
const worldBosses = items.filter(
  (item) => item.subType.name === NPC_TYPES.worldBoss.name
);

export const CATEGORIES = [
  {
    id: 1,
    name: 'Specialists',
    list: sortArray(specialists, 'name', 'asc'),
  },
  {
    id: 2,
    name: 'Quest Givers',
    list: sortArray(questGivers, 'level', 'asc'),
  },
  {
    id: 3,
    name: 'Mobs',
    list: sortArray(mobs, 'level', 'asc'),
  },
  {
    id: 4,
    name: 'Mini Bosses',
    list: sortArray(miniBosses, 'level', 'asc'),
  },
  {
    id: 5,
    name: 'World Bosses',
    list: sortArray(worldBosses, 'name', 'asc'),
  },
];
