import { assets } from '@assets';
import { RARITIES, TYPES } from './enums';
import { ITEMS } from './items.data';

const passiveMagicImages = assets.images.passiveMagics;
const passiveMagicVideos = assets.videos.passiveMagics;

export const PASSIVE_MAGICS = {
  frozen: {
    id: 1,
    abilities: [
      {
        id: 1,
        attachment: passiveMagicVideos.frozen,
      },
    ],
    attachment: passiveMagicImages.frozen,
    description:
      'Gain a freeze effect on hit, slowing enemies and chilling their movements with icy precision.',
    isGatcha: true,
    name: 'Frozen',
    rarity: RARITIES.epic,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  divineRetribution: {
    id: 2,
    abilities: [
      {
        id: 1,
        attachment: passiveMagicVideos.divineRetribution,
      },
    ],
    attachment: passiveMagicImages.divineRetribution,
    description:
      'Gain a divine effect on hit, smiting enemies with holy retribution that mirrors the power of your attacks.',
    isGatcha: true,
    name: 'Divine Retribution',
    rarity: RARITIES.legendary,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  lifeSteal: {
    id: 3,
    abilities: [
      {
        id: 1,
        attachment: passiveMagicVideos.lifeSteal,
      },
    ],
    attachment: passiveMagicImages.lifeSteal,
    description: `Gain a life steal effect on hit, draining your enemy's vitality to restore your own health with every strike.`,
    isGatcha: true,
    name: 'Lifesteal',
    rarity: RARITIES.mythical,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  roarOfTheAbyss: {
    id: 4,
    attachment: passiveMagicImages.roarOfTheAbyss,
    description:
      'Channel the wrath of the abyss itself, amplifying your power with each strike as dark energy surges to multiply your damage beyond mortal limits.',
    isGatcha: true,
    name: 'Roar of The Abyss',
    rarity: RARITIES.mythical,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  godSpeed: {
    id: 5,
    abilities: [
      {
        id: 1,
        attachment: passiveMagicVideos.godSpeed,
      },
    ],
    attachment: passiveMagicImages.godSpeed,
    description:
      'Channel divine lightning on hit, inflicting a shock that amplifies your attacks and leaves enemies trembling in your wake.',
    isGatcha: true,
    name: 'Godspeed',
    rarity: RARITIES.exotic,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  vortexOfRuin: {
    id: 6,
    abilities: [
      {
        id: 1,
        attachment: passiveMagicVideos.vortexOfRuin,
      },
    ],
    attachment: passiveMagicImages.vortexOfRuin,
    description:
      'Unleash a swirling black hole upon impact, dragging enemies into the abyss and tearing them apart with unstoppable force.',
    isGatcha: true,
    name: 'Vortex of Ruin',
    rarity: RARITIES.exotic,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
  soulDevourer: {
    id: 7,
    abilities: [
      {
        id: 1,
        attachment: passiveMagicVideos.soulDevourer,
      },
    ],
    attachment: passiveMagicImages.soulDevourer,
    description:
      'Consume the souls of the fallen — each kill strengthens your power, <span>increasing your DMG multiplier by 0.01</span> per soul devoured.',
    isGatcha: true,
    name: 'Soul Devourer',
    rarity: RARITIES.exotic,
    sources: [ITEMS.passiveMagicReroll],
    type: TYPES.passiveMagic,
  },
};
