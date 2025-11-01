import { assets } from '@assets';
import { NPC_TYPES, TYPES } from './enums';
// import { ITEMS } from './items.data';

const npcImages = assets.images.npcs;

export const NPCS = {
  shamSpec: {
    id: 1,
    attachment: npcImages.sham,
    description:
      'A shadowy person who teaches the art of translocation. Offers the <span>Shadow Step</span> ability. Found lurking in Frostveil Hollow.',
    locations: [],
    name: 'Sham',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  reaperSpec: {
    id: 2,
    attachment: npcImages.reaper,
    description:
      'A grim being that trades power for souls. Offers increase of <span>Soul Stack</span>. Located deep within the Lost Cave.',
    locations: [],
    name: 'Reaper',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  adamSpec: {
    id: 3,
    attachment: npcImages.adam,
    description:
      'A master of fate who can reshape your core attributes. Offers <span>Trait Reroll</span> services. Stationed on Sunblaze Isle.',
    locations: [],
    name: 'Adam',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  monkeyDevelopsSpec: {
    id: 4,
    attachment: npcImages.monkeyDevelops,
    description:
      'A whimsical primate with a strange mastery over magical energies. Offers <span>Magic Rerolls</span> services. Can be found on Crescent Isle.',
    locations: [],
    name: 'Monkey Develops',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  steveSpec: {
    id: 5,
    attachment: npcImages.steve,
    description:
      'A mysterious man dealing in rare and potent magical alterations. Offers <span>Premium Magic Rerolls</span> services. Located on Sunblaze Isle.',
    locations: [],
    name: 'Steve',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  ichigoSpec: {
    id: 6,
    attachment: npcImages.ichigo,
    description:
      'Unlocks the <span>Ichigo</span> specialization, granting the powers of a Substitute Soul Reaper. Find him on Sunblaze Isle.',
    locations: [],
    name: 'Ichigo',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  yamiSpec: {
    id: 7,
    attachment: npcImages.yami,
    description:
      'Unlocks the <span>Yami</span> specialization, teaching you to wield powerful Dark Magic. Located at the Trial Grounds.',
    locations: [],
    name: 'Yami',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  yunoSpec: {
    id: 8,
    attachment: npcImages.yuno,
    description:
      'Unlocks the <span>Yuno</span> specialization, granting you the favor of the Wind Spirit. Can be found on Crescent Isle.',
    locations: [],
    name: 'Yuno',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  rudoSpec: {
    id: 9,
    attachment: npcImages.rudo,
    description:
      'Unlocks the <span>Rudo Surebrec</span> specialization, allowing you to manipulate refuse with Jinki. Located at Runic Rock.',
    locations: [],
    name: 'Rudo Surebrec',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  kiritoSpec: {
    id: 10,
    attachment: npcImages.kirito,
    description:
      'Unlocks the <span>Kirito</span> specialization, bestowing the legendary Dual Blades skill. Found within the Coral Abyss.',
    locations: [],
    name: 'Kirito',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  amoEmpoolSpec: {
    id: 11,
    attachment: npcImages.amoEmpool,
    description:
      'Unlocks the <span>Amo Empool</span> specialization, teaching the intoxicating arts of Fragrance Manipulation. Found in the Lost Cave.',
    locations: [],
    name: 'Amo Empool',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  aizenSpec: {
    id: 12,
    attachment: npcImages.aizen,
    description:
      "Unlocks the <span>Aizen</span> specialization, revealing the secrets of Kyoka Suigetsu's complete hypnosis. Resides in Shattergrove.",
    locations: [],
    name: 'Aizen',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  yunoV2Spec: {
    id: 13,
    attachment: npcImages.yunoV2,
    description:
      'Unlocks the advanced <span>Yuno V2</span> specialization, elevating your wind magic to the Star level. Found high in the Zenith Skylands.',
    locations: [],
    name: 'Yuno Grinberryall',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  yoriichiSpec: {
    id: 14,
    attachment: npcImages.yoriichi,
    description:
      'Unlocks the original <span>Yoriichi</span> specialization, teaching the legendary Sun Breathing forms. Located in the Zenith Skylands.',
    locations: [],
    name: 'Yoriichi',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  kokushiboSpec: {
    id: 15,
    attachment: npcImages.kokushibo,
    description:
      'Unlocks the <span>Kokushibo</span> specialization, granting mastery of the elegant and deadly Moon Breathing. Found in Zenith Skylands.',
    locations: [],
    name: 'Kokushibo',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  ichigoV2Spec: {
    id: 16,
    attachment: npcImages.fullbringIchigo,
    description:
      'Unlocks the <span>Ichigo V2</span> specialization, awakening the power of Fullbring. Can be found in the desolate realm of Hueco Mundo.',
    locations: [],
    name: 'Fullbring Ichigo',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  natsuDragneelSpec: {
    id: 17,
    attachment: npcImages.natsuDragneel,
    description:
      'Unlocks the <span>Fire Dragon Slayer V2</span> magic, enhancing your flames with Draconic power. Found in the Coral Abyss.',
    locations: [],
    name: 'Natsu Dragneel',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  laxusDreyarSpec: {
    id: 18,
    attachment: npcImages.laxusDreyar,
    description:
      'Unlocks the <span>Lightning Dragon Slayer V2</span> magic, infusing your attacks with immense voltage. Located in Harvest Grove.',
    locations: [],
    name: 'Laxus Dreyar',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  stingEucliffeSpec: {
    id: 19,
    attachment: npcImages.stingEucliffe,
    description:
      'Unlocks the <span>Shadow Dragon Slayer V2</span> magic, allowing you to consume and command shadows. Found in the Zenith Skylands.',
    locations: [],
    name: 'Sting Eucliffe',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  erzaSpec: {
    id: 20,
    attachment: npcImages.erza,
    description:
      'Offers the legendary <span>Empress Sword</span>, a weapon worthy of a queen. Speak with her on Sunblaze Isle to prove your worth.',
    drops: [],
    locations: [],
    name: 'Erza',
    npcType: NPC_TYPES.specialist,
    type: TYPES.npc,
  },
  banditLeader: {
    id: 21,
    attachment: npcImages.banditLeader,
    description:
      'The ruthless leader of the Crescent Isle marauders. A proving ground for new adventurers, he stands as the first major obstacle for those seeking fortune on the island.',
    drops: ['facePlaster'],
    locations: [],
    name: 'Bandit Leader',
    npcType: NPC_TYPES.miniBoss,
    type: TYPES.npc,
  },
  mirageWarden: {
    id: 22,
    attachment: npcImages.mirageWarden,
    description:
      "A cunning warrior who patrols the scorching sands of Sunblaze Isle. He has adapted to the desert's haze, using the treacherous landscape to his advantage against all intruders.",
    drops: ['headband'],
    locations: [],
    name: 'Mirage Warden',
    npcType: NPC_TYPES.miniBoss,
    type: TYPES.npc,
  },
  zeus: {
    id: 23,
    attachment: npcImages.zeus,
    description:
      "A mountain of a man who conquered the highest peak of Frostveil Hollow. This reclusive titan considers himself the king of the summit, and his 'decrees' are the sudden blizzards and cracking ice that crush those who dare climb too high.",
    drops: ['nerdGlasses'],
    locations: [],
    name: 'Zeus',
    npcType: NPC_TYPES.miniBoss,
    type: TYPES.npc,
  },
  inumakiBoss: {
    id: 24,
    attachment: npcImages.inumaki,
    description:
      'A sorcerer of the Inumaki clan, his voice is imbued with Cursed Energy, forcing all who hear his commands to obey. He speaks only in rice ball ingredients to protect others, he appears randomly in Shattergrove or can be summoned in the Trial Grounds.',
    drops: ['inumakiScarf'],
    locations: [],
    name: 'Inumaki',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  laxusDreyarBoss: {
    id: 25,
    attachment: npcImages.laxusDreyar,
    description:
      'A fearsome S-Class Mage who unleashes the divine fury of the heavens. He wields devastating Lightning Dragon Slayer Magic, turning the battlefield into a storm of destruction. He can be challenged in Harvest Grove by activating all Shrines across the world.',
    drops: ['laxusHeadphones'],
    locations: [],
    name: 'Laxus Dreyar',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  stingEucliffeBoss: {
    id: 26,
    attachment: npcImages.stingEucliffe,
    description:
      'The White Dragon of the Sabertooth guild, whose holy power stands in stark contrast to the shadows he commands. He utilizes White Shadow Dragon Slayer Magic to overwhelm his foes. He can be summoned high in the Zenith Skylands after finishing the Obelisk Trial.',
    drops: [],
    locations: [],
    name: 'Sting Eucliffe',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  natsuDragneelBoss: {
    id: 27,
    attachment: npcImages.natsuDragneel,
    description:
      'The legendary Salamander, a mage whose heart burns with the soul of a dragon. He commands ferocious Fire Dragon Slayer Magic, incinerating all who stand in his way. His fiery rage can be felt in the Coral Abyss.',
    drops: [],
    locations: [],
    name: 'Natsu Dragneel',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  ichigoV2Boss: {
    id: 28,
    attachment: npcImages.fullbringIchigo,
    description:
      "Having awakened the soul of his belongings, this hero's power has evolved into something new and unpredictable. Wielding his Fullbring powers, he appears randomly in Shattergrove or can be summoned in the Trial Grounds.",
    drops: [],
    locations: [],
    name: 'Fullbring Ichigo',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  kokushiboBoss: {
    id: 29,
    attachment: npcImages.kokushibo,
    description:
      'The highest-ranking demon under Muzan, a former demon slayer who has polished his swordsmanship for centuries. He unleashes the elegant and deadly Moon Breathing technique. Found in a hidden dungeon within the Lost Cave.',
    locations: [],
    name: 'Kokushibo',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  yoriichiBoss: {
    id: 30,
    attachment: npcImages.yoriichi,
    description:
      'The progenitor of all breathing styles, a legendary swordsman whose power was said to rival the gods. He is the sole master of the primordial Sun Breathing. Found in a hidden dungeon within the Lost Cave.',
    drops: ['yoriichiEarrings'],
    locations: [],
    name: 'Yoriichi',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  ichigoBoss: {
    id: 31,
    attachment: npcImages.ichigo,
    description:
      'A substitute Soul Reaper caught between the worlds of the living and the dead. Wielding his massive Zangetsu, his immense spiritual pressure can be felt when he appears in Shattergrove or is summoned in the Trial Grounds.',
    locations: [],
    name: 'Ichigo',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  yamiBoss: {
    id: 32,
    attachment: npcImages.yami,
    description:
      'A grim captain whose very presence seems to devour the light. He channels immense Dark Magic through his katana, capable of slicing through dimensions. Found in Shattergrove or can be summoned in the Trial Grounds.',
    locations: ['yamiCloak'],
    name: 'Yami',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  yunoBoss: {
    id: 33,
    attachment: npcImages.yuno,
    description:
      'A prodigy blessed by mana and chosen by the Wind Spirit, Sylph. He commands powerful Wind Magic with unparalleled grace. Appears randomly in Shattergrove or can be summoned for a challenge in the Trial Grounds.',
    drops: [],
    locations: [],
    name: 'Yuno',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  rudoBoss: {
    id: 34,
    attachment: npcImages.rudo,
    description:
      "A member of the Cleaners, he sees the life and soul within discarded objects. He wields the Jinki '3R', allowing him to manipulate refuse as deadly weapons. Located in a dungeon deep within the Lost Cave.",
    drops: ['rudoChains'],
    locations: [],
    name: 'Rudo Surebrec',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  kiritoBoss: {
    id: 35,
    attachment: npcImages.kirito,
    description:
      'The legendary Black Swordsman, a hero trapped within a digital world. His unparalleled reaction speed and mastery of the Dual Blades skill make him a terrifying foe. Spawns in Shattergrove or can be summoned in the Trial Grounds.',
    drops: [],
    locations: [],
    name: 'Kirito',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  amoEmpoolBoss: {
    id: 36,
    attachment: npcImages.amoEmpool,
    description:
      'An enigmatic being whose power lies in absolute attraction. She use Fragrance Manipulation to create scents that can dominate the mind and body. Spawns in Shattergrove or can be summoned in the Trial Grounds.',
    drops: [],
    locations: [],
    name: 'Amo Empool',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  aizenBoss: {
    id: 37,
    attachment: npcImages.aizen,
    description:
      'A former Soul Reaper captain whose intellect is matched only by his ambition. His Zanpakuto, Kyoka Suigetsu, creates illusions so perfect they are indistinguishable from reality. He appears in Shattergrove or can be summoned in the Trial Grounds.',
    drops: [],
    locations: [],
    name: 'Aizen',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  yunoV2Boss: {
    id: 38,
    attachment: npcImages.yunoV2,
    description:
      'Having fully embraced his royal lineage and the power of the Wind Spirit, he has attained Star Magic. His power rivals that of the highest devils. Appears in Shattergrove or can be summoned in the Trial Grounds.',
    locations: ['yunoCloak'],
    name: 'Yuno Grinberryall',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  erzaBoss: {
    id: 39,
    attachment: npcImages.erza,
    description:
      'The legendary knight known as Titania, whose mastery of Requip magic allows her to summon hundreds of different armors and weapons in the blink of an eye. Challenge this S-Class Mage on Sunblaze Isle, if you dare.',
    drops: ['erzaEarrings'],
    locations: [],
    name: 'Erza',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  sousukeAizenBoss: {
    id: 40,
    attachment: npcImages.sousukeAizen,
    description:
      "Behold the final form of Aizen's ambition. Fused with the Hōgyoku, he has become a god of destruction. The time for deception is over; now, only overwhelming power remains. His power can be felt manifesting in Shattergrove, but true challengers can summon him directly to the Trial Grounds.",
    drops: ['ceroStar'],
    locations: [],
    name: 'Sosouke Aizen',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
  grayBoss: {
    id: 41,
    attachment: npcImages.gray,
    description:
      "A powerful Ice-Make Mage from the legendary Fairy Tail guild, using the unforgiving environment of Frostveil Hollow as his personal training ground. He wields his signature dynamic magic, shaping intricate weapons from the very air, and unleashes the chilling power of an Ice Devil Slayer when pushed to his limit. He's not a villain, but he'll never back down from a challenge that promises to make him stronger for his friends.",
    drops: ['grayNecklace'],
    locations: [],
    name: 'Gray Fullbuster',
    npcType: NPC_TYPES.worldBoss,
    type: TYPES.npc,
  },
};
