import { CATEGORIES } from './categories.constant';

export const NPCS_OVERVIEW = {
  title: "NPCs Overview",
  intro: [
    "NPCs (Non-Player Characters) are the inhabitants of the world, each serving a unique role. They guide, challenge, and reward players as they explore islands and progress through the game.",
    "Below is a breakdown of the main NPC types and how they impact your adventure."
  ]
};

export const NPCS_SECTIONS = [
  {
    title: "Specialists",
    description: [
      "Specialists are NPCs you can trade materials, Yen, and Crystals with to acquire stronger Specs, Weapons, Magic, or Traits. They’re essential for upgrading your combat capabilities."
    ],
    list: CATEGORIES[0].list,
  },

  {
    title: "Quest Givers",
    description: [
      "Quest Givers provide quests that help you level up and unlock access to new islands. They are your main source of progression and story advancement."
    ],
    list: CATEGORIES[0].list,
  },

  {
    title: "Mobs",
    description: [
      "Mobs are the weakest type of hostile NPCs. They often serve as targets for certain quests and provide basic combat experience."
    ],
    list: CATEGORIES[0].list,
    notes: [
      "Perfect for training and completing beginner quests."
    ]
  },

  {
    title: "Mini Bosses",
    description: [
      "Mini Bosses are stronger than regular Mobs and often serve as quest targets. They present a tougher challenge and a chance for better rewards."
    ],
    list: CATEGORIES[0].list,
    notes: [
      "Some Mini Bosses drop accessories suitable for starting players."
    ]
  },

  {
    title: "World Bosses",
    description: [
      "World Bosses are the most powerful NPCs on each island. Defeating them yields strong accessories, artifacts, and materials to help you progress further."
    ],
    list: CATEGORIES[0].list,
    notes: [
      "Some World Bosses hide in dungeons, and others can be spawned in Trial Grounds."
    ]
  }
];
