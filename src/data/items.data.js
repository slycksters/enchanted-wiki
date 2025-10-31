import { passiveMagicRerollImg, raceRerollImg } from '@assets';
import { RARITIES } from './enums/rarities';
import { TYPES } from './enums/types';

export const ITEMS = {
  raceReroll: {
    id: 1,
    attachment: raceRerollImg,
    name: 'Race Reroll',
    rarity: RARITIES.legendary,
    sources: [],
    type: TYPES.item,
  },
  passiveMagicReroll: {
    id: 2,
    attachment: passiveMagicRerollImg,
    name: 'Passive Magic Reroll',
    rarity: RARITIES.mythical,
    sources: [],
    type: TYPES.item,
  },
};