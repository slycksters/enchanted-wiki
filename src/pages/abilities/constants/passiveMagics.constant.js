import {
  divineRetributionPassiveMagicImg,
  frozenPassiveMagicImg,
  godSpeedPassiveMagicImg,
  lifeStealPassiveMagicImg,
  roarOfTheAbyssPassiveMagicImg,
  soulDevourerPassiveMagicImg,
  vortexOfRuinPassiveMagicImg,
} from '../../../assets';
import { RARITIES } from '../../../constants/rarities.constant';

export const PASSIVE_MAGICS = [
  {
    id: 1,
    descriptions: ['Gain freeze effect on hit, slowing the opponent'],
    image: frozenPassiveMagicImg,
    label: 'Frozen',
    rarity: RARITIES.epic.label,
    rate: RARITIES.epic.rate,
  },
  {
    id: 2,
    descriptions: [
      'Gain divine effect on hit, causing to deal the same amount of damage as your M1',
    ],
    image: divineRetributionPassiveMagicImg,
    label: 'Divine Retribution',
    rarity: RARITIES.legendary.label,
    rate: RARITIES.legendary.rate,
  },
  {
    id: 3,
    descriptions: [
      'Gain life steal effect on hit, regenerates your HP when attacking',
    ],
    image: lifeStealPassiveMagicImg,
    label: 'Lifesteal',
    rarity: RARITIES.mythical.label,
    rate: RARITIES.mythical.rate,
  },
  {
    id: 4,
    descriptions: [
      'Gain DMG boost effect on hit, increasing your DMG multiplier',
    ],
    image: roarOfTheAbyssPassiveMagicImg,
    label: 'Roar of The Abyss',
    rarity: RARITIES.mythical.label,
    rate: RARITIES.mythical.rate,
  },
  {
    id: 5,
    descriptions: [
      'Gain shock effect on hit, dealing more damage to an opponent',
    ],
    image: godSpeedPassiveMagicImg,
    label: 'Godspeed',
    rarity: RARITIES.exotic.label,
    rate: RARITIES.exotic.rate,
  },
  {
    id: 6,
    descriptions: [
      'Gain black hole effect on hit, dealing more damage to an opponent',
    ],
    image: vortexOfRuinPassiveMagicImg,
    label: 'Vortex of Ruin',
    rarity: RARITIES.exotic.label,
    rate: RARITIES.exotic.rate,
  },
  {
    id: 6,
    descriptions: [
      'Gain the ability to stack soul on kill, each stacks increases your DMG multiplier by 0.01.',
      'Default max stacks is 25, increase max souls by speaking to Reaper',
    ],
    image: soulDevourerPassiveMagicImg,
    label: 'Soul Devourer',
    rarity: RARITIES.exotic.label,
    rate: RARITIES.exotic.rate,
  },
];
