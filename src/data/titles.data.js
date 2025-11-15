import { assets } from '@assets';
import { TYPES } from './enums';

const titleImages = assets.images.titles;

export const TITLES = {
  beginner: {
    id: 1,
    attachment: titleImages.beginner,
    description:
      'Granted to those who have completed 7 side quests — the first step on a long and perilous journey.',
    name: 'Beginner',
    sources: ['eoka'],
    stats: {
      EXP: '1.2x Multiplier',
      crystal: '1.1x Multiplier',
    },
    type: TYPES.title,
  },
  novice: {
    id: 2,
    attachment: titleImages.novice,
    description: 'Earned by completing 10 side quests. A mark of growing experience and newfound confidence.',
    name: 'Novice',
    sources: ['eoka'],
    stats: {
      EXP: '1.5x Multiplier',
      crystal: '1.4x Multiplier',
    },
    type: TYPES.title,
  },
  master: {
    id: 3,
    attachment: titleImages.master,
    description: 'Awarded to those who have slain their first world boss and reached level 1,100 — proof of mastery and strength.',
    name: 'Master',
    sources: ['eoka'],
    stats: {
      EXP: '1.8x Multiplier',
      crystal: '1.65x Multiplier',
    },
    type: TYPES.title,
  },
  windLord: {
    id: 4,
    attachment: titleImages.windLord,
    description: 'Bestowed upon the one who has defeated Yuno [World Boss] 25 times — a title carried by those who command the skies.',
    name: 'Wind Lord',
    sources: ['eoka'],
    stats: {
      EXP: '2.05x Multiplier',
      crystal: '1.9x Multiplier',
    },
    type: TYPES.title,
  },
  betrayer: {
    id: 5,
    attachment: titleImages.betrayer,
    description: 'Earned by slaying Aizen [World Boss] 25 times. This title is whispered among those who turn against fate itself.',
    name: 'Betrayer',
    sources: ['eoka'],
    stats: {
      EXP: '2.25x Multiplier',
      crystal: '2.1x Multiplier',
    },
    type: TYPES.title,
  },
  dragonSlayer: {
    id: 6,
    attachment: titleImages.dragonSlayer,
    description: 'Awarded to those who have slain Natsu [World Boss] 50 times — proof of dominion over fire and fury.',
    name: 'Dragon Slayer',
    sources: ['eoka'],
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
      'Granted to those who have defeated Toji [World Boss] 50 times and reached 100 stacks of Soul Devourer. A relentless hunter with an unyielding thirst.',
    name: 'Blood Hound',
    sources: ['eoka'],
    stats: {
      EXP: '3x Multiplier',
      crystal: '2.8x Multiplier',
    },
    type: TYPES.title,
  },
  sunAndMoon: {
    id: 8,
    attachment: titleImages.sunAndMoon,
    description: 'Earned by defeating both Yoriichi [World Boss] and Kokushibo [World Boss] 12 times each — a balance of radiant light and eternal shadow.',
    name: 'Sun & Moon',
    sources: ['eoka'],
    stats: {
      EXP: '3.3x Multiplier',
      crystal: '3.15x Multiplier',
    },
    type: TYPES.title,
  },
  fullMoon: {
    id: 9,
    attachment: titleImages.fullMoon,
    description: 'Granted to the one who has slain Death [World Boss] 20 times — a being who has faced mortality and returned triumphant.',
    name: 'Full Moon',
    sources: ['eoka'],
    stats: {
      EXP: '4.2x Multiplier',
      crystal: '3.8x Multiplier',
    },
    type: TYPES.title,
  },
};
