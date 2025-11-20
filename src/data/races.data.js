import { assets } from '@assets';
import { RARITIES, TYPES } from './enums';

const raceImages = assets.images.races;

export const RACES = {
  human: {
    id: 1,
    attachment: raceImages.human,
    description:
      'A versatile race defined by adaptability and determination. Humans grow through perseverance rather than innate talent.',
    isGatcha: true,
    name: 'Human',
    rarity: RARITIES.common,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
  dwarf: {
    id: 2,
    attachment: raceImages.dwarf,
    description:
      'Stout warriors known for their endurance and craftsmanship. Dwarves thrive in the heat of battle and the depths of the forge.',
    isGatcha: true,
    name: 'Dwarf',
    rarity: RARITIES.uncommon,
    sources: ['raceReroll'],
    stats: {
      HP: '1.5x Multiplier',
    },
    type: TYPES.race,
  },
  reaper: {
    id: 3,
    attachment: raceImages.reaper,
    description:
      'Enigmatic beings who walk the line between life and death. Reapers are driven by an insatiable hunger for experience and mastery.',
    isGatcha: true,
    name: 'Reaper',
    rarity: RARITIES.rare,
    sources: ['raceReroll'],
    stats: {
      EXP: '1.5x Multiplier',
    },
    type: TYPES.race,
  },
  fishman: {
    id: 4,
    attachment: raceImages.fishman,
    description:
      'Children of the ocean with unmatched agility and strength. Fishmen move fluidly between land and sea, born for combat and speed.',
    isGatcha: true,
    name: 'Fishman',
    rarity: RARITIES.epic,
    sources: ['raceReroll'],
    stats: {
      DMG: '1.2x Multiplier',
      sprintSpeed: '1.6x Multiplier',
    },
    type: TYPES.race,
  },
  saiyan: {
    id: 5,
    attachment: raceImages.saiyan,
    description:
      'A proud warrior race born to fight. Saiyans thrive in battle, pushing past their limits to achieve unparalleled might.',
    isGatcha: true,
    name: 'Saiyan',
    rarity: RARITIES.legendary,
    sources: ['raceReroll'],
    stats: {
      DMG: '1.6x Multiplier',
    },
    type: TYPES.race,
  },
  hollow: {
    id: 6,
    attachment: raceImages.hollow,
    description:
      'Twisted souls consumed by darkness. Hollows embody destruction and chaos, feeding on the essence of the fallen.',
    isGatcha: true,
    name: 'Hollow',
    rarity: RARITIES.mythical,
    sources: ['raceReroll'],
    stats: {
      DMG: '1.4x Multiplier',
      HP: '1.4x Multiplier',
    },
    type: TYPES.race,
  },
  angel: {
    id: 7,
    attachment: raceImages.angel,
    description: `Celestial beings of light and virtue. Angels channel divine energy that grows radiant under the sun's embrace.`,
    isGatcha: true,
    name: 'Angel',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    stats: {
      DMG: '2.25x Multiplier during daytime',
    },
    type: TYPES.race,
  },
  demon: {
    id: 8,
    attachment: raceImages.demon,
    description:
      'Embodiments of chaos and shadow. Demons draw strength from darkness, thriving when night descends upon the world.',
    isGatcha: true,
    name: 'Demon',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    stats: {
      DMG: '2.25x Multiplier during nighttime',
    },
    type: TYPES.race,
  },
  abaddon: {
    id: 9,
    attachment: raceImages.abaddon,
    description:
      'Harbingers of destruction and despair. Abaddons embody relentless aggression, crushing everything in their path.',
    isGatcha: true,
    name: 'Abaddon',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    stats: {
      DMG: '1.85x Multiplier',
      sprintSpeed: '1.25x Multiplier',
    },
    type: TYPES.race,
  },
  cleaner: {
    id: 10,
    attachment: raceImages.cleaner,
    description:
      'Silent executors who maintain balance through precision and discipline. Cleaners strike efficiently, leaving no trace behind.',
    isGatcha: true,
    name: 'Cleaner',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    stats: {
      DMG: '2x Multiplier',
      EXP: '1.25x Multiplier',
    },
    type: TYPES.race,
  },
  fullbringer: {
    id: 11,
    attachment: raceImages.fullbringer,
    description:
      'Spiritual warriors who draw power from their very essence. Fullbringers manipulate their surroundings with refined control and instinct.',
    isGatcha: true,
    name: 'Fullbringer',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    stats: {
      DMG: '2.5x Multiplier',
      EXP: '1.5x Multiplier',
    },
    type: TYPES.race,
  },
  werewolf: {
    id: 12,
    attachment: raceImages.werewolf,
    description: `Beasts bound by the moon's curse. Werewolves embody primal rage and hunger, transforming into unstoppable hunters under its glow.`,
    isGatcha: true,
    name: 'Werewolf',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    stats: {
      DMG: '3x Multiplier',
      EXP: '2x Multiplier',
    },
    type: TYPES.race,
  },
};
