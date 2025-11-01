import { assets } from '@assets';
import { RARITIES, TYPES } from './enums';

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
      'Applay a freeze effect with your attacks, slowing enemies and chilling their movements with icy precision.',
    isGatcha: true,
    name: 'Frozen',
    rarity: RARITIES.epic,
    sources: ['passiveMagicReroll'],
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
      'Apply a divine effect with your attacks, smiting enemies with holy retribution that mirrors the power of your attacks.',
    isGatcha: true,
    name: 'Divine Retribution',
    rarity: RARITIES.legendary,
    sources: ['passiveMagicReroll'],
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
    description: `Gain a life steal effect with your attacks, draining your enemy's vitality to restore your own health with every strike.`,
    isGatcha: true,
    name: 'Lifesteal',
    rarity: RARITIES.mythical,
    sources: ['passiveMagicReroll'],
    type: TYPES.passiveMagic,
  },
  roarOfTheAbyss: {
    id: 4,
    attachment: passiveMagicImages.roarOfTheAbyss,
    description:
      'Apply the wrath of the abyss when attacking, amplifying your power with each strike as dark energy surges to multiply your damage beyond mortal limits.',
    isGatcha: true,
    name: 'Roar of The Abyss',
    rarity: RARITIES.mythical,
    sources: ['passiveMagicReroll'],
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
      'Apply divine lightning with your attacks, inflicting a shock that amplifies your attacks and leaves enemies trembling in your wake.',
    isGatcha: true,
    name: 'Godspeed',
    rarity: RARITIES.exotic,
    sources: ['passiveMagicReroll'],
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
      'Apply a swirling black hole with your attacks, dragging enemies into the abyss and tearing them apart with unstoppable force.',
    isGatcha: true,
    name: 'Vortex of Ruin',
    rarity: RARITIES.exotic,
    sources: ['passiveMagicReroll'],
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
    sources: ['passiveMagicReroll'],
    type: TYPES.passiveMagic,
  },
};
