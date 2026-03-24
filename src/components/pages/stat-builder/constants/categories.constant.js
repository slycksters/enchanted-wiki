import { TYPES } from '@data';
import { DATA } from '@mappers';

export const CATEGORIES = {
  combatStyle: {
    id: 'combatStyle', // Used for React State key
    label: 'Combat Style',
    // Configuration for the UI stats
    displayStats: [
      { label: 'Base DMG', key: 'baseDMG' },
      { label: 'Per Stat', key: 'perStat' },
    ],
    // Configuration for the Modal tabs
    list: [
      { id: 1, label: 'Magic', list: DATA[TYPES.magic.name] },
      { id: 2, label: 'Spec', list: DATA[TYPES.spec.name] },
      { id: 3, label: 'Weapon', list: DATA[TYPES.weapon.name] },
    ],
  },
  race: {
    id: 'race',
    label: 'Race',
    displayStats: [
      { label: 'DMG', key: 'DMG' },
      { label: 'HP', key: 'HP' },
    ],
    list: [
      { id: 1, label: 'Race', list: DATA[TYPES.race.name] },
    ],
  },
  trait: {
    id: 'trait',
    label: 'Trait',
    displayStats: [
      { label: 'DMG', key: 'DMG' },
      { label: 'HP', key: 'HP' },
    ],
    list: [
      { id: 1, label: 'Trait', list: DATA[TYPES.trait.name] },
    ],
  },
};