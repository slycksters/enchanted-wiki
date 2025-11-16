import { CATEGORIES } from './categories.constant';

export const ISLANDS_OVERVIEW = {
  title: "Islands Overview",
  intro: [
    "Islands are the diverse regions your character explores throughout the world. Each island offers unique challenges, enemies, and rewards, shaping your adventure and growth.",
    "Below is a breakdown of the main Island types and their role in your journey."
  ]
};

export const ISLANDS_SECTIONS = [
  {
    title: "Major Locations",
    description: [
      "Major Locations are the key islands where main quests unfold. These are essential for leveling up your character, unlocking story content, and progressing through the game."
    ],
    list: CATEGORIES[0].list,
    notes: [
      "Focus on these islands to advance your main objectives and gain valuable experience."
    ]
  },

  {
    title: "Sub Locations",
    description: [
      "Sub Locations are secondary islands designed for grinding, hunting dungeons, spawning world bosses, or serving as gateways to other islands. Examples include Nimbus Reach, which has a teleporter to Zenith Skylands."
    ],
    list: CATEGORIES[1].list,
    notes: [
      "Sub Locations are great for farming materials, rare items, and preparing for tougher challenges."
    ]
  }
];
