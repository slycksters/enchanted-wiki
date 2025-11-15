import { assets } from '@assets';
import { RARITIES, TYPES } from './enums';

const passiveSkillImages = assets.images.passiveSkills;
const passiveSkillVideos = assets.videos.passiveSkills;

export const PASSIVE_SKILLS = {
  shadowStep: {
    id: 1,
    abilities: [
      {
        id: 1,
        attachment: passiveSkillVideos.shadowStep,
      },
    ],
    attachment: passiveSkillImages.shadowStep,
    description:
      'Move through the battlefield like a phantom — dash through enemies cloaked in shadows, leaving no trace behind.',
    name: 'Shadow Step',
    rarity: RARITIES.exotic,
    sources: ['shamSpec'],
    type: TYPES.passiveSkill,
  },
  soulStack: {
    id: 2,
    attachment: passiveSkillImages.soulStack,
    abilities: [
      {
        id: 1,
        attachment: passiveSkillVideos.soulStack,
      },
    ],
    description:
      'Master the art of soul accumulation — each soul you gather amplifies your DMG multiplier by 0.01. Default max stacks: 25. Seek out the Reaper to transcend your current limit. Activates only with Soul Devourer.',
    name: 'Soul Stack',
    rarity: RARITIES.exotic,
    related: ['soulDevourer'],
    sources: ['reaperSpec'],
    type: TYPES.passiveSkill,
  },
  maxQuest: {
    id: 3,
    attachment: passiveSkillImages.maxQuest,
    description: 'Harness the wisdom of a master adventurer to maximize your gains. Every completed quest yields a multiplied bounty, turning routine tasks into a fortune.',
    name: 'Max Quest',
    rarity: RARITIES.exotic,
    sources: ['markus'],
    type: TYPES.passiveSkill,
  },
};
