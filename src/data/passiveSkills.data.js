import { shadowStepPassiveSkillImg, soulStackPassiveSkillImg } from '../assets';
import { NPCS } from './npc.data';
import { RARITIES } from './rarities.data';
import { TYPES } from './types.data';

export const PASSIVE_SKILLS = {
  shadowStep: {
    id: 1,
    attachment: shadowStepPassiveSkillImg,
    description: 'Move through the battlefield like a phantom — dash through enemies cloaked in shadows, leaving no trace behind.',
    name: 'Shadow Step',
    rarity: RARITIES.exotic,
    sources: [NPCS.sham],
    type: TYPES.passiveSkill,
  },
  soulStack: {
    id: 2,
    attachment: soulStackPassiveSkillImg,
    description: 'Master the art of soul accumulation — each soul you gather amplifies your DMG multiplier by 0.01. Default max stacks: 25. Seek out the Reaper to transcend your current limit.',
    name: 'Soul Stack',
    rarity: RARITIES.exotic,
    sources: [NPCS.reaper],
    type: TYPES.passiveSkill,
  },
};