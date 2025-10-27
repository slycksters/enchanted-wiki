import { adamImg, monkeyDevelopsImg, reaperImg, shamImg } from '../assets';
import { NPC_TYPES } from './npcType.data';
import { TYPES } from './types.data';

export const NPCS = {
  sham: {
    id: 1,
    image: shamImg,
    locations: [],
    name: 'Sham',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
  reaper: {
    id: 2,
    image: reaperImg,
    locations: [],
    name: 'Reaper',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
  adam: {
    id: 3,
    image: adamImg,
    locations: [],
    name: 'Adam',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
  monkeyDevelops: {
    id: 4,
    image: monkeyDevelopsImg,
    locations: [],
    name: 'Monkey Develops',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
};