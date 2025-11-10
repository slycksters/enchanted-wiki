import { assets } from '@assets';
import { TYPES } from './enums';

const islandImages = assets.images.islands;
const worldFeatureImages = assets.images.worldFeatures;

export const WORLD_FEATURES = {
  spawnCrystal: {
    id: 1,
    attachment: worldFeatureImages.spawnCrystal,
    description: 'A crystal used to save your spawn point.',
    gallery: [
      {
        id: 1,
        attachment: islandImages.crescentIsle1,
        name: `Crescent Isle Spawn Crystal`,
      },
      {
        id: 2,
        attachment: islandImages.sunblazeIsle1,
        name: `Sunblaze Isle Spawn Crystal`,
      },
      {
        id: 3,
        attachment: islandImages.frostveilHollow1,
        name: `Frostveil Hollow Spawn Crystal`,
      },
      {
        id: 4,
        attachment: islandImages.coralAbyss1,
        name: `Coral Abyss Spawn Crystal`,
      },
      {
        id: 5,
        attachment: islandImages.verdantMire1,
        name: `Verdant Mire Spawn Crystal`,
      },
      {
        id: 6,
        attachment: islandImages.harvestGrove1,
        name: `Harvest Grove Spawn Crystal`,
      },
      {
        id: 7,
        attachment: islandImages.nimbusReach1,
        name: `Nimbus Reach Spawn Crystal`,
      },
      {
        id: 8,
        attachment: islandImages.zenithSkylands1,
        name: `Zenith Skylands Spawn Crystal`,
      },
      {
        id: 9,
        attachment: islandImages.lostCave1,
        name: `Lost Cave Spawn Crystal`,
      },
      {
        id: 10,
        attachment: islandImages.trialGrounds1,
        name: `Trial Grounds Spawn Crystal`,
      },
      {
        id: 11,
        attachment: islandImages.kurotsukiIsle1,
        name: `Kurotsuki Isle Spawn Crystal`,
      },
      {
        id: 12,
        attachment: islandImages.hallowsEve1,
        name: `Hallow's Eve Spawn Crystal`,
      },
    ],
    name: 'Spawn Crystal',
    type: TYPES.worldFeature,
  },
  node: {
    id: 2,
    attachment: worldFeatureImages.node,
    description: 'A regular stone node for mining resources.',
    drops: [
      'wood',
      'iron',
      'vase',
      'rareChest',
      'gold',
      'goldBar',
      'epicChest',
      'diamond',
      'legendaryChest',
      'mythicalChest',
      'exoticChest',
    ],
    gallery: [
      {
        id: 1,
        attachment: worldFeatureImages.miningArea1,
        name: 'Located at Crescent Isle',
      },
    ],
    name: 'Node',
    type: TYPES.worldFeature,
  },
  specialNode: {
    id: 3,
    attachment: worldFeatureImages.specialNode,
    description:
      'A special node that grants one extra reward compared to normal nodes. Accessible only to VIP or Verified players.',
    drops: [
      'wood',
      'iron',
      'vase',
      'rareChest',
      'gold',
      'goldBar',
      'epicChest',
      'diamond',
      'legendaryChest',
      'mythicalChest',
      'exoticChest',
    ],
    gallery: [
      {
        id: 1,
        attachment: worldFeatureImages.miningArea2,
        name: 'Located at Crescent Isle',
      },
    ],
    name: 'Special Node',
    type: TYPES.worldFeature,
  },
  shrine: {
    id: 4,
    attachment: worldFeatureImages.shrine,
    description:
      'Activating all Shrines will summon Laxus Dreyar, a key mechanic required to complete the Lightning Dragon Slayer V2 quest.',
    gallery: [
      {
        id: 1,
        attachment: worldFeatureImages.shrine1,
        description: 'Located in the Mining Area.',
        name: `Crescent Isle Shrine`,
      },
      {
        id: 2,
        attachment: worldFeatureImages.shrine2,
        description: `Located in front of Adam's Trait Shop.`,
        name: `Sunblaze Isle Shrine`,
      },
      {
        id: 3,
        attachment: worldFeatureImages.shrine3,
        description: `Located to the right of Eoka [Title NPC].`,
        name: `Frostveil Hollow Shrine`,
      },
      {
        id: 4,
        attachment: worldFeatureImages.shrine4,
        description: `From the Spawn Crystal, head toward Natsu Dragneel and climb the second tall mountain on the left.`,
        name: `Coral Abyss Shrine`,
      },
      {
        id: 5,
        attachment: worldFeatureImages.shrine5,
        description: `From the Spawn Crystal, face Crescent Isle and move forward to find the final Shrine.`,
        name: `Harvest Grove Shrine`,
      },
    ],
    name: 'Shrine',
    type: TYPES.worldFeature,
  },
  obelisk: {
    id: 5,
    attachment: worldFeatureImages.obelisk,
    description:
      'Activate the Obelisk and complete its trial. After finishing, Sting Eucliffe will appear shortly — a key mechanic needed to complete the Shadow Dragon Slayer V2 quest.',
    gallery: [
      {
        id: 1,
        attachment: worldFeatureImages.obelisk1,
        description: 'Located at the center of Zenith Skylands.',
        name: `Zenith Skylands Obelisk`,
      },
    ],
    name: 'Obelisk',
    type: TYPES.worldFeature,
  },
  dungeon: {
    id: 6,
    attachment: worldFeatureImages.dungeon,
    description:
      '<p>Challenge these battlegrounds to gather upgrade materials and find powerful accessories. Requires Missing Key to enter.</p><i>Available Dungeons:</i><ul><li>Jujutsu Kaisen Dungeon (Vaulted)</li><li>Gatchiakuta Dungeon</li><li>Demon Slayer Dungeon</li></ul>',
    gallery: [
      {
        id: 1,
        attachment: islandImages.lostCave4,
        description: 'Opens every xx:20, xx:40, xx:00',
        name: `Left Dugeon`,
      },
      {
        id: 2,
        attachment: islandImages.lostCave5,
        description: 'Opens every xx:10, xx:30, xx:50',
        name: `Right Dugeon`,
      },
    ],
    name: 'Dungeon',
    type: TYPES.worldFeature,
  },
};
