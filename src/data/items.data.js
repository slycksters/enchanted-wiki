import { assets } from '@assets';
import { RARITIES, TYPES } from './enums';

const itemAssets = assets.images.items;

export const ITEMS = {
  raceReroll: {
    id: 1,
    attachment: itemAssets.raceReroll,
    name: 'Race Reroll',
    rarity: RARITIES.legendary,
    sources: [],
    type: TYPES.item,
  },
  passiveMagicReroll: {
    id: 2,
    attachment: itemAssets.passiveMagicReroll,
    name: 'Passive Magic Reroll',
    rarity: RARITIES.mythical,
    sources: [],
    type: TYPES.item,
  },
};