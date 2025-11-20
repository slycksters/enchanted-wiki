import { CATEGORIES } from './categories.constant.js';

export const ITEMS_OVERVIEW = {
  title: "Items Overview",
  intro: [
    "Items are the essential tools and treasures your character collects across the world. They boost stats, unlock new areas, or provide materials for crafting stronger Specs.",
    "Below is a breakdown of the main Item types and how they influence your adventure and combat strategies."
  ]
};

export const ITEMS_SECTIONS = [
  {
    title: "Accessories",
    description: [
      "Accessories enhance your character by granting bonus stats. Each accessory specializes in a particular combat type — Blade, Melee, or Magic — so choosing the right one can significantly boost your effectiveness in battle."
    ],
    list: CATEGORIES[0].list,
    notes: [
      "Pick accessories that match your combat style to maximize your damage potential."
    ]
  },

  {
    title: "Artifacts",
    description: [
      "Artifacts are special items that grant access to new islands, secret content, or valuable materials. They’re your gateway to exploration and hidden treasures."
    ],
    list: CATEGORIES[1].list,
    notes: [
      "Some Artifacts can be used for communication."
    ]
  },

  {
    title: "Materials",
    list: CATEGORIES[2].list,
    description: [
      "Materials are the building blocks for crafting stronger Specs and other items. They can also be sold for profit, making them valuable for progression."
    ],
  }
];
