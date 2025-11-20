import { assets } from '@assets';
import { GAME_NAME } from '@constants';

export const DESCRIPTIONS = [
  {
    id: 1,
    description: `One of the three main combat styles. Magic focuses on offensive spells that allow you to engage enemies using various magical techniques.`,
    image: assets.introductions.magicDescriptionImage,
    name: 'Magic',
  },
  {
    id: 2,
    description: `Represents your character's origin. Each race provides stat perks that influence your overall performance in combat and progression.`,
    image: assets.introductions.raceDescriptionImage,
    name: 'Race',
  },
  {
    id: 3,
    description: `A source of additional stat bonuses that further enhance your character's overall power.`,
    image: assets.introductions.traitDescriptionImage,
    name: 'Trait',
  },
  {
    id: 4,
    description: `A combat-oriented passive skill that adds effects to your attacks, such as increased damage or special elemental properties.`,
    image: assets.introductions.passiveMagicDescriptionImage,
    name: 'Passive Magic',
  },
  {
    id: 5,
    description: `A utility-based ability that strengthens your magic or grants mobility options, improving how you move and fight.`,
    image: assets.introductions.passiveSkillDescriptionImage,
    name: 'Passive Skill',
  },
  {
    id: 6,
    description: `Earned through in-game achievements, Titles grant bonus EXP and Crystal multipliers, marking your accomplishments as you advance through the world of ${GAME_NAME}.`,
    image: assets.logos.enchantedSmallLogo,
    name: 'Title',
  },
];
