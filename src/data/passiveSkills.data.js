import { shadowStepPassiveSkillImg, soulStackPassiveSkillImg } from '../assets';
import { NPCS } from './npc.data';
import { RARITIES } from './rarities.data';
import { TYPES } from './types.data';

export const PASSIVE_SKILLS = {
  shadowStep: {
    id: 1,
    descriptions: ['Dash through like a shadow'],
    image: shadowStepPassiveSkillImg,
    name: 'Shadow Step',
    rarity: RARITIES.exotic,
    sources: [NPCS.sham],
    type: TYPES.passiveSkill,
  },
  soulStack: {
    id: 2,
    descriptions: [
      'Each soul stacks increases your DMG multiplier by 0.01.', 'Default max stacks is 25, increase max souls by speaking to Reaper'
    ],
    image: soulStackPassiveSkillImg,
    name: 'Soul Stack',
    rarity: RARITIES.exotic,
    sources: [NPCS.reaper],
    type: TYPES.passiveSkill,
  },
};