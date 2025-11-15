export const ABILITIES_OVERVIEW = {
  title: "Abilities Overview",
  intro: [
    "Abilities covers all magic-defining systems your character can unlock or master. This includes offensive magic types, racial perks, stat-enhancing traits, combat passives, and more.",
    "Below is a breakdown of each Ability type and how they impact your playstyle."
  ]
};

export const ABILITIES_SECTIONS = [
  {
    title: "Magic",
    description: [
      "Magic is one of the main combat styles in the game. It defines your offensive identity — elemental spells, destructive attacks, and special casting techniques."
    ],
    notes: ["Magic cannot be stored in your Inventory Storage Slot."]
  },

  {
    title: "Race",
    description: [
      "Your Race determines your natural strengths and innate stat bonuses. It shapes your baseline attributes and interacts with other systems like Magic and Traits."
    ],
    notes: ["Race can be stored in your Inventory Storage Slot."]
  },

  {
    title: "Trait",
    description: [
      "Traits are stat modifiers that boost your combat efficiency, survivability, or general performance."
    ],
    notes: ["Traits can be stored in your Inventory Storage Slot."]
  },

  {
    title: "Passive Magic",
    description: [
      "Passive Magics enhance your attacks with additional effects. These activate automatically during combat — adding damage, elements, or special triggers."
    ],
    notes: ["Passive Magic can be stored."]
  },

  {
    title: "Passive Skill",
    description: [
      "These provide utility buffs — movement, dodging, sustain, and amplifications. They do not add direct offense but significantly improve your playstyle flow."
    ],
    notes: [
      "Passive Skills activate automatically once obtained. Soul Stack is an exception — it requires equipping Soul Devourer to activate."
    ]
  },

  {
    title: "Titles",
    description: [
      "Titles represent achievements and milestones."
    ],
    label: "Each one grants:",
    listItems: ["Bonus EXP Multiplier", "Bonus Crystal Multiplier"],
    footer: "Perfect for progression-focused players."
  },

  {
    title: "Inventory Storage Slot",
    labelGroups: [
      {
        label: "Storable:",
        items: ["Race", "Trait", "Passive Magic"]
      },
      {
        label: "Not Storable:",
        items: ["Magic"]
      }
    ]
  }
];
