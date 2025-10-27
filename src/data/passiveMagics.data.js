import {
  divineRetributionPassiveMagicImg,
  frozenPassiveMagicImg,
  godSpeedPassiveMagicImg,
  lifeStealPassiveMagicImg,
  roarOfTheAbyssPassiveMagicImg,
  soulDevourerPassiveMagicImg,
  vortexOfRuinPassiveMagicImg,
} from '../assets';
import { ITEMS } from './items.data';
import { RARITIES } from './rarities.data';
import { TYPES } from './types.data';

export const PASSIVE_MAGICS = {
  frozen: {
    id: 1,
    descriptions: ['Gain freeze effect on hit, slowing the opponent'],
    image: frozenPassiveMagicImg,
    name: 'Frozen',
    rarity: RARITIES.epic,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  divineRetribution: {
    id: 2,
    descriptions: [
      'Gain divine effect on hit, causing to deal the same amount of damage as your M1',
    ],
    image: divineRetributionPassiveMagicImg,
    name: 'Divine Retribution',
    rarity: RARITIES.legendary,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  lifeSteal: {
    id: 3,
    descriptions: [
      'Gain life steal effect on hit, regenerates your HP when attacking',
    ],
    image: lifeStealPassiveMagicImg,
    name: 'Lifesteal',
    rarity: RARITIES.mythical,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  roarOfTheAbyss: {
    id: 4,
    descriptions: [
      'Gain DMG boost effect on hit, increasing your DMG multiplier',
    ],
    image: roarOfTheAbyssPassiveMagicImg,
    name: 'Roar of The Abyss',
    rarity: RARITIES.mythical,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  godSpeed: {
    id: 5,
    descriptions: [
      'Gain shock effect on hit, dealing more damage to an opponent',
    ],
    image: godSpeedPassiveMagicImg,
    name: 'Godspeed',
    rarity: RARITIES.exotic,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  vortexOfRuin: {
    id: 6,
    descriptions: [
      'Gain black hole effect on hit, dealing more damage to an opponent',
    ],
    image: vortexOfRuinPassiveMagicImg,
    name: 'Vortex of Ruin',
    rarity: RARITIES.exotic,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  soulDevourer: {
    id: 6,
    descriptions: [
      'Gain the ability to stack soul on kill, each stacks increases your DMG multiplier by 0.01.',
      'Default max stacks is 25, increase max souls by speaking to Reaper',
    ],
    image: soulDevourerPassiveMagicImg,
    name: 'Soul Devourer',
    rarity: RARITIES.exotic,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
};
