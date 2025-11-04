import { assets } from '@assets';
import { RARITIES, TYPES } from './enums';

const traitImages = assets.images.traits;

export const TRAITS = {
  tough: {
    id: 1,
    attachment: traitImages.tough,
    description:
      'Hardened by countless battles, those with the Tough trait embody endurance and resilience, standing strong even when the odds are against them.',
    isGatcha: true,
    name: 'Tough',
    rarity: RARITIES.common,
    sources: ['adamSpec'],
    stats: {
      DMG: '1.05x Multiplier',
      HP: '1.12x Multiplier',
    },
    type: TYPES.trait,
  },
  quickReflexes: {
    id: 2,
    attachment: traitImages.quickReflexes,
    description:
      'Sharpened instincts and lightning-fast reactions define those with Quick Reflexes, striking swiftly and dodging danger with effortless precision.',
    isGatcha: true,
    name: 'Quick Reflexes',
    rarity: RARITIES.common,
    sources: ['adamSpec'],
    stats: {
      DMG: '1.12x Multiplier',
      HP: '1.05x Multiplier',
    },
    type: TYPES.trait,
  },
  hotBlooded: {
    id: 3,
    attachment: traitImages.hotBlooded,
    description:
      'Fueled by fiery determination, Hotblooded individuals thrive in the heat of combat, channeling passion into relentless strength and resolve.',
    isGatcha: true,
    name: 'Hotblooded',
    rarity: RARITIES.uncommon,
    sources: ['adamSpec'],
    stats: {
      DMG: '1.35x Multiplier',
      HP: '1.3x Multiplier',
    },
    type: TYPES.trait,
  },
  windRunner: {
    id: 4,
    attachment: traitImages.windRunner,
    description:
      'Swift as a storm and untouchable as the wind, Wind Runners move with perfect balance between speed and stamina, mastering both agility and endurance.',
    isGatcha: true,
    name: 'Wind Runner',
    rarity: RARITIES.uncommon,
    sources: ['adamSpec'],
    stats: {
      DMG: '1.3x Multiplier',
      HP: '1.35x Multiplier',
      sprintSpeed: '1.5x Multiplier',
    },
    type: TYPES.trait,
  },
  battleBorn: {
    id: 5,
    attachment: traitImages.battleBorn,
    description:
      'Forged in the chaos of war, the Battle Born embody the spirit of an unyielding warrior—thriving where others falter and conquering through sheer will.',
    isGatcha: true,
    name: 'Battle Born',
    rarity: RARITIES.rare,
    sources: ['adamSpec'],
    stats: {
      DMG: '1.55x Multiplier',
      HP: '1.5x Multiplier',
    },
    type: TYPES.trait,
  },
  venomousStrikes: {
    id: 6,
    attachment: traitImages.venomousStrikes,
    description:
      'Masters of precision and patience, those with Venomous Strikes inflict wounds that linger, blending calculated strikes with deadly endurance.',
    isGatcha: true,
    name: 'Venomous Strikes',
    rarity: RARITIES.epic,
    sources: ['adamSpec'],
    stats: {
      DMG: '1.05x Multiplier',
      HP: '1.75x Multiplier',
    },
    type: TYPES.trait,
  },
  adrenalineRush: {
    id: 7,
    attachment: traitImages.adrenalineRush,
    description:
      'Fueled by the thrill of combat, those with Adrenaline Rush unleash explosive bursts of energy, turning moments of danger into opportunities for dominance.',
    isGatcha: true,
    name: 'Adrenaline Rush',
    rarity: RARITIES.epic,
    sources: ['adamSpec'],
    stats: {
      DMG: '1.75x Multiplier',
      HP: '1.05x Multiplier',
    },
    type: TYPES.trait,
  },
  berserkerWrath: {
    id: 8,
    attachment: traitImages.berserkersWrath,
    description:
      'Consumed by unrelenting fury, those with Berserker’s Wrath become unstoppable forces of destruction, thriving on chaos and pain itself.',
    isGatcha: true,
    name: "Berserker's Wrath",
    rarity: RARITIES.legendary,
    sources: ['adamSpec'],
    stats: {
      DMG: '2.1x Multiplier',
      HP: '2x Multiplier',
    },
    type: TYPES.trait,
  },
  unyieldingForce: {
    id: 9,
    attachment: traitImages.unyieldingForce,
    description:
      'An embodiment of unwavering might, Unyielding Force stands firm against all odds, turning the tide of battle through sheer endurance and determination.',
    isGatcha: true,
    name: 'Unyielding Force',
    rarity: RARITIES.legendary,
    sources: ['adamSpec'],
    stats: {
      DMG: '2x Multiplier',
      HP: '2.1x Multiplier',
    },
    type: TYPES.trait,
  },
  kingsPresence: {
    id: 10,
    attachment: traitImages.kingsPresence,
    description:
      'Radiating power and authority, those with King’s Presence dominate the battlefield through commanding will and unshakable strength.',
    isGatcha: true,
    name: "King's Presence",
    rarity: RARITIES.mythical,
    sources: ['adamSpec'],
    stats: {
      DMG: '2.4x Multiplier',
      HP: '2.4x Multiplier',
    },
    type: TYPES.trait,
  },
  temporalAwareness: {
    id: 11,
    attachment: traitImages.temporalAwareness,
    description:
      'Masters of perception and precision, those with Temporal Awareness move and strike in perfect rhythm, as if time itself bends to their will.',
    isGatcha: true,
    name: 'Temporal Awareness',
    rarity: RARITIES.mythical,
    sources: ['adamSpec'],
    stats: {
      DMG: '2.9x Multiplier',
      HP: '3x Multiplier',
    },
    type: TYPES.trait,
  },
  cursedBlood: {
    id: 12,
    attachment: traitImages.cursedBlood,
    description:
      'Born from forbidden power, those with Cursed Blood channel dark energy that strengthens their body, even as it consumes their soul from within.',
    isGatcha: true,
    name: 'Cursed Blood',
    rarity: RARITIES.mythical,
    sources: ['adamSpec'],
    stats: {
      DMG: '3x Multiplier',
      HP: '2.9x Multiplier',
    },
    type: TYPES.trait,
  },
  eternalHunger: {
    id: 13,
    attachment: traitImages.eternalHunger,
    description:
      'Driven by an insatiable thirst for power, those with Eternal Hunger grow stronger with every challenge, never satisfied until they stand above all.',
    isGatcha: true,
    name: 'Eternal Hunger',
    rarity: RARITIES.exotic,
    sources: ['adamSpec'],
    stats: {
      DMG: '3.35x Multiplier',
      HP: '3.35x Multiplier',
    },
    type: TYPES.trait,
  },
  swordMaster: {
    id: 14,
    attachment: traitImages.swordMaster,
    description:
      'Legends of the blade, Swordmasters achieve perfect harmony between might and precision, every strike a flawless expression of skill.',
    isGatcha: true,
    name: 'Swordmaster',
    rarity: RARITIES.exotic,
    sources: ['adamSpec'],
    stats: {
      DMG: '3.95x Multiplier',
      HP: '3.95x Multiplier',
    },
    type: TYPES.trait,
  },
  ultraReflexes: {
    id: 15,
    attachment: traitImages.ultraReflexes,
    description:
      'With senses sharpened beyond mortal limits, those with Ultra Reflexes move in perfect sync with the world around them—untouchable and unstoppable.',
    isGatcha: true,
    name: 'Ultra Reflexes',
    rarity: RARITIES.exotic,
    sources: ['adamSpec'],
    stats: {
      DMG: '4.25x Multiplier',
      HP: '4.25x Multiplier',
    },
    type: TYPES.trait,
  },
};
