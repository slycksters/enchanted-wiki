import { shadowStepPassiveSkillImg, soulStackPassiveSkillImg } from '../../../assets';
import { RARITIES } from '../../../constants/rarities.constant';

export const PASSIVE_SKILLS = [
  {
    id: 1,
    descriptions: ['Dash through like a shadow'],
    image: shadowStepPassiveSkillImg,
    label: 'Shadow Step',
    rarity: RARITIES.exotic.label,
    rate: RARITIES.exotic.rate,
  },
  {
    id: 2,
    descriptions: [
      'Each soul stacks increases your DMG multiplier by 0.01.', 'Default max stacks is 25, increase max souls by speaking to Reaper'
    ],
    image: soulStackPassiveSkillImg,
    label: 'Soul Stack',
    rarity: RARITIES.exotic.label,
    rate: RARITIES.exotic.rate,
  },
];