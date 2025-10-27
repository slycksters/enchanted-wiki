import { passiveMagicRerollImg, raceRerollImg } from '../assets';
import { RARITIES } from './rarities.data';
import { TYPES } from './types.data';

export const ITEMS = {
  raceReroll: {
    id: 1,
    image: raceRerollImg,
    name: 'Race Reroll',
    rarity: RARITIES.legendary,
    sources: [],
    type: TYPES.item,
  },
  passiveMagicReroll: {
    id: 2,
    image: passiveMagicRerollImg,
    name: 'Passive Magic Reroll',
    rarity: RARITIES.mythical,
    sources: [],
    type: TYPES.item,
  },
};