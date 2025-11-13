import { assets } from '@assets';

export const DESCRIPTIONS = [
  {
    id: 1,
    description: `Items that provide bonus stats, helping to improve your character's combat performance and overall power.`,
    image: assets.introductions.accessoriesDescriptionImage(),
    name: 'Accesorries',
  },
  {
    id: 2,
    description: `Utility items that assist players in various ways, such as teleporting, spawning bosses, or accessing dungeons.`,
    image: assets.introductions.artifactsDescriptionImage(),
    name: 'Artifacts',
  },
  {
    id: 3,
    description: `Items used for crafting Specs, Weapons, and upgrading skills like mining, as well as items that can be sold for profit.`,
    image: assets.introductions.materialsDescriptionImage(),
    name: 'Materials',
  },
];
