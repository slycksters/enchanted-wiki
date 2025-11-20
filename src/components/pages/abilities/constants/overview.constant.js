import { CATEGORIES } from './categories.constant.js';

export const ABILITIES_OVERVIEW = {
  title: 'Abilities Overview',
  intro: [
    'Abilities covers all magic-defining systems your character can unlock or master. This includes offensive magic types, racial perks, stat-enhancing traits, combat passives, and more.',
    'Below is a breakdown of each Ability type and how they impact your playstyle.',
  ],
};

export const ABILITIES_SECTIONS = [
  {
    title: 'Magics',
    description: [
      'Magic is one of the main combat styles in the game. It defines your offensive identity — elemental spells, destructive attacks, and special casting techniques.',
    ],
    list: CATEGORIES[0].list,
    notes: ['Magic cannot be stored in your Inventory Storage Slot.'],
  },

  {
    title: 'Races',
    description: [
      'Your Race determines your natural strengths and innate stat bonuses. It shapes your baseline attributes and interacts with other systems like Magic and Traits.',
    ],
    list: CATEGORIES[1].list,
    notes: ['Race can be stored in your Inventory Storage Slot.'],
  },

  {
    title: 'Traits',
    description: [
      'Traits are stat modifiers that boost your combat efficiency, survivability, or general performance.',
    ],
    list: CATEGORIES[2].list,
    notes: ['Traits can be stored in your Inventory Storage Slot.'],
  },

  {
    title: 'Passive Magics',
    description: [
      'Passive Magics enhance your attacks with additional effects. These activate automatically during combat — adding damage, elements, or special triggers.',
    ],
    list: CATEGORIES[3].list,
    notes: ['Passive Magic can be stored.'],
  },

  {
    title: 'Passive Skills',
    description: [
      'These provide utility buffs — movement, dodging, sustain, and amplifications. They do not add direct offense but significantly improve your playstyle flow.',
    ],
    list: CATEGORIES[4].list,
    notes: [
      'Passive Skills activate automatically once obtained. Soul Stack is an exception — it requires equipping Soul Devourer to activate.',
    ],
  },

  {
    title: 'Titles',
    description: ['Titles represent achievements and milestones.'],
    label: 'Each one grants:',
    list: CATEGORIES[5].list,
    listItems: ['Bonus EXP Multiplier', 'Bonus Crystal Multiplier'],
    footer: 'Perfect for progression-focused players.',
  },

  {
    title: 'Inventory Storage Slot',
    labelGroups: [
      {
        label: 'Storable:',
        items: ['Race', 'Trait', 'Passive Magic'],
      },
      {
        label: 'Not Storable:',
        items: ['Magic'],
      },
    ],
  },
];
