import { assets } from '@assets';
import { RARITIES, TYPES } from './enums';

const raceImages = assets.images.races;

export const RACES = {
  human: {
    id: 1,
    attachment: raceImages.human,
    description:
      'A race without any innate abilities or bonus stats. Humans rely solely on skill and determination to grow stronger.',
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
      'Sturdy and resilient. Dwarves possess a <span>1.50x HP multiplier</span>, granting them exceptional durability in battle.',
    isGatcha: true,
    name: 'Dwarf',
    rarity: RARITIES.uncommon,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
  reaper: {
    id: 3,
    attachment: raceImages.reaper,
    description:
      'Masters of death and experience. Reapers gain a <span>1.50x EXP multiplier</span>, allowing them to grow stronger faster than other races.',
    isGatcha: true,
    name: 'Reaper',
    rarity: RARITIES.rare,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
  fishman: {
    id: 4,
    attachment: raceImages.fishman,
    description:
      'Born of the sea, Fishmen possess exceptional agility and strength. Gain a <span>1.20x DMG multiplier and 1.6x sprint speed bonus</span>.',
    isGatcha: true,
    name: 'Fishman',
    rarity: RARITIES.epic,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
  saiyan: {
    id: 5,
    attachment: raceImages.saiyan,
    description:
      'A warrior race born for battle. Saiyans possess a <span>1.60x DMG multiplier</span>, granting them exceptional offensive strength.',
    isGatcha: true,
    name: 'Saiyan',
    rarity: RARITIES.legendary,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
  hollow: {
    id: 6,
    attachment: raceImages.hollow,
    description:
      'Corrupted souls consumed by darkness. Hollows gain a <span>1.40x DMG and 1.40x HP multiplier</span>, making them both powerful and resilient in battle.',
    isGatcha: true,
    name: 'Hollow',
    rarity: RARITIES.mythical,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
  angel: {
    id: 7,
    attachment: raceImages.angel,
    description:
      'Beings of light and purity. Angels gain a <span>2.25x DMG multiplier during daytime</span>, channeling divine power under the sun.',
    isGatcha: true,
    name: 'Angel',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
  demon: {
    id: 8,
    attachment: raceImages.demon,
    description:
      'Creatures born of darkness and chaos. Demons gain a <span>2.25x DMG multiplier during nighttime</span>, drawing strength from the shadows.',
    isGatcha: true,
    name: 'Demon',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
  abaddon: {
    id: 9,
    attachment: raceImages.abaddon,
    description:
      'Harbingers of ruin and despair. Abaddons gain a <span>1.85x DMG multiplier and 1.25x sprint speed bonus</span>, overwhelming foes with relentless ferocity.',
    isGatcha: true,
    name: 'Abaddon',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
  cleaner: {
    id: 10,
    attachment: raceImages.cleaner,
    description:
      'Silent enforcers of order. Cleaners gain a <span>2.00x DMG multiplier and a 1.25x EXP multiplier</span>, excelling in both power and progression.',
    isGatcha: true,
    name: 'Cleaner',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
  fullbringer: {
    id: 11,
    attachment: raceImages.fullbringer,
    description:
      'Masters of spiritual resonance. Fullbringers gain a <span>2.50x DMG multiplier and a 1.50x EXP multiplier</span>, thriving on strength born from within.',
    isGatcha: true,
    name: 'Fullbringer',
    rarity: RARITIES.exotic,
    sources: ['raceReroll'],
    type: TYPES.race,
  },
};
