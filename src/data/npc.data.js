import { assets } from '@assets';
import { NPC_TYPES, TYPES } from './enums';

const npcAssets = assets.images.npcs;

export const NPCS = {
  sham: {
    id: 1,
    attachment: npcAssets.sham,
    locations: [],
    name: 'Sham',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
  reaper: {
    id: 2,
    attachment: npcAssets.reaper,
    locations: [],
    name: 'Reaper',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
  adam: {
    id: 3,
    attachment: npcAssets.adam,
    locations: [],
    name: 'Adam',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
  monkeyDevelops: {
    id: 4,
    attachment: npcAssets.monkeyDevelops,
    locations: [],
    name: 'Monkey Develops',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
  steve: {
    id: 5,
    attachment: npcAssets.steve,
    locations: [],
    name: 'Steve',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
  ichigo: {
    id: 6,
    attachment: npcAssets.ichigo,
    description:
      'Ichigo Kurosaki — the hybrid warrior of Shinigami and Hollow. Wielding Zangetsu, he merges raw instinct with overwhelming spiritual might. Every swing of his blade blurs the line between man and monster, cutting through both worlds with unrelenting force.',
    locations: [],
    name: 'Ichigo',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
  yami: {
    id: 7,
    attachment: npcAssets.yami,
    description:
      'The captain of the Black Bulls, Yami Sukehiro is a warrior who turns darkness itself into a weapon. Wielding his katana with unmatched precision, he channels shadow magic through brute force and instinct, cutting down any obstacle in his path. His combat style is raw, relentless, and unpredictable — a blend of monstrous strength and deadly technique. To face Yami is to be swallowed by the void between dimensions itself.',
    locations: [],
    name: 'Yami',
    npcType: NPC_TYPES.friendly,
    type: TYPES.npc,
  },
  yuno: {
    id: 8,
    attachment: npcAssets.yuno,
    description: `A prodigy born under the symbol of the four-leaf grimoire, Yuno commands the very breath of the skies. His mastery over wind magic is not mere power—it's perfection, honed through resolve and divine blessing. With the spirit Sylph at his side, Yuno moves like a whisper before the storm, striking with precision that borders on celestial. To face him is to stand against the wind itself—and be swept away.`,
    locations: [],
    name: 'Yuno',
    npcType: NPC_TYPES.hostile,
    type: TYPES.npc,
  },
  rudo: {
    id: 9,
    attachment: npcAssets.rudo,
    description:
      'Forged in the scrapyards of despair, Rudo Surebrec is a mechanical juggernaut fueled by chaos and recycled rage. His body—a fusion of steel, gears, and fury—turns discarded junk into unstoppable power. Where others see ruin, Rudo sees ammunition.',
    locations: [],
    name: 'Rudo Surebrec',
    npcType: NPC_TYPES.hostile,
    type: TYPES.npc,
  },
  kirito: {
    id: 10,
    attachment: npcAssets.kirito,
    description:
      'Kirito, the Black Swordsman — a legend forged within virtual worlds. Master of dual wielding, his blades carve through reality itself, merging precision, speed, and sheer determination. When his swords cross, every strike becomes a reflection of his unbreakable will.',
    locations: [],
    name: 'Kirito',
    npcType: NPC_TYPES.hostile,
    type: TYPES.npc,
  },
  amoEmpool: {
    id: 11,
    attachment: npcAssets.amoEmpool,
    description:
      'Amo Empool — the lightning storm in human form. With unmatched agility and electrifying power, she turns every movement into a thunderclap of destruction. Her kicks strike faster than the eye can follow, leaving trails of light and the scent of ozone in her wake.',
    locations: [],
    name: 'Amo Empool',
    npcType: NPC_TYPES.hostile,
    type: TYPES.npc,
  },
  aizen: {
    id: 12,
    attachment: npcAssets.aizen,
    description:
      'Aizen — the calm embodiment of supremacy. With unmatched intellect and spiritual dominance, he manipulates reality itself with terrifying grace. Every strike is deliberate, every move calculated, and every opponent reduced to insignificance beneath his overwhelming power.',
    locations: [],
    name: 'Aizen',
    npcType: NPC_TYPES.hostile,
    type: TYPES.npc,
  },
  yunoV2: {
    id: 13,
    attachment: npcAssets.yunoV2,
    description:
      'Yuno Grinberryall — the prodigy blessed by the wind and heir of the Grinberryall royal line. His command over the spirits transcends mortal limits, merging elegance and devastation into one. In his Spirit Crown Ascension, Yuno becomes the very embodiment of divine wind — swift, untouchable, and absolute.',
    locations: [],
    name: 'Yuno Grinberryall',
    npcType: NPC_TYPES.hostile,
    type: TYPES.npc,
  },
  yoriichi: {
    id: 14,
    attachment: npcAssets.yoriichi,
    description:
      'The most feared swordsman in history — Yoriichi moves with divine precision, his blade wreathed in the flames of the sun. Each swing carries the legacy of the Hinokami Kagura, burning through all who dare stand before him.',
    locations: [],
    name: 'Yoriichi',
    npcType: NPC_TYPES.hostile,
    type: TYPES.npc,
  },
  kokushibo: {
    id: 15,
    attachment: npcAssets.kokushibo,
    description:
      'Once a master swordsman and now a demonic moon wielder, Kokushibo combines elegance with devastation. Each strike of his crescent blade reflects his unending pursuit of perfection — and the darkness that consumed him.',
    locations: [],
    name: 'Kokushibo',
    npcType: NPC_TYPES.hostile,
    type: TYPES.npc,
  },
  ichigoV2: {
    id: 15,
    attachment: npcAssets.fullbringIchigo,
    description: `After losing his Shinigami powers, Ichigo Kurosaki awakened a new force within — his Fullbring. Drawing strength from the bond with his Substitute Badge, he channels his human spirit into pure kinetic energy. Each movement crackles with unleashed potential, and every strike resonates with the power to shatter both steel and spirit. No longer bound by the limits of a Shinigami, Fullbring Ichigo fights with raw instinct and explosive energy — a warrior reborn through resolve and human will.`,
    locations: [],
    name: 'Fullbring Ichigo',
    npcType: NPC_TYPES.hostile,
    type: TYPES.npc,
  },
};
