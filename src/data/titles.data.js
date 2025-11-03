import { assets } from '@assets';
import { TYPES } from './enums';

const titleImages = assets.images.titles;

export const TITLES = {
  beginner: {
    id: 1,
    attachment: titleImages.beginner,
    description:
      'After finishing 7 side quests you will bestowed of the title Beginner.',
    name: 'Beginner',
    stats: {
      EXP: '1.2x Multiplier',
      crystal: '1.1x Multiplier',
    },
    type: TYPES.title,
  },
  novice: {
    id: 2,
    attachment: titleImages.novice,
    description: 'Obtain by completing 10 side quests.',
    name: 'Novice',
    stats: {
      EXP: '1.5x Multiplier',
      crystal: '1.4x Multiplier',
    },
    type: TYPES.title,
  },
  master: {
    id: 3,
    attachment: titleImages.master,
    description: 'Kill your first world boss and reach level 1100.',
    name: 'Master',
    stats: {
      EXP: '1.8x Multiplier',
      crystal: '1.65x Multiplier',
    },
    type: TYPES.title,
  },
  windLord: {
    id: 4,
    attachment: titleImages.windLord,
    description: 'Obtain by killing Yuno [World Boss] 25 times.',
    name: 'Wind Lord',
    stats: {
      EXP: '2.05x Multiplier',
      crystal: '1.9x Multiplier',
    },
    type: TYPES.title,
  },
  betrayer: {
    id: 5,
    attachment: titleImages.betrayer,
    description: 'Obtain by killing Aizen [World Boss] 25 times.',
    name: 'Betrayer',
    stats: {
      EXP: '2.25x Multiplier',
      crystal: '2.1x Multiplier',
    },
    type: TYPES.title,
  },
  dragonSlayer: {
    id: 6,
    attachment: titleImages.dragonSlayer,
    description: 'Obtain by killing Natsu [World Boss] 50 times.',
    name: 'Dragon Slayer',
    stats: {
      EXP: '2.5x Multiplier',
      crystal: '2.3x Multiplier',
    },
    type: TYPES.title,
  },
  bloodHound: {
    id: 7,
    attachment: titleImages.bloodHound,
    description:
      'Obtain by killing Toji [Dungeon Boss] 50 times and reaching 100 stacks with Soul Devourer.',
    name: 'Blood Hound',
    stats: {
      EXP: '3x Multiplier',
      crystal: '2.8x Multiplier',
    },
    type: TYPES.title,
  },
  sunAndMoon: {
    id: 8,
    attachment: titleImages.sunAndMoon,
    description: 'Obtain by killing Yoriichi and Kokushibo 12 each.',
    name: 'Sun & Moon',
    stats: {
      EXP: '3.3x Multiplier',
      crystal: '3.15x Multiplier',
    },
    type: TYPES.title,
  },
  fullMoon: {
    id: 9,
    attachment: titleImages.fullMoon,
    description: 'Obtain by killing Death 20 times.',
    name: 'Full Moon',
    stats: {
      EXP: '4.2x Multiplier',
      crystal: '3.8x Multiplier',
    },
    type: TYPES.title,
  },
};
