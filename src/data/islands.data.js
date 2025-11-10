import { assets } from '@assets';
import { TYPES } from './enums';

const islandImages = assets.images.islands;

export const ISLANDS = {
  crescentIsle: {
    id: 1,
    attachment: islandImages.crescentIsle,
    description: `Crescent Isle is the starting zone for all new players in Enchanted. It is a small, self-contained island designed to introduce players to the game's core mechanics, including combat, weapon, magic, mining nodes and interacting with NPCs.`,
    gallery: [
      {
        id: 1,
        attachment: islandImages.crescentIsle1,
        description: `Every new Enchanter's journey begins on these peaceful shores.`,
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.crescentIsle2,
        description:
          'Accept your first quest and take your initial steps into a world of adventure.',
        name: 'First Quest',
      },
      {
        id: 3,
        attachment: islandImages.crescentIsle3,
        description:
          'Practice on training dummies and speak with Jeremy to receive your first weapon.',
        name: 'Training Ground',
      },
      {
        id: 4,
        attachment: islandImages.crescentIsle4,
        description:
          'Test your fate and roll for powerful new magic to define your combat style.',
        name: 'Magic Reroll',
      },
      {
        id: 5,
        attachment: islandImages.crescentIsle5,
        description: `Unearth valuable resources and chests from the island's rich mineral veins.`,
        name: 'Mining Area',
      },
      {
        id: 6,
        attachment: islandImages.crescentIsle6,
        description:
          'Visit Zayn, the local craftsman, to enhance your mining tools for greater efficiency.',
        name: 'Mining Upgrades',
      },
      {
        id: 7,
        attachment: islandImages.crescentIsle7,
        description:
          'Turn your hard-earned materials into wealth by selling them to Luke.',
        name: 'Gold Hoarder',
      },
    ],
    level: '1 - 300',
    name: 'Crescent Isle',
    type: TYPES.island,
  },
  sunblazeIsle: {
    id: 2,
    attachment: islandImages.sunblazeIsle,
    description: `Sunblaze Isle is the second major island in Enchanted, presenting a significant step up in difficulty from the starting zone. This vast, sun-scorched desert is where players are introduced to crucial mid-game systems, including unlocking their Trait, discovering their Race, and learning how to multiply rewards with the Max Quests feature.`,
    gallery: [
      {
        id: 1,
        attachment: islandImages.sunblazeIsle1,
        description: 'Starting point of Sunblaze Isle.',
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.sunblazeIsle2,
        description:
          'Speak with Markus to amplify your quest rewards and accelerate your progression.',
        name: 'Max Quests',
      },
      {
        id: 3,
        attachment: islandImages.sunblazeIsle3,
        description:
          'Visit Adam to awaken an innate Trait, unlocking powerful and unique character bonuses.',
        name: 'Trait',
      },
      {
        id: 4,
        attachment: islandImages.sunblazeIsle4,
        description: `For a greater chance at obtaining rare magic, seek out Steve's premium reroll service.`,
        name: 'Premium Magic Reroll',
      },
      {
        id: 5,
        attachment: islandImages.sunblazeIsle5,
        description: `Prove your growing power by challenging Erza, the isle's formidable World Boss and start your journey to becoming the strongest Enchanter.`,
        name: 'Erza [World Boss]',
      },
    ],
    level: '300 - 1,100',
    name: 'Sunblaze Isle',
    type: TYPES.island,
  },
  frostveilHollow: {
    id: 3,
    attachment: islandImages.frostveilHollow,
    description: `Frostveil Hollow is a high-level archipelago shrouded in a permanent, chilling fog. This perilous zone challenges players to survive its harsh climate while unlocking the Shadow Step movement ability and learning to equip prestigious Titles earned from their achievements.`,
    gallery: [
      {
        id: 1,
        attachment: islandImages.frostveilHollow1,
        description: 'Starting point of Frostveil Hollow.',
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.frostveilHollow2,
        description:
          'Learn the art of instantaneous movement from Sham, unlocking the vital Shadow Step ability.',
        name: 'Shadow Step',
      },
      {
        id: 3,
        attachment: islandImages.frostveilHollow3,
        description:
          'Display your hard-earned achievements for all to see by equipping a Title from Eoka and gain EXP/Crystal multiplier bonuses.',
        name: 'Title',
      },
      {
        id: 4,
        attachment: islandImages.frostveilHollow4,
        description:
          'Challenge the icy might of Gray Fullbuster, the formidable World Boss guarding the hollow.',
        name: 'Gray Fullbuster [World Boss]',
      },
    ],
    level: '1,100 - 2,200',
    name: 'Frostveil Hollow',
    type: TYPES.island,
  },
  verdantMire: {
    id: 4,
    attachment: islandImages.verdantMire,
    description:
      'Verdant Mire is a hostile, toxic swamp designed as a pure, high-level grinding zone. With a focus on intense combat and repeatable quests, it serves as a straightforward gauntlet for players to level up and prepare for the next major island.',
    gallery: [
      {
        id: 1,
        attachment: islandImages.verdantMire1,
        description: 'Starting point of the Verdant Mire.',
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.verdantMire2,
        description:
          'Overcome the formidable Natsu, the World Boss who serves as the ultimate test of endurance in this relentless mire.',
        name: 'Natsu [World Boss]',
      },
    ],
    level: '2,200 - 3,500',
    name: 'Verdant Mire',
    type: TYPES.island,
  },
  coralAbyss: {
    id: 5,
    attachment: islandImages.coralAbyss,
    description: `In the treacherous depths of the Coral Abyss, players confront the formidable world boss, Natsu Dragneel. His defeat is a rite of passage, yielding a Missing Key to unlock the dungeon system and the power to unlock Fire Dragon Slayer V2 ability.`,
    gallery: [
      {
        id: 1,
        attachment: islandImages.coralAbyss1,
        description: 'Starting point of the Coral Abyss.',
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.coralAbyss2,
        description:
          'Confront Natsu Dragneel and prove your worth to unlock the ultimate evolution of fire magic, the Fire Dragon Slayer V2 ability.',
        name: 'Fire Dragon Slayer V2 Quest',
      },
      {
        id: 3,
        attachment: islandImages.coralAbyss3,
        description:
          "Defeat the guardian of the abyss, Natsu Dragneel, to claim a Missing Key and unlock the game's entire dungeon system.",
        name: 'Natsu Dragneel [World Boss]',
      },
    ],
    level: '3,500 - 5,100',
    name: 'Coral Abyss',
    type: TYPES.island,
  },
  harvestGrove: {
    id: 6,
    attachment: islandImages.harvestGrove,
    description: `Harvest Grove is a late-game island where players must challenge its guardian, Laxus Dreyar, to claim either a crucial Missing Key for dungeon progression or the powerful Lightning Dragon Slayer V2 ability.`,
    gallery: [
      {
        id: 1,
        attachment: islandImages.harvestGrove1,
        description: 'Starting point of Harvest Grove.',
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.harvestGrove2,
        description:
          'Challenge the master of lightning, Laxus Dreyar, to unlock the devastating power of the Lightning Dragon Slayer V2 ability.',
        name: 'Lightning Dragon Slayer V2 Quest',
      },
      {
        id: 3,
        attachment: islandImages.harvestGrove3,
        description: `Overcome the island's guardian, Laxus Dreyar, to earn a coveted Missing Key and gain entry to Dungeons.`,
        name: 'Laxus Dreyar [World Boss]',
      },
    ],
    level: '5,100 - 6,300',
    name: 'Harvest Grove',
    type: TYPES.island,
  },
  nimbusReach: {
    id: 7,
    attachment: islandImages.nimbusReach,
    description:
      'A small, peaceful island sanctuary, Nimbus Reach has no enemies or quests. Its sole purpose is to house the transporter that grants players access to the next major zone, the Zenith Skylands.',
    gallery: [
      {
        id: 1,
        attachment: islandImages.nimbusReach1,
        description: 'The transporter to Zenith Skylands.',
        name: 'Spawn Crystal and Teleporter',
      },
    ],
    name: 'Nimbus Reach',
    type: TYPES.island,
  },
  zenithSkylands: {
    id: 8,
    attachment: islandImages.zenithSkylands,
    description: `High in the sky, Zenith Skylands is an endgame archipelago where players challenge the Key Guardian, Sting Eucliffe, to earn a Missing Key for dungeon raids and to unlock the Shadow Dragon Slayer V2 ability.`,
    gallery: [
      {
        id: 1,
        attachment: islandImages.zenithSkylands1,
        description: 'Starting point of Zenith Skylands.',
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.zenithSkylands2,
        description: `Prove your mastery by defeating Sting Eucliffe and unlock the ultimate evolution of shadow magic: the Shadow Dragon Slayer V2 ability.`,
        name: 'Shadow Dragon Slayer V2 Quest',
      },
      {
        id: 3,
        attachment: islandImages.zenithSkylands3,
        description: `Face the Key Guardian, Sting Eucliffe, and claim a coveted Missing Key to unlock the most challenging dungeons in the game.`,
        name: 'Sting Eucliffe [World Boss]',
      },
    ],
    level: '6,300 - 8,300',
    name: 'Zenith Skylands',
    type: TYPES.island,
  },
  runicRock: {
    id: 9,
    attachment: islandImages.runicRock,
    description:
      'Located below Zenith Skylands, Runic Rock is an endgame hub with no combat or leveling. Its only purpose is to serve as the entrance to the Lost Cave, where players enter dungeons and purchase specialized materials to craft powerful Specs.',
    gallery: [
      {
        id: 1,
        attachment: islandImages.runicRock1,
        description: 'Raid the Dungeons and get Spec Materials.',
        name: 'Dungeon Entrance',
      },
    ],
    name: 'Runic Rock',
    type: TYPES.island,
  },
  lostCave: {
    id: 10,
    attachment: islandImages.lostCave,
    description: `The Lost Cave, inside Runic Rock, is the central hub for all dungeon activity. It houses the Dungeon Shop and Reaper, an NPC who offers Soul Stacks to maximize damage with the Soul Devourer ability.`,
    gallery: [
      {
        id: 1,
        attachment: islandImages.lostCave1,
        description: 'Starting point of Lost Cave.',
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.lostCave2,
        description:
          'Trade your hard-earned Dungeon Tokens with Laurel for exclusive materials and craft powerful Specs.',
        name: 'Dungeon Shop',
      },
      {
        id: 3,
        attachment: islandImages.lostCave3,
        description:
          'Seek out Reaper to acquire Soul Stacks, a crucial enhancement needed to maximize the damage of the Soul Devourer ability.',
        name: 'Reaper',
      },
      {
        id: 4,
        attachment: islandImages.lostCave4,
        description:
          'This ancient gate requires a Missing Key for entry and activates on a timed schedule (xx:20, xx:40, xx:00).',
        name: 'Left Dungeon',
      },
      {
        id: 5,
        attachment: islandImages.lostCave5,
        description:
          'The second raid gate also demands a Missing Key, opening for challengers at specific intervals (xx:10, xx:30, xx:50).',
        name: 'Right Dungeon',
      },
    ],
    name: 'Lost Cave',
    type: TYPES.island,
  },
  trialGrounds: {
    id: 11,
    attachment: islandImages.trialGrounds,
    description: `The Trial Grounds is a dedicated arena where players can summon specific World Bosses on-demand to farm their unique materials, needed for crafting powerful Specs.`,
    gallery: [
      {
        id: 1,
        attachment: islandImages.trialGrounds1,
        description: `Starting point of Trial Grounds.`,
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.trialGrounds2,
        description:
          'Dracula, the enigmatic master of this domain, allows players to summon specific bosses into the arena for on-demand combat.',
        name: 'Dracula',
      },
      {
        id: 3,
        attachment: islandImages.trialGrounds3,
        description:
          'The central clearing where summoned titans appear, transforming this quiet ground into a chaotic battlefield.',
        name: 'Arena',
      },
    ],
    name: 'Trial Grounds',
    type: TYPES.island,
  },
  shatterGrove: {
    id: 12,
    attachment: islandImages.shatterGrove,
    description:
      'An endgame island dedicated to combat, Shatter Grove is where players hunt powerful, randomly spawning World Bosses to gather rare materials used for crafting unique and powerful Specs.',
    gallery: [
      {
        id: 1,
        attachment: islandImages.shatterGrove1,
        description: 'Starting point of Shatter Grove.',
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.shatterGrove2,
        description:
          'The hunting grounds where powerful World Bosses spawn on a relentless 10-minute cycle, offering a chaotic but lucrative opportunity to farm rare Spec materials.',
        name: 'Arena',
      },
    ],
    name: 'Shatter Grove',
    type: TYPES.island,
  },
  kurotsukiIsle: {
    id: 13,
    attachment: islandImages.kurotsukiIsle,
    description:
      'Kurotsuki Isle is the penultimate endgame zone, a walled city where players undertake the final major grind to reach the highest level tiers before the max level cap.',
    gallery: [
      {
        id: 1,
        attachment: islandImages.kurotsukiIsle1,
        description: 'Starting point of Kurotsuki Isle.',
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.kurotsukiIsle2,
        description: 'No one knows. There must be a secret inside...',
        name: 'Mysterious House',
      },
    ],
    level: '8,300 - 10,700',
    name: 'Kurotsuki Isle',
    type: TYPES.island,
  },
  huecoMundo: {
    id: 14,
    attachment: islandImages.huecoMundo,
    description: `A desolate desert of eternal night, Hueco Mundo is the current endgame zone, accessible only by using a rare Garganta dropped from the World Bosses Fullbring Ichigo and Sousuke Aizen (found in Shatter Grove or the Trial Grounds). Here, players grind to the max level cap and complete Fullbring Ichigo's trial to upgrade their Ichigo V1 Spec to Ichigo V2, awakening fullbring powers.`,
    gallery: [
      {
        id: 1,
        attachment: islandImages.huecoMundo1,
        description: `Complete Fullbring Ichigo's quest to unlock Ichigo V2 and awaken your fullbring powers.`,
        name: 'Ichigo V2 Quest',
      },
    ],
    level: '10700 - 13100',
    name: 'Hueco Mundo',
    type: TYPES.island,
  },
  hallowsEve: {
    id: 15,
    attachment: islandImages.hallowsEve,
    description: `A land where Halloween never ends. A chilling fog clings to the ground, and the silence is broken only by the rustling of dead leaves and the faint, haunting sound of a distant whistle.`,
    gallery: [
      {
        id: 1,
        attachment: islandImages.hallowsEve1,
        description: `Starting point of Hallow's Eve.`,
        name: 'Spawn Crystal',
      },
      {
        id: 2,
        attachment: islandImages.hallowsEve2,
        description: `Lurking in a shadowy corner of this island is a mysterious figure who deals in impossible artifacts. He alone knows the secret to channeling Death's power. Find him and present your offerings to have him craft the Death Spec.`,
        name: 'Craft Death Spec',
      },
      {
        id: 3,
        attachment: islandImages.hallowsEve3,
        description: `The final hunt awaits. Here you will face the source of the island's fear: Death incarnate. Do you have what it takes to stare into his crimson eyes and walk away?`,
        name: 'Death [World Boss]',
      },
    ],
    level: '13,100 - 15,500',
    name: `Hallow's Eve`,
    type: TYPES.island,
  },
};
