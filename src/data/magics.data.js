import { assets } from '@assets';
import { RARITIES, TYPES } from './enums';

const magicImages = assets.images.magics;
const magicVideos = assets.videos.magics;

export const MAGICS = {
  wind: {
    id: 1,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.windZ,
        description: `Unleash a sudden blast of raging wind, slicing through nearby enemies with razor-sharp gusts.`,
        name: 'Wind Hit [Z]',
      },
    ],
    attachment: magicImages.wind,
    description:
      'Harness the elemental power of wind, allowing you to manipulate air currents and unleash gusts in combat.',
    isGatcha: true,
    name: 'Wind',
    rarity: RARITIES.common,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  fire: {
    id: 2,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.fireZ,
        description: `Deliver a fiery jab that ignites the air ahead, burning all enemies struck by the flame.`,
        name: 'Fire Jab [Z]',
      },
      {
        id: 2,
        attachment: magicVideos.fireX,
        description: `Unleash a blazing surge of magic that engulfs the surroundings in relentless fire, scorching every foe nearby.`,
        name: 'Eternal Inferno [X]',
      },
    ],
    attachment: magicImages.fire,
    description:
      'Wield the destructive power of fire, igniting flames to scorch enemies and control the battlefield with searing intensity.',
    isGatcha: true,
    name: 'Fire',
    rarity: RARITIES.uncommon,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  poison: {
    id: 3,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.poisonZ,
        description: `Unleash a burst of corrosive toxins that explode outward, dealing damage to all nearby enemies.`,
        name: `Poison Shot [Z]`,
      },
      {
        id: 2,
        attachment: magicVideos.poisonX,
        description: `Exude a lingering trail of poisonous mist as you move, infecting and damaging enemies that cross your path.`,
        name: 'Poison Domain [X]',
      },
    ],
    attachment: magicImages.poison,
    description:
      'Harness the toxic essence of poison, inflicting lingering damage and weakening enemies over time with your venomous powers.',
    isGatcha: true,
    name: 'Poison',
    rarity: RARITIES.rare,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  dark: {
    id: 4,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.darkZ,
        description: `Unleash a surge of dark energy that spreads across the ground, enveloping the area in shadow and damaging nearby enemies.`,
        name: `Dark Floor [Z]`,
      },
      {
        id: 2,
        attachment: magicVideos.darkX,
        description: `Execute a rapid two-hit combo infused with shadow energy, each strike releasing a burst of darkness that tears through enemies ahead.`,
        name: 'Dark Punch [X]',
      },
    ],
    attachment: magicImages.dark,
    description:
      'Tap into the forbidden energies of darkness, manipulating shadows and cursed power to weaken and strike fear into your foes.',
    isGatcha: true,
    name: 'Dark',
    rarity: RARITIES.rare,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  ice: {
    id: 5,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.iceZ,
        description: `Stomp the ground to unleash a chilling shockwave, freezing the air and damaging all enemies nearby.`,
        name: `Ice Breaker [Z]`,
      },
      {
        id: 2,
        attachment: magicVideos.iceX,
        description: `Radiate an icy aura that continuously chills the surroundings, dealing damage to nearby enemies caught in its frost.`,
        name: 'Frozen Veil [X]',
      },
      {
        id: 3,
        attachment: magicVideos.iceC,
        description: `Unleash a triple burst of glacial energy around you, each explosion freezing and shattering enemies within its reach.`,
        name: 'Absolute Zero [C]',
      },
    ],
    attachment: magicImages.ice,
    description:
      'Command the chilling power of ice, freezing enemies and controlling the battlefield with frost and sharp, icy strikes.',
    isGatcha: true,
    name: 'Ice',
    rarity: RARITIES.epic,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  lightning: {
    id: 6,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.lightningZ,
        description: `Release a concentrated shockwave of lightning that surges forward, electrocuting all enemies in its path.`,
        name: `Lightning Strike [Z]`,
      },
      {
        id: 2,
        attachment: magicVideos.lightningX,
        description: `Call forth a downpour of golden lightning from the skies, striking the ground and shocking everything below.`,
        name: 'Lightning Storm [X]',
      },
      {
        id: 3,
        attachment: magicVideos.lightningC,
        description: `Unleash a violent burst of crackling energy around you, blasting nearby enemies with blinding electricity.`,
        name: 'Lightning Wrath [C]',
      },
      {
        id: 4,
        attachment: magicVideos.lightningV,
        description: `Transform into a bolt of lightning and instantly dash to another location, leaving a brief electric afterimage.`,
        name: 'Flash Teleport [V]',
      },
    ],
    attachment: magicImages.lightning,
    description:
      'Harness the raw energy of lightning, striking enemies with electrifying speed and devastating bursts of electric power.',
    isGatcha: true,
    name: 'Lightning',
    rarity: RARITIES.epic,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  poisonDragonSlayer: {
    id: 7,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.poisonDragonSlayerZ,
        description: `Unleashes a corrosive burst of toxic energy, spreading venomous fumes that eat away at enemies within range.`,
        name: `Noxious Sting [Z]`,
      },
      {
        id: 2,
        attachment: magicVideos.poisonDragonSlayerX,
        description: `Emits a devastating poison aura that spirals upward like a toxic storm, infecting the air and dealing heavy damage to surrounding foes.`,
        name: `Venom Tail [X]`,
      },
      {
        id: 3,
        attachment: magicVideos.poisonDragonSlayerC,
        description: `Delivers a ferocious punch infused with acidic dragon venom, erupting into a poisonous shockwave that melts everything in its path.`,
        name: 'Acid Needle [C]',
      },
      {
        id: 4,
        attachment: magicVideos.poisonDragonSlayerV,
        description: `Channels the dragon's lethal essence, continuously releasing waves of toxin that corrode and suffocate nearby enemies.`,
        name: `Venom Core [V]`,
      },
    ],
    attachment: magicImages.poisonDragonSlayer,
    description:
      'Wield the deadly venom of dragons, inflicting potent poison on foes and mastering toxins with legendary precision.',
    isGatcha: true,
    name: 'Poison Dragon Slayer',
    rarity: RARITIES.legendary,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  shadowDragonSlayer: {
    id: 8,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.shadowDragonSlayerZ,
        description: `Unleashes a concentrated burst of darkness, creating an explosive wave of shadow energy that engulfs enemies in the void.`,
        name: `Eclipse [Z]`,
      },
      {
        id: 2,
        attachment: magicVideos.shadowDragonSlayerX,
        description: `Summons razor-edged shadows that spiral outward, slicing through enemies and leaving traces of darkness behind.`,
        name: `Mark of The Abyss [X]`,
      },
      {
        id: 3,
        attachment: magicVideos.shadowDragonSlayerC,
        description: `Engulfs yourself in a swirling aura of pure darkness that continuously drains the life of all enemies caught within its reach.`,
        name: 'Heart of The Void [C]',
      },
      {
        id: 4,
        attachment: magicVideos.shadowDragonSlayerV,
        description: `Performs a four-strike combo infused with shadow energy, each hit extending farther.`,
        name: `Night Fall [V]`,
      },
    ],
    attachment: magicImages.shadowDragonSlayer,
    description:
      `Channel the dark essence of dragons, wielding shadow powers to strike fear into enemies and dominate the battlefield with legendary skill. <p><span>Complete Sting Eucliffe's quest to unlock Shadow Dragon Slayer V2</span></p>`,
    isGatcha: true,
    name: 'Shadow Dragon Slayer',
    rarity: RARITIES.legendary,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  lightningDragonSlayer: {
    id: 9,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.lightningDragonSlayerZ,
        description: `Unleash a thunderous roar that discharges lightning in all directions, electrifying the area around you.`,
        name: `Raijin's Roar [Z]`,
      },
      {
        id: 2,
        attachment: magicVideos.lightningDragonSlayerX,
        description: `Deliver a powerful lightning-charged punch that releases a surge of electricity forward, shocking all enemies in its path.`,
        name: 'Thunder Veil [X]',
      },
      {
        id: 3,
        attachment: magicVideos.lightningDragonSlayerC,
        description: `Summon a massive bolt of lightning from the heavens, striking the ground and leaving a scorched crater behind.`,
        name: 'Titan Spark [C]',
      },
      {
        id: 4,
        attachment: magicVideos.lightningDragonSlayerV,
        description: `Channel your inner lightning, surrounding yourself with a continuous surge of electricity that damages enemies over time.`,
        name: 'Storm Veil [V]',
      },
      {
        id: 5,
        attachment: magicVideos.lightningDragonSlayerF,
        description: `Instantly blink to another location in a flash of lightning, leaving a brief static trail behind.`,
        name: 'Flash Teleport [F]',
      },
    ],
    attachment: magicImages.lightningDragonSlayer,
    description:
      `Harness the electrifying power of dragons, unleashing lightning to strike with mythical speed and overwhelming force. <p><span>Complete Laxus Dreyar's quest to unlock Lightning Dragon Slayer V2</span></p>`,
    isGatcha: true,
    name: 'Lightning Dragon Slayer',
    rarity: RARITIES.mythical,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  fireDragonSlayer: {
    id: 10,
    attachment: magicImages.fireDragonSlayer,
    description:
      `Command the blazing fury of dragons, unleashing fire with mythical intensity to incinerate foes and dominate the battlefield.<p><span>Complete Natsu Dragneel's quest to unlock Fire Dragon Slayer V2</span></p>`,
    isGatcha: true,
    name: 'Fire Dragon Slayer',
    rarity: RARITIES.mythical,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  waterDragonSlayer: {
    id: 11,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.waterDragonSlayerZ,
        description: `Claps both hands together, unleashing a surging burst of pressurized water that damages nearby enemies.`,
        name: `Aqua Burst [Z]`,
      },
      {
        id: 2,
        attachment: magicVideos.waterDragonSlayerX,
        description: `Summons a swirling aquatic vortex that surrounds the caster, dealing constant water damage to any foe who dares approach.`,
        name: `Leviathan's Domain [X]`,
      },
      {
        id: 3,
        attachment: magicVideos.waterDragonSlayerC,
        description: `Channels the power of the deep, releasing a roaring torrent of continuous water waves that engulf everything in their path.`,
        name: 'Eternal Tide [C]',
      },
      {
        id: 4,
        attachment: magicVideos.waterDragonSlayerV,
        description: `Spins fiercely, forming a spiral of crashing waves and erupting water pillars that devastate the surroundings.`,
        name: `Ocean's Wrath [V]`,
      },
    ],
    attachment: magicImages.waterDragonSlayer,
    description:
      'Harness the tidal might of dragons, wielding water to control the battlefield and crush foes with exotic precision.',
    isGatcha: true,
    name: 'Water Dragon Slayer',
    rarity: RARITIES.exotic,
    sources: ['monkeyDevelopsSpec', 'steveSpec'],
    type: TYPES.magic,
  },
  shadowDragonSlayerV2: {
    id: 12,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.shadowDragonSlayerV2M1,
        name: 'Basic Attack [M1]',
        description: `Strike your foe with a fierce blow infused with celestial shadow energy, burning through their defenses. <span>Damage scales with Magic stat</span>.`,
      },
      {
        id: 2,
        attachment: magicVideos.shadowDragonSlayerV2Z,
        name: 'Solar Burst [Z]',
        description: `Unleash a continuous surge of dark waves radiating outward, consuming enemies within the eclipse of your shadow flame.`,
      },
      {
        id: 3,
        attachment: magicVideos.shadowDragonSlayerV2X,
        name: `Sunflare Roar [X]`,
        description: `Emit a devastating roar of pure shadow energy, forming a beam of darkness that tears through everything in its path.`,
      },
      {
        id: 4,
        attachment: magicVideos.shadowDragonSlayerV2C,
        name: 'Celestial Edge [C]',
        description: `Conjure a crescent-shaped aura of shadow light that slashes through surrounding enemies with divine precision.`,
      },
      {
        id: 5,
        attachment: magicVideos.shadowDragonSlayerV2V,
        name: 'Divine Grace [V]',
        description: `Execute a four-strike combo infused with radiant shadow energy — each blow traveling farther, faster, and more destructive than the last.`,
      },
    ],
    attachment: magicImages.shadowDragonSlayerV2,
    description:
      `Master the amplified dark essence of dragons, wielding shadow powers with greater intensity to instill fear and dominate the battlefield like a true legend. <p><span>Defeat Sting Eucliffe 10 times as a Shadow Dragon Slayer to unlock<span>.</p>`,
    name: 'Shadow Dragon Slayer V2',
    rarity: RARITIES.v2,
    sources: ['stingEucliffeSpec'],
    type: TYPES.magic,
  },
  fireDragonSlayerV2: {
    id: 13,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.fireDragonSlayerV2M1,
        name: 'Basic Attack [M1]',
        description: `Deliver a fiery punch infused with dragon flame, scorching your target upon impact. <span>Damage scales with Magic stat</span>.`,
      },
      {
        id: 2,
        attachment: magicVideos.fireDragonSlayerV2Z,
        name: 'Crushing Fang [Z]',
        description: `Unleash a sudden fiery explosion from your core, engulfing nearby enemies in searing flames.`,
      },
      {
        id: 3,
        attachment: magicVideos.fireDragonSlayerV2X,
        name: `King's Roar [X]`,
        description: `Emit a blazing wave of fire that surges forward, burning all foes caught in its path.`,
      },
      {
        id: 4,
        attachment: magicVideos.fireDragonSlayerV2C,
        name: 'Roasting Bath [C]',
        description: `Release the wrath of a dragon with a fiery roar that incinerates everything within range.`,
      },
      {
        id: 5,
        attachment: magicVideos.fireDragonSlayerV2V,
        name: 'Brilliant Flame [V]',
        description: `Hurl a rapid volley of blazing strikes from afar, each impact detonating with explosive heat.`,
      },
    ],
    attachment: magicImages.fireDragonSlayerV2,
    description:
      `Unleash the cataclysmic fury of dragons, incinerating all in your path with fire of unparalleled intensity. Fire Dragon Slayer V2 strikes terror into every foe, eclipsing the power of its predecessor. <p><span>Defeat Natsu Dragneel 15 times as a Fire Dragon Slayer to unlock</span>.</p>`,
    name: 'Fire Dragon Slayer V2',
    rarity: RARITIES.v2,
    sources: ['natsuDragneelSpec'],
    type: TYPES.magic,
  },
  lightningDragonSlayerV2: {
    id: 14,
    abilities: [
      {
        id: 1,
        attachment: magicVideos.lightningDragonSlayerV2M1,
        description: `Deliver a fierce punch infused with dark lightning, searing enemies with unstable energy. <span>Damage scales with Magic stat.</span>`,
        name: `Basic Attack [M1]`,
      },
      {
        id: 2,
        attachment: magicVideos.lightningDragonSlayerV2Z,
        description: `Unleash a continuous wave of crimson lightning that tears through enemies ahead, radiating chaotic energy for a short duration.`,
        name: 'Scarlet Havoc [Z]',
      },
      {
        id: 3,
        attachment: magicVideos.lightningDragonSlayerV2X,
        description: `Summon a violent burst of dark lightning that erupts repeatedly ahead, annihilating everything within its reach.`,
        name: 'Voltage of Wrath [X]',
      },
      {
        id: 4,
        attachment: magicVideos.lightningDragonSlayerV2C,
        description: `Call forth divine black lightning from the rift above, striking down with destructive precision and shattering the ground beneath.`,
        name: 'Storm of The Rift [C]',
      },
      {
        id: 5,
        attachment: magicVideos.lightningDragonSlayerV2V,
        description: `Channel your corrupted lightning to summon a long-lasting storm that devastates the battlefield with relentless strikes of dark energy.`,
        name: 'Crimson Storm [V]',
      },
      {
        id: 6,
        attachment: magicVideos.lightningDragonSlayerV2F,
        description: `Harness the power of dark lightning to instantly warp across the field, leaving behind a trail of crackling red energy.`,
        name: `Flash Teleport [F]`,
      },
    ],
    attachment: magicImages.lightningDragonSlayerV2,
    description:
      `Command the unstoppable storm of dragons, unleashing lightning with cataclysmic speed and devastating force. Lightning Dragon Slayer V2 strikes with terrifying precision, leaving devastation in its wake.<p><span>Defeat Laxus Dreyar 10 times as a Lightning Dragon Slayer to unlock</span>.</p>`,
    name: 'Lightning Dragon Slayer V2',
    rarity: RARITIES.v2,
    sources: ['laxusDreyarSpec'],
    type: TYPES.magic,
  },
};
