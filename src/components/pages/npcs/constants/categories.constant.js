import { NPC_TYPES, TYPES } from '@data';
import { DATA } from '@mappers';

const items = DATA[TYPES.npc.name];
const specialists = items.filter(
  (item) => item.npcType.name === NPC_TYPES.specialist.name
);
const worldBosses = items.filter(
  (item) => item.npcType.name === NPC_TYPES.worldBoss.name
);
const miniBosses = items.filter(
  (item) => item.npcType.name === NPC_TYPES.miniBoss.name
);

export const CATEGORIES = [
  {
    id: 1,
    name: 'Specialists',
    list: specialists,
  },
  {
    id: 2,
    name: 'World Bosses',
    list: worldBosses,
  },
  {
    id: 3,
    name: 'Mini Bosses',
    list: miniBosses,
  },
];
